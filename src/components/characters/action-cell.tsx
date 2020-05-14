import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { removeCharacter, editCharacter } from '../../store/characters/actions';

import './styles/action-cell.css';

interface ActionCellProps {
    rowId: string;
}

export const ActionCellComponent = (props: ActionCellProps) => {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const match = useRouteMatch();

    const handleRemoveClick = () => {
        dispatch(removeCharacter(props.rowId));
    };

    const handleEditClick = () => {
        dispatch(editCharacter(props.rowId));
        push(`${match.url}/edit/${props.rowId}`);
    };

    return (
        <div>
            <span className="badge badge-primary" onClick={handleEditClick}>
                Edit
            </span>
            <span className="badge badge-danger" onClick={handleRemoveClick}>
                Remove
            </span>
        </div>
    );
};
