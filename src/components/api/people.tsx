import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PeopleProps } from './interfaces';
import { fetchPeopleIfNeeded } from '../../store/api/actions/people';

export const PeopleComponent = (props: PeopleProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeopleIfNeeded());
    }, [dispatch, props]);

    return props.people ? (
        <table className="table">
            <thead className="table-head">
                <tr className="table-row">
                    <th className="header">Name</th>
                    <th className="header">Birth Year</th>
                    <th className="header">Eye Color</th>
                    <th className="header">Gender</th>
                    <th className="header">Hair Color</th>
                    <th className="header">Height</th>
                    <th className="header">Mass</th>
                    <th className="header">Skin Color</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {props.people.map((man) => {
                    return (
                        <tr>
                            <td>{man.name}</td>
                            <td>{man.birth_year}</td>
                            <td>{man.eye_color}</td>
                            <td>{man.gender}</td>
                            <td>{man.hair_color}</td>
                            <td>{man.height}</td>
                            <td>{man.mass}</td>
                            <td>{man.skin_color}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    ) : (
        <div>Loading people...</div>
    );
};
