<template>
  <div class="task-contianer">
    <div class="task-report-header">
        <div class="task-report-status">
            <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm4.328 4.856a1.003 1.003 0 0 1 1.416 0 .999.999 0 0 1-.002 1.414l-7.334 7.323c-.392.39-1.024.39-1.415 0l-3.086-3.086a1 1 0 0 1 1.414-1.414l2.025 2.025a.501.501 0 0 0 .708 0z"></path></svg>
            <div class="task-report-status-p_tag">
                <p id="status-task-report" class="report-heading">Status</p>
                <p id="open-task-report" class="report-heading">Open</p>
            </div>
            <svg width="100%" class="arrow-icon" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.36 6.232a1 1 0 0 1 1.28 1.536l-3 2.5a1 1 0 0 1-1.28 0l-3-2.5a1 1 0 1 1 1.28-1.536L8 8.198l2.36-1.966z"></path></svg>
        </div>
        <div class="task-report-created">
            <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M15.59 2c2.23 0 3.037.232 3.852.668a4.543 4.543 0 0 1 1.89 1.89c.436.815.668 1.623.668 3.852v7.18c0 2.23-.232 3.037-.668 3.852a4.543 4.543 0 0 1-1.89 1.89c-.815.436-1.623.668-3.852.668H8.41c-2.23 0-3.037-.232-3.852-.668a4.543 4.543 0 0 1-1.89-1.89C2.232 18.627 2 17.82 2 15.59V8.41c0-2.23.232-3.037.668-3.852a4.543 4.543 0 0 1 1.89-1.89C5.373 2.232 6.18 2 8.41 2h7.18zm3.128 6H5.282c-.446 0-.607.046-.77.134a.909.909 0 0 0-.378.378c-.088.163-.134.324-.134.77v6.872c0 1.337.14 1.822.4 2.311.262.49.646.873 1.135 1.134.489.262.974.401 2.31.401h8.31c1.336 0 1.821-.14 2.31-.4a2.726 2.726 0 0 0 1.134-1.135c.262-.489.401-.974.401-2.31V9.281c0-.446-.046-.607-.134-.77a.909.909 0 0 0-.378-.378c-.163-.088-.324-.134-.77-.134zM12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1-7H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2z"></path></svg>
            <div class="task-report-created-p_tag">
                <p id="task-report-created" class="report-heading">Created</p>
                <p id="task-report-all" class="report-heading">All</p>
            </div>
            <svg width="100%" class="arrow-icon" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.36 6.232a1 1 0 0 1 1.28 1.536l-3 2.5a1 1 0 0 1-1.28 0l-3-2.5a1 1 0 1 1 1.28-1.536L8 8.198l2.36-1.966z"></path></svg>
        </div>
    </div>
    <div class="graphBox grid-4">
      <div class="graph-box">
        <h4 class="graph-heading">
          Complete tasks
        </h4>
        <h1 class="graph-count">{{completedTask}}</h1>
        <!-- <canvas id="myChart" ></canvas> -->
      </div>
      <div class="graph-box">
        <h4 class="graph-heading">
          Incomplete tasks
        </h4>
        <h1 class="graph-count">{{pendingTask}}</h1>
        <!-- <canvas id="taskChart" style="margin: 0 20px" width="100%"></canvas> -->
      </div>
      <div class="graph-box">
        <h4 class="graph-heading">
          Overdue tasks
        </h4>
        <h1 class="graph-count">{{overDue}}</h1>
        <!-- <canvas id="taskChart" style="margin: 0 20px" width="100%"></canvas> -->
      </div>
      <div class="graph-box">
        <h4 class="graph-heading">
          Total tasks
        </h4>
        <h1 class="graph-count">{{data.length}}</h1>
        <!-- <canvas id="taskChart" style="margin: 0 20px" width="100%"></canvas> -->
      </div>
    </div>
    <div class="graphBox grid-2">
      <div class="graph-box graph-chart">
        <h4 class="graph-heading">
          Complete tasks
        </h4>
        <h1 class="graph-count">{{completedTask}}</h1>
        <!-- <canvas id="myChart" ></canvas> -->
      </div>
      <div class="graph-box graph-chart">
        <h4 class="graph-heading">
          Incomplete tasks
        </h4>
        <h1 class="graph-count">{{pendingTask}}</h1>
        <!-- <canvas id="taskChart" style="margin: 0 20px" width="100%"></canvas> -->
      </div>
    </div>
    
  </div>
</template>

<script>
import sideBar from '../components/sideBar.vue'
import topBar from '../components/topNavigation.vue'
export default {
  components:{
    sideBar,
    topBar
  },
  data(){
    return{
      userInfo: {},
      data:[],
      pendingTask: 0,
      completedTask: 0,
      overDue: 0
    }
  },
  created(){
    this.init()
  },
  methods:{
    async init(e){
      // e.preventDefault();
      try{
        if(localStorage.getItem("userInfo")){
          this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        }
        const userRef = this.$data.query(this.$data.collection(this.$data.db, "project"),this.$data.where("assign", "==", this.userInfo.name))
        // console.log(userRef, 'citiesRef')
        const decRef = await this.$data.getDocs(userRef)
        .then((res)=>{
          if(res && res.docs && res.docs.length != 0){
            var data = []
            res.docs.forEach((doc) =>{
              data.push({...doc.data(), id: doc.id})
            })
            this.data = data
            // console.log(this.data, 'he')
            for(var i in this.data){
              if(this.data[i].status == 'Pending'){
                this.pendingTask++
              } else if(this.data[i].status == 'Completed'){
                this.completedTask++
              } else{
                this.overDue++
              }
            }
          }
        })
      } catch(e){
        console.error("Error adding document: ", e)
      }
    }
  }
}
</script>