export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:
        "BQBcUzT9NtIYw5bIULm-cqM3I2T990MCWabHCvswsVD-R_eew2nwrzLngoUrqCYn28asfg3fe8k8GQqQpaljY0L3WRRuBjYsVIFNP74RI4-NPCG04N1N4igRWSnb5OuA61OvMyiM-X8CbCeK8O7N4piQ3p6ThY9wELg4t-GkEFzpuzqK",
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;
