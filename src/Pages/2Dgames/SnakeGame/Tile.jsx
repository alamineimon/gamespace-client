import React from 'react';
import './SnakeGame';

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style:{
                aspectRatio:"1",
                float:"left"
            }
        }
    }

    static getDerivedStateFromProps(props,state){
        return {style:{
            aspectRatio:"1",
            float:"left",
            backgroundColor:props.color
        }}
    }
    
    render(){
        return(
            <div class="game-tile" style={this.state.style}></div>
        )
    }
};

export default Tile;