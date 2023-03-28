<template>
  <div class="navigation" id="sideBar">
    <ul>
      <div class="cls mobileOnly" @click="closeSideBar()"><svg class="Icon XIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg></div>
      <li class="logo">
        <!-- <h1>Demo LOGO</h1> -->
        <a><img src="../assets/DigitalFlip.png" alt="" /></a>
      </li>
      <div class="nav-section" style="padding-top: 25px;">
        <li class="list" v-bind:class="{ active: route == 'dashboard' }">
          <a @click="closeSideBar('dashboard')">
            <span class="icon"
              ><svg
                class="NavIcon SidebarTopNavLinks-typeIcon HomeNavIcon"
                viewBox="0 0 40 40"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"
                ></path></svg
            ></span>
            <span class="title">Home</span>
          </a>
        </li>
        <li class="list" v-bind:class="{ active: route == 'my_task' }">
          <a @click="closeSideBar('my_task')">
            <span class="icon"
              ><svg
                class="NavIcon SidebarTopNavLinks-typeIcon CheckNavIcon"
                viewBox="0 0 40 40"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z"
                ></path></svg
            ></span>
            <span class="title">My Task</span>
          </a>
        </li>
        <li class="list" v-bind:class="{ active: route == 'inbox' }">
          <a @click="closeSideBar('app/inbox')">
            <span class="icon"
              ><svg
                class="NavIcon SidebarTopNavLinks-typeIcon BellNavIcon"
                viewBox="0 0 40 40"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z"
                ></path></svg
            ></span>
            <span class="title">Inbox</span>
          </a>
        </li>
        <li class="list" v-bind:class="{ active: route == 'reports' }">
          <a @click="closeSideBar('reports')">
            <span class="icon"
              ><svg
                class="NavIcon SidebarTopNavLinks-typeIcon ReportingNavIcon"
                viewBox="0 0 40 40"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M34.5,6C32,6,30,8,30,10.5c0,1.1,0.4,2.1,1.1,2.9l-4.3,7.6C26.5,21,26.3,21,26,21c-0.9,0-1.6,0.3-2.3,0.7L19.2,18
	c0.2-0.5,0.3-1,0.3-1.5c0-2.5-2-4.5-4.5-4.5s-4.5,2-4.5,4.5c0,0.9,0.3,1.8,0.8,2.5l-4.5,6.2C6.4,25.1,5.9,25,5.5,25
	C3,25,1,27,1,29.5S3,34,5.5,34s4.5-2,4.5-4.5c0-0.9-0.3-1.8-0.8-2.5l4.5-6.2c0.4,0.1,0.8,0.2,1.3,0.2c0.9,0,1.6-0.3,2.3-0.7l4.5,3.7
	c-0.2,0.5-0.3,1-0.3,1.5c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5c0-1.1-0.4-2.1-1.1-2.9l4.3-7.6c0.3,0,0.5,0.1,0.8,0.1
	c2.5,0,4.5-2,4.5-4.5S37,6,34.5,6z M5.5,31c-0.1,0-0.3,0-0.4-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.3-0.1-0.4-0.2c0,0,0,0,0,0
	c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1
	c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1
	c0,0,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1C4.5,28.3,5,28,5.5,28C6.3,28,7,28.7,7,29.5c0,0.4-0.1,0.7-0.3,0.9
	c0,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0
	C5.7,31,5.6,31,5.5,31C5.5,31,5.5,31,5.5,31z M15,18c-0.8,0-1.5-0.7-1.5-1.5c0-0.4,0.1-0.7,0.4-1c0,0,0.1-0.1,0.1-0.1
	c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0
	c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1
	c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.4,0.3,0.6,0.7,0.6,1.2C16.5,17.3,15.8,18,15,18z M25.9,27c-0.1,0-0.1,0-0.2,0
	c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.1c-0.4-0.3-0.6-0.7-0.6-1.2c0-0.8,0.7-1.5,1.5-1.5
	s1.5,0.7,1.5,1.5c0,0.3-0.1,0.6-0.2,0.8c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1
	c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.3,0.1c0,0-0.1,0-0.1,0C26.1,27,26,27,25.9,27C25.9,27,25.9,27,25.9,27z
	 M33,10.5c0-0.3,0.1-0.6,0.2-0.8c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1
	c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0
	c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0
	c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
	c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1
	c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c-0.2,0.5-0.8,0.8-1.3,0.8C33.7,12,33,11.3,33,10.5z"
                ></path></svg
            ></span>
            <span class="title">Reporting</span>
          </a>
        </li>
      </div>
      <div class="nav-section">
        <li class="list">
          <a>
            <span class="title">My Workplace</span>
            <span
              class="addProjectBtn"
              v-if="userInfo.type == 'Admin'"
              @click="newProject"
              ><svg width="100%" height="100%" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M8 2c.552 0 1 .456 1 1.002V7h3.998c.514 0 .937.383.995.883L14 8c0 .552-.456 1-1.002 1H9v3.998a.999.999 0 0 1-.883.995L8 14c-.552 0-1-.456-1-1.002V9H3.002a.999.999 0 1 1 0-2H7V3.002c0-.514.383-.937.883-.995L8 2z"
                ></path></svg
            ></span>
          </a>
        </li>
        <li
          class="subList"
          v-if="data.length != 0 && loading == false">
          <a v-for="(itm, ind) in data"
          :key="ind" @click="closeSideBar('app/projects/' + itm.name)">
            <span class="icon project-icon"></span>
            <span class="title">{{ itm.name }}</span>
          </a>
        </li>
        <li class="list" v-if="data.length == 0 && loading == false">
          <a style="justify-content: center;">
            <span class="title" style="font-size: 13px; color: #eef2f7"
              >No Project</span
            >
          </a>
        </li>
        <!-- <li @click="getProjects()">getProjects</li> -->
      </div>
    </ul>
    <newProject />
  </div>
