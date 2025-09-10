import Findout from '@/_componentsToUse/Findout'
import Hero from '@/_componentsToUse/Hero'
import Qna from '@/_componentsToUse/Qna'
import Link from 'next/link'
import React from 'react'

const homepage = () => {
  return (
    <div>
        <Hero/>
        <Findout/>
        <Qna/>
    </div>

    
  )
}

export default homepage