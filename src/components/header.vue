<template>
    <div class="header">
        <div class="topnav">
            <div class="logo">
                <img src="../assets/DigitalFlip.png" alt="">
            </div>
            <div class="nav noMobile">
                <router-link to="/" class="active" href="#home">Home</router-link>
                <a href="">Features</a>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/signin" v-if="!userInfo.id">Signin</router-link>
                <router-link to="/app/dashboard" v-if="userInfo.id">Profile</router-link>
            </div>
            <div class="navToggle webOnly" @click="navBar()">
              <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11 16a3 3 0 0 1 0 6H7a3 3 0 0 1 0-6h4zm0 2H7a1 1 0 0 0-.117 1.993L7 20h4a1 1 0 0 0 0-2zm10-9a3 3 0 0 1 0 6h-9a3 3 0 0 1 0-6h9zm-6-7a3 3 0 0 1 0 6H4a3 3 0 1 1 0-6h11zm0 2H4a1 1 0 0 0-.117 1.993L4 6h11a1 1 0 0 0 0-2z"></path></svg>
            </div>
        </div>
        <navigation/>
    </div>
</template>

<script>
import navigation from '../components/navigation.vue'
export default {
    name: 'header',
    components: { navigation },
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
        navBar(){
            document.getElementById('navigation').classList.add('right-navigation-show')
            document.getElementById('navigation').classList.remove('right-navigation')
        },
        closeNavBar(){
            document.getElementById('navigation').classList.remove('right-navigation-show')
            document.getElementById('navigation').classList.add('right-navigation')
        }
    }
}
</script>

<style scoped>
.logo{
    width: 180px;
    display: flex;
}
.logo img{
    width: 100%;
    min-width: 120px;
}
.topnav {
    overflow: hidden;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    height: 70px;
    padding: 0 20px;
    position: fixed;
    top: 0;
    z-index: 9;
    box-shadow: 1px -70px 80px rgb(2 15 24 / 65%);
}
.topnav a {

    float: left;
    color: rgb(2, 15, 24);
    text-align: center;
    padding: 8px 25px;
    font-size: 17px;
    text-decoration: none;
    border-radius: 70px;
}
.topnav a:hover {
    background-color: aliceblue;
    color: rgb(10, 1, 1);

}
.topnav a.active {
    
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
.content h2{
    font-size: 30px;
    text-align: center;
    color: #BABABA;
    margin: 120px 3px 0px;
}
.content span{
    color: #BABABA;
}
.content h1{
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
.navToggle svg{
    width: 30px;
    height: 30px;
}
</style>