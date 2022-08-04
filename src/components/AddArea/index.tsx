import React, { useEffect, useState, KeyboardEvent } from 'react'

type Props = {
    onEnter: (taskName: string) => void
}

const AddArea = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('');
   
    const handleKeyUp = (e: KeyboardEvent) =>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }

    useEffect(()=>{

        const handler = setTimeout(()=>
            console.log(inputText)
        , 1000)
        return () => clearTimeout(handler)
    },[inputText])

  return (
    <div className='p-2 border border-slate-800 rounded-2xl' >
        <input 
            type="text" 
            className='w-full border-none bg-transparent outline-0 text-white text-lg flex-1'
            placeholder='Adicione uma tarefa'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            />

    </div>
  )
}

export default AddArea;