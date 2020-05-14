import { connect } from 'react-redux';

import { PlanetsComponent } from '../../components/api/planets';
import { AppState } from '../../store/interfaces';

const mapStateToProps = (state: AppState) => {
    return {
        planets: state.apiReducer.planets.list,
        isLoading: !state.apiReducer.planets.isFetching,
    };
};

export const Planets = connect(mapStateToProps)(PlanetsComponent);
