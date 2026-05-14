
import { Link } from "react-router-dom"
function Home() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-10 py-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          CareWise AI
        </h1>

        <div className="flex gap-8 text-lg">

          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Doctors</a>
          <Link to="/login">Login</Link>

        </div>

      </nav>

      {/* Hero Section */}

      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-6xl font-bold leading-tight max-w-4xl">
Your health ,Smartr with AI

        </h1>

        <p className="text-slate-400 text-xl mt-8 max-w-2xl">

          Analyze symptoms, get preliminary
          health guidance, discover nearby
          hospitals and connect with the right specialists.

        </p>

        <button className="mt-10 bg-pink-500 hover:bg-pink-400 px-8 py-4 rounded-xl text-lg font-semibold transition">

          Get Started

        </button>

      </section>

    </div>

  )
}

export default Home