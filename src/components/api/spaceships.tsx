import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchSpaceshipsIfNeeded } from '../../store/api/actions/spaceships';
import { SpaceshipsProps } from './interfaces';
import { Loader } from '../loader';

export const SpaceshipsComponent = (props: SpaceshipsProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSpaceshipsIfNeeded());
    }, [dispatch, props]);

    return !props.isLoading ? (
        <table className="table">
            <thead className="table-head">
                <tr className="table-row">
                    <th className="header">Name</th>
                    <th className="header">Model</th>
                    <th className="header">Length</th>
                    <th className="header">Max Atmosphering Speed</th>
                    <th className="header">Hyperdrive Rating</th>
                    <th className="header">Crew</th>
                    <th className="header">Passengers</th>
                    <th className="header">Cargo Capacity</th>
                    <th className="header">MGLT</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {props.spaceships.map((spaceship) => {
                    return (
                        <tr>
                            <td>{spaceship.name}</td>
                            <td>{spaceship.model}</td>
                            <td>{spaceship.length}</td>
                            <td>{spaceship.max_atmosphering_speed}</td>
                            <td>{spaceship.hyperdrive_rating}</td>
                            <td>{spaceship.crew}</td>
                            <td>{spaceship.passengers}</td>
                            <td>{spaceship.cargo_capacity}</td>
                            <td>{spaceship.MGLT}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    ) : (
        <Loader />
    );
};
