import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      window.location.href="/"
    }, 3000)
  }, [])
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Going back to the <Link href="/">Homepage</Link> is 3 seconds...</p>
    </div>
  )
}

export default NotFound