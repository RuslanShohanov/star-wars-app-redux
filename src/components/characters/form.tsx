import React, { useEffect, createRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { useHistory } from 'react-router-dom';

import { Side } from '../../store/characters/constants';
import { saveCharacter, resetSelected } from '../../store/characters/actions';
import { FormProps } from './interfaces';

export const FormComponent = (props: FormProps) => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const nameRef = createRef<HTMLInputElement>();
    const sideRef = createRef<HTMLSelectElement>();

    const navigateToListing = () => {
        push('/');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(
            saveCharacter({
                id: props.character ? props.character.id : v4(),
                name: nameRef.current?.value || '',
                side: (sideRef.current?.value as Side) || Side.Neutral,
            })
        );

        dispatch(resetSelected());
        navigateToListing();
    };

    const handleCancelClick = () => {
        navigateToListing();
    };

    useEffect(() => {
        if (!props.character || !nameRef.current || !sideRef.current) {
            return;
        }

        nameRef.current.value = props.character.name;
        sideRef.current.value = props.character.side;
    }, [sideRef, nameRef, props.character]);

    return (
        <div className="col-5">
            <h3>Add Character</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">First Name:</label>
                    <input
                        ref={nameRef}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        name="name"
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sideSelector">Select side:</label>
                    <select
                        className="form-control"
                        id="sideSelector"
                        ref={sideRef}
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
