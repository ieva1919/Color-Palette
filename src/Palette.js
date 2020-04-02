import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import Navbar from "./Navbar.js"
import "./Palette.css"

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 }
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    render() {
        const { colors } = this.props.palette
        const { level } = this.state

        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} key={color.color} name={color.name} />
        ));
        return (
            <div className="palette">
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="palette__colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;