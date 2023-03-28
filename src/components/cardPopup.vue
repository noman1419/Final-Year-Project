<template>
    <div class="cardstatus" id="cardstatus">
        <div class="headstatus" id="headerstatus">
            <div class="left-head-status bx">
                <div class="asign-status bx" id="asignstatus"  v-if="userInfo.type != 'Client'">
                    <!-- <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3.835-.765a1 1 0 1 1 .75 1.855 1 1 0 0 1-.75-1.855zm-8.965.537a1 1 0 1 1 1.841.781 1 1 0 0 1-1.841-.781zm12.201-2.7a1 1 0 1 1 1.414 1.413 1 1 0 0 1-1.414-1.414zm-15.556 0a1 1 0 1 1 1.414 1.413 1 1 0 0 1-1.414-1.414zm8.344-2.512c.752 0 1.346.575 1.346 1.308 0 .733-.594 1.318-1.346 1.318-.751 0-1.354-.585-1.354-1.318 0-.733.603-1.308 1.354-1.308zm9.383-.741a1 1 0 1 1 1.841.781 1 1 0 0 1-1.84-.781zm-19.795-.53a1 1 0 1 1 .781 1.841 1 1 0 0 1-.781-1.841zm10.746-9.788c2.515 0 4.24 1.43 4.24 3.526 0 1.42-.705 2.393-1.967 3.145-1.215.705-1.512 1.15-1.586 1.995-.093.612-.408.992-1.04.992-.704 0-1.094-.5-1.094-1.178v-.176c0-1.15.575-1.911 1.735-2.598 1.15-.696 1.54-1.206 1.54-2.097 0-1.01-.789-1.716-1.93-1.716-1.03 0-1.716.51-2.013 1.447-.204.576-.547.807-1.057.807-.64 0-1.021-.39-1.021-1.01 0-.4.083-.743.26-1.096.575-1.261 2.022-2.04 3.933-2.04zM23 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM1 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm20.788-4.137a1 1 0 1 1 .75 1.855 1 1 0 0 1-.75-1.855zM.917 7.4a1 1 0 1 1 1.84.781A1 1 0 0 1 .918 7.4zM19.07 3.515a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414zm-15.556 0a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414zm11.774-2.068a1 1 0 1 1 1.841.781 1 1 0 0 1-1.841-.781zM7.416.91a1 1 0 1 1 .75 1.855A1 1 0 0 1 7.415.91zM12 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> -->
                    <!-- <svg class="MiniIcon ThemeableRectangularButton-leftIcon CheckMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9.2,20c-0.5,0.5-1.3,0.5-1.9,0l-5.1-5.1c-0.4-0.5-0.4-1.3,0-1.9c0.4-0.5,1.3-0.5,1.9,0l4.1,4.1L19.7,5.7 c0.5-0.5,1.3-0.5,1.9,0s0.5,1.3,0,1.9L9.2,20z"></path></svg> -->
                    <p @click="updateTask('Completed')" id="unasigned">Mark complete</p>
                    <!-- <svg width="100%" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.36 6.232a1 1 0 0 1 1.28 1.536l-3 2.5a1 1 0 0 1-1.28 0l-3-2.5a1 1 0 1 1 1.28-1.536L8 8.198l2.36-1.966z"></path></svg> -->
                </div>
                <!-- <a href="#complete" class="noMobile" @click="updateTask()">Save</a> -->
            </div>
            <div class="right-head-status bx">
                <!-- <div class="focus-head bx noMobile">
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.5 17a.5.5 0 0 1 .5.5v2.302a2 2 0 0 1-.039.392l-.47 2.355a.5.5 0 0 1-.981 0l-.471-2.355a2 2 0 0 1-.039-.392V17.5a.5.5 0 0 1 .5-.5h1zm2-11a.5.5 0 0 1 .5.5V11a2.5 2.5 0 0 0 2.5 2.5h1.25a1.25 1.25 0 0 1 0 2.5H5.25a1.25 1.25 0 0 1 0-2.5H7a2 2 0 0 0 2-2v-5a.5.5 0 0 1 .5-.5zM17 3a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2h10z"></path></svg>
                    <p>Focus</p>
                    <svg width="100%" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.36 6.232a1 1 0 0 1 1.28 1.536l-3 2.5a1 1 0 0 1-1.28 0l-3-2.5a1 1 0 1 1 1.28-1.536L8 8.198l2.36-1.966z"></path></svg>
                </div> -->
                <svg class="svgg Icon AttachVerticalIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M19,32c-3.9,0-7-3.1-7-7V10c0-2.2,1.8-4,4-4s4,1.8,4,4v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9c0-1.1-0.9-2-2-2s-2,0.9-2,2v15c0,2.8,2.2,5,5,5s5-2.2,5-5V10c0-4.4-3.6-8-8-8s-8,3.6-8,8v5c0,0.6-0.4,1-1,1s-1-0.4-1-1v-5C6,4.5,10.5,0,16,0s10,4.5,10,10v15C26,28.9,22.9,32,19,32z"></path></svg>
                <svg class="svgg" id="svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg>
                <svg class="Icon CloseIcon"  @click="updateTask()" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M2,14.5h18.4l-7.4-7.4c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l10,10c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l7.4-7.4H2c-0.8,0-1.5-0.7-1.5-1.5C0.5,15.3,1.2,14.5,2,14.5z M28,3.5C28,2.7,28.7,2,29.5,2S31,2.7,31,3.5v25c0,0.8-0.7,1.5-1.5,1.5S28,29.3,28,28.5V3.5z"></path></svg>
                <!-- <svg @click="removeCardStatus()" class="svgg" id="svg" width="100%" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M12.592 3.22l.1.088c.412.412.412 1.08-.007 1.498L9.491 8l3.194 3.194c.384.384.418.982.095 1.398l-.088.1a1.057 1.057 0 0 1-1.498-.007L8 9.491l-3.194 3.194a1.056 1.056 0 0 1-1.498.007 1.057 1.057 0 0 1 .007-1.498L6.509 8 3.315 4.806a1.058 1.058 0 0 1-.095-1.398l.088-.1a1.057 1.057 0 0 1 1.498.007L8 6.509l3.194-3.194a1.058 1.058 0 0 1 1.398-.095z"></path></svg> -->
            </div>
        </div>
        <div class="bodystatus bx" id="bodystatus">
            <div class="body-left-status">
                <input type="text" class="input-filed inpt inpt-heading" v-model="data.heading" placeholder="Agendas">
                <div class="input-filed">
                    <p class="inpt-title">Assign</p>
                    <select class="inpt-title dropdown" v-if="userInfo.type == 'Client'" disabled v-model="data.assign">
                        <option v-for="(member, ind) in members" :key="ind" :value="member.name">{{upperCase(member.name) + ' - ' + member.type}}</option>
                    </select>
                    <select class="inpt-title dropdown" v-else v-model="data.assign">
                        <option v-for="(member, ind) in members" :key="ind" :value="member.name">{{upperCase(member.name) + ' - ' + member.type}}</option>
                    </select>
                </div>
                <div class="input-filed">
                    <p class="inpt-title">Due date</p>
                    <input type="date"  v-if="userInfo.type == 'Client'"
                     v-model="data.due_date" disabled class="datePicker input-filed">
                    <input type="date" v-else 
                    v-model="data.due_date" class="datePicker input-filed">
                </div>
                <div class="input-filed">
                    <p class="inpt-title">Priority</p>
                    <select class="inpt-title dropdown" v-if="userInfo.type == 'Client'" 
                    disabled v-model="data.priority" >
                        <option selected value="">---</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <select class="inpt-title dropdown" v-else v-model="data.priority" >
                        <option selected value="">---</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div class="input-filed">
                    <p class="inpt-title">Status</p>
                    <select class="inpt-title dropdown" disabled v-if="userInfo.type == 'Client'" v-model="data.tag_status" >
                        <option selected value="">---</option>
                        <option value="On track">On track</option>
                        <option value="At risk">At risk</option>
                        <option value="Off track">Off track</option>
                    </select>
                    <select class="inpt-title dropdown" v-else v-model="data.tag_status" >
                        <option selected value="">---</option>
                        <option value="On track">On track</option>
                        <option value="At risk">At risk</option>
                        <option value="Off track">Off track</option>
                    </select>
                </div>
                <!-- <div class="tags input-filed">
                    <div class="tag-itm" v-for="(tag, ind) in tags" :key="ind">
                        <span class="cls" @click="removeTag(ind)">X</span> {{tag}}
                    </div>
                    <input type="text" class="tags" @keydown="addTag" @keydown.delete="removeLastTag" 
                     placeholder="Tags" style="width: 100%">
                </div> -->
                <p class="input-filed inpt-title">Description</p>
                <textarea class="input-filed inpt" v-if="userInfo.type == 'Client'"
                 v-model="data.description" placeholder="Description" disabled></textarea>
                <textarea class="input-filed inpt" v-else
                 v-model="data.description" placeholder="Description"></textarea>
                <div class="item-att">
                    <!-- <div class="checklist bx items">
                        <svg width="100%" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 2c.552 0 1 .456 1 1.002V7h3.998c.514 0 .937.383.995.883L14 8c0 .552-.456 1-1.002 1H9v3.998a.999.999 0 0 1-.883.995L8 14c-.552 0-1-.456-1-1.002V9H3.002a.999.999 0 1 1 0-2H7V3.002c0-.514.383-.937.883-.995L8 2z"></path></svg>
                        <a href="#checklist">Add Checklist Item</a>
                    </div> -->
                    <!-- <div class="checklist bx items">
                        <a href="#checklist" class="checklist-itm">+</a>
                    </div> -->
                </div>
                <!-- <div class="deadline-status bx">
                    <svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M11.3 9H14a1 1 0 0 1 0 2h-2.8s-.2.1-.2.3V14a1 1 0 0 1-2 0v-2.8s-.1-.2-.3-.2H6a1 1 0 0 1 0-2h2.8s.2-.1.2-.3V6a1 1 0 0 1 2 0v2.8s.1.2.3.2z"></path></g></svg>
                    <div class="text-status">
                        <p id="deadline">6 DAYS AGO</p>
                        <p id="name">Noman Created Task</p>
                    </div>
                </div> -->
                <!-- {{data.id}} -->
                <div class="comment-item" v-for="(itm, ind) in data.comment" :key="ind">
                    <h2 class="">{{upperCase(itm.name)}} created this task</h2>
                    <p class=""> {{itm.comment}}</p>
                </div>
            </div>            
        </div>
        <div class="card-footer">
            <!-- <div class="activity-status bx">
                <p>Activity</p>
                <svg width="100%" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.36 6.232a1 1 0 0 1 1.28 1.536l-3 2.5a1 1 0 0 1-1.28 0l-3-2.5a1 1 0 1 1 1.28-1.536L8 8.198l2.36-1.966z"></path></svg>
            </div> -->
            <form v-on:submit="commentSend" class="comment-boxx">
                <textarea class="comment-box" placeholder="Ask a question or post an update..." v-model="comment"></textarea>
                <!-- <input type="text" placeholder="Add Comment Here..." id="comment-status"> -->
                <button type="submit" class="emojy comment-btn">
                    <!-- <svg width="100%" height="100%" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm4.798 7.827l.196-.061C12.868 11.68 10.68 14 8 14c-2.68 0-4.868-2.32-4.994-5.234C4.476 9.233 6.18 9.5 8 9.5c1.739 0 3.374-.244 4.798-.673l.196-.061zm-.487.825c-1.189.438-2.685.623-4.311.623s-3.122-.185-4.31-.623C4.245 11.01 5.964 12 8 12c2.035 0 3.754-.99 4.31-2.348zM5.75 5c.414 0 .75.448.75 1s-.336 1-.75 1S5 6.552 5 6s.336-1 .75-1zm4.5 0c.414 0 .75.448.75 1s-.336 1-.75 1-.75-.448-.75-1 .336-1 .75-1z"></path></svg> -->
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="11" fill="currentColor"></circle><path fill="#FFF" d="M12.849 7.358a.5.5 0 0 1 .004.005l4.518 4.641-4.518 4.633a.5.5 0 0 1-.711.005l-.709-.709a.5.5 0 0 1-.006-.7L13.58 13H7.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h6.076l-2.15-2.232a.5.5 0 0 1 .007-.7l.709-.71a.5.5 0 0 1 .707 0z"></path></g></svg>
                </button>
            </form>
            <a href="#complete" class="save-btn" @click="removeCardStatus()">
                <svg class="Icon--small Icon ThemeableRectangularButton-leftIcon BellIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M30,20.6c-1.3-1.1-2-2.7-2-4.4v-3.9C28,5.7,22.7,0.1,16.2,0C13,0,9.9,1.2,7.6,3.4C5.3,5.7,4,8.8,4,12v4.2  c0,1.7-0.7,3.3-2,4.4c-1,0.9-1.3,2.4-0.7,3.7c0.5,1,1.6,1.7,2.8,1.7h23.7c1.2,0,2.3-0.7,2.8-1.7C31.3,23,31,21.6,30,20.6z M20.3,28  h-8.5c-0.4,0-0.7,0.2-0.9,0.6s-0.1,0.8,0.1,1.1c0.7,0.8,2.6,2.4,5,2.4s4.3-1.5,5-2.4c0.2-0.3,0.3-0.7,0.1-1.1  C21,28.2,20.6,28,20.3,28z"></path></svg>
                Leave task</a>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    props: ['data'],
    data(){
        return{
            tags: [],
            members: [],
            userInfo: {},
            comment: ''
        }
    },
    components:{},
    created(){
        console.log('Hello!')
        if(this.data && this.data.tags){
            this.tags = this.data.tags
        } if(localStorage.getItem("member")){
            this.members = JSON.parse(localStorage.getItem("member"));
        } if(localStorage.getItem("userInfo")){
            this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        }
    },
    methods: {
        upperCase(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        addTag(event){
            // console.log(event, 'event')
            if(event.code == 'Comma' || event.code == 'Enter'){
                event.preventDefault()
                var val = event.target.value.trim()

                if(val.length > 0) {
                    this.tags.push(val)
                    event.target.value = ''
                }
            }
        },
        removeTag(index){
            this.tags.splice(index, 1)
        },
        removeLastTag(event){
            if(event.target.value.length === 0){
                this.removeTag(this.tags.length - 1)
            }
        },
        removeCardStatus(){
            document.getElementById('cardstatus').classList.remove("cardStatusAdd")
        },
        dateFormate(date){
            return moment(date).fromNow();
            // return moment(date).format('DD-MM-YYYY HH:mm A')
        },
        async charSplit(data){
            try{
                var tag = data.tags.split(",")
                return tag
            }catch(e){
                console.error("Error: ", e)
            }
        },
        async updateTask(data){
            if(data){
                this.data.status = data
            }
            try{
                const decRef = await this.$data.updateDoc(this.$data.doc(this.$data.db, "project", this.data.id), 
                    this.data
                ).then((res)=>{
                    this.removeCardStatus()
                })
                // console.log(decRef, 'res')
            }catch(e){
                console.error("Error adding document: ", e)
            }
                
        },
        async commentSend(e){
            e.preventDefault()
            var comment = {}
            comment.comment = this.comment
            comment.read = 'unread',
            comment.name = this.userInfo.name
            // comment.createdAt = moment().format('DD-MM-YYYY HH:mm A');

            var c = []
            if(this.data.comment){
                c = this.data.comment
                c.push(comment)
            } else{
                c.push(comment)
            }
            this.data.comment = c
            this.comment = ''
            console.log(this.data, 'data')
            try{
                const decRef = await this.$data.updateDoc(this.$data.doc(this.$data.db, "project", this.data.id), {
                    comment: this.data.comment
                }).then((res)=>{
                    this.removeCardStatus()
                })
            }catch(e){
                console.error("Error adding document: ", e)
            }
        }
    },
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p{
    margin: 0
}
.tag-itm{
    background: #eef2f7;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    margin-right: 10px;
}
.tag-itm .cls{
    font-size: 10px;
    margin-right: 7px;
    cursor: pointer;
}
.tags.input-filed input{
    width: 100%;
    background: transparent;
    border: none;
}
.save-btn{
    display: flex;
    align-items: center;
    color: #2d3748;
    /* background-color: #2d3748; */
    font-size: 15px;
    font-weight: 600;
    /* margin-left: 5px; */
    padding: 5px 15px;
    height: 20px;
    border-radius: 5px;
    text-decoration: none;
}
.save-btn:hover{
    background-color: #2d374817;
}
.card-footer .save-btn svg{
    width: 15px;
    height: 15px;
    margin-right: 8px;
}
.card-footer .save-btn svg path{
    fill: #2d3748;
}
.comment-item{
    margin: 0;
    background: #4a55670d;
    padding: 10px;
    margin-bottom: 10px;
}
.comment-item h2{
    font-size: 15px;
    font-weight: 500;
}
.comment-item p{
    margin-top: 5px;
    font-size: 14px;
}
</style>