var mountNode = document.getElementById('root');

class Board extends React.Component {
    render () {
        return (<br>)
    }
}

function Score(props) {
    return(
        <div>
            <h4>Score:</h4>
            <p> TODO </p>
        </div>
    )
}

//not using :(
const GRID_DIMENSION = 5;


class Grid {
    constructor() {
        var rows = [0, 1, 2, 3, 4]
        var cols = [0, 1, 2, 3, 4]

        // creating: grid[row][column]
        this.grid = [];
        rows.forEach((nah, row) => {
            this.grid[row] = [];
            cols.forEach((nah, col) => {
                this.grid[row][col] = {
                    char: this.randomIndex()
                };
            })
        })
    }

    // retorna numero de 0 - 3
    randomIndex() {
        return Math.round(Math.random() * 100000) % 4
    }
}

class Game extends React.Component {
    constructor() {
        super();
        var grid = new Grid();
        this.state = {
            grid
        }
        console.log('initial state:', this.state)
    }
    render() {
        return (
            <div>
                <Board></Board>
                <Score></Score>
            </div>
        )
    }
}

ReactDOM.render(<Game />, mountNode);
