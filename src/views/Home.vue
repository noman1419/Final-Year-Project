<template>
    <div class="home">
        <headerr/>
        <!-- <div class="topnav">
            <div class="nav">
            <router-link to="/" class="active" href="#home">Home</router-link>
            <a href="">Features</a>
            <router-link to="/about">About</router-link>
            <a href="#contact">Contact</a>
            <router-link to="/signin" v-if="!userInfo.id">Signin</router-link>
            <router-link to="/app/dashboard" v-if="userInfo.id">Profile</router-link>
            </div>
        </div> -->
      <div class="container home">
          <div class="content">
              <h2>Make Easy Task Management</h2>
              <h1><span>Align!</span> Your Team</h1>
              <button id="button1" @click="signin">Continue With Gmail</button>
              <a @click="signup">or login with your email address</a>
          </div>
          <div class="image">
              <img src="../assets/image.png" alt="landscape">
          </div>
          <div class="card-box">
              <div class="con1">
                  <div class="icon">
                      <img src="../assets/secure.svg" alt="secure">
                  </div>
                  <h2>Secure</h2>
                  <p>And Safe</p>
              </div>
              <div class="con1">
                  <div class="icon">
                      <img src="../assets/team.svg" alt="Team" height="60px" width="80px">
                  </div>
                  <h2>Team</h2>
                  <p>Happy Team</p>
              </div>
              <div class="con1">
                  <div class="icon">
                      <img src="../assets/edit.svg" alt="editor" height="50px" width="50px">
                  </div>
                  <h2>editor's Choice</h2>
                  <p>IOS App Store</p>
              </div>
          </div>
          <div class="contect1">
                  <h2>The Need for Task Management</h2>
                  <h1>It's Time To Get Organized</h1>
                  <p>Task management is the link between planning to do something and getting it done.
                      Your task management software should provide an overview of work in progress that enables tracking from conception to completion. 
                      Enter MeisterTask: join teams everywhere who use our Kanban-style project boards to digitalize workflows and gain a clear overview of task progress. 
                      Let's get organized together!</p>
                  <div class="image noMobile" >
                  <img src="../assets/wave.png" alt="accomplishment">
                  </div>
                  
          </div>
          <div class="column">
                  <div class="cont">
                  <h2>Task Management With Project Penal</h2>
                  <h1>Projects That Work</h1>
                  <p>Whether you're managing your next big project or digitalizing task management for your team's daily business, 
                      you need to know who’s doing what, when. ProjectPenal helps you manage tasks in a beautiful, 
                      friendly environment that perfectly adapts to your needs.</p>
                  </div>
                  <div class="image">
                      <img src="../assets/task.webp" alt="task management">
                  </div>
          </div>
          <div class="comment">
                  <img src="../assets/comment.svg" alt="comment">
                  <p>“Now more than ever, even while working remotely, 
                      MeisterTask has been an invaluable tool that has helped our team maintain our efficiency with our hiring process.”</p>
          </div>
      </div>
        <footerr/>
        <!-- <signin/>
        <signup/> -->
    </div>
</template>

<script>
import headerr from '@/components/header.vue'
import signin from '@/components/signin.vue'
import signup from '@/components/signup.vue'
import footerr from '@/components/footer.vue'
export default {
    name: 'Home',
    components: {
        headerr,
        signin,
        signup,
        footerr
    },
    data(){
        return{
            userInfo: {}
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            if(localStorage.getItem("userInfo")){
                this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            }
        },
        signin(){
            document.getElementById('signin_popup').classList.add("show")
        },
        signup(){
            document.getElementById('signup_popup').classList.add("show")
        },
        newTask(){
            document.getElementById('popup').classList.add("show")
        }
    }
}
</script>

<style scoped>
.topnav
{
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 17px ;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 1px -70px 80px rgb(2 15 24 / 65%);
}
.topnav a
{

    float: left;
    color: rgb(2, 15, 24);
    text-align: center;
    padding: 8px 25px;
    font-size: 17px;
    text-decoration: none;
    border-radius: 70px;
}
.topnav a:hover
{
    background-color: aliceblue;
    color: rgb(10, 1, 1);

}
.topnav a.active
{
    
    color: black;

}
.container{
    max-width: 1280px;
    width: 70%;
    margin: auto;
}
.container a{
    display: flex;
    justify-content: center;
    margin: 30px 0px;
}
.content h2
{
    font-size: 30px;
    text-align: center;
    color: #BABABA;
    margin: 120px 3px 0px;
}
.content span{
    color: #BABABA;
}
.content h1
{
    font-size: 80px;
    text-align: center;
    margin: 1px;

}
.contect1 p{
    font-size: 21px;
    text-align: center;
    color: #BABABA;
}
.contect1 h1{
    font-size: 60px;
    text-align: center;
    margin: 1px;

}
.contect1 h2
{
    font-size: 30px;
    text-align: center;
    color: #BABABA;
    margin: 50px 3px 0px;
}
#button1
{
    background-color: #00AAFF;
    box-shadow: 0 10px 30px -10px #00aaff;
    color: white;
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    height: 50px;
    /* padding: 30px; */
    font-family: "Avenir", "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 15px;
    width: 40vh;
    border-radius: 40px;
    border-color: transparent;
    margin-top: 50px;
    margin-bottom: 20px;
    cursor: pointer;    
    overflow: visible;
    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
}
#button1:hover{
    box-shadow: 0 10px 7px -10px #00aaff ;
}
.card-box{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    

}
.con1{
    background-color: aliceblue;
    margin: 15px;
    padding: 7px;
    border-radius: 10px;
    height: 140px;
    width: 200PX;
}
.con1:hover{
    box-shadow: 0 5px 5px 0 rgba(155, 161, 167, 0.616) ;
}
.con1 h2{
    text-align: center;
    margin: 15px 0 5px 0;
}
.con1 p{
    text-align: center;
    margin: 0;
}
.icon{
    height: 55px;
}
.con1 img{
    height: 100%;
    width: 100%;
    margin-top: 10PX;
}
.image
{
    height: 50vh;
    margin-top: 30px;
}
.image img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.column{
    display: flex;
    align-items: center;
    flex: 6;
}
.cont h1{
    font-size: 60px;
    text-align: center;
    margin: 1px;
}
.cont h2{
 
    font-size: 30px;
    margin-bottom: 0%;
    text-align: center;
    color: #BABABA;
}
.cont{
    flex: 3;
}
.image{
    flex: 3;
}
.cont p
{
    font-size: 21px;
    text-align: center;
    color: #BABABA;
}
.comment img
{   
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 50px;
    margin: auto;
     margin-top: 30px;
    margin-bottom: 30px;

}
.comment p
{   
    display: flex;
    justify-content: center;
    font-size: 21px;
    text-align: center;
    color: #BABABA;
    margin: auto;
    width: 70%;

}
</style>