import React from 'react'

const SignIn = () => {

    return (
        <div className="giris_yap">
            <form >
            <label>email</label><br/>
            <input type="text" /><br/>
            <label>password</label><br/>
            <input type="text"/><br/>
            <button className='giris_btn'>giriş yap</button><br/>
            </form>
        </div>
    )
}

export default SignIn