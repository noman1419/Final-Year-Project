<template>
  <div class="home">
    <div class="wizard">
        <div class="left noMobile">
            <div class="wizard-container">
                <div class="logo">
                    <img src="../assets/DigitalFlip.png" alt="">
                </div>
                <p class="">Discover Amazing Reputation with great build tools</p>
            </div>
        </div>
        <div class="right">
            <div class="wizard-container">
                <div class="logo webOnly" style="margin-bottom: 20px;">
                    <img src="../assets/DigitalFlip.png" alt="">
                </div>
                <h2 class="heading">Login</h2>
                <p class="description">Enter your details to login your account</p>
                <div class="step">
                    <form v-on:submit="signin" class="signup-from">
                        <p class="error" v-if="error">Invalid Email & Password</p>
                        <input type="text" v-model="userInfo.email" class="input-field" placeholder="email">
                        <input type="password" v-model="userInfo.password" class="input-field" placeholder="password">
                        <div class="btn-conatiner">
                            <button id="signup-btn" type="submit">Login</button>
                        </div>
                        <router-link to="signup" class="signin_route" >Don't have an account? <span class="color-blue"> Signup</span></router-link>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Home",
    components: {
    },
    data() {
        return {
            userInfo: {
                type: 'Admin'
            },
            loading: false,
            error: false
        };
    },
    methods: {
        async signin(e){
            e.preventDefault()
            var user = {}
            // console.log(this.userInfo, 'userInfo')
            document.getElementById("signup-btn").disabled = true
            document.getElementById('signup-btn').innerHTML = 'Login...'
            this.loading = true
            this.error = false
            try {
                const userRef = this.$data.query(this.$data.collection(this.$data.db, "user"),this.$data.where("email", "==", this.userInfo.email),this.$data.where( "password", "==", this.userInfo.password))
                // console.log(userRef, 'userRef')
                const decRef = await this.$data.getDocs(userRef)
                .then((res)=>{
                    var user = {}
                    // console.log(res, 'res')
                    if(res && res.docs && res.docs.length != 0){
                        res.docs.forEach((doc) =>{
                            // console.log(doc.id, " => ", doc.data());
                            // console.log(doc.id, 'doc')
                            user = doc.data()
                            user.id = doc.id
                        })
                        this.error = false
                        this.userInfo = user
                        localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
                        this.$router.push({path:'/dashboard'});
                    }else{
                        this.error = true
                        document.getElementById("signup-btn").disabled = false
                        document.getElementById('signup-btn').innerHTML = 'Login'
                    }
                })
                  
            }catch(e){
                console.error("Error adding document: ", e)
            }
        }
    }
  
};
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p{
    margin: 0;
}
.wizard{
    height: 100vh;
    display: flex;
}
.wizard .right{
    width: 60%;
}
.wizard .left{
    width: 40%;
    background: #2d3748;
    color: #fbfbfe;
}
.wizard .left .wizard-container{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.logo{
    text-align: center;
}
.logo img{
    width: 70%;
}
.wizard .left .wizard-container p{
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
}
.wizard-container{
    height: calc(100vh - 180px);
    width: 65%;
    margin: 90px auto;
}
.wizard-container .heading{
    /* text-align: center; */
    font-size: 34px;
    line-height: 44px;
}
.wizard-container .description{
    /* text-align: center; */
    font-size: 18px;
    line-height: 28px;
}
.signup-from{
    display: flex;
    flex-direction: column;
    margin-top: 80px;
}
.signup-from .input-field{
    padding: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    background: #eef2f7;
    box-shadow: 0 1px 2px 1px #2d374838;
}
.signup-from .btn-conatiner{
    display: flex;
    justify-content: space-between;
}
.signup-from button{
    padding: 20px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 1px 2px 1px #2d374838;
    background: #2d3748;
    color: #fbfbf9;
    min-width: 135px;
}
select:focus{
    outline: none;
}
.error{
    color: #d20404;
    text-align: center;
    margin-bottom: 10px;
    font-size: 14px;
}
.signin_route{
    margin-top: 10px;
}
.signin_route .color-blue{
    color: #0af;
}
@media screen and (max-width: 768px){
    .wizard{
        flex-direction: column;
    }
    .wizard .right{
        width: 100%;
    }
    .wizard-container .heading{
        font-size: 30px;
    }
    .wizard-container .description{
        font-size: 14px;
    }
    .wizard-container{
        height: calc(100vh - 70px);
        width: calc(100% - 60px);
        margin: 35px auto;
        overflow: scroll;
    }
    .signup-from{
        margin-top: 15px;
    }
    .signup-from .input-field{
        padding: 15px;
        margin-bottom: 15px;
    }
    .signup-from button{
        padding: 15px;
    }
}
</style>
