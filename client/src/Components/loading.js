import React from 'react'
import { Rings } from  'react-loader-spinner'
const Loading = () => {
  return (
    <div style={{width:"100%",paddingTop:"100px",display :"flex",justifyContent:"center"}}><Rings
    height="100"
    width="100"
    color="#4fa94d"
    radius="6"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="rings-loading"
  /></div>
  )
}

export default Loading;