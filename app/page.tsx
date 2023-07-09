import Image from 'next/image'
import React from 'react'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {print()}
    </main>
  )
}

function print() {
  const name = 'Aakriti';
  return (
    <main>
      {name}
    </main>
  )
}