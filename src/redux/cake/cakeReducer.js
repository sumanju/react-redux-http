import { BUY_CAKE } from "./cakeType"

const intialState = {
  numOfCake  :  10
}

const cakeReducer = (state  = intialState, action) =>  {

  switch(action.type) {

    case BUY_CAKE : return  {
      ...state,
      numOfCake : state.numOfCake - 1
    }

    default: return  state
  }
}

export default cakeReducer