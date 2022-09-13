import { useNavigate } from 'react-router-dom';

export default function Home() {
    const setpage= useNavigate();

    const logout=()=>{
        localStorage.removeItem('getUserData');
        setpage("/")
    
      }
  return (
    <>
                                      
    <h1>Welcome to the page</h1>
      
      <button onClick={logout} style={{justifyContent:'center'}}>Log out</button>

    
    
    </>
    
    
  )
}
