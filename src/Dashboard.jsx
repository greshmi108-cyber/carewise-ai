import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {

  const email = localStorage.getItem("email")
useEffect(() => {

  if(!email){

    navigate("/login")

  }

}, [])
  const navigate = useNavigate()

  function handleLogout(){

    localStorage.removeItem("email")

    navigate("/login")

  }

  return (

    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold">

        Welcome {email} 😭🔥

      </h1>

      <button
        onClick={handleLogout}
        className="mt-6 bg-pink-500 px-6 py-3 rounded-xl"
      >

        Logout

      </button>

    </div>

  )

}

export default Dashboard