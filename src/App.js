import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette.js"
import PaletteList from "./PaletteList.js"
import seedColors from "./seedColors"
import { generatePalette } from "./ColorHelpers.js"



function App() {

  function findPalette(id) {
    return seedColors.find(p => p.id === id)
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route exact path="/palette/:id" render={routeProps =>
          <Palette
            palette={generatePalette(
              findPalette(routeProps.match.params.id)
            )}
          />}
        />
      </Switch>
    </div>
  )
}

export default App;

