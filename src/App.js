import { useState,useEffect } from "react";


function App() {

  const [act,setact]= useState(0);

  const [his,sethis]= useState(null);

  const [first,setfirst]= useState(0);

  const [op,setop]= useState(null);

  const [dec,setDec]= useState(false);

  const [neg,setNeg]= useState(false);

  const [ans,setAns]=useState(false);

  useEffect(()=>{})

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
      if(act.toString().length===1)
        setDec(false);
        
      if(!dec)
      {
        
        let s=act.toString()+'.';
        setact(s);
        setDec(true);
      }
    }
  }
  
  const handleOperator=(o)=>{

    if(his!==null)
    {
      let res=solve('func');
      console.log(res);
      sethis(null);
      setact(res);
      setfirst(res);
      setop(o);
      const update= res.toString()+o;
      setact(0);
      sethis(update);
      setDec(false);
      setNeg(false);
    }


    else
    {
      setfirst(act);
      setop(o);
      const update= his==null?act.toString()+o:his+act.toString();
      setact(0);
      sethis(update);
      setDec(false);
      setNeg(false);
    }

    
  }

  const del= ()=>{
    if(ans)
    {
      setact(0);
      setAns(false);
    }

    else
    {
      let res=act.toString();
      let len=res.length;
      if(len>0)
      {
        len=len-1;
        if(len!==0)
        {
          res=res.slice(0,len);
          res=parseFloat(res);
          setact(res);
        } 

        else
        setact(0);
      }
    }
  }

  const clear =()=>{
    setact(0);
    sethis(null);
    setfirst(0)
    setDec(false)
    setNeg(false)
    setAns(false)
  }

  const solve= (call)=>{
    
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

    }

    else if(op==='%')
    res=first%last;

    else
    res=act;

    if(call==='main')
    {
      setact(res);
    }

    else if(call==='func')
    {
      setact(res);
  
      setfirst(res);
  
  
      setAns(true);
      return res;
    }


    sethis(null);

    setop(null);


    setfirst(res);


    setAns(true);

  }



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
       <button onClick={handleDecimal}>.</button>
       <button onClick={()=>handleNumber(0)}>0</button>
       <button id="del" onClick={del}>⌫</button>
       <button className="orangebut" onClick={()=>solve('main')}>=</button>


     </div>
    </div>
  );
}

export default App;
