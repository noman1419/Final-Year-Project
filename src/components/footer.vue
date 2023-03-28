<template>
    <div class="footer">
        <div class="contact-footer">
            <div class="footer-tool">
                <h3>Development Tools</h3>
                <p>Visual Studio Code</p>
                <p>Html</p>
                <p>Css</p>
                <p>JavaScript</p>
                <p>Vue.js</p>
            </div>
            <div class="footer-member">
                <h3>Team Member</h3>
                <p>Taloot Irfan</p>
                <p>Noman Shahid</p>
            </div>
            <div class="footer-marketing">
                <h3>Marketing Resource</h3>
                <p>DigitalFlip Blog</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Tweeter</p>
                <p>Recommended SEO Companies</p>
            </div>
            <div class="footer-Refrence">
                <h3>Web Reference</h3>
                <p>Asana</p>
                <p>Task</p>
                <p>GoogleSheet</p>
                <p>Jira</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.contact-header{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 30vh;
    width: 100%;
    margin: 0;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
}
.contact-body input{
    padding: 10px 50px;
    border: none;
    margin-top: 10px;
    background-color: #EEF2F7;
    border-radius: 5px;
    width: 100%;
    height: 3vh;
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
.footer{
    background-color: #EEF2F7;
    margin-top: 50px;
}
.contact-footer{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1280px;
    width: 100%;
    margin: auto;
    padding: 25px 0;
}
.footer-tool,  .footer-member, .footer-marketing, .footer-Refrence{
    margin-left: 30px;
}
.contact-footer h3{
    /* margin: 20px 0px 0px -15px; */
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 10px;
}
.contact-footer p{
    color: #4a5567;
    margin: 5px 1px 7px 0px;
    font-size: 14px;
}

</style>