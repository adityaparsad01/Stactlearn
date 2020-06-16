import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

const Pincode = () =>{
  const [num, setNum] = useState()
  const [state, setState] = useState()
  const [place, setPlace] = useState()



  useEffect(()=>{
   document.title = `${num}`;
    async function getData(){
      const res = await axios.get(`https://api.zippopotam.us/IN/${num}`)
      console.log(res.data.places.length)
      setState(res.data.country )
      setPlace(res.data.places.length)
    }
    getData()
  })
  return (<>
  <div className="card">
  <h1>You PinCode is {num}  </h1>
  <input type="number" value={num} onChange={(e)=>{
    setNum(e.target.value)
  }}>
  </input>
  <h1>{setState}</h1>
  <h2>Total Number of Places in {num} is {place}</h2>
  </div>
  </>)
} 
export default Pincode