import React from 'react'

const SignIn = ({users}) => {

    const checkValid = (e) => {
        e.preventDefault()
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        let match = 0
       Object.entries(users).forEach(([key, value]) => {
           if (key === username && value === password) window.location = "./admin"
       })
       
    }

    return (
        <div className="giris_yap">
            <form >
            <label>kullanıcı adı</label><br/>
            <input type="text" id="username" /><br/>
            <label>password</label><br/>
            <input type="text" id="password" /><br/>
            <button onClick={checkValid} className='pick_button kayit_btn'>giriş yap</button><br/>
            </form>
        </div>
    )
}

export default SignIn