import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette.js"
import seedColors from "./seedColors"
import { generatePalette } from "./ColorHelpers.js"



function App() {

  function findPalette(id) {
    return seedColors.find(p => p.id === id)
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GEOS HERE</h1>} />
        <Route exact path="/palette/:id" render={routeProps =>
          <Palette
            palette={generatePalette(
              findPalette(routeProps.match.params.id)
            )}
          />}
        />
      </Switch>

      {/* <Palette palette={generatePalette(seedColors[4])} /> */}
    </div>
  )
}

export default App;

