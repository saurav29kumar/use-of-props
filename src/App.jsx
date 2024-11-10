import { useState } from "react";
import Card from "./card";
function App(){
  const raw = [{name:"saurav",profession:"coder", image:"https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" , friends: false},
    {name:"Ashirbad",profession:"programer", image:"https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww", friends: false},
    {name:"Hementh",profession:"coder", image:"https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D", friends: false},
    {name:"Prafull",profession:"coder", image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D", friends: false},
    {name:"Prince",profession:"coder", image:"https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D", friends: false}
    
  ]
  const [data,setData] = useState(raw);
  const handleClick = (changingIndex)=>{
    setData((prev)=>{
      return prev.map((item,index)=>{
        if(index === changingIndex ) return {...item, friends: !item.friends}
        return item;
      })
    })
  }
  return(
    <div className="bg-zinc-800 h-screen w-screen flex items-center justify-center space-x-4">
      {data.map((item,index)=>(
        <Card key={index} index={index} handleClick={handleClick} values={item}/>
      ))}
      
    </div>
  )
}
export default App;