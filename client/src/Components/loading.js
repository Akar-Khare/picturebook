import React from 'react'
import { FallingLines } from  'react-loader-spinner'
const Loading = () => {
  return (
    <div style={{width:"100%",border:"2px solid black",display :"flex",justifyContent:"center"}}><FallingLines
    color="#4fa94d"
    width="100"
    visible={true}
    ariaLabel='falling-lines-loading'
  /></div>
  )
}

export default Loading;