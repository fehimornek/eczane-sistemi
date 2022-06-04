import React from 'react'

const SignUp = ({users, setUsers}) => {


    const checkValidation = (e) => {
        e.preventDefault()
        let username = document.getElementById("usernameSignup").value
        let password = document.getElementById("passwordSignup").value
        let telephone = document.getElementById("telephoneSignup").value
        let email = document.getElementById("emailSignup").value
        let error = 0

        if (username === "" || password === "" || telephone === "" || email === "") {
            document.getElementById("mesaj_hata_2").innerHTML = "Lütfen tüm alanları doldurun!"
            error = 1
        }

        else {
            Object.entries(users).forEach(([key, value]) => {
                if (key === username) {
                    document.getElementById("mesaj_hata_2").innerHTML = "Seçilmemiş bir kullanıcı adı seçiniz!"
                    error = 1
                }
                if (value[2] === email) {
                    document.getElementById("mesaj_hata_2").innerHTML = "Bu email zaten kullanımda!"
                    error = 1
                }
            })

        }

        if (error === 0) {
            let copiedUsers = users
            copiedUsers[username] = [password, telephone, email]
            setUsers(copiedUsers)
            document.getElementById("mesaj_hata_2").innerHTML = "Kayıt oluşturuldu!"
            document.getElementById("usernameSignup").value = ""
            document.getElementById("passwordSignup").value = ""
            document.getElementById("telephoneSignup").value = ""
            document.getElementById("emailSignup").value = ""
            console.log(users)
        }


        setTimeout(function(){
            document.getElementById("mesaj_hata_2").innerHTML="";
            },1500);
        
    }

    return (
        <div className="kayit_ol">
        <form >
            <label>Kullanıcı adı</label><br/>
            <input type="text" id="usernameSignup" /> <br/>
            <label>Password</label><br/>
            <input type="password" id="passwordSignup"/><br/>

            <label>Telefon</label><br/>
            <input type="text" id="telephoneSignup" /><br/>
            <label>Email</label><br/>
            <input type="text" id="emailSignup"/><br/>
            <button onClick={checkValidation} className='pick_button kayit_btn'>kayıt ol</button><br/>
            <h4 id="mesaj_hata_2"></h4>
        </form>
        </div>       
        
    )
}

export default SignUp