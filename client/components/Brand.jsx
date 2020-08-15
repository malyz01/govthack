import React from 'react'

// TODO use styled components
const style = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20
  }
}

function Brand() {
  return (
    <header style={style.headerContainer} id="header">
      <div>
        <img
          style={style.image}
          src={`/assets/images/logo.png`}
          alt="Accessmap Logo"
        />
      </div>
    </header>
  )
}

export default Brand
