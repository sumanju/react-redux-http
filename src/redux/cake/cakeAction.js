import { BUY_CAKE } from "./cakeType"

const buyCake = (some)  =>  {
  console.log('ss',some)
  return  {
    type  : BUY_CAKE
  }
}

export default buyCake