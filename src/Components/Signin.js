import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
  const history= useNavigate();
  const [inpval, setInpval] = useState({
    username: "",
    Password: "",
    
})

// const [data,setData] = useState([]);
console.log(inpval);

const getdata=(e)=>{
    const { value, name } = e.target;
    // console.log(value,name);


    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
}

const addData =(e)=>{
    e.preventDefault();

    const getuserArr = localStorage.getItem("usertube");
    console.log(getuserArr);

    const{username,Password}= inpval;
    
    if(username === ""){
        alert("username field is empty")
    }else if(Password === ""){
        alert("password field is empty")
    }else if(Password.length < 3){
        alert("password length should be less than 4 characters")
    }else{
       
      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.username === username && el.Password === Password
                });
                if (userlogin.length === 0) {
                  alert("invalid details")
              } else {
                  console.log("user login succesfulyy");

                  localStorage.setItem("user_login", JSON.stringify(userlogin))

                  history("/Home")
              }
      }
    }
  }
  return (
    <>
    <div className="container" style={{background:"white"}} >
        <section className='rock'>
          <div className="only_data">
            <h1>Create Account</h1>
            <p>Dont have account,register here?<span><NavLink to={"/Signup"}>Sign up</NavLink></span></p>
            <Form>
      <Form.Group className="mb-4 col-lg-5" controlId="formBasicEmail">
 
        <Form.Control type="username" name='username' autoComplete='username' onChange={getdata} placeholder="username" />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4 col-lg-5" controlId="formBasicPassword">
       
        <Form.Control type="password" name='Password' onChange={getdata} placeholder="Password" autoComplete='new-password' />
        </Form.Group>
        
        
      <button variant="primary" className="mb-3 col-lg-5" onClick={addData} style={{ background: "rgb(52, 235, 189)" }} type="submit">
        Sign-in
      </button>
      </Form>
            </div>  
        </section>
    </div>
    </>
  )
}
