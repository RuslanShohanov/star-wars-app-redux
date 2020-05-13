import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCharacter, editCharacter } from '../../store/characters/actions';
import { useHistory } from 'react-router-dom';

interface ActionCellProps {
    rowId: string;
}

export const ActionCellComponent = (props: ActionCellProps) => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleRemoveClick = () => {
        dispatch(removeCharacter(props.rowId));
    };

    const handleEditClick = () => {
        dispatch(editCharacter(props.rowId));
        push(`/edit/${props.rowId}`);
    };

    return (
        <div>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleRemoveClick}>Remove</button>
        </div>
    );
};
