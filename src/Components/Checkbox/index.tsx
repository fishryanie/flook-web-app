import './style.scss'
import React from 'react'

export default function Checkbox() {
  return (
  <div className="checkbox-container">
    <input type="checkbox" id="cbtest" />
    <label htmlFor="cbtest" className="checkbox-container-label" /> 
  </div>
  )
}
