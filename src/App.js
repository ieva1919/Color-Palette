import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette.js"
import PaletteList from "./PaletteList.js"
import seedColors from "./seedColors"
import NewPaletteForm from "./NewPaletteForm.js"
import { generatePalette } from "./ColorHelpers.js"
import SingleColorPalette from "./SingleColorPalette.js"



function App() {
  const [palettes, setPalletes] = useState(seedColors)

  function findPalette(id) {
    return palettes.find(p => p.id === id)
  }

  function savePalette(newPalette) {
    setPalletes([...palettes, newPalette])
  }

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) =>
            <PaletteList palettes={palettes} {...routeProps} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default App;

