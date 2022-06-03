import React from 'react'

const SignUp = () => {

    return (
        <div className="kayit_ol">
        <form >
            <label>Kullanıcı adı</label><br/>
            <input type="text"/> <br/>
            <label>Telefon</label><br/>
            <input type="text"/><br/>
            <label>Email</label><br/>
            <input type="text"/><br/>
            <label>Password</label><br/>
            <input type="text"/><br/>
            <button className='Kayit_btn'>kayıt ol</button><br/>
        </form>
        </div>       
        
    )
}

export default SignUp