import BackedBy from '@/app/_componentsToUse/BackedBy'
import ChangesThings from '@/app/_componentsToUse/ChangesThings'
import Timeline from '@/app/_componentsToUse/CompanyTimeline'
import Mission from '@/app/_componentsToUse/Mission'
import RelatedPosts from '@/app/_componentsToUse/RelatedPosts'

import React from 'react'

function about() {
  return (
    <div>
      <Mission/>
      <ChangesThings/>
      <BackedBy/>
      <Timeline/>
      <RelatedPosts/>
      
    </div>
  )
}

export default about