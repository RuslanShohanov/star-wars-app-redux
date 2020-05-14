import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { ListingProps } from './interfaces';
import { ActionCellComponent } from './action-cell';
import { SideCell } from './side-cell';

import './styles/listing.css';

export const ListingComponent = (props: ListingProps) => {
    const { push } = useHistory();
    const match = useRouteMatch();

    const handleAddClick = () => {
        push(`${match.url}/add`);
    };

    return (
        <>
            <div className="listing-header">
                <h5>
                    <span
                        className="badge badge-primary add-character"
                        onClick={handleAddClick}
                    >
                        + Add
                    </span>
                </h5>
            </div>
            <table className="table">
                <thead className="thead">
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
