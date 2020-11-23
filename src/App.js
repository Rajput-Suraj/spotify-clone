import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./pages/Login/Login";
import Player from "./components/player/Player";
import { getTokenFromUrl } from "./spotify";
import { useDataLayervalue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayervalue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });
        }
    }, [dispatch, token]);

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
}

export default App;
