import React from 'react'

const Button = (props) => {
  return (
    <div className='relative flex justify-center items-center h-28'>
        <button class="bg-white hover:bg-gray-100 text-gray-800 h-14 w-80 font-light-200 py-2 px-4 border border-gray-400 shadow tracking-wide">
            {props.heading}
        </button>
    </div>
  )
}

export default Button
