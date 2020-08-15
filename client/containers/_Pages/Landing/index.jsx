import React, { useState, useEffect } from 'react'
import * as d3 from 'd3-ease'
import { FlyToInterpolator } from 'react-map-gl'
import './style.css'

import Map from '../../../components/Map'
import Brand from '../../../components/Brand'
import Legend from './Legend'
import Footer from './Footer'
import * as util from '../../utils'
import Data from '../../json/Final.json'
import Categories from '../../json/categories.json'

const geo = [-40.839618, 174.175857]

const Landing = () => {
  const [data, setData] = useState(Data)
  const [input, setInput] = useState(Categories)
  const [categFilter, setCategFilter] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  useEffect(() => {
    if (selectedCity) {
      const city = Data.find((d) => d.name === selectedCity)
      const filtered = categFilter.filter((c) => !input[c])
      const newData = util.filterCategories(city, filtered)
      setData(newData)
    }
  }, [selectedCity, input])

  const handleSelect = (data, onClick) => () => {
    setSelectedCity(data.name)
    if (Data.some((d) => d.name === data.name)) {
      const city = Data.filter((d) => d.name === data.name)[0]
      const [newData, categoryList] = util.getCategories(city)
      handleZoom(data, onClick)
      setData(newData)
      setCategFilter(categoryList)
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
      zoom: data.zoom || 14.5,
      transitionDuration: 3000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubic
    })
  }

  const handleInput = (e) => {
    let val = e.target.value === 'true' ? true : false
    setInput({ ...input, [e.target.name]: !val })
  }

  return (
    <div className="landingContainer">
      <section className="contentContainer">
        <Brand />
        <h4 className="contentContainerDisplay">Categories</h4>
        {selectedCity && (
          <>
            {categFilter.map((c) => (
              <div className="sidebarList" key={c}>
                <input
                  type="checkbox"
                  onChange={handleInput}
                  value={input[c]}
                  name={c}
                />
                <div>{util.getName(c)}</div>
              </div>
            ))}
            <div className="legendContainer">
              {Object.keys(Categories).map((c) => (
                <Legend key={c} name={c} />
              ))}
            </div>
          </>
        )}

        <Footer />
      </section>

      <section className="mapContainer">
        <Map geo={geo} data={data}>
          {(data, onClick) => (
            <img
              className="mapMarkIcon"
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
