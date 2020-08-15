import React, { useState } from 'react'
import * as d3 from 'd3-ease'
import { FlyToInterpolator } from 'react-map-gl'
import './style.css'

import Map from './Map'
import * as util from '../../utils'
import Category from './Category'
import Data from '../../json/Final.json'
import Categories from '../../json/categories.json'
import Brand from './Brand.jsx'

const geo = [-40.839618, 174.175857]

const Landing = () => {
  const [data, setData] = useState(Data)
  const [filter, setFilter] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  const handleSelect = (data, onClick) => () => {
    setSelectedCity(data.name)
    if (Data.some((d) => d.name === data.name)) {
      const city = Data.filter((d) => d.name === data.name)[0]
      handleZoom(data, onClick)
      const [newData, categoryList] = util.getCategories(city)
      setData(newData)
      setFilter(categoryList)
      return
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

  const handleFilter = (on, filter) => {}

  return (
    <div className="landingContainer">
      <section className="contentContainer">
      <Brand />
        Display
        {selectedCity &&
          filter.map((c) => (
            <div style={{ display: 'flex' }} key={c}>
              <input type="checkbox" name={c} />
              <div>{c}</div>
            </div>
          ))}
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
