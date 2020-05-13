import { connect } from 'react-redux';

import { ListingComponent } from '../../components/characters/listing';
import { CharactersState } from '../../store/characters/interfaces';

const mapStateToProps = (state: CharactersState) => {
    return {
        characters: state.characters,
    };
};

export const Listing = connect(mapStateToProps)(ListingComponent);
