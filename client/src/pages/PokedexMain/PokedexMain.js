import React, { Component } from "react";

class PokedexMain extends Component {
    state = {
        selectedPokemon: "",
        playlist: [],
        musicPlaying: true,
        user: {}
    }

    render() {
        return(
            <div className="PokedexMain">
                <p>This is the main page for the pokedex. There will be a list of Pokemon on the page and the current signed in user will be at the top right.</p>
                <p>When the arrow key is scrolled up or down, or a pokemon name is clicked on, a the pokemon preview window will change</p>
                <p>Below this preview window will be the option to click a button for more details, which routes to the Pokedex Bio page for that specific pokemon</p>
                <p>Towards the bottom of this page will be some sort of jukebox media player that plays pokemon music. The user can turn it off.</p>
            </div>
        )
    }
}

export default PokedexMain;