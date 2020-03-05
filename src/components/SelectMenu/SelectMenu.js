import React, { useState } from 'react'

const SelectMenu = () => {
  const [optionValue, setOptionValue] = useState('value1')

  const handleChange = (e) => {
    setOptionValue(e.target.value)
    console.log(e.target.value);
  }

  return (
    <div>
      <select value={optionValue} onChange={handleChange}>
        <option value="value1">Value1</option>
        <option value="value2">Value2</option>
        <option value="value3">Value3</option>
        <option value="value4">Value4</option>
      </select>
    </div>
  )
}

export default SelectMenu
