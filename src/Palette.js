import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import Navbar from "./Navbar.js"
import "./Palette.css"
import PaletteFooter from "./PaletteFooter.js"

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
        console.log(this.props.palette)
        const { colors, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state

        const colorBoxes = colors[level].map(color => (
            <ColorBox
                background={color[format]}
                key={color.id}
                name={color.name}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette={true}
            />
        ));
        return (
            <div className="palette">
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                    showingAllColors
                />
                <div className="palette__colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default Palette;