<template>
    <div class="dashboard_main">
        <sideBar/>
        <div class="main_body">
            <topBar/>
            <router-view name="app"/>
        </div>
        <newTask/>
    </div>
</template>


<script>
import sideBar from '../components/sideBar.vue'
import topBar from '../components/topNavigation.vue'
import newTask from '../components/newTaskPopup.vue'
export default {
  components: { sideBar, topBar, newTask },

}
</script>

<style>

</style>