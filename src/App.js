import React from 'react';
import Palette from "./Palette.js"
import seedColors from "./seedColors"
import { generatePalette } from "./ColorHelpers.js"



function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  )
}

export default App;

