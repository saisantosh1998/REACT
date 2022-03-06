import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    useEffect(()=>{
        console.log('indhulo unna');
        document.title=`You clicked ${count} times`
    },[count])//useEffect will render always for any event change or update to make only get execute when count changes we use second parameter;
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>click {count} times</button>
    </div>
  )
}

export default HookCounterOne