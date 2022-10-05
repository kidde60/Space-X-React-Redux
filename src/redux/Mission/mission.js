import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMission = createAsyncThunk(
    "missions/fetch/missions",
    async () => {
        const missions = await fetch("https://api.spacexdata.com/v3/missions");
        console.log(missions)
        const data = await missions.json();
        console.log(data)
        return data;
    },

);

const missionSlice = createSlice({
    name: 'missions',
    initialState: {
        missions: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        JoinMission(state, action) {
            const id = action.payload;
            const ExistingMission = state.missions.find((mission) => mission.id === id);
            if (ExistingMission) {
                ExistingMission.joined = true;
            }
        },
        LeaveMission(state, action) {
            const id = action.payload;
            const ExistingMission = state.missions.find((mission) => mission.id === id);
            if (ExistingMission) {
                ExistingMission.joined = false;
            }
        },
    },
    extraReducers: {
        [fetchMission.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchMission.fulfilled]: (state, action) => {
            state.status = 'success';
            state.missions = [...action.payload];
        },
        [fetchMission.error]: (state, action) => {
            state.status = 'Error';
            state.error = action.error.message;
        },
    },
});

export default missionSlice.reducer;
export const { JoinMission, LeaveMission } = missionSlice.actions;
