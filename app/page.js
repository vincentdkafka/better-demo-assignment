import Findout from '@/_componentsToUse/findout'
import Hero from '@/_componentsToUse/Hero'
import Qna from '@/_componentsToUse/qna'
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