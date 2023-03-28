<template>
    <div class="top_navigation">
          <div class="top_nav_elements">
            <div class="navToggle webOnly" @click="showNav()">
              <svg class="Icon BurgerExpand" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M1,16h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,16.4,0.4,16,1,16z M1,4h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5l0,0C0,4.4,0.4,4,1,4z M1,28h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,28.4,0.4,28,1,28z"></path></svg>
              <!-- <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11 16a3 3 0 0 1 0 6H7a3 3 0 0 1 0-6h4zm0 2H7a1 1 0 0 0-.117 1.993L7 20h4a1 1 0 0 0 0-2zm10-9a3 3 0 0 1 0 6h-9a3 3 0 0 1 0-6h9zm-6-7a3 3 0 0 1 0 6H4a3 3 0 1 1 0-6h11zm0 2H4a1 1 0 0 0-.117 1.993L4 6h11a1 1 0 0 0 0-2z"></path></svg> -->
            </div>
            <h2>
              {{route}}
            </h2>
          </div>
          <div class="top_nav_elements">
            <!-- <div class="top_nav_item upgrade">
              <a class="upgrade-btn btn" @click="models()">Models</a>
              <sdlcModels/>
            </div> -->
            <div class="top_nav_item upgrade" v-if="userInfo.type == 'Admin' || userInfo.type == 'Team Lead'">
              <a class="round-btn btn add_task" @click="newTask()">
                <svg class="Icon PlusIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path></svg>
              </a>
            </div>
            <div class="top_nav_item" style="width: 100px !important;">
              <a class="transprant-btn btn" @click="logout()">Logout</a>
              <!-- <sdlcModels/> -->
            </div>
            <!-- <div class="top_nav_item add-task">
                <a class="add_task"  @click="newTask()">
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 4v3.5a.5.5 0 0 0 .5.5H17a1 1 0 0 1 0 2h-3.5a.5.5 0 0 0-.5.5V17a1 1 0 0 1-2 0v-3.5a.5.5 0 0 0-.5-.5H7a1 1 0 0 1 0-2h3.5a.5.5 0 0 0 .5-.5V7a1 1 0 0 1 2 0z"></path></svg>
                </a>
            </div> -->
            <!-- <div class="top_nav_item done">
              <a class="done">
                <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm4.328 4.856a1.003 1.003 0 0 1 1.416 0 .999.999 0 0 1-.002 1.414l-7.334 7.323c-.392.39-1.024.39-1.415 0l-3.086-3.086a1 1 0 0 1 1.414-1.414l2.025 2.025a.501.501 0 0 0 .708 0z"></path></svg>
              </a>
            </div> -->
            <!-- <div class="top_nav_item notification">
              <a class="notification"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10 21h4a2 2 0 0 1-3.995.15L10 21h4zm2-17c3.314 0 6.206 2.678 6.46 5.986l.386 5.011c.085 1.106.958 2.405 1.951 2.902l.76.38a.88.88 0 0 1 .443.729v.484c0 .28-.225.508-.494.508H2.494A.497.497 0 0 1 2 19.492v-.484c0-.28.197-.606.443-.73l.76-.38c.992-.496 1.866-1.792 1.951-2.9l.386-5.012C5.794 6.68 8.693 4 12 4zm0 2c-2.264 0-4.292 1.878-4.466 4.14l-.386 5.01c-.075.983-.49 1.998-1.114 2.85h11.933c-.624-.852-1.04-1.867-1.115-2.85l-.386-5.01C16.292 7.874 14.27 6 12 6zm0-5c.552 0 1 .444 1 1v1.082a6.187 6.187 0 0 0-.663-.073L12 3l-.225.004c-.261.01-.52.036-.775.078V2c0-.513.383-.936.883-.993L12 1z"></path></svg></a>
            </div> -->
            <!-- <div class="top_nav_item search">
              <a class="search"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10 2a8 8 0 0 1 6.568 12.568l4.871 4.871a1.5 1.5 0 1 1-2.121 2.122l-4.894-4.895A8 8 0 1 1 10 2zm0 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg></a>
            </div> -->
            <!-- <div class="top_nav_item help">
              <a class="help"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-.14 13.56c.75 0 1.345.575 1.345 1.308 0 .733-.594 1.318-1.346 1.318-.751 0-1.354-.585-1.354-1.318 0-.733.603-1.308 1.354-1.308zm.333-11.059c2.515 0 4.24 1.43 4.24 3.526 0 1.42-.705 2.393-1.967 3.145-1.215.705-1.512 1.15-1.586 1.995-.093.612-.408.992-1.04.992-.704 0-1.094-.5-1.094-1.178v-.176c0-1.15.575-1.911 1.735-2.598 1.15-.696 1.54-1.206 1.54-2.097 0-1.01-.789-1.716-1.93-1.716-1.03 0-1.716.51-2.013 1.447-.204.576-.547.807-1.057.807-.64 0-1.021-.39-1.021-1.01 0-.4.083-.743.26-1.096.575-1.261 2.022-2.04 3.933-2.04z"></path></svg></a>
            </div> -->
            <div @click="profile()" class="top_nav_item user">
                <a class="user">{{trimName(userInfo.name)}}</a>
            </div>
          </div>
          <!-- <sdlcModels/> -->
          <sideBar />
        </div>
</template>

<script>
import profile from '@/components/profile.vue' 
import sideBar from '@/components/sideBar.vue' 
import newTask from '@/components/newTaskPopup.vue'
import sdlcModels from '@/components/sdlcModels.vue'
export default {
  data(){
    return{
      route: ''
    }
  },
  components:{ newTask, sdlcModels, sideBar, profile },
  created(){
    this.init()
  },
  watch: {
    "$route.params": {
      handler(newValue, preValue) {
        this.init();
      },
      immediate: true,
    },
  },
  methods:{
    init(){
      if(this.$route.params.id){
        this.route = this.$route.params.id
      } else{
        this.route = this.$route.name
      }
      if(localStorage.getItem("userInfo")){
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      }
    },
    trimName(string){
      return string.charAt(0).toUpperCase()
    },
    showNav(){
      // console.log('hello')
      document.getElementById('sideBar').classList.add('showSideBar')
    },
    newTask(){
      if(document.getElementById('popup')){
        document.getElementById('popup').classList.add("showNewTaskPopup")
        setTimeout(()=>{
          document.getElementById('popup-container').classList.add("showNewTaskPopup")
        }, 150)
      }
    },
    models(){
      document.getElementById('sdlcmodels').classList.add("sdlcShow")
    },
    logout(){
      localStorage.removeItem('userInfo')
      localStorage.removeItem('member')
      localStorage.removeItem('projects')
      this.userInfo = {}
      this.$router.push({name:'signup'})
    },
    profile(){
        document.getElementById('profile-popup').classList.add('show')
    }
  }
}
</script>