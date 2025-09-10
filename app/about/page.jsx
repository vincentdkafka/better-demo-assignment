import BackedBy from '@/_componentsToUse/BackedBy'
import ChangesThings from '@/_componentsToUse/ChangesThings'
import Timeline from '@/_componentsToUse/CompanyTimeline'
import Mission from '@/_componentsToUse/Mission'
import RelatedPosts from '@/_componentsToUse/RelatedPosts'

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