</template>

<script>
import newProject from "@/components/newProjectPopup.vue";
export default {
  data() {
    return {
      route: "",
      data: [],
      userInfo: {},
      loading: false,
    };
  },
  components: {
    newProject,
  },
  watch: {
    "$route.params": {
      handler(newValue, preValue) {
        this.init();
      },
      immediate: true,
    },
  },
  created() {
    this.getProjects();
  },
  methods: {
    init() {
      this.route = this.$route.name;
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    },
    async getProjects() {
      this.loading = true;
      try {
        var condition = ''
        if(this.userInfo.type == 'Admin'){
          const userRef = this.$data.query(this.$data.collection(this.$data.db, "projects"),this.$data.where("admin_id", "==", this.userInfo.id))
          // console.log(userRef, 'userRef')
          const decRef = await this.$data.getDocs(userRef)
          .then((res)=>{
            // console.log(res, 'res')
            let data = [];
            res.docs.forEach((doc) => {
              data.push({ ...doc.data(), id: doc.id });
            });
            this.loading = false;
            this.data = data;
            localStorage.setItem('projects', JSON.stringify(this.data))
            // console.log(this.data.length, "data");
          })
        } else if(this.userInfo.type == 'Team Lead'){
          // team_lead_email
          const userRef = this.$data.query(this.$data.collection(this.$data.db, "projects"),this.$data.where("team_lead_email", "==", this.userInfo.email))
          // console.log(userRef, 'userRef')
          const decRef = await this.$data.getDocs(userRef)
          .then((res)=>{
            // console.log(res, 'res')
            let data = [];
            res.docs.forEach((doc) => {
              data.push({ ...doc.data(), id: doc.id });
            });
            this.loading = false;
            this.data = data;
            localStorage.setItem('projects', JSON.stringify(this.data))
            // console.log(this.data.length, "data");
          })
        } else if(this.userInfo.type == 'Employee'){

        } else if(this.userInfo.type == 'Client'){
          // client_email
          const userRef = this.$data.query(this.$data.collection(this.$data.db, "projects"),this.$data.where("client_email", "==", this.userInfo.email))
          // console.log(userRef, 'userRef')
          const decRef = await this.$data.getDocs(userRef)
          .then((res)=>{
            // console.log(res, 'res')
            let data = [];
            res.docs.forEach((doc) => {
              data.push({ ...doc.data(), id: doc.id });
            });
            this.loading = false;
            this.data = data;
            localStorage.setItem('projects', JSON.stringify(this.data))
            // console.log(this.data.length, "data");
          })
        }
      } catch (e) {
        console.log('Error occur ', e)
      }
    },
    closeSideBar(path) {
      if(path){
        // console.log('closeSideBar')
        this.$router.push({ path: "/" + path });
        document.getElementById("sideBar").classList.remove("showSideBar");
      } else{
        document.getElementById("sideBar").classList.remove("showSideBar");
      }
    },
    newTask() {
      // console.log('hello')
      if (document.getElementById("popup")) {
        document.getElementById("popup").classList.add("showNewTaskPopup");
        setTimeout(() => {
          //   console.log('setTimeOut')
          document
            .getElementById("popup-container")
            .classList.add("showNewTaskPopup");
        }, 150);
      }
    },
    newProject() {
      // console.log('hello')
      if (document.getElementById("project-popup")) {
        document
          .getElementById("project-popup")
          .classList.add("showNewTaskPopup");
        setTimeout(() => {
          //   console.log('setTimeOut')
          document
            .getElementById("project-popup-container")
            .classList.add("showNewTaskPopup");
        }, 150);
      }
    },
  },
};
</script>

