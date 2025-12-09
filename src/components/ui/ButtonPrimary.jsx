import React from 'react'

function ButtonPrimary(
    {children},
    className = "",
    ...props
) {
  return (
    <div>
        <button className={`${className} btn btn-primary`}>
            {children}
        </button>
    </div>
  )
}

export default ButtonPrimary