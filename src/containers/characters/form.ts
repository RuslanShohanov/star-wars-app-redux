import { connect } from 'react-redux';
import { Dispatch } from 'react';

import { FormComponent } from '../../components/characters/form';
import { CharactersAction, Character } from '../../store/characters/interfaces';
import { addCharacter } from '../../store/characters/actions';

const mapDispatchToProps = (dispatch: Dispatch<CharactersAction>) => {
    return {
        add: (character: Character) => {
            dispatch(addCharacter(character));
        },
    };
};

export const Form = connect(mapDispatchToProps)(FormComponent);
