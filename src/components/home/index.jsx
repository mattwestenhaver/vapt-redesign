import React from 'react'
import Player from './player.jsx'
import { Parallax } from 'react-parallax';
import BrooklynBridge from '../../images/BrooklynBridge2.jpg'

class Home extends React.Component {
  render() {
    return (
        <div>
          <div style={{ height: '400px' }} />
          <Parallax
            blur={0.3}
            bgImage={BrooklynBridge}
            bgImageAlt="the bridge"
            strength={400}
          >
            <div style={{ height: '500px' }} />
          </Parallax>
          <div style={{ height: '600px' }} />
        </div>
    )
  }
}

export default Home