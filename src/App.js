import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./pages/Login/Login";
import Player from "./components/player/Player";
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => {
                console.log("Logged in user", user);
            });
        }
    }, []);

    return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
