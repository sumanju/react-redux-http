import React , {  useEffect, useState } from 'react'

function UseEff()  {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')


  useEffect(()  =>  {
  }, [count])

  return (
    <div> 
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={()=>setCount(count + 1)}> Click </button>
    </div>
  )
}

export default UseEff