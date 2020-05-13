import React from 'react';
import { useHistory } from 'react-router-dom';

import { ListingProps } from './interfaces';
import { Side } from '../../store/characters/constants';
import { ActionCellComponent } from './action-cell';

export const ListingComponent = (props: ListingProps) => {
    const { push } = useHistory();

    const handleAddClick = () => {
        push('/add');
    };

    return (
        <>
            <button className="btn btn-link" onClick={handleAddClick}>
                Add
            </button>
            <table className="table">
                <thead className="table-head">
                    <tr className="table-row">
                        <th className="header">Name</th>
                        <th className="header">Side</th>
                        <th className="header">Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {props.characters.map((character) => {
                        const className =
                            character.side === Side.Dark
                                ? 'danger'
                                : character.side === Side.Light
                                ? 'primary'
                                : 'secondary';
                        return (
                            <tr className={`table-${className}`}>
                                <td>{character.name}</td>
                                <td>{character.side}</td>
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
