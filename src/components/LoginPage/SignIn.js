import React from 'react'

const SignIn = ({users}) => {

    const checkValid = (e) => {
        e.preventDefault()
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        let match = 0
       Object.entries(users).forEach(([key, value]) => {
           if (key === username && value[0] === password) {
               window.location = "./admin"
               match = 1
           }
       })
       if (match === 0) {
            document.getElementById("mesaj_hata_1").innerHTML = "şifre veya kullanıcı adı hatalı!"
       }
       setTimeout(function(){
        document.getElementById("mesaj_hata_1").innerHTML="";
        },1500);
    }

    return (
        <div className="giris_yap">
            <form >
            <label>kullanıcı adı</label><br/>
            <input type="text" id="username" /><br/>
            <label>password</label><br/>
            <input type="password" id="password" /><br/>
            <button onClick={checkValid} className='pick_button kayit_btn'>giriş yap</button><br/>
            <h4 id="mesaj_hata_1"></h4>

            </form>
        </div>
    )
}

export default SignIn