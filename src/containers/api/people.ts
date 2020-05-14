import { connect } from 'react-redux';

import { AppState } from '../../store/interfaces';
import { PeopleComponent } from '../../components/api/people';

const mapStateToProps = (state: AppState) => {
    return {
        people: state.apiReducer.people.list,
    };
};

export const People = connect(mapStateToProps)(PeopleComponent);
