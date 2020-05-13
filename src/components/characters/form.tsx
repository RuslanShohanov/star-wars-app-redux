import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { useHistory } from 'react-router-dom';

import { Side } from '../../store/characters/constants';
import { FormProps } from './interfaces';
import { addCharacter } from '../../store/characters/actions';

export const FormComponent = (props: FormProps) => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const firstName = (event.currentTarget.elements.namedItem(
            'firstName'
        ) as HTMLInputElement).value;
        const lastName = (event.currentTarget.elements.namedItem(
            'lastName'
        ) as HTMLInputElement).value;
        const side = (event.currentTarget.elements.namedItem(
            'sideSelector'
        ) as HTMLSelectElement).value as Side;

        dispatch(addCharacter({ id: v4(), firstName, lastName, side }));
        push('/');
    };

    return (
        <div className="col-5">
            <h3>Add Character</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                        name="first-name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last Name"
                        name="last-name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sideSelector">Select side:</label>
                    <select className="form-control" id="sideSelector">
                        {Object.keys(Side).map((optionName) => (
                            <option key={optionName}>{optionName}</option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
