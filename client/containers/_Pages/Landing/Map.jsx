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

  const onClick = (view) => {
    setView(view)
  }

  return (
    <MapGl
      {...view}
      mapboxApiAccessToken={process.env.MAP_API}
      mapStyle={process.env.MAP_STYLE}
      onViewportChange={setView}
    >
      {data.map((d, i) => (
        <Marker key={i} latitude={+d.lat} longitude={+d.lng}>
          {props.children(d, onClick)}
        </Marker>
      ))}
    </MapGl>
  )
}

export default Map
