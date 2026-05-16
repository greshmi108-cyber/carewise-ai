import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setshowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
const navigate = useNavigate()
  function clearError(){

    setError("")

  }

  async function handleLogin() {

    if(email === "" || password === ""){

      setError("Please fill all the fields")

      return

    }

    setLoading(true)

    const response = await axios.post("http://localhost:5000/login", {

      email,
      password

    })

    console.log(response.data)

    if(response.data === "Invalid Credentials 😭"){

      setTimeout(() => {

        alert("Invalid Credentials")

        setLoading(false)

      }, 2000)

      return

    }

    setTimeout(() => {
localStorage.setItem("email", email)
     navigate("/dashboard")

      setLoading(false)

    }, 2000)

  }

  async function handleSignup(){

    if(email === "" || password === ""){

      setError("Please fill all the fields")

      return

    }

    const response = await axios.post("http://localhost:5000/signup", {

      email,
      password

    })

    alert(response.data)

  }

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-2xl w-[400px] border border-slate-700 shadow-2xl">

        <div className="flex justify-center mb-6">

          <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold">

            +

          </div>

        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">

          Login

        </h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {

            setEmail(e.target.value)

            clearError()

          }}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4 outline-none focus:ring-2 focus:ring-pink-500"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => {

            setPassword(e.target.value)

            clearError()

          }}
          className="w-full p-4 rounded-xl bg-slate-800 mb-6 outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          onClick={() => setshowPassword(!showPassword)}
          className="text-pink-400 mb-6"
        >

          {showPassword ? "Hide Password" : "Show Password"}

        </button>

        {
          error && (

            <p className="text-red-500 mb-4 text-sm">

              {error}

            </p>

          )
        }

        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 py-4 rounded-xl font-semibold"
        >

          {loading ? "Loading..." : "Login"}

        </button>

        <p className="text-center mt-6 text-slate-400">

          Don't have an account?

        </p>

        <button
          onClick={handleSignup}
          className="w-full mt-4 border border-pink-500 py-4 rounded-xl font-semibold text-pink-400 hover:bg-pink-500 hover:text-white transition"
        >

          Create Account

        </button>

      </div>

    </div>

  )

}

export default Login