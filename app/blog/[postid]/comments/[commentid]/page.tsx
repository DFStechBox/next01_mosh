import React from 'react'

interface Props {
  params: { id: number };
  commentid: string;
}

const page = ({params}: Props) => {
  return (
    <div>
      <h1>Comment: {params.commentid} for blog post { params.postid}</h1>
    </div>
  )
}

export default page
