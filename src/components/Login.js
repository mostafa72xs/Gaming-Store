import React from "react";
import "./css/Login.css";
import { useForm } from 'react-hook-form';
import {faX} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2'
import {faInfinity} from "@fortawesome/free-solid-svg-icons";
import { useLogin } from "./Hooks/context-login";



function Login(props){


    const [logined ,setLogined] =useLogin()

    const { register, handleSubmit, formState: { errors } } =useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const aler = () =>{
        const num = Math.floor(Math.random() * 101);
        if(num >= 50){
            Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Ok',
        })
        }
        else{
            Swal.fire({
                title: 'success',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
        
    } 

    return(
        <div className={props.style}>
            <div className="formss">
                <div className="imahg">
                    <div>
                        <FontAwesomeIcon icon={faInfinity} className="logooo"  style={{color: "#fff",}} />
                        <h1>ARCEADE</h1>
                    </div>
                </div>
                <div className="for">
                <div className="home1"><button onClick={() => {setLogined(false)}}><FontAwesomeIcon icon={faX} /></button></div>
                    <div className="fo11">
                        <h1>Login</h1>
                        <p className="pppp">Don't have an account? Creat your account it takes<br/>less than a minute</p>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input className="input" type="text" placeholder="email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                            <input className="input" placeholder="Password" type="password" {...register} />
                            <div className="fo12" >
                                <div>
                                    <input type="checkbox" style={{color:"purple"}} placeholder="Remember me" /> <p className="np">Remeber me</p>
                                </div>
                                <button className="fp">Forget password?</button>
                            </div>
                            <button className="li" onClick={aler}>Login</button><br/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
