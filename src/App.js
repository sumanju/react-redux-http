import  React, { useState } from 'react';
import  './App.css';
import  { Provider} from "react-redux"
import  store       from  "./redux/store"
import  Comp1       from  './component/component1/comp1'
import  CompFunc    from  './component/comp-func/comp-func'
import  Image       from  './component/image/image'
import  Greet       from './component/use-state/use-state';
import  UseEff      from './component/use-efftec/use-effect';

function App() {

  const [selectedView, setSelectedView]  = useState(1)

  return (
    <Provider store={store}>
      <div className="App">
        <div className="header">
          <div  className="tabs" onClick={()  =>  setSelectedView(1)} >Props</div>
          <div  className="tabs" onClick={()  =>  setSelectedView(2)} >Redux Test</div>
          <div  className="tabs" onClick={()  =>  setSelectedView(3)} >Http Test</div>
          <div  className="tabs" onClick={()  =>  setSelectedView(4)} >Image Test</div>
          <div  className="tabs" onClick={()  =>  setSelectedView(5)} >useEff Test</div>
        </div>
        
        {selectedView === 1  ? <Greet />    : selectedView  === 2 
                             ? <CompFunc /> : selectedView  === 3  
                             ? <Comp1 />    : selectedView  === 4
                             ? <Image />    : <UseEff/> 
        }
      </div>
    </Provider>
  )
}

export default App;
