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

  async rotateLeft()  {
    const bitmap  = new Buffer(this.state.imageBase, 'base64')
    const base64 = new Buffer(bitmap).toString('base64')

    this.setState({
      imageBase : base64
    })
  }

  async rotateRight() {

  }

  render()  {
    return (
      <React.Fragment>
        <h2> Image Rotation </h2>
        <div  className="align">
          <img src={ this.state.imageBase } className="image" />
          <input type="file" onChange={($event) => this.onUpload($event)} alt=""/>
          <div  className="image-panel">
            <input type="button" onClick={() => this.rotateLeft()}  value="left"/>
            <input type="button" onClick={() => this.rotateRight()} value="right"/>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Image