import React from 'react'
import './index.css'

export interface Props {
  name: string
}

function App({ name }: Props) {
  return (
    <div>
      <div className="app-root">
        我是入口
        {name}
      </div>
    </div>
  )
}
export default App
