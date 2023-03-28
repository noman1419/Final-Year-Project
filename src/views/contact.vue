<template>
    <div class="contact-us">
        <headerr/>
        <div class="logo">
            </div>
        <div class="contact-header">
            <h1>Contact Us</h1>
            <p>Contact the Help Team</p>
        </div>
        <div class="contact-body">
            <form>
                <input type="text" placeholder="Enter Your Name" required>
                <input type="email" placeholder="Enter Your Email" required>
                <input type="text" placeholder="Subject">
                <input type="text" placeholder="Details" style="height: 50px;">
                <button>Submit</button>
            </form>
        </div>
        <footerr/>
    </div>
</template>

<script>
import headerr from '@/components/header.vue'
import footerr from '@/components/footer.vue'
export default {
    components: {
        headerr,
        footerr
    },
}
</script>

<style scoped>

.logo h4{
    color: #eef3f7;
    /* position: absolute; */
    /* top: 10px; */
    /* left: 10px; */
    /* z-index: 9; */
}

.contact-header{
    /* position: absolute;  */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-top: 70px;
    width: 100%;
    background-color: #2d3748;
}
.contact-header h1{
    color: #fbfbfe;
    margin: 0;
    margin-top: 10px;
    font-weight: 600;
}
.contact-header p{
    color: #EEF2F7;
    margin: 0;
    margin-top: 10px;
    font-size: 18px;
}
.contact-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    
}
form{
    max-width: 430px;
    width: 90%;
    margin: auto;
}
.contact-body input{
    padding: 10px 20px;
    border: none;
    margin-top: 10px;
    background-color: #EEF2F7;
    border-radius: 5px;
    width: calc(100% - 40px);
    height: 25px;
}
.contact-body button{
    margin-top: 10px;
    padding: 10px 50px;
    border: none;
    background: #4a5567;
    border-radius: 5px;
    color: #fbfbfe;
    cursor: pointer;
}
.contact-footer{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 90vh;
    background-color: #EEF2F7;
}
.footer-tool{
    margin-left: 30px;
}
.contact-footer h3{
    margin: 20px 0px 0px -15px;
    font-weight: 600;
    color: #2d3748;
}
.contact-footer p{
    color: #4a5567;
    color: #4a5567;
    margin: 5px 1px 7px 0px;
}

</style>