import React from 'react'
import Player from './player.jsx'
import { Parallax, Background } from 'react-parallax';
import BrooklynBridge from '../../images/BrooklynBridge2.jpg'

class Home extends React.Component {
  render() {
    return (
        <div>
          <div className='player-container'></div>
          <Parallax
            blur={0.3}
            bgImage={BrooklynBridge}
            bgImageAlt="the bridge"
            strength={300}
          >
            <div style={{ height: '500px' }} />
          </Parallax>
          <div style={{ height: '600px' }} />
        </div>
    )
  }
}

export default Home