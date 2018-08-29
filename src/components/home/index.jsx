import React from 'react'

import Player from './player.jsx'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>VirtualAPT</h1>
        <Player />
      </div>
    )
  }
}

export default Home