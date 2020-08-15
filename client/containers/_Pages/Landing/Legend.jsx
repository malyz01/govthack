import React from 'react'
import './style.css'

import * as util from '../../utils'

const Legend = ({ name }) => {
  return (
    <section className="legend">
      <img className="legendImg" src={`/assets/images/${name}.svg`} />
      <div>{util.splitCamelCase(name)}</div>
    </section>
  )
}

export default Legend
