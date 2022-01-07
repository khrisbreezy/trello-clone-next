import { SAVE_PHASE_DATA  } from '../actions/phaseStore';

const initialState = {
    phases: [],
}

const phaseData = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PHASE_DATA: 
            return {phases: action.data}
        default:
            return state;
    }
};

export default phaseData;