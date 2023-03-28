<template>
<div class="popup" id="project-popup">
    <div class="popup-contanier" id="project-popup-container">
            <div class="close-btn" @click="closeTask()">x</div>
        <form v-on:submit="createTask" class="popup-container">
            <div class="tx-popup">
                <p>Add Project</p>
            </div>
            <div class="inpt-popup">
                <input type="text" class="project-inpt" v-model="name" placeholder="Project Name">
                <!-- <input type="text" v-model="name" placeholder="Team Lead Name"> -->
                <input type="email" class="project-inpt" v-model="team_lead_email" placeholder="Team Lead Email">
                <input type="text" class="project-inpt" v-model="client_name" placeholder="Client Name">
                <input type="email" class="project-inpt" v-model="client_email" placeholder="Client Email">
                <input type="text" class="project-inpt" v-model="description" placeholder="Description">
            </div>
            <!-- <div class="info-popup">
                <div class="left-info">
                    <img src="../assets/rocket.png" alt="rocket">
                    <div class="info-popup-tx">
                        <p>Project</p>
                        <p>Welcome to PP</p>
                    </div>
                </div>
                <div class="right-info">
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.783 2.024a1 1 0 0 1 1.193.76l3.168 14.255 1.684-5.614A2 2 0 0 1 15.744 10h1.427a3.001 3.001 0 1 1 0 2h-1.427l-2.786 9.287a1 1 0 0 1-1.934-.07L7.807 6.74l-1.63 4.891A2 2 0 0 1 4.279 13H1a1 1 0 0 1 0-2h3.28L7.05 2.684a1 1 0 0 1 .732-.66zM20 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                    <div class="info-popup-tx">
                        <p>Section</p>
                        <p>In Progress</p>
                    </div>
                </div>
            </div> -->
            <div class="btn-popup">
                <button type="submit" class="popup-btn">Create Task</button>
            </div>
        </form>
    </div>
</div>
</template>
<script>
export default {
    props: {
        msg: String
    },
    data(){
        return{
            name: '',
            client_name: '',
            client_email: '',
            team_lead_email: '',
            description: '',
            task_id: null,
            userInfo: {}
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
        this.init()
    },
    methods: {
        init(){
            if(this.$route.params.id){
                this.route_id = this.$route.params.id
            }
            if(localStorage.getItem("userInfo")){
                this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            }
        },
        closeTask(){
            document.getElementById('project-popup').classList.remove("showNewTaskPopup")
        },
        async createTask(e){
            e.preventDefault()
            try{
                if(this.$route.params.id){
                    this.route_id = this.$route.params.id
                    // console.log(this.route_id, 'this.router.param.id')
                }
                this.$data.addDoc(this.$data.collection(this.$data.db, "projects"), {
                    admin_id: this.userInfo.id,
                    name: this.name,
                    team_lead_email: this.team_lead_email,
                    client_name: this.client_name,
                    client_email: this.client_email,
                    description: this.description
                }).then(res =>{
                    // console.log(res, 'res')
                    this.project_id = res.id
                    this.closeTask()
                })
            }catch(e){
                console.log('Error occur ', e)
            }
        }
    },
}
</script>
<style scoped>
#project-popup .project-inpt{
    border: 1px solid #2d374842;
    padding: 10px 8px;
    border-radius: 4px;
}
#project-popup .btn-popup{
    justify-content: flex-end;
}
</style>