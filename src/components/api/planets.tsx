import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PlanetsProps } from './interfaces';
import { fetchPlanetsIfNeeded } from '../../store/api/actions/planets';
import { Loader } from '../loader';

export const PlanetsComponent = (props: PlanetsProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlanetsIfNeeded());
    }, [dispatch, props]);

    return !props.isLoading ? (
        <table className="table">
            <thead className="table-head">
                <tr className="table-row">
                    <th className="header">Name</th>
                    <th className="header">Climate</th>
                    <th className="header">Diameter</th>
                    <th className="header">Gravity</th>
                    <th className="header">Orbital Period</th>
                    <th className="header">Rotation Period</th>
                    <th className="header">Population</th>
                    <th className="header">Terrain</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {props.planets.map((planet) => {
                    return (
                        <tr>
                            <td>{planet.name}</td>
                            <td>{planet.climate}</td>
                            <td>{planet.diameter}</td>
                            <td>{planet.gravity}</td>
                            <td>{planet.orbital_period}</td>
                            <td>{planet.rotation_period}</td>
                            <td>{planet.population}</td>
                            <td>{planet.terrain}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    ) : (
        <Loader />
    );
};
