import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Type Of Employment</h4>
      <div className='flex-col flex p-2'>
          <label className='sidebar-lable-container'>
              <input type='radio' name='test' id='test' value="" onChange={handleChange}></input>
              <span className='checkmark'></span>Any Experience
          </label>

          <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
          <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>
          <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
          

      </div>


  </div>
  )
}

export default EmploymentType
