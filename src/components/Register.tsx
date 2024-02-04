import React from 'react';
import {Button , Typography} from 'antd';
import {callContract, getContractMessage} from "../utils/txApiWrapper.ts";

interface InfoProps {
    address: string;
    privateKey: string;
    contractAddress: string;
}

const divstyle1={
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: "5%",
    fontFamily: "monospace",
    fontSize: '30px',
    fontWeight: 'bold'
}

const divstyle2={
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    fontFamily: "monospace",
}



function Register(props:InfoProps){

    const [name,setName]= React.useState("")
    const [password,setPassword]= React.useState("")

    const call: React.MouseEventHandler<HTMLElement> = () =>{  

        const n=document.getElementById('name')
        if (n instanceof HTMLInputElement) {
            // Check if the element is an input element
            setName(n.value);
            n.value="";
        } else {
            console.error("Element with id 'name' not found or not an input element");
        }
    
        const p=document.getElementById('password')
        if (p instanceof HTMLInputElement) {
            // Check if the element is an input element
            setPassword(p.value);
            p.value="";
        } else {
            console.error("Element with id 'password' not found or not an input element");
        }
    
        const contractArguments:string[]=['registerNewUser',name,password]
        async () => {
           
                const result = await callContract(0.001, props.contractAddress, props.privateKey, props.address, "", contractArguments)
                alert(result)
        
                const state= await getContractMessage(props.contractAddress, contractArguments)
                alert(state)
           
        }
        alert('Success')
    }

    return(
        <div>
            <Typography.Title style={divstyle1} level={5}>註冊</Typography.Title>
            <form>
                
                <p style={{textAlign: 'center'}}>
                    <label htmlFor='aid' style={{marginRight: '10px'}}>姓名</label>
                    <input placeholder='請輸入姓名' id='name'></input>
                </p>
                
                <p style={{textAlign: 'center'}}>
                    <label htmlFor='password' style={{marginRight: '10px'}}>密碼</label>
                    <input type='password' placeholder='請輸入密碼' id='password'></input>
                </p>
                <p style={divstyle2}><Button onClick={call}>註冊</Button></p>
                
            </form>

        </div>


    );



}

export default Register
