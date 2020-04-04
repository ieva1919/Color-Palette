import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette.js"
import PaletteList from "./PaletteList.js"
import seedColors from "./seedColors"
import { generatePalette } from "./ColorHelpers.js"
import SingleColorPalette from "./SingleColorPalette.js"



function App() {

  function findPalette(id) {
    return seedColors.find(p => p.id === id)
  }

  return (
    <div>
      <Switch>
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
            <PaletteList palettes={seedColors} {...routeProps} />}
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

