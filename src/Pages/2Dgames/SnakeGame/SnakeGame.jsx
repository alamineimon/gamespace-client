import React from 'react';
import './SnakeGame.css'
import Tile from './Tile';

var tcount = 0;

class SnakeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameMatrix: [],
            snakeList: [[1, 1], [1, 2], [2, 2]],
            increment: [1, 0],
            gameOver: false,
            food: [10, 10],
            isFoodVisible: true
        }
    }

    generateFood = (matrix) => {

        var x = parseInt(Math.random() * 18), y = parseInt(Math.random() * 18);
        var gameMatrix = [];
        matrix.map((row) => {
            var t = []
            row.map((point) => {
                t.push(point)
            })
            gameMatrix.push(t);
        })
        gameMatrix[x][y] = 2;
        return [gameMatrix, [x, y]];
    }

    gameTick = () => {
        var body = [];
        this.state.snakeList.map((i) => body.push(i));
        tcount = (tcount + 1) % 40;

        var newInc = this.state.increment;
        var newx = (this.state.snakeList[0][0] + newInc[0]), newy = (this.state.snakeList[0][1] + newInc[1]);
        if (this.state.snakeList.filter((i) => { return i[0] == newx % 19 && i[1] == newy % 19 }).length || newx < 0 || newx > 18 || newy < 0 || newy > 18) this.setState({ gameOver: true })
        else {
            var gameMatrix = this.state.gameMatrix;
            var food = this.state.food;
            var ifs = this.state.isFoodVisible;
            if (tcount == 39) {
                gameMatrix = this.generateFood(gameMatrix);
                food = gameMatrix[1];
                gameMatrix = gameMatrix[0];
                ifs = true;
            }
            body.unshift([(body[0][0] + this.state.increment[0]) % 19, (body[0][1] + this.state.increment[1]) % 19]);
            if (!(body[0][0] == food[0] && body[0][1] == food[1] && ifs)) body.pop();
            else ifs = false;
            this.setState({ snakeList: body, gameMatrix: gameMatrix, food: food, isFoodVisible: ifs })
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const keyboard = document.querySelector('body')
        keyboard.addEventListener('keydown', e => {
            var newInc;
            if (e.key == 'ArrowUp') newInc = [-1, 0];
            else if (e.key == 'ArrowDown') newInc = [1, 0]
            else if (e.key == 'ArrowLeft') newInc = [0, -1]
            else if (e.key == 'ArrowRight') newInc = [0, 1]
            if (newInc[0] + this.state.increment[0] == 0 && newInc[1] + this.state.increment[1] == 0) return;
            var newx = (this.state.snakeList[0][0] + newInc), newy = (this.state.snakeList[0][1] + newInc)
            if (this.state.snakeList.filter((i) => { return i[0] == newx % 19 && i[1] == newy % 19 }).length || newx < 0 || newx > 18 || newx < 0 || newx > 18) this.setState({ gameOver: true })
            else this.setState({ increment: newInc });
        })
        window.fnInterval = setInterval(() => {
            console.log(this.state.food, this.state.gameMatrix)
            this.gameTick();
        }, 200);
    }

    ////////////////////////////////////////

    static getDerivedStateFromProps(props, state) {
        var temp = []
        for (var i = 0; i < 19; i++) {
            var temp2 = []
            for (var j = 0; j < 19; j++) temp2.push(0);
            temp.push(temp2);
        }


        if(state.isFoodVisible) temp[state.food[0]][state.food[1]]=2;
        state.snakeList.map((i)=>{
            var x= i[0], y=i[1];
            temp[x][y]=1;
        })
        

        return ({ gameMatrix: temp });
    }

    renderGameMatrix = ()=>{
        return this.state.gameMatrix.map((row)=>{
            return row.map((t)=>{
                if(t==2) {
                    console.log(t, "From renderGameMatrix")
                    return <Tile color="red"/>
                }
                else return <Tile color={t?"blue":"lightgrey"}/>
            })
        })
    }

    restartGame = ()=>{
        this.setState({
            snakeList:[[1,1],[1,2],[2,2]],
            increment:[1,0],
            gameOver:false
        })
    }

    render(){
        return(
            <>
                <div class="main-game-container">
                    <div class="innergamecontainer bg-secondary">
                        {
                            !this.state.gameOver?this.renderGameMatrix():<h1 onClick={this.restartGame} className="bg-secondary p-10 my-3 font-bold rounded-none">Game Over</h1>
                        }
                        <h1>{this.state.snakeList.length-2}</h1>
                        <button onClick={this.restartGame} className="btn btn-primary my-3 font-bold rounded-none">Restart Game</button>
                    </div>
                </div>
            </>
        )
    }

};

export default SnakeGame;