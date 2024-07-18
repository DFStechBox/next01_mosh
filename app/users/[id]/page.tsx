import React from 'react'

interface Props {
  params: {id: number}
}

const userDetailPage = ({params: {id}}: Props) => {
  return (
    <div>
      UserDetailPage {id}
    </div>
  )
}

export default userDetailPage
