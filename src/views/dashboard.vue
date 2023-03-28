<template>
    <div class="container">
        <sideBar/>
        <topNavigation/>
          <div class="content">
            <!-- <button @click="getUser">Get User</button> -->
            <h2 class="small-heading">Good Day, {{capCase(userInfo.name)}}</h2>
            <h1 class="heading" id="time">{{currentTime}}</h1>
            <div class="discription">
              “The difference between ordinary and extraordinary is that little
              extra.”
            </div>
            <div class="author">JIMMY JOHNSON</div>
          </div>
        </div>
</template>
<script>
import sideBar from '@/components/sideBar.vue'
import topNavigation from '@/components/topNavigation.vue'
import axios from 'axios'

export default {
    data(){
        return{
            currentTime: '',
            userInfo: {},
            data: []
        }
    },
    components:{
        sideBar,
        topNavigation
    },
    created(){
        // this.time(),
        this.getData(),
        this.init()
    },
    methods:{
        time(){
            if(this.$route.name == 'dashboard'){
                setInterval(this.time,9000);
            }
            var d = new Date();
            var m = d.getMinutes();
            var h = d.getHours();
            let ampm = h >= 12 ? 'PM' : 'AM';
            h = h % 12;
            h = h ? h : 12;
            m = m.toString().padStart(2, '0');
            this.currentTime = h + ':' + m + ' ' + ampm;
            // console.log(this.currentTime)
        },
        init(){
            if(localStorage.getItem("userInfo")){
                this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            }
        },
        async getData(){
            if(localStorage.getItem("userInfo")){
                this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
                console.log(this.userInfo.company)
                try{
                    const userRef = this.$data.query(this.$data.collection(this.$data.db, "user"),this.$data.where("company", "==", this.userInfo.company))
                    const decRef = await this.$data.getDocs(userRef)
                    .then((res)=>{
                        var data = []
                        var c = {}
                        var d = []
                        res.docs.forEach((doc) =>{
                            data.push({...doc.data(), id: doc.id})
                        })
                        // console.log(data, 'dashboard data')
                        for(var i in data){
                            d.push({name: data[i].name, email: data[i].email, type: data[i].type, id: data[i].id})
                        }
                        this.data = d
                        localStorage.setItem('member', JSON.stringify(this.data))
                    })
                }catch(e){
                    console.error("Error adding document: ", e)
                }
            }
        },
        capCase(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        trimname(string){
            return string.charAt(0).toUpperCase()
        },

    }
    
}
</script>