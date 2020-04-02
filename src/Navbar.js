import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import "./Navbar.css"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex' }
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeFormat(e) {
        this.setState({ format: e.target.value })
        this.props.changeFormat(e.target.value)
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className="navbar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className="slider-container">
                    <span> Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX - #ffffff </MenuItem>
                        <MenuItem value="rgb">HEX - rgb(255, 255, 255) </MenuItem>
                        <MenuItem value="rgba">HEX - #rgba(255, 255, 255, 1.0) </MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar; 
