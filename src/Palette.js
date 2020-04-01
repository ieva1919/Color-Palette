import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

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
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <div className="palette__colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;