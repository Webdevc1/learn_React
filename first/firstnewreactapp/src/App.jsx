import { useState, useEffect, Component} from 'react'
import "./App.css"


export function App(){
    const[count, setCount] = useState(0);
    const[name,setName] = useState("");
    const[displayName,setDisplayName] = useState("") 

    function handleSubmit(e){
        e.preventDefault();
        setDisplayName(name)
        setCount(prevCount => prevCount+1)
    }

    return(
        <>
          <div>
            <div className="orig">
              <form onSubmit={handleSubmit}>
                  <input autoFocus type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="fmin"/> 
                  <button type="submit"> Submit </button>
              </form>
              <span>{displayName} has clicked the button</span>
              <span>This button has been clicked {count} times</span>
            </div>
          </div>
        </>
    )

}

export default App  