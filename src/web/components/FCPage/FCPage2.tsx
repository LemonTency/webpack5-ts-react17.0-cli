import React from 'react'

import './index.css'

const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
)

const App2: React.FunctionComponent<{ value: string }> = ({ value }) => (
  <div>{value}</div>
)

const RenderGame = () => {
  return (
    <>
      <App message="FC" />
      <App2 value="FC2" />
    </>
  )
}

export default RenderGame
