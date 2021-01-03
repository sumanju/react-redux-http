import React, { Component }  from  'react'
import './comp1.css'

class Comp1 extends Component {

  constructor() {
    super()
    this.state= {
      userId    : '',
      password  : ''
    }
  }

  login() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  
        password  : this.state.password,
        userName  : this.state.userId
      })
    }

    fetch('http://localhost:4000/API/login', requestOptions)
    .then(response => response.json())
    .then(data => {
      alert(`${data.status} => ${data.data}`)
    })
  }

  hit() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('http://localhost:4000/API/secure', requestOptions)
    .then(response => response.json())
    .then(data => {
      alert(`${data.status} => ${data.data}`)
    })
  }

  render()  {
    return (
      <React.Fragment>
        <h2> http Request </h2>
        <div  className="align">
          <span> Login Form </span>
          <input  className="text-box" 
                  type="text"     
                  onKeyUp={(event) => this.setState({userId  : event.target.value})}/>
          <input  className="text-box" 
                  type="password" 
                  onKeyUp={(event) => this.setState({password  : event.target.value})} />
          <button className="button" onClick={() => this.login()}>login</button>
          <button className="button" onClick={() => this.hit()}>hit</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Comp1
