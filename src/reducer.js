export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:
        "BQBRc1-DIXMJzEk5SyIoZQI4SCXv1Yxa-ay6cwV50rtceDyrVUb7VDB9g9s97XDXe0yD1CU6nthN7s_0-5ZmXGrTWQ0TtHdao8A_1PT9_IqQiziJBK7-FTU00YRYuV8qHXC9SOX7LS_vQWU0DcO2CiYmr7RlI-Z96_bel-0DVT2NcBX7",
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
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};

export default reducer;
