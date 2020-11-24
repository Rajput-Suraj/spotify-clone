import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./pages/Login/Login";
import Player from "./components/player/Player";
import { getTokenFromUrl } from "./spotify";
import { useDataLayervalue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [{ token }, dispatch] = useDataLayervalue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });
            localStorage.setItem("User", _token);
            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });
            });

            spotify.getPlaylist("1ErzNtvok2nnXOcNfa0eec").then((response) =>
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            );
        }
    }, [dispatch, token]);

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
}

export default App;
