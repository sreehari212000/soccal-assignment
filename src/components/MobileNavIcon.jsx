import React from 'react'

const MobileNavIcon = ({Icon, title}) => {
  return (
    <div className='flex flex-col items-center'>
        <Icon size={22}/>
        <p>{title}</p>
    </div>
  )
}

export default MobileNavIcon