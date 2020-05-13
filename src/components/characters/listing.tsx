import React from 'react';
import { useHistory } from 'react-router-dom';

import { ListingProps } from './interfaces';
import { Side } from '../../store/characters/constants';

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
                        <th className="header">First Name</th>
                        <th className="header">Last Name</th>
                        <th className="header">Side</th>
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
                                <td>{character.firstName}</td>
                                <td>{character.lastName}</td>
                                <td>{character.side}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
