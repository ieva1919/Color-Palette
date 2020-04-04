import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette.js"
import seedColors from "./seedColors"
import { generatePalette } from "./ColorHelpers.js"



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GEOS HERE</h1>} />
        <Route exact path="/patette/:id" render={() => <h1>Individuell Palette</h1>} />
      </Switch>

      {/* <Palette palette={generatePalette(seedColors[4])} /> */}
    </div>
  )
}

export default App;

