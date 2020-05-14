import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { ListingProps } from './interfaces';
import { ActionCellComponent } from './action-cell';
import { SideCell } from './side-cell';

export const ListingComponent = (props: ListingProps) => {
    const { push } = useHistory();
    const match = useRouteMatch();

    const handleAddClick = () => {
        push(`${match.url}/add`);
    };

    return (
        <>
            <button className="btn btn-link" onClick={handleAddClick}>
                Add
            </button>
            <table className="table">
                <thead className="table-head">
                    <tr className="table-row">
                        <th className="header">Character</th>
                        <th className="header">Side</th>
                        <th className="header">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {props.characters.map((character) => {
                        return (
                            <tr>
                                <td>{character.name}</td>
                                <td>
                                    <SideCell side={character.side} />
                                </td>
                                <td>
                                    <ActionCellComponent rowId={character.id} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
