import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { GoogleLogin } from "@react-oauth/google"
import back from "../assets/back.mp4"
import { Spin } from "antd"
export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const [emailmgs,setEmailmgs]=useState("")
  const [password,setPassword]=useState("")

  const navigate = useNavigate();

  const [loading,setloading]=useState(false)

  function log() {
      setEmailmgs("")
      setPassword("")

    localStorage.setItem("email", email)
    localStorage.setItem("pass", pass)
    
    if(email==""){
      setEmailmgs("Email is Requried !")
    }

    if(pass==""){
      setPassword("Password is Requried !")
    }

    if (email.trim() !==""  && pass.trim() !=="") {
      setloading(true) 
      setTimeout(()=>{
          navigate(`/home`)
      },3000);

    }

  }
  return (
    <>
      <div className="logbox">
        <video
        src={back}
        autoPlay
        muted
        loop
        playsInline
        className="video-btn"
        />
      

        <form className="log-form">
          <h1>Login Form</h1>
          <table className="tap">
            <tr>
              <td><label htmlFor="name" className="text-email" >Email Id:</label></td>
                
            

              <td><input type="email"
                id="name"
                className="email"
                value={email}
                onChange={(i) => setEmail(i.target.value)}

                placeholder="Enter your Email..." />
              
              {emailmgs&&<p className="error-mgs">{emailmgs}</p>} </td>
                
             
            </tr>

            <br />

            <tr>
              <td><label htmlFor="pass" className="text-pass">Password:</label></td>
              <td><input type="password"
                id="pass"
                className="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter your password.." />

              {password &&<p className="error-pass">{password}</p>} </td>

            </tr>



          </table>

          <a href="#forget password"
            className="forget"
          >Forget password</a>

          <button 
          type="button" 
          onClick={log} 
          className="login-btn"
          disabled={loading}
          >
            {loading?(<span className="spin">
            <Spin size="small" className="spiner" />
            loading...
            </span>) : "login"}
        </button>

          <h5 className="new-account">Another Option:<a href="#create new account" className="create" >Create new Account</a></h5>

         <div className="google-btn">
          <GoogleLogin
             theme="filled_black"
            text="signin_with"
            
            onSuccess={(res) => {
            
              alert("Login Success!")
              navigate(`/home`)
            }}
            onError={() =>
              console.log("login failed")
            }
          />
        </div>

        </form>
        
      </div>

    </>

  )

}




