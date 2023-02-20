import React from 'react'
import ItemList from './ItemList'

const Form = ({ form, setForm }) => {
  return (
    <div>
      <ItemList form={form} setForm={setForm} />
    </div>
  )
}

export default Form