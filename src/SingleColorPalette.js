import React, { Component } from "react";
import Navbar from "./Navbar.js"
import PaletteFooter from "./PaletteFooter.js"
import ColorBox from "./ColorBox.js"
import { Link } from "react-router-dom"

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = { format: "hex" }
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1);
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ))
        return (
            <div className="singlecolorpalette palette">
                <Navbar changeFormat={this.changeFormat} showingAllColors={false} />
                <div className="palette__colors">
                    {colorBoxes}
                    <div className="go__back colorBox">
                        <Link to={`/palette/${id}`} className="back__button">Go back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }

}

export default SingleColorPalette;