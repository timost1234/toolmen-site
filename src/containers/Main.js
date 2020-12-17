import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full">
      <div className="container grid items-center mx-auto px-6">{children}</div>
    </main>
  )
}

export default Main
