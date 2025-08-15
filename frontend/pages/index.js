
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Survey Website</title>
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <nav className="flex justify-between items-center">
          <Link href="/"><a className="text-2xl font-bold">SurveyHub</a></Link>
          <Link href="/login"><a className="text-white">Login</a></Link>
        </nav>
      </header>

      <main className="text-center my-8">
        <h1 className="text-4xl font-semibold mb-6">Earn Money by Answering Surveys</h1>
        <p className="mb-6">Sign up and start earning money with surveys!</p>
        <Link href="/earn"><a className="bg-yellow-500 p-3 rounded text-black">Start Survey</a></Link>
      </main>
    </div>
  )
}
