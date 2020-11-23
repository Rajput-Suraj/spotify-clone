import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Player.css";

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
            </div>
        </div>
    );
};

export default Player;
