import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} key={color.color} name={color.name} />
        ));
        return (
            <div className="palette">
                <div className="palette__colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;