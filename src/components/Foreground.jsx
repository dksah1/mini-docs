import React,{useRef, useState} from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);

const data = [
    {desc:"this is the background color of the card that will be displayed",
    filesize:".9mb",
    close:true,
    tag:{isOpen:true,tagTitle:"Download Now", tagColor:"green"},
},
    {desc:"this is the background color of the card that will be displayed",
    filesize:".9mb",
    close:false,
    tag:{isOpen:true,tagTitle:"Download Now", tagColor:"blue"},
},
    {desc:"this is the background color of the card that will be displayed",
    filesize:".9mb",
    close:false,
    tag:{isOpen:false,tagTitle:"Download Now", tagColor:"green"},
},
]

  return (
    <div ref={ref} className="fixed top-0  left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
   {data.map((item,index)=>(
      <Card data={item} refrence={ref} /> 
   ))}
    </div>
    )
}

export default Foreground