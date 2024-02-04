import React ,{ useState } from 'react';
import {Menu} from 'antd';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import Info from './components/Info.tsx';
import { Header } from 'antd/es/layout/layout';


const App: React.FC = () => {
    
    const [page, setPage] = React.useState("wallet")
    const [address,setAddress] = useState("");
    const [privateKey,setPrivateKey]=useState("");
    const contractAddress="e01b5a4e5a0e5cafe3c1732c8b615ddc9fede51f6bc126beda8ef719cd504c19" //aid01

    let pageContent = <div>404</div>
    switch (page) {
        case "wallet":
            pageContent = <Info address={address} setAddress={setAddress} privateKey={privateKey} setPrivateKey={setPrivateKey}/>
            break;

        case "login":
            pageContent = <Login address={address} privateKey={privateKey} contractAddress={contractAddress}/>
            break;

        case "register":
            pageContent = <Register address={address} privateKey={privateKey} contractAddress={contractAddress}/>
            break;

    }

    return (
        <div>
        <style>
        {`
          body {
            background-color: #f0f0f0;
           
          }
        `}
        </style>

        <Header> 
            <Menu theme="dark" mode="horizontal" selectedKeys={[page]} items={[
                    {
                        key: "title",
                        label: "AID01",
                        style: { color: 'white', fontWeight: 'bold'}
                    }, 
                    
                    {
                        key: "wallet",
                        label: "錢包",
                        onClick: () => {
                            setPage("wallet")
                        }
                    }, 
                    
                    
                    {
                        key: "login",
                        label: "登入",
                        onClick: () => {
                            setPage("login")
                        }
                    }, 
                    
                    {
                        key: "register",
                        label: "註冊",
                        onClick: () => {
                            setPage("register")
                        }
                    }

                ]}/>
                {pageContent}
        </Header>
        </div>
    
    );
};
export default App;


