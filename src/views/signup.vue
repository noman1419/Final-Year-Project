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
                <div class="logo webOnly" style="margin-bottom: 10px;">
                    <img src="../assets/DigitalFlip.png" alt="">
                </div>
                <h2 class="heading">Signup</h2>
                <p class="description">Enter your details to create your account</p>
                <div class="step">
                    <form v-on:submit="signup" class="signup-from">
                        <p class="error" v-if="error">Email already exist</p>
                        <input type="text" v-model="userInfo.name" class="input-field" placeholder="name">
                        <input type="email" v-model="userInfo.email" class="input-field" placeholder="email">
                        <select v-model="userInfo.type" class="input-field">
                            <option value="Admin">Admin</option>
                            <option value="Team Lead">Team Lead</option>
                            <option value="Employee">Employee</option>
                            <option class="Client">Client</option>
                        </select>
                        <input type="text" v-model="userInfo.company" class="input-field" placeholder="Department or team">
                        <input type="password" v-model="userInfo.password" class="input-field" placeholder="password">
                        <div class="btn-conatiner">
                            <!-- <div></div> -->
                            <button id="signup-btn" type="submit">Signup</button>
                        </div>
                        <router-link to="signin" class="signin_route" >Already have an account? <span class="color-blue"> Login</span></router-link>
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
        async signup(e){
            e.preventDefault()
            // console.log(this.userInfo, 'userInfo')
            document.getElementById("signup-btn").disabled = true
            document.getElementById('signup-btn').innerHTML = 'Creating an account...'
            this.loading = true
            try {
                const userRef = this.$data.query(this.$data.collection(this.$data.db, "user"),this.$data.where("email", "==", this.userInfo.email))
                // console.log(userRef, 'citiesRef')
                const decRef = await this.$data.getDocs(userRef)
                .then((res)=>{
                    console.log(res, res.docs.length, 'res')
                    if(res && res.docs && res.docs.length != 0){
                        res.docs.forEach((doc) =>{
                            // console.log(doc.id, " => ", doc.data());
                            this.error = true
                            document.getElementById("signup-btn").disabled = false
                            document.getElementById('signup-btn').innerHTML = 'Signup'
                        })
                    } else{
                        // console.log('no data found!')
                        this.error = false
                        this.$data.addDoc(this.$data.collection(this.$data.db, "user"),
                            this.userInfo
                        ).then(res=>{
                            this.loading = false
                            this.userInfo.id = res.id
                            localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
                            // this.closeSignup()
                            this.$router.push({path:'/dashboard'});
                        });
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
    margin-top: 60px;
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
