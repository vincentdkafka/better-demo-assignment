import BackedBy from '@/_componentsToUse/BackedBy'
import ChangesThings from '@/_componentsToUse/changesThings'
import Timeline from '@/_componentsToUse/companyTimeline'
import Mission from '@/_componentsToUse/mission'
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