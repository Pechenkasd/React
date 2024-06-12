import React from 'react'
import About from '../componets/About'
import Title from '../componets/Title'

const MainPages = () => {
  const info = { title: "Some Title", body: "Some body" };
  return (
    <>
    <About info={info}/>
    <Title text="Hello world" />
    </>
  )
}

export default MainPages
