import React from 'react';
import ColorBox from '../ColorBox';
import '../styles/palette/Palette.css';
import Navbar from '../Navbar';
import PaletteFooter from './PaletteFooter';

class Palette extends React.Component {
  state = { level: 500, format: 'hex' };

  changeLevel = level => this.setState({ level });

  handleChange = format => this.setState({ format });

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => {
      return (
        <ColorBox
          key={color.id}
          background={color[format]}
          name={color.name}
          moreUrl={`/palette/${id}/${color.id}`}
          showingFullPalette
        />
      );
    });
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
          showingAllColors
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default Palette;
