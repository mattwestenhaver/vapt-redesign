import React from 'react'
import Paper from '../reusable/paper.jsx'

class Services extends React.Component {
  render() {
    return (
      <div className='services-container'>
        <div className='page-header'>
          <h1>Services</h1>
        </div>
        <div className='section-1'>
          <div className='section-60'>
            <Paper heading='Virtual Walkthrough' body='We create premium VR and 360° content for real spaces. We build robots with our customized lens solution and depth sensors that can autonomously navigate and capture 360 degree video in any space.' body2='Using our proprietary technology, we work with clients to film real estate tours, retail experiences, marketing videos, and all types of entertainment. The full experience of a moving or guided tour of a space is a far more real way to immerse yourself. Our technology gives brokers, tour guides, storytellers, and all salespeople the ability to improve the quality of the experience and to display their showmanship with true Virtual Reality.' />
          </div>
        </div>
      </div>
    )
  }
}

export default Services