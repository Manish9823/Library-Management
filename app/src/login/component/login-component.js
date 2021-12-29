import React, { useState } from "react";

export function LoginComponent({role,callback}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <div clsssName="container">
                <div className="card">
                    <div className="card-header h3">
                        {role} Login Page
                    </div>
                    <div className="card-body h6">
                        <div className="m-3">
                            <label>Username</label>
                            <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="m-3 h6">
                            <label>Password</label>
                            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="card-footer">
                            <button className="btn btn-success" onClick={()=>callback(username,password)}>Login</button>
                    </div>
                </div>
            </div>
        </>

    );
}