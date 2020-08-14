import React, { useState } from 'react'
import * as d3 from 'd3-ease'
import { FlyToInterpolator } from 'react-map-gl'
import './style.css'

import Map from './Map'
import Data from '../../json/data.json'
import Categories from '../../json/categories.json'

const geo = [-40.839618, 174.175857]

const Landing = () => {
  const [data, setData] = useState(Data.filter((c) => c.type === 'city'))
  const [selectedData, setSelectedData] = useState(null)

  const handleSelect = (data, onClick) => () => {
    setSelectedData(data.name)
    if (data.type === 'city') {
      handleFilter(data.name)
      return handleZoom(data, onClick)
    }
    data.zoom = 18
    handleZoom(data, onClick)
  }

  const handleZoom = (data, onClick) => {
    onClick({
      longitude: +data.lng,
      latitude: +data.lat,
      width: '100%',
      height: '100vh',
      zoom: data.zoom || 13,
      transitionDuration: 3000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubic
    })
  }

  const handleFilter = (name) => {
    setData(Data)
  }

  return (
    <div className="landingContainer">
      <section className="contentContainer">
        {selectedData && (
          <div>
            {selectedData}
            <ul>
              {Categories.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mapContainer">
        <Map geo={geo} data={data}>
          {(data, onClick) => (
            <img
              className="mapMarkIcon"
              width="20px"
              src={`/assets/images/${data.image}`}
              onClick={handleSelect(data, onClick)}
            />
          )}
        </Map>
      </section>
    </div>
  )
}

export default Landing
