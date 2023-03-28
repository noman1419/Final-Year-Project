<template>
  <div id="app">
    <router-view/>
    <profile/>
  </div>
</template>

<script>
import profile from '@/components/profile.vue' 
export default {
  created(){
  },
  components:{ profile },
  data(){
    return{
      userInfo: {}
    }
  },
  watch: {
    "$route.params": {
      handler (newValue, oldValue) {
        // console.log(this.$route.path, 'path')
        if(localStorage.getItem('userInfo')){
          this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        }else if(this.$route.path != '/signup' && this.$route.path != '/about' && this.$route.path != '/'){
          // console.log(this.$route.path, 'hello')
          this.$router.push({path:'/signin'});
        }
        // if(this.$route.path != '/'){
        //   console.log('hello')
        //   this.$router.push({path:'/signin'});
        // }
        
      },
      immediate: true
    }
  },
}
</script>
