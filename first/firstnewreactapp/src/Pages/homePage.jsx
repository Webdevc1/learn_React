import {useState} from 'react'

import "./homePage.css"

export function Home(){
    
    const[name, setName]= useState("")
    const[count,setCount]=useState(1)

    const num=[]
    for(let i=1;i<=10;i++){num.push(i)}

    function handleCountChange(e){
        setCount(e.target.value)
    }

    return(
        <>
            <div className="header">
                <form className="fmn" onSubmit={(e) => e.preventDefault()}>
                    <input 
                    type="text" 
                    placeholder="Name of the Product"
                    name="nameHolder"
                    size="50" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">{"➡️"}</button>

                </form>

                <a href="./orders"> Orders </a>
                <a href="./cart"> Cart </a>

            </div>

            <div className="Cards">

                <div className="socks">
                    {/* <img src="" alt="socks" /> */}
                    <span>socks</span>
                    <span>$10.00</span>
                    <form>
                        <select value={count} onChange={handleCountChange}>
                                
                                {num.map((i,index)=>{
                                    return(<option key={index} value={i}>
                                        {i}
                                    </option>    
                                )})}
                                
                                
                        </select>
                    </form>
                    <button type="submit">{"add to cart"}</button>

                </div>

                <div className="basketBall">
                    {/* <img src="" alt="basketBall" /> */}
                    <span>basketBall</span>
                    <span>$10.00</span>
                    <form>
                        <select value={count} onChange={handleCountChange}>
                                
                                {num.map((i,index)=>{
                                    return(<option key={index} value={i}>
                                        {i}
                                    </option>    
                                )})}
                                
                                
                        </select>
                    </form>
                    <button type="submit">{"add to cart"}</button>
                </div>
                
                <div className="tShirts">
                    {/* <img src="" alt="tShirts" /> */}
                    <span>tShirts</span>
                    <span>$10.00</span>
                    <form>
                        <select value={count} onChange={handleCountChange}>
                                
                                {num.map((i,index)=>{
                                    return(<option key={index} value={i}>
                                        {i}
                                    </option>    
                                )})}
                                
                                
                        </select>
                    </form>
                    <button type="submit">{"add to cart"}</button>
                </div>
            
            </div>
        
        </>
    )

}