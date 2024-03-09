 
import React, { useEffect, useState } from 'react'
 

const Purple = () => {
    const [color, setColor] = useState(false);
    
    
    
    return (
    <div className='lightButton'>
          <button type="button" className="purpleExtra" onClick={color == false ? () => setColor(true) : () => setColor(false)} >
					{color === false ? "TRY THIS BUTTON" : <div className='purpleLight'> </div>}
          </button>
    </div>
  )
}

export default Purple