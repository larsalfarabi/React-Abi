import React from 'react'
import "../styles/styles.css"

const CheckBox = () => {
  return (
<div className="cntr">
  <input type="checkbox" id="cbx" className="hidden-xs-up" />
  <label htmlFor="cbx" className="cbx" />
</div>

  )
}

export default CheckBox