import { connect } from 'react-redux';

import { FormComponent } from '../../components/characters/form';
import { AppState } from '../../store/interfaces';

const mapStateToProps = (state: AppState) => {
    const selectedCharacter = state.characters.selectedCharacter;
    const character = selectedCharacter
        ? state.characters.list.find((c) => c.id === selectedCharacter)
        : undefined;

    return {
        character,
    };
};

export const Form = connect(mapStateToProps)(FormComponent);
