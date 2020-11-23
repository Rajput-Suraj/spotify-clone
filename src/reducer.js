export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:
        "BQDQwcS9AesVQtI_jU0UGmRIkwcosqO-Iejbq8jmDaErcP-SpG5dR5pMUcsCsPXKf3xOz2By6AMqB4b_vh5pKp_3DSKk5HQS7eGTFJR9gyJ2ajQbcY-41a5f2gUEGI4znJNdQTbqPkyQr2YcBgrlczH78mBjCXyWNIRKPJXWwlAFUzYl",
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
        default:
            return state;
    }
};

export default reducer;
