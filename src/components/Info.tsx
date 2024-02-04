import React from 'react';
import {Button, Typography} from 'antd';
import {BASE_URL} from "../utils/config.ts";

interface InfoProps {
    address: string;
    privateKey: string;
    setAddress:React.Dispatch<React.SetStateAction<string>>;
    setPrivateKey:React.Dispatch<React.SetStateAction<string>>;
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


function Info(props:InfoProps){
    
    
    function setInfo(){
        const add =document.getElementById('address');

        if (add instanceof HTMLInputElement) {
            // Check if the element is an input element
            props.setAddress(add.value);
            add.value="";
        } else {
            console.error("Element with id 'address' not found or not an input element");
        }

        const key =document.getElementById('privatekey');

        if (key instanceof HTMLInputElement) {
            // Check if the element is an input element
            props.setPrivateKey(key.value);
            key.value="";
        } else {
            console.error("Element with id 'key' not found or not an input element");
        }
    }

    return(
        <div>
            <Typography.Title style={divstyle1} level={5}>Private Key (WIF)</Typography.Title>
            <form>
                <p style={{textAlign: 'center'}}>
                    <label htmlFor='address' style={{marginRight: '10px'}}>地址</label>
                    <input placeholder='請輸入錢包地址' id="address">
                    </input>
                </p>

                <p style={{textAlign: 'center'}}>
                    <label htmlFor='privatekey' style={{marginRight: '10px'}}>私鑰</label>
                    <input type="password" placeholder='請輸入私鑰' id="privatekey">
                    </input>
                </p>

                <p style={{textAlign: 'center'}}>
                    <Button style={{width: "5%"}} onClick={setInfo}>送出</Button>
                    <Button style={{width: "8%", marginLeft: "1%"}} onClick={async () => {
                        const address = prompt("請輸入錢包地址")
                        if (address === null) return
                        // GET http://localhost:8080/get/privatekey?address=myoCGvSYrn1jQQadv99ZZ2hhoREdAYPGHP
                        const res = await fetch(`${BASE_URL}get/privatekey?address=${address}`)
                        const json = await res.json()
                        console.log(json)
                        alert(json.result === "success" ? json.data : json.result)
                    }}>生成私鑰</Button>
                </p>
            </form>
            
            
            

        </div>





    );



}

export default Info
