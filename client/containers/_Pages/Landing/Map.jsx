import React, { useState } from 'react'
import MapGl, { Marker } from 'react-map-gl'

const Map = (props) => {
  const { geo, data } = props
  const [view, setView] = useState({
    longitude: geo[1],
    latitude: geo[0],
    width: '100%',
    height: '100vh',
    zoom: 5
  })

  return (
    <MapGl
      {...view}
      mapboxApiAccessToken={process.env.MAP_API}
      mapStyle="mapbox://styles/malyz01/ckdtmayxx0bww19p96a0yedr4"
      onViewportChange={setView}
    >
      {data.map((d) => (
        <Marker key={d.name} latitude={+d.lat} longitude={+d.lng}>
          {props.children(d)}
        </Marker>
      ))}
    </MapGl>
  )
}

export default Map
