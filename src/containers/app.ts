import { connect } from 'react-redux';

import { AppComponent } from '../components';
import { AppState } from '../store/interfaces';

const mapStateToProps = (state: AppState) => {
    const { characters } = state;

    return {
        characters,
    };
};

export const App = connect(mapStateToProps)(AppComponent);
