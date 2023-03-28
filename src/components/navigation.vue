<template>
    <div class="navigation right-navigation webOnly" id="navigation">
        <ul>
            <div class="cls" @click="closeNavBar">X</div>
            <li class="logo">
                <!-- <h1>Demo LOGO</h1> -->
                <img src="../assets/DigitalFlip.png" alt="">
            </li>
            <!-- v-bind:class="{'active': $route.name = 'agenda' }" -->
            <li class="list">
                <b></b>
                <b></b>
                <router-link to="/">
                    <span class="icon"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.389 1.893a1 1 0 0 1 1.222 0l10.164 7.854a1.25 1.25 0 0 1-1.528 1.978l-.248-.192L21 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1l-.001-9.466-.246.19a1.25 1.25 0 0 1-1.664-.12L1 11.5a1.25 1.25 0 0 1 .225-1.753zM12 4.58L4.999 9.988 5 20h3.999L9 13.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5l-.001 6.5H19l-.001-10.012L12 4.58z"></path></svg></span>
                    <span class="title">Home</span>
                </router-link>
            </li>
            <li class="list ">
                <b></b>
                <b></b>
                <router-link to="/about">
                    <span class="icon"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm.75 13a.25.25 0 0 1 .25.25v.691a.25.25 0 0 1-.026.112l-.75 1.5a.25.25 0 0 1-.448 0l-.75-1.5A.25.25 0 0 1 11 16.94v-.691a.25.25 0 0 1 .25-.25h1.5zm1.75-9a1 1 0 0 1 0 2H14v3a1 1 0 0 0 .883.993L15 13h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1V9h-.5a1 1 0 1 1 0-2h5z"></path></svg></span>
                    <span class="title">About</span>
                </router-link>
            </li>
            <li class="list">
                <b></b>
                <b></b>
                <router-link to="/contact">
                    <span class="icon"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.684 12c.594 0 .967.093 1.293.267.326.174.582.43.756.756.174.326.267.699.267 1.293v4.368c0 .594-.093.967-.267 1.293-.174.326-.43.582-.756.756-.326.174-.699.267-1.293.267h-.368c-.594 0-.967-.093-1.293-.267a1.817 1.817 0 0 1-.756-.756C2.093 19.65 2 19.278 2 18.684v-4.368c0-.594.093-.967.267-1.293.174-.326.43-.582.756-.756.326-.174.699-.267 1.293-.267h.368zm7-4c.594 0 .967.093 1.293.267.326.174.582.43.756.756.174.326.267.699.267 1.293v8.368c0 .594-.093.967-.267 1.293-.174.326-.43.582-.756.756-.326.174-.699.267-1.293.267h-.368c-.594 0-.967-.093-1.293-.267a1.817 1.817 0 0 1-.756-.756C9.093 19.65 9 19.278 9 18.684v-8.368c0-.594.093-.967.267-1.293.174-.326.43-.582.756-.756.326-.174.699-.267 1.293-.267h.368zm7-6c.594 0 .967.093 1.293.267.326.174.582.43.756.756.174.326.267.699.267 1.293v14.368c0 .594-.093.967-.267 1.293-.174.326-.43.582-.756.756-.326.174-.699.267-1.293.267h-.368c-.594 0-.967-.093-1.293-.267a1.817 1.817 0 0 1-.756-.756c-.174-.326-.267-.699-.267-1.293V4.316c0-.594.093-.967.267-1.293.174-.326.43-.582.756-.756.326-.174.699-.267 1.293-.267h.368z"></path></svg></span>
                    <span class="title">Contact</span>
                </router-link>
            </li>
            <li class="list">
                <b></b>
                <b></b>
                <router-link to="/app/dashboard">
                    <span class="icon"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 0c1.314 0 7 4.873 7 11.5 0 .31-.01.61-.03.904l1.511 1.294c.786.674 1.438 2.025 1.512 3.102l.007.198v4.004c0 1.063-.709 1.515-1.607 1.075l-.123-.066-4.591-2.622c-.43.364-.873.664-1.308.902l-.19 1.908A2 2 0 0 1 12.19 24h-.38a2 2 0 0 1-1.99-1.801l-.191-1.908a7.922 7.922 0 0 1-1.308-.902l-4.59 2.622c-.956.546-1.731.102-1.731-1.01v-4.003c0-1.103.684-2.584 1.519-3.3l1.51-1.295A13.47 13.47 0 0 1 5 11.5C5 4.873 10.686 0 12 0zm0 16a.92.92 0 0 0-.917.997l.375 4.505a.543.543 0 0 0 1.084 0l.375-4.505A.92.92 0 0 0 12 16zm6.584-1.275a9.686 9.686 0 0 1-1.439 3.063L20 19.5v-2.999c0-.276-.166-.65-.376-.84zm-13.168 0l-1.04.937c-.183.165-.334.472-.368.732L4 16.5V19.5l2.854-1.713a9.687 9.687 0 0 1-1.438-3.062zM12 2.5c-.876 0-5 4.03-5 9 0 2.913 1.073 4.816 2.34 5.892l-.041-.407a2.715 2.715 0 1 1 5.402 0l-.04.407C15.927 16.316 17 14.413 17 11.5c0-4.97-4.124-9-5-9zM12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg></span>
                    <span class="title">Dashboard</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            route: '',
            data: [],
            userInfo: {},
            loading: false
        }
    },
    components:{},
    watch: {
        "$route.params": {
        handler(newValue, preValue) {
              this.init()
        },  
        immediate: true
        }
    },
    created(){
    },
    methods:{
        init(){
            this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        },
        closeSideBar(path){
            // console.log('closeSideBar')
            this.$router.push({path: '/'+path});
            document.getElementById('sideBar').classList.remove('showSideBar')
        },
        closeNavBar(){
            // console.log('nav')
            document.getElementById('navigation').classList.remove('right-navigation-show')
            document.getElementById('navigation').classList.add('right-navigation')
        }
    }
}
</script>

