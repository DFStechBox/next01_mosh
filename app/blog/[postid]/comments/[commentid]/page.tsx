import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>Comment: {params.commentid} for blog post { params.postid}</h1>
    </div>
  )
}

export default page
