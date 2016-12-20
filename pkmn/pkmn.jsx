var mountNode = document.getElementById('root');


//not using :(
const GRID_DIMENSION = 5;

/* maybe a class is not really the react way :/
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
                    key: Math.random(),
                    char: this.randomIndex(),
                };
            })
        })
    }

    // retorna numero de 0 - 3
    randomIndex() {
        return Math.round(Math.random() * 100000) % 4
    }
}
*/

function createGrid() {
    // returns 0 to 3
    function randomIndex() {
        return Math.round(Math.random() * 100000) % 4
    }

    var rows = [0, 1, 2, 3, 4]
    var cols = [0, 1, 2, 3, 4]

    // creating: grid[row][column]
    var grid = [];
    rows.forEach((nah, row) => {
        grid[row] = [];
        cols.forEach((nah, col) => {
            grid[row][col] = {
                key: Math.random(),
                char: randomIndex(),
            }
        })
    })
    return grid;
}

// ---- REACT ----

function Cell(props) {
    return (
        <td onClick={props.cellClick}>
            <img src={props.char+'.png'} alt={props.char}/>
        </td>
    )
}

class Board extends React.Component {
    render() {
        //console.log(this.props)
        return(
            <table>
                <tbody>
                    {this.props.grid.map((row,i)=>{
                        return (
                        <tr key={i}>
                            {row.map((cell,j)=> (
                                <Cell {...cell} cellClick={() => this.props.cellClick(i,j)} />
                            ))}
                        </tr>)
                    })}
                </tbody>
            </table>
        )
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

class Game extends React.Component {
    constructor() {
        super();
        var grid = createGrid();
        this.state = {
            grid
        }
        console.log('initial state:', this.state)
    }
    onClick(x,y) {
        console.log('clicked', x, y)
        // https://facebook.github.io/react/tutorial/tutorial.html#why-immutability-is-important
        // WRONG, cant alter the state!
        //this.state.grid[x][y].char = 'null';
        
        // this maybe right? we are copying (do i even need this?)
        var grid = this.state.grid.slice();
        // dont need to... // grid[x] = grid[x].slice();
        grid[x][y] = Object.assign({}, grid[x][y], {char: 'null'});
        // return a new state
        this.setState({grid});
    }
    render() {
        return (
            <div>
                <Board grid={this.state.grid} cellClick={this.onClick.bind(this)}></Board>
                <Score></Score>
            </div>
        )
    }
}

ReactDOM.render(<Game />, mountNode);
