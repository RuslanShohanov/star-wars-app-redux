import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { useHistory } from 'react-router-dom';

import { Side } from '../../store/characters/constants';
import { addCharacter } from '../../store/characters/actions';
import { FormProps } from './interfaces';

export const FormComponent = (props: FormProps) => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const name = (event.currentTarget.elements.namedItem(
            'name'
        ) as HTMLInputElement).value;
        const side = (event.currentTarget.elements.namedItem(
            'sideSelector'
        ) as HTMLSelectElement).value as Side;

        dispatch(addCharacter({ id: v4(), name, side }));
        push('/');
    };

    const handleCancelClick = () => {
        push('/');
    };

    return (
        <div className="col-5">
            <h3>Add Character</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        name="name"
                        required={true}
                        value={props.character && props.character.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sideSelector">Select side:</label>
                    <select
                        className="form-control"
                        id="sideSelector"
                        value={props.character && props.character.side}
                    >
                        {Object.keys(Side).map((optionName) => (
                            <option key={optionName}>{optionName}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};
