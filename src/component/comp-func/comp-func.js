import  React, { Component }  from  'react'
import  { connect } from 'react-redux'
import buyCake from '../../redux/cake/cakeAction'
import buyCream from '../../redux/cream/creamAction'
import  './comp-func.css'

class CompFunc extends Component {

  constructor() {
    super()
  }

  show()  {
    this.props.dispatchCake('suman mandal')
  }

  render()  {
    return (
      <div  className="border">
        <h2>Number of Cakes { this.props.user.cake.numOfCake }</h2>
        <button onClick={()=> this.show()}>buy cake</button>
      </div>
    )
  }
}


function mapStateToProps(state)  {
    return { user: state }
}

function mapDispatchFunction(dispatch) {
  return  {
    dispatchCake  : ()  =>  dispatch(buyCake()),
    dispatchCream : ()  =>  dispatch(buyCream())
  }
}

export default connect(mapStateToProps, mapDispatchFunction)(CompFunc)