<style scoped>
.logo h1{
    position: relative;
    /* top: -18px;
    left: 30px; */
    color: white;
}
.navigation{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    border-radius: 0;
    box-sizing: initial;
    border-left: 5px solid #2d3748;
    background-color: #2d3748;
    transition: width 0.5s;
    overflow-x: hidden;
    z-index: 9;
}
.navigation .logo img{
    width: 80%;
}
.navigation.active{
    width: 70px;
}
.navigation ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    /* padding-top: 40px; */
}
.navigation ul li{
    position: relative;
    list-style: none;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
}
.addProjectBtn{
    position: absolute;
    right: 25px;
}
.addProjectBtn svg{
    width: 20px;
    height: 20px;
}
.addProjectBtn svg path{
    fill: #fbfbfe
}
.cls{
    position: absolute;
    top: 0;
    color: #fff;
    right: 22px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px 1px #4a5567e0;
    border-radius: 40px;
    font-size: 11px;
    line-height: 11px;
    z-index: 9
}
@media screen and (min-width: 678px) {
    
    
}
.navigation ul li a{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fbfbfe;
}
.navigation ul li a .icon{
    position: relative;
    display: flex;
    min-width: 30px;
    height: 30px;
    line-height: 70px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
}
.navigation ul li a .icon svg{
    width: 20px;
    height: 20px;
}
.navigation ul li a .icon ion-icon{
    font-size: 1.5em;
}
.navigation ul li a .title{
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: normal;
    text-transform: capitalize;
}
.toggle{
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #2d3748;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.toggle.active{
    background-color: #333;
}
.toggle ion-icon{
    position: absolute;
    color: #fbfbfe;
    font-size: 34px;
    display: none;
}
.toggle ion-icon.open,
.toggle.active ion-icon.close{
    display: block;
}
.toggle ion-icon.close,
.toggle.active ion-icon.open{
    display: none;
}
.list span{
    cursor: pointer;
}
li.subList a{
    margin-left: 20px
}
li.subList a .title{
    height: 40px !important;
    line-height: 40px !important;
}

</style>