import { connect } from 'react-redux';

import { AppState } from '../../store/interfaces';
import { PeopleComponent } from '../../components/api/people';

const mapStateToProps = (state: AppState) => {
    return {
        people: state.apiReducer.people.list,
        isLoading: !state.apiReducer.people.isFetching,
    };
};

export const People = connect(mapStateToProps)(PeopleComponent);
