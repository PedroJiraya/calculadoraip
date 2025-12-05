import React, { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'>


export const Label = ({...props}:LabelProps) => {
  return (
    <label className='flex flex-col items-start' {...props}/>
  )
}

