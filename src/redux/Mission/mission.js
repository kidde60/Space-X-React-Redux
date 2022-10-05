// const MISSION_URL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSION = 'GET_MISSION';
// const JOIN_MISSION = 'JOIN_MISSION';
// const LEAVE_MISSION = 'LEAVE_MISSION';

export const getMissions = (missions) => {
    return {
        type: GET_MISSION,
        payload: missions,
    }
}

const initialState = [];


const missionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MISSION:
            return { ...action.payload };
        default:
            return state;
    }
};

export default missionReducer;
