import React from 'react'

const style = {
  maxWidth: 1200,
  margin: '0 auto'
}

const Container = (props) => {
  return (
    <div style={style} {...props}>
      {props.children}
    </div>
  )
}

export default Container
