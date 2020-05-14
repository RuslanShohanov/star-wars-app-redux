import { connect } from 'react-redux';

import { ListingComponent } from '../../components/characters/listing';
import { AppState } from '../../store/interfaces';

const mapStateToProps = (state: AppState) => {
    return {
        characters: state.charactersReducer.characters,
    };
};

export const Listing = connect(mapStateToProps)(ListingComponent);
