var mountNode = document.getElementById('root');

/* base
      ReactDOM.render(
        <h1>Hello, Mundionho!</h1>,        
      );
*/

// https://facebook.github.io/react/
/*
class HelloMessage extends React.Component {
  render() {
    return <div>Hello ---{this.props.name}</div>;
  }
}

var ab = 'Abesan'

ReactDOM.render(<HelloMessage name={ab} />, mountNode);
*/




/*
class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {time:0}
    }
    componentDidMount() {
        this.intervalPointer = setInterval(this.tick.bind(this), 1000)
    }
    componentWillUnmount() {
        window.clearInterval(this.intervalPointer)
    }
    tick() {
        this.setState((state) => ({
          time: state.time + 1
        }));
    }
    render (){
        return (
            <div>{this.props.name}{this.state.time}</div>
        );
    }
}

ReactDOM.render(<Timer name="Tempo: " />, mountNode);
*/














// https://facebook.github.io/react/tutorial/tutorial.html
// stateless functional component
function Square(props) {
  return(
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}



class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  render() {

//     const winner = calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }
// <div className="status">{status}</div>
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}




class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}




// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// pergunta: como faço pra renderizar um loop de divs em React?


class Fabiano extends React.Component {
  constructor() {
    super()
    this.state = {
      a:1,
      b:2
    }
  }

  clicky() {
    this.setState({
      a: Math.random()
    })
    console.log(this.state)
  }

  render () {
    return (
    <div>Fab wa:
      <div>{this.state.a}</div>
      <div>{this.state.b}</div>
      <button onClick={()=> this.clicky()}>(!!!)</button>
    </div>
    )
  }
}
ReactDOM.render(<Fabiano />, mountNode);

// NEXT: http://redux.js.org/

