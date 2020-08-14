import React from 'react'

import Map from './Map'
import cities from '../../json/cities.json'

const geo = [-40.839618, 174.175857]

const Landing = () => {
  return (
    <div>
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
    </div>
  )
}

export default Landing
