import React, { Fragment, useState } from 'react'
import { useLoginMutation } from '../store/apis/userApis'
// import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const [masterKey,setMasterKey] = useState('VnovYssOIIVljQWu')
    
    const [login,{ isLoading, error }] = useLoginMutation()

    const handleLogin = async()=>{
        try{
            const res = await login({masterKey}).unwrap()
            console.log(res)
            navigate('/dashboard')
        }
        catch(err){
            console.log(err)
        }
    }

    return (
            <div style={styles.container}>
                {
                    isLoading 
                    ? 
                    <>Please Wait.....</>
                    :
                    <div style={styles.formContainer}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Masterkey:</label>
                            <input type="text" onChange={(e)=>{setMasterKey(e.target.value)}} value={masterKey} style={styles.input} />
                        </div>
                        <button onClick={handleLogin} style={styles.button}>Submit</button>
                    </div>
                }
            </div>
    );
}

export default Login;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    padding: '2rem',
    border: '2px solid #ccc',
    borderRadius: '5px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    background: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
