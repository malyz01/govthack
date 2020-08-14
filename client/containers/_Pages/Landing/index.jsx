import React from 'react'
import './style.css'

import Map from './Map'
import cities from '../../json/cities.json'

const geo = [-40.839618, 174.175857]

const Landing = () => {
  return (
    <div className="landingContainer">
      <section className="contentContainer">
        <div>Data to be displayed</div>
      </section>

      <section className="mapContainer">
        <Map geo={geo} data={cities}>
          {(data) => (
            <img
              className="mapMarkIcon"
              width="20px"
              src="/assets/images/mark.svg"
              onClick={() => alert(data.name)}
            />
          )}
        </Map>
      </section>
    </div>
  )
}

export default Landing
