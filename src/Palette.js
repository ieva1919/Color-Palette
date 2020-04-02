import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import Navbar from "./Navbar.js"
import "./Palette.css"

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(val) {
        console.log({ val })
        this.setState({ format: val })
    }

    render() {
        const { colors } = this.props.palette
        const { level, format } = this.state

        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} key={color.color} name={color.name} />
        ));
        return (
            <div className="palette">
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
                <div className="palette__colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;