import React,{useState,useEffect} from 'react'

export default function Watch() {
  const [count,setCount] = useState(0)
  useEffect(function(){
    setInterval(()=>{
      console.log(`Count is ${count}`)
    },2000)
  },[])
  return (
      <button onClick ={()=>setCount(count+1)}>Watch</button>
  )
}
