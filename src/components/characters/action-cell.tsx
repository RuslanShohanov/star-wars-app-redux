import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

import { removeCharacter, editCharacter } from '../../store/characters/actions';
import trashIcon from '../../images/trash.png';
import editIcon from '../../images/edit.png';

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
            <Link
                to={`${match.url}/edit/${props.rowId}`}
                className="badge badge-primary"
                onClick={handleEditClick}
            >
                <img className="edit-icon" src={editIcon} alt="Saber Icon" />
            </Link>
            <span
                className="badge badge-danger remove-item"
                onClick={handleRemoveClick}
            >
                <img className="trash-icon" src={trashIcon} alt="Saber Icon" />
            </span>
        </div>
    );
};
