<template>
    <div class="sdlc-contanier" id="sdlcmodels">
        <div class="close-btn" @click="close()">x</div>
        <div class="sdlc-text">
            <p id="text">Create Project Using Models</p>
        </div>
        <div class="sdlc-waterfall model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#Waterfall">Waterfall Model</a>
        </div>
        <div class="sdlc-v-model model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#V-Models">V-Model</a>
        </div>
        <div class="sdlc-incremental-model model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#Incremental Model">Incremental Model</a>
        </div>
        <div class="sdlc-spiral-model model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#Spiral Model">Spiral Model</a>
        </div>
        <div class="sdlc-RUP model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#RUP">RUP</a>
        </div>
        <div class="sdlc-scrum model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#scrum">Scrum Model</a>
        </div>
        <div class="sdlc-XP model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#XP">XP</a>
        </div>
        <div class="sdlc-kanban model">
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <a href="#Kanban Model">Kanban Model</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    components:{
        
    },
    methods: {
        close(){  
            document.getElementById('sdlcmodels').classList.remove("sdlcShow")
        }
    }
}

</script>