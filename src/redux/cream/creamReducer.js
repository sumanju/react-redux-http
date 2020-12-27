import { BUY_CREAM } from "./creamType"

const intialState = {
  numOfCream  :  10
}

const creamReducer = (state  = intialState, action) =>  {

  switch(action.type) {

    case BUY_CREAM : return  {
      ...state,
      numOfCream : state.intialState - 1
    }

    default: return  state
  }
}

export default creamReducer