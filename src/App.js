import { useState, useEffect } from "react";


function App() {

  const [act,setact]= useState(null);

  const [his,sethis]= useState(null);

  const [first,setfirst]= useState(0);

  const [second,setsecond]= useState(0);

  const [op,setop]= useState(null);

  
  const handleOperator=(o)=>{
    if(act!=null)
    {
    setfirst(act);
    setop(o);
    const update= his==null?act.toString()+o:his+act.toString();
    setact(null);
    sethis(update);
    }
  }

  const clear =()=>{
    setact(null);
    sethis(null);
  }

  const solve= ()=>{
    let last=act;
    let res;

    if(op==='+')
    res=first+last;

    if(op==='-')
    res=first-last;

    if(op==='×')
    res=first*last;

    if(op==='÷')
    res=first/last;

    if(op==='%')
    res=first%last;

    console.log(first);
    sethis(null);
    setact(res);



  }

  useEffect(()=>{},[]);

  return (
    <div className="App">
     <div className="view">

      <div className="hist">

        <h3>{his}</h3>

      </div>

      <div className="active">

        <h3>{act}</h3>

      </div>
     </div>

     <div className="buttons">

       <button className="opers" onClick={clear}>AC</button>
       <button className="opers" onClick={()=>setact(-1*act)}>+/-</button>
       <button className="opers" onClick={()=>handleOperator('%')}>%</button>
       <button className="orangebut" onClick={()=>handleOperator('÷')}>÷</button>
       <button onClick={()=>setact(act*10+7)}>7</button>
       <button onClick={()=>setact(act*10+8)}>8</button>
       <button onClick={()=>setact(act*10+9)}>9</button>
       <button className="orangebut" onClick={()=>handleOperator('×')}>×</button>
       <button onClick={()=>setact(act*10+4)}>4</button>
       <button onClick={()=>setact(act*10+5)}>5</button>
       <button onClick={()=>setact(act*10+6)}>6</button>
       <button className="orangebut" onClick={()=>handleOperator('-')}>-</button>
       <button onClick={()=>setact(act*10+1)}>1</button>
       <button onClick={()=>setact(act*10+2)}>2</button>
       <button onClick={()=>setact(act*10+3)}>3</button>
       <button className="orangebut" onClick={()=>handleOperator('+')}>+</button>
       <button id="zero" onClick={()=>setact(act*10+0)}>0</button>
       <button onClick={()=>setact(act*0.1)}>.</button>
       <button className="orangebut" onClick={solve}>=</button>


     </div>
    </div>
  );
}

export default App;
