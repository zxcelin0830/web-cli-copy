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

function Login(props:InfoProps){
    
    const [AID,setAID]= React.useState("")
    const [password,setPassword]= React.useState("")

    const call: React.MouseEventHandler<HTMLElement> = () =>{  

        const aid=document.getElementById('aid')
        if (aid instanceof HTMLInputElement) {
            // Check if the element is an input element
            setAID(aid.value);
            aid.value="";
        } else {
            console.error("Element with id 'aid' not found or not an input element");
        }
    
        const p=document.getElementById('password')
        if (p instanceof HTMLInputElement) {
            // Check if the element is an input element
            setPassword(p.value);
            p.value="";
        } else {
            console.error("Element with id 'password' not found or not an input element");
        }
    
        const contractArguments:string[]=['login',AID,password]
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
            <Typography.Title style={divstyle1} level={5}>用戶登入</Typography.Title>
            <form>
                
                <p style={{textAlign: 'center'}}>
                    <label htmlFor='aid' style={{marginRight: '10px'}}>AID</label>
                    <input placeholder='請輸入AID' id='aid'></input>
                </p>
                
                <p style={{textAlign: 'center'}}>
                    <label htmlFor='password' style={{marginRight: '10px'}}>密碼</label>
                    <input type='password' placeholder='請輸入密碼' id='password'></input>
                </p>
                <p style={divstyle2}><Button onClick={call}>登入</Button></p>
                
            </form>

        </div>

    );

}

export default Login
