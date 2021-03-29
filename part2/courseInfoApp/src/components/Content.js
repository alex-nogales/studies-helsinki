import React from 'react'

import Part from './Part'

const Content = ({parts}) => {
    return parts.map((part, index) => <Part key={index} parts={part} />)
  }

export default Content