<template>
    <div class="main_login" id="signin_popup">
        <div class="login">
            <div class="cls" @click="closeSignin">X</div>
            <div class="login_h3">
                <h3>Log In</h3>
            </div>
            <!-- <div class="login_button">
                <button>Login with Google</button>
            </div> -->
            <div class="login_text">
                <h4>Login with your Digital Flip account</h4>
            </div>
            <form v-on:submit="signin" class="login_form">
                <div class="field">
                    <input type="email" v-model="userInfo.name" placeholder="Email Address">
                    <!-- <label for="login_email.com">Email</label> -->
                </div>
                <div class="field">
                    <input type="password" v-model="userInfo.password" placeholder="Password">
                    <!-- <label for="login_password">password</label> -->
                </div>
                <div class="forgot_password">
                    <a href="#Forgot_Password">Forgot password?</a>
                </div>
                <div class="login_access">
                    <button type="submit" id="login_access_btn"><span id="login_access_text">Login</span></button>
                </div>
                <div class="signup_access">
                    <a @click="openSignup">Don't have an accout? <span class="color-blue"> Sign Up</span></a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
// import firebase from '../firebase'
export default {
    data(){
        return {
            data: 'hello',
            userInfo: {}
        }
    },
    methods:{
        openSignup(){
            document.getElementById('signin_popup').classList.remove("show")
            document.getElementById('signup_popup').classList.add("show")
            // console.log(this.$data.db, 'db')
        },
        closeSignin(){
            var i = 0
            // console.log('hello', this.data, i)
            document.getElementById('signin_popup').classList.remove("show")
        },
        async signin(e){
            e.preventDefault()
            // console.log(this.userInfo, 'userInfo')
            document.getElementById("login_access_btn").disabled = true
            document.getElementById('login_access_text').innerHTML = 'Login...'
            this.loading = true
            try {
                const decRef = await this.$data.getDocs(this.$data.collection(this.$data.db, "user"))
                .then((res)=>{
                    let data = []
                    var count = 0
                    res.docs.forEach((doc) =>{
                        data.push({...doc.data(), id: doc.is})
                    })
                    // console.log(data, 'res data')
                    for(var i in data){
                        // console.log(data[i].email, this.userInfo.email, 'data[i]')
                        if(data[i].email == this.userInfo.email){
                            count++
                            // console.log(count, 'for if')
                            this.email_error = true
                            document.getElementById("login_access_btn").disabled = false
                            document.getElementById('login_access_text').innerHTML = 'Create'
                        }
                    }
                    if(count != 0){
                        // console.log('for else')
                        this.email_error = false
                        this.$data.addDoc(this.$data.collection(this.$data.db, "user"), {
                            name: this.userInfo.name,
                            email: this.userInfo.email,
                            password: this.userInfo.password
                        }).then(res=>{
                            this.loading = false
                            this.userInfo.id = res.id
                        });
                        localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
                        this.closeSignup()
                        this.$router.push({path:'/dashboard'});
                    }
                })     
            }catch(e){
                console.error("Error adding document: ", e)
            }
            // e.preventDefault()
            // console.log(this.$data.db, 'db')
            // try {
            //     const decRef = await this.$data.addDoc(this.$data.collection(this.$data.db, "user"), {
            //         name: this.userInfo.name,
            //         email: this.userInfo.email,
            //         password: this.userInfo.password
            //     });
            //     this.loading = false
            //     this.user.id = decRef.id
            //     localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
            //     this.$router.push({path:'/app/dashboard'});
            // }catch(e){
            //     console.error("Error adding document: ", e)
            // }
        }
    }
}
</script>

<style scoped>
.signup_link_top a
{
    margin-left: 90%;
    color: #00AAFF;
    padding: 10px;
}
.main_login
{
    background: #0000004f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    display: none;
}
.cls{
    position: absolute;
    top: 11px;
    right: 11px;
    width: 28px;
    height: 28px;
    box-shadow: 0 1px 2px 0 #000;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
}
.cls:hover{
    box-shadow: 0 0px 2px 0 #000;
}
.main_login .login{
    position: relative;
    background: #fff;
    width: 300px;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 0 1px 0px #0000005e;
}
.login h3
{
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    width: 100%;
}
.login_button button
{
    padding: 20px 89px;
    font-weight: 600;
    border-radius: 70px;
    border: none;
    background-color: white;
    box-shadow: 0px 2px 4px 0px #b4b4b4;
    color: #00AAFF;
    cursor: pointer;
}
.login_button button:hover
{
    box-shadow: 0px 1px 2px 0px #b4b4b4;
    transition: 0.3s;
}
.login_text p
{
    margin-left: 90px;
    color: #8d8d8d;
}
.login_text h4
{
    color: rgb(179, 179, 179);
    text-align: center;
    width: 100%;
}
.field
{
    position: relative;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #7f7f7f;
    margin-bottom: 10px;
}
.field input
{
    border: none;
    padding: 5px;
    font-size: 16px;
    width: calc(100% - 20px);
}
.password_field
{
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #7f7f7f;
}
.password_field label
{
    position: absolute;
    margin-left: -150px;
}
.password_field input
{
    border: none;
    margin-top: 10px;
    padding: 5px;
}
.forgot_password a
{
    text-decoration: none;
    color: #00AAFF;
    font-size: 14px;
    float: right;
}
.login_access button
{
    padding: 20px 128px;
    border: none;
    margin-top: 20px;
    background-color: #00AAFF;
    box-shadow: 0px 0px 3px 0px #3d474d;;
    border-radius: 98px;
    cursor: pointer;
    margin-bottom: 5px;
    color: white;
    font-weight: 700;
    font-size: 15px;
}
.login_access button:hover
{
    box-shadow: 0px 1px 2px 0 #3D474D;
    transition: 0.3s;
}
.signup_access button
{
    padding: 20px 120px;
    border: none;
    margin-top: 5px;
    background-color: #00AAFF;
    box-shadow: 0px 0px 3px 0px #3d474d;;
    border-radius: 98px;
    cursor: pointer;
    margin-bottom: 5px;
    color: white;
    font-weight: 700;
    font-size: 15px;
}
.signup_access button:hover
{
    box-shadow: 0px 1px 2px 0 #3D474D;
    transition: 0.3s;
}
.signup_access{
    text-align: center;
    font-size: 14px;
    cursor: pointer;
}
.signup_access .color-blue{
    color: #0af;
}
</style>