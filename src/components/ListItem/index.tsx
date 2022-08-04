import React, { useState } from 'react'
import {Item} from '../../types/item'
type Props = {
    item: Item
}

const ListItem = ({item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);


  return (
    <div className='py-1'>
        <div className='flex gap-3 bg-slate-800 px-2 rounded-lg items-center'>
            <input 
                className='w-4 h-4' 
                type="checkbox" 
                checked={isChecked} 
                onChange={e => setIsChecked(e.target.checked)}/>
                {isChecked ? <label className='line-through'>{item.name}</label> : <label>{item.name}</label>}
        </div>
    </div>
    
  )
}

export default ListItem;
