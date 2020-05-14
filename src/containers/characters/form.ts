import { connect } from 'react-redux';

import { FormComponent } from '../../components/characters/form';
import { AppState } from '../../store/interfaces';

const mapStateToProps = (state: AppState) => {
    const charactersState = state.charactersReducer;
    const selectedCharacter = charactersState.selectedCharacter;

    const character = selectedCharacter
        ? charactersState.characters.find((c) => c.id === selectedCharacter)
        : undefined;

    return {
        character,
    };
};

export const Form = connect(mapStateToProps)(FormComponent);
