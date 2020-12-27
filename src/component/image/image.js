import React, { Component }  from  'react'
import './image.css'

class Image extends Component {

  constructor() {
    super()
    this.state  = {
      imageBase : ''
    }
  }

  async getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  async onUpload(event)  {
    const  img = await this.getBase64(event.target.files[0])
    this.setState({
      imageBase : img
    })
  }

  render()  {
    return (
      <React.Fragment>
        <div  className="align">
          <img src={ this.state.imageBase } className="image" />
          <input type="file" onChange={($event) => this.onUpload($event)}/>
        </div>
      </React.Fragment>
    )
  }

}

export default Image