<style scoped>
.logo h1 {
  position: relative;
  color: white;
}
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  border-radius: 0;
  box-sizing: initial;
  /* transform: translateX(-100%); */
  background-color: #2d3748;
  transition: 0.5s;
  overflow-x: hidden;
  z-index: 9;
}
.navigation .logo img {
  width: 80%;
}
.navigation.active {
  width: 70px;
}
.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
}
.navigation ul li {
  position: relative;
  list-style: none;
  width: 100%;
  cursor: pointer;
}
.navigation ul li a:hover{
    background-color: #fbfbfe24;
}
.navigation .nav-section {
  padding: 8px 0px 25px 0;
  border-bottom: 1px solid #eef2f742;
}
.addProjectBtn {
  position: absolute;
  right: 25px;
}
.addProjectBtn svg {
  width: 15px;
  height: 15px;
}
.addProjectBtn svg:hover .addProjectBtn svg path{
    fill: #2d3748
}
/* .addProjectBtn svg path {
  fill: #fbfbfe;
} */
svg path {
  fill: #eef2f7d4;
}
.navigation ul li a {
  position: relative;
  padding: 0 25px 0 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fbfbfe;
}
.navigation ul li a .icon {
  position: relative;
  display: flex;
  min-width: 30px;
  height: 30px;
  line-height: 32px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}
.navigation ul li a .icon.project-icon{
    min-width: 10px;
    height: 10px;
    background: #ffd3b6;
    border-radius: 3px;
    margin-right: 10px;
}
.navigation ul li a .icon svg {
  width: 20px;
  height: 20px;
}
.navigation ul li a .icon ion-icon {
  font-size: 1.5em;
}
.navigation ul li a .title {
  position: relative;
  display: block;
  /* padding-left: 5px; */
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  white-space: normal;
  text-transform: capitalize;
}
.toggle {
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
.toggle.active {
  background-color: #333;
}
.toggle ion-icon {
  position: absolute;
  color: #fbfbfe;
  font-size: 34px;
  display: none;
}
.toggle ion-icon.open,
.toggle.active ion-icon.close {
  display: block;
}
.toggle ion-icon.close,
.toggle.active ion-icon.open {
  display: none;
}
.list span {
  cursor: pointer;
}
li.subList{
    margin-bottom: 24px;
}
li.subList a {
  /* margin-left: 20px; */
}
li.subList a .title {
  /* height: 40px !important;
  line-height: 40px !important; */
}
.cls{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: #2d3748;
  z-index: 9;
  /* display: flex; */
  align-items: center;
  justify-content: center;
}
.cls svg{
  width: 15px;
}
</style>
