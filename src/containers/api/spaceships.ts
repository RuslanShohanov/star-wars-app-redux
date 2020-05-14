import { connect } from 'react-redux';

import { AppState } from '../../store/interfaces';
import { SpaceshipsComponent } from '../../components/api/spaceships';

const mapStateToProps = (state: AppState) => {
    return {
        spaceships: state.apiReducer.spaceships.list,
    };
};

export const Spaceships = connect(mapStateToProps)(SpaceshipsComponent);
