import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import 'rc-slider/assets/index.css';
import "./Palette.css"
import Slider from 'rc-slider';

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
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                <div className="palette__colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;