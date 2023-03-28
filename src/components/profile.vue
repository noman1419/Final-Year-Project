<template>
  <div class="profile" id="profile-popup">
    <div class="profile-popup" id="profile-popup">
        <div class="profile-header">
            <div class="profile-header-content">
              <div class="cls" @click="closePopup()"><svg class="Icon XIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg></div>
                <h2>My Settings</h2>
                <ul class="profile-header-navbar">
                  <li @click="state = 'profile'" v-bind:class="{'nav-bar-active': state == 'profile'}">Profile</li>  
                  <li @click="state = 'account'"  v-bind:class="{'nav-bar-active': state == 'account'}">Password</li>  
                  <li @click="state = 'member'"  v-bind:class="{'nav-bar-active': state == 'member'}">Members</li>    
                </ul>
            </div>
        </div>
        <div class="profile-body">
            <div class="profile-body-content">
              <div class="profile-content-itm" v-if="state == 'profile'">
                <form v-on:submit="updateUser" class="profile-content-form">
                  <div class="field half-field">
                    <label>Full Name</label>
                    <input v-model="userInfo.name" class="field-input" type="text" >
                  </div>
                  <div class="field half-field">
                    <label>Email</label>
                    <input v-model="userInfo.email" class="field-input" disabled type="text" >
                  </div>
                  <div class="field half-field">
                    <label>Role</label>
                    <input v-model="userInfo.type" disabled class="field-input" type="text" >
                  </div>
                  <div class="field half-field">
                    <label>Company Name</label>
                    <input v-model="userInfo.company" class="field-input" type="text" >
                  </div>
                  <div class="field">
                    <label>About me</label>
                    <textarea v-model="userInfo.about" class="field-input" placeholder="I usually work from 9am-5pm PST. Feel free to assign me a task with a due date anytime. Also, I love dogs!"></textarea>
                    <!-- <input class="field-input" disabled type="text" > -->
                  </div>
                  <div class="field">
                    <button type="submit" class="btn">Update</button>
                  </div>
                </form>
              </div>
              <div class="profile-content-itm"  v-if="state == 'account'">
                <form v-on:submit="changePassword" class="profile-content-form">
                  <div class="field half-field">
                    <label>Current Password</label>
                    <input v-model="currentPassword" class="field-input" type="password" >
                  </div>
                  <div class="field half-field">
                    <label>New Password</label>
                    <input v-model="newPassword" class="field-input" type="password" >
                  </div>
                  <div class="field half-field">
                    <label>Confirm New Password</label>
                    <input v-model="confirmPassword" class="field-input" type="password" >
                  </div>
                  <p class="field error" v-if="error">{{errorMessage}}</p>
                  <p class="field sucess" v-if="sucess">{{sucessMessage}}</p>
                  <div class="field">
                    <button type="submit" class="btn">Update</button>
                  </div>
                </form>
              </div>
              <div class="profile-content-itm"  v-if="state == 'member'">
                <div class="member-listing">
                  <div class="member-item" v-for="(itm, ind) in member" :key="ind">
                    <p class="member-item-text">{{itm.email}} - <span v-if="!edit">{{itm.type}}</span>
                    <span v-if="edit">
                      <select v-model="itm.type" class="field-input member-field" type="password" >
                        <option value="Admin">Admin </option>
                        <option value="Team Lead">Team Lead </option>
                        <option value="Member">Member </option>
                        <option value="Client">Client </option>
                      </select>
                    </span> </p>
                    <p class="editBtn" id="edit-btn" @click="edit = true" v-if="edit == false">Edit</p>
                    <p class="editBtn" id="edit-btn" @click="updateRole(itm)" v-if="edit == true">Save</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        state: 'member',
        userInfo: {},
        member: [],
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        error: false,
        errorMessage: '',
        sucess: false,
        sucessMessage: '',
        edit: false
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
        if(localStorage.getItem("member")){
          this.member = JSON.parse(localStorage.getItem("member"));
        }
      },
      closePopup(){
        document.getElementById('profile-popup').classList.remove('show')
      },
      async updateUser(e){
        e.preventDefault()
        // console.log(this.userInfo , 'user')
        try{
          const decRef = await this.$data.updateDoc(this.$data.doc(this.$data.db, "user", this.userInfo.id), 
            this.userInfo
          ).then((res)=>{
            localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
            // console.log(this.userInfo , 'user')
          })
        }catch(e){
          console.error("Error updating document: ", e)
        }
      },
      async changePassword(e){
        e.preventDefault()
        this.error = false
        this.sucess = false
        if(this.currentPassword == this.userInfo.password){
          console.log('Same')
          if(this.newPassword == this.confirmPassword){
            if(this.newPassword == this.userInfo.password){
              this.error = true
              this.errorMessage = 'New Password cant be same as old'
              // console.log('New Password cant be same as old')
            }else{
              try{
                this.userInfo.password = this.newPassword
                const decRef = await this.$data.updateDoc(this.$data.doc(this.$data.db, "user", this.userInfo.id), {
                  password: this.newPassword
              }).then((res)=>{
                localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
                // console.log(this.userInfo , 'user')
              })} catch(e){
                console.error("Error updating document: ", e)
              }

              this.sucess = true
              this.sucessMessage = 'Password update sucessfully'
              // console.log('update password')
            }
          } else{
            this.error = true
            this.errorMessage = 'Password should be same'
            // console.log('password should be same')
          }
        } else{
          this.error = true
          this.errorMessage = 'Enter correct password'
          // console.log('enter correct password')
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
      async updateRole(itm){
        event.preventDefault()
        // console.log(this.userInfo , 'user')
        document.getElementById("edit-btn").disabled = false
        document.getElementById('edit-btn').innerHTML = 'Saving...'
        try{
          const decRef = await this.$data.updateDoc(this.$data.doc(this.$data.db, "user", itm.id), 
            itm
          ).then((res)=>{
            // console.log(this.userInfo , 'user')
            this.edit = false
            document.getElementById('edit-btn').innerHTML = 'Edit'
            this.getData()
          })
        }catch(e){
          console.error("Error updating document: ", e)
        }
      }
    }
  }
</script>
<style scoped>
h1,h2,h3,h4,h5,h6,p{
  margin: 0;
}
.member-listing{
  margin-left: 15px;
}
.member-item{
  display: flex;
  font-size: 14px;
  margin-bottom: 10px;
}
.member-item-text span{
  color: #4a5567;
}
.member-item .editBtn{
  margin-left: 10px;
  color: #257ef2;
  cursor: pointer;
}
.field.error{
  color: #df0606;
  font-size: 14px;
  margin-top: -10px;
  background: #df060626;
  padding: 10px;
}
.field.sucess{
  background-color: rgba(224, 244, 236, 0.89);
  color: rgb(90, 159, 132);
  font-size: 14px;
  margin-top: -10px;
  padding: 10px;
}
</style>