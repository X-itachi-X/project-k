import Image from 'next/image'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {print()}
    </main>
  )
}

function print() {
  return (
    <main>
      This is print funtion
    </main>
  )
}