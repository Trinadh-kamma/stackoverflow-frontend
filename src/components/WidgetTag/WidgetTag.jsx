import React from 'react'
import "./WidgetTag.css"
import { Link } from 'react-router-dom'

const WidgetTag = () => {
  const list = 
  [
    { id : 1, title : "javascript" },
    { id : 2, title : "npm" },
    { id : 3, title : "react js" }
  ]
  return (
  <>
    <div className="widgetTag__container">  
      <div className="widgetTag1">
        <h1>Custom Filters</h1>
      </div>
      <div className = "widgetTag2">
        <Link to="https://stackoverflow.com/questions?edited=true">Create a custom filter</Link>
      </div>
    </div>

    <div className="widgetTag__container">  
      <div className="widgetTag1 watchedtags">
        <h1>Watched Tags</h1>
        <p>edit</p>
      </div>
      <div className = "widgetTag2">
        {list.map((eachItem) =>(
          <button key={eachItem.id}>{eachItem.title}</button>
        ))}
      </div>
    </div>    
  </>
  )
}

export default WidgetTag
