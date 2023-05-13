import React from 'react'
import "./RightSidebar.css"
import Widget from "../../components/Widget/Widget"
import WidgetTag from "../../components/WidgetTag/WidgetTag"

const RightSidebar = () => {
  return (
    <aside className="details__container">
      <Widget />
      <WidgetTag />
    </aside>
  )
}

export default RightSidebar
