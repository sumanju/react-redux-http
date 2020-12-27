import  React from 'react';
import  './App.css';
import  { Provider} from "react-redux"
import  store    from  "./redux/store"
import  Comp1     from  './component/component1/comp1'
import  CompFunc  from  './component/comp-func/comp-func'
import  Image     from  './component/image/image'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CompFunc />
        <Comp1 />
        <Image />
      </div>
    </Provider>
  )
}

export default App;
