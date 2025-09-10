import Findout from '@/app/_componentsToUse/Findout'
import Hero from '@/app/_componentsToUse/Hero'
import Qna from '@/app/_componentsToUse/Qna'
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