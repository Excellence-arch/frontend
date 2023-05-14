import React from 'react'

export const Button = ({btnstyles,title, onclick}) => {
  return (
    <>
        <button type="submit" onClick={onclick} className={btnstyles}>{title}</button>
    </>
  )
}
