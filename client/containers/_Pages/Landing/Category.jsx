import React from 'react'
import './style.css'

class Category extends React.Component {
  render() {
    return <div className="categoryList">{this.props.category}</div>
  }
}

export default Category
