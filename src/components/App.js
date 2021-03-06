import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Palette from './palette/Palette';
import PaletteList from './palette/PaletteList';
import SingleColorPalette from './palette/SingleColorPalette';
import seedColors from '../seedColors';
import { generatePalette } from '../colorHelpers';

class App extends React.Component {
  findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };
  render() {
    return (
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteList palettes={seedColors} {...routeProps} />
            )}
          />
          <Route
            exact
            path='/palette/:id'
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id),
                )}
              />
            )}
          />
          <Route
            path='/palette/:paletteId/:colorId'
            render={routeProps => (
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId),
                )}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
