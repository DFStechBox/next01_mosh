import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex mt-5 mb-5 p-5 bg-slate-200'>
      <Link href="/" className='mr-5'>Dfstech.com</Link>
      <Link href='/users' className='mr-5'>Users</Link>
      <Link href='/users' className='mr-5'>About</Link>
    </div>
  )
}

export default NavBar