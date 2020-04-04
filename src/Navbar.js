import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import { Link } from "react-router-dom"
import Slider from 'rc-slider';
import "./Navbar.css"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex', open: false }
        this.changeFormat = this.changeFormat.bind(this)
        this.CloseSnackbar = this.CloseSnackbar.bind(this)
    }

    changeFormat(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.changeFormat(e.target.value)
    }

    CloseSnackbar() {
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel, showingAllColors } = this.props;
        const { format } = this.state;
        return (
            <header className="navbar">
                <div className="logo">
                    <Link to="/">reactcolorpicker</Link>
                </div>
                {showingAllColors && (
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
                )}
                <div className="select-container">
                    <Select value={format} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX - #ffffff </MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255) </MenuItem>
                        <MenuItem value="rgba">RGBA - #rgba(255, 255, 255, 1.0) </MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format changed to {format.toUpperCase()} </span>}
                    ContantProps={{
                        "aria-describeBadly": "message-id"
                    }}
                    onClose={this.CloseSnackbar}
                    action={[
                        <IconButton onClick={this.CloseSnackbar} color='inherit' key='close' aria-label='close'>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default Navbar; 
