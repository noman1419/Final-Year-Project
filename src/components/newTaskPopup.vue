<template>
<div class="new-task" id="popup">
    <div class="popup-contanier" id="popup-container">
        <form v-on:submit="createTask" class="popup-container">
            <div class="tx-popup">
                <p>New task</p>
                <div class="cls" @click="closeTask()">x</div>
            </div>
            <div class="inpt-popup">
                <input type="text" v-model="data.heading" class="inpt-heading" placeholder="Name of Group">
                <p class="inpt-line">For 
                    <select class="inpt-select" style="width: 100px; padding: 1px 6px;" v-model="data.assign">
                        <option :value="member.name" v-for="(member , ind) in members" :key="ind">{{upperCase(member.name) + ' - ' + member.type}}</option>
                    </select> in 
                    <select class="inpt-select" style="width: 100px; padding: 1px 6px;" v-model="data.project_name">
                        <option :value="project" v-for="(project , ind) in projects" :key="ind">{{upperCase(project)}}</option>
                    </select>
                </p>
                <textarea placeholder="Description" v-model="data.description" cols="10" row="5"></textarea>
                <!-- <input type="s" v-model="description" placeholder="Description"> -->
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
                <div class="links">
                    <!-- <span class="links-itm"><svg class="Icon EmojiIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16,0 C7.17582609,0 0,7.17585739 0,16 C0,24.8241739 7.17582609,32 16,32 C24.8241739,32 32,24.8241739 32,16 C32,7.17585739 24.8241739,0 16,0 Z M16,2.08695652 C23.696313,2.08695652 29.9130435,8.30372174 29.9130435,16 C29.9130435,23.696313 23.696313,29.9130435 16,29.9130435 C8.30368696,29.9130435 2.08695652,23.696313 2.08695652,16 C2.08695652,8.30372174 8.30368696,2.08695652 16,2.08695652 Z M10.4347826,9.04347826 C9.09005217,9.04347826 8,10.1335652 8,11.4782609 C8,12.8229565 9.09005217,13.9130435 10.4347826,13.9130435 C11.7794748,13.9130435 12.8695652,12.8229565 12.8695652,11.4782609 C12.8695652,10.1335652 11.7794748,9.04347826 10.4347826,9.04347826 Z M21.5652174,9.04347826 C20.220487,9.04347826 19.1304348,10.1335652 19.1304348,11.4782609 C19.1304348,12.8229565 20.220487,13.9130435 21.5652174,13.9130435 C22.909913,13.9130435 24,12.8229565 24,11.4782609 C24,10.1335652 22.909913,9.04347826 21.5652174,9.04347826 Z M8.23913043,19.1304348 C7.90384696,19.149913 7.59775652,19.3392696 7.41304348,19.673913 C7.23693913,20.0104696 7.26069565,20.4386435 7.47826087,20.7499826 C9.34351304,23.5401739 12.4683478,25.3913043 16,25.3913043 C19.5316522,25.3913043 22.656487,23.5401739 24.5217391,20.7499826 C24.8262261,20.294713 24.6944348,19.6088348 24.2391304,19.3043478 C23.7838261,18.9998609 23.0870957,19.1316522 22.7826087,19.5869565 C21.2761043,21.840487 18.8063652,23.3043478 16,23.3043478 C13.1936348,23.3043478 10.7238957,21.840487 9.2173913,19.5869565 C8.93488696,19.2555478 8.57441391,19.1108522 8.23913043,19.1304348 Z M8.23913043,19.1304348 C7.90384696,19.149913 7.59775652,19.3392696 7.41304348,19.673913 C7.23693913,20.0104696 7.26069565,20.4386435 7.47826087,20.7499826 C9.34351304,23.5401739 12.4683478,25.3913043 16,25.3913043 C19.5316522,25.3913043 22.656487,23.5401739 24.5217391,20.7499826 C24.8262261,20.294713 24.6944348,19.6088348 24.2391304,19.3043478 C23.7838261,18.9998609 23.0870957,19.1316522 22.7826087,19.5869565 C21.2761043,21.840487 18.8063652,23.3043478 16,23.3043478 C13.1936348,23.3043478 10.7238957,21.840487 9.2173913,19.5869565 C8.93488696,19.2555478 8.57441391,19.1108522 8.23913043,19.1304348 Z"></path></svg></span> -->
                    <!-- <span class="links-itm"><svg class="Icon AttachVerticalIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M19,32c-3.9,0-7-3.1-7-7V10c0-2.2,1.8-4,4-4s4,1.8,4,4v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9c0-1.1-0.9-2-2-2s-2,0.9-2,2v15c0,2.8,2.2,5,5,5s5-2.2,5-5V10c0-4.4-3.6-8-8-8s-8,3.6-8,8v5c0,0.6-0.4,1-1,1s-1-0.4-1-1v-5C6,4.5,10.5,0,16,0s10,4.5,10,10v15C26,28.9,22.9,32,19,32z"></path></svg></span> -->
                    <span class="links-itm"><svg class="Icon CalendarIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M24,2V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M8,4v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z M24,28H8c-2.2,0-4-1.8-4-4V12h24v12C28,26.2,26.2,28,24,28z"></path></svg>
                    <input type="date" v-model="data.date" v-bind:class="{'datePickerShow': data.date}" class="popup-datePicker"></span>
                </div>
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
            heading: '',
            description: '',
            task_id: null,
            userInfo: {},
            data: {},
            projects: [],
            members: []
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
            // console.log('init')
            if(this.$route.params.id){
                this.route_id = this.$route.params.id
                // console.log(this.route_id, 'this.router.param.id')
            } if(localStorage.getItem("member")){
                this.members = JSON.parse(localStorage.getItem("member"));
            } if(localStorage.getItem("userInfo")){
                this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            } if(localStorage.getItem("projects")){
                var project = JSON.parse(localStorage.getItem("projects"));
                var data = []
                var c = {}
                for(var i in project){
                    // console.log(project[i].name , 'name')
                    c = project[i].name
                    data.push(c)
                }
                // console.log(data , 'data')
                this.projects = data
            }
        },
        upperCase(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        closeTask(){
            document.getElementById('popup').classList.remove("showNewTaskPopup")
        },
        async createTask(e){
            e.preventDefault()
            // console.log( this.data, 'userInfo')
            // alert(1)
            this.data.status =  'Pending'
            this.data.company = this.userInfo.company
            try{
                if(this.$route.params.id){
                    this.route_id = this.$route.params.id
                    // console.log(this.route_id, 'this.router.param.id')
                } 
                if(this.route_id){
                    this.$data.addDoc(this.$data.collection(this.$data.db, "project"), this.data).then(res =>{
                        // console.log(res, 'res')
                        this.task_id = res.id
                        this.closeTask()
                    })
                } else{
                    this.$data.addDoc(this.$data.collection(this.$data.db, "project"),  this.data).then(res =>{
                        // console.log(res, 'res')
                        this.task_id = res.id
                        this.closeTask()
                    })
                }
            }catch(e){
                console.log('Error occur ', e)
            }
        }
    },
}
</script>