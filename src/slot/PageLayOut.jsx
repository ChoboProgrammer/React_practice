import React from 'react'

export default function PageLayOut(props) {
  console.log({...props})
  return (
    <div className="Layout" >
      {props.topBar}
      {props.content}
    </div>
  )
}
