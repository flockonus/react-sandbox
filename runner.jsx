var mountNode = document.getElementById('root');


class Balls extends React.Component {
    constructor() {
        super();
        this.state = {
            x: 10,
            y: 10
        }
    }
    componentDidMount() {
        //setInterval(this.animate.bind(this), 1000)
        requestAnimationFrame(this.animate.bind(this))
    }

    animate() {
        this.setState({
            x: this.state.x + Math.random(),
            y: this.state.y + Math.random(),
        })
        requestAnimationFrame(this.animate.bind(this))
    }

    render() {
        return (
    <div className="box" style={{left: this.state.x, top: this.state.y}}>
        1
    </div>)
    }
}

// stateless functional
function Banner(prop) {
    return(
    <div>
        <h1>{prop.msg}</h1>
        <Balls />
    </div>
    )
}

ReactDOM.render(<Banner msg="OOOOOOIIIII!" />, mountNode);