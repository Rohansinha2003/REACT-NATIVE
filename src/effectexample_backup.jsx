import React,{useEffect} from 'react';

const Effectexample = () => {
  
    useEffect(() => {
        const[count, setCount] = useState(0);
        console.log("Effect-called");
    }, []);
          
    return (
        <div>
            <article>Count :{count}</article>
            <button onclick={()=>setCount((prev)=>prev+1)}>Increment</button>
        </div>
    )
  
};

export default Effectexample;