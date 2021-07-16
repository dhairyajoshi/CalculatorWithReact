import { useState, useEffect } from "react";


function App() {

  const [act,setact]= useState(0);

  const [his,sethis]= useState(null);

  const [first,setfirst]= useState(0);

  const [op,setop]= useState(null);

  const [dec,setDec]= useState(false);

  const [neg,setNeg]= useState(false);

  const [ans,setAns]=useState(false);

  const handleNumber= (n)=>
  {

    if(ans)
    {
      setact(n);
      setAns(false);
    }


    else
    {
      if(dec)
      {
        let num=n.toString();
        let s=act+num;
        let final=parseFloat(s)
        setact(final);
      }

      else if(act<10E13)
      {
        if(neg)
        setact(10*act-n)

        else
        setact(10*act+n)
      }
    }
  }

  const handleNeg=()=>{
    
    setNeg(!neg);

    setact(-1*act);

  }

  const handleDecimal=()=>{
    if(ans)
    {
      setact(0);
      setAns(false);
    }

    else
    {
      if(!dec)
      {
        let s=act.toString()+'.';
        setact(s);
        setDec(true);
      }
    }
  }
  
  const handleOperator=(o)=>{
    if(act!=null)
    {
      if(dec)
      {
        console.log(act)
        let s=act;
        s=parseFloat(s);
        console.log(s);
        setact(s);
      }

      setfirst(act);
      setop(o);
      const update= his==null?act.toString()+o:his+act.toString();
      setact(0);
      sethis(update);
      setDec(false);
      setNeg(false);
    }
  }

  const clear =()=>{
    setact(0);
    sethis(null);
    setfirst(0)
  }

  const solve= ()=>{
    
    if(dec)
    setDec(false);

    let last=act;
    let res;

    if(op==='+')
    res=first+last;

    else if(op==='-')
    res=first-last;

    else if(op==='×')
    res=first*last;

    else if(op==='÷')
    {
      res=first/last;
      if(last===0)
      res='ERROR';

    }

    else if(op==='%')
    res=first%last;

    else
    res=act;


    console.log(first);

    sethis(null);

    if(op!==null && res!=='ERROR')
    res=res.toFixed(3)

    setact(res);

    setfirst(last);

    setop(null);

    setAns(true);

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
       <button className="opers" onClick={handleNeg}>+/-</button>
       <button className="opers" onClick={()=>handleOperator('%')}>%</button>
       <button className="orangebut" onClick={()=>handleOperator('÷')}>÷</button>
       <button onClick={()=>handleNumber(7)}>7</button>
       <button onClick={()=>handleNumber(8)}>8</button>
       <button onClick={()=>handleNumber(9)}>9</button>
       <button className="orangebut" onClick={()=>handleOperator('×')}>×</button>
       <button onClick={()=>handleNumber(4)}>4</button>
       <button onClick={()=>handleNumber(5)}>5</button>
       <button onClick={()=>handleNumber(6)}>6</button>
       <button className="orangebut" onClick={()=>handleOperator('-')}>-</button>
       <button onClick={()=>handleNumber(1)}>1</button>
       <button onClick={()=>handleNumber(2)}>2</button>
       <button onClick={()=>handleNumber(3)}>3</button>
       <button className="orangebut" onClick={()=>handleOperator('+')}>+</button>
       <button id="zero" onClick={()=>handleNumber(0)}>0</button>
       <button onClick={handleDecimal}>.</button>
       <button className="orangebut" onClick={solve}>=</button>


     </div>
    </div>
  );
}

export default App;
