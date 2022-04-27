import React from 'react';
import "./FilterItem.scss";

const FilterItem = ({checkbox, handleCheckbox, condition, name}) => {
  return (
    <div>
      <label htmlFor={condition}>{name}</label>
      <input id={condition} type="checkbox" 
          checked={checkbox}
          onChange={handleCheckbox}
           />
    </div>
    
  )
}

export default FilterItem