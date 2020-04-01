import React from 'react';
import Palette from "./Palette.js"
import seedColors from "./seedColors"
import { generatePalette } from "./ColorHelpers.js"



function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  )
}

export default App;

