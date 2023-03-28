<template>
    <div class="inbox-container">
        <div class="inbox">
            <div class="inbox-list">
                <div class="inbox-search">
                    <div class="inbox-search-icon">
                        <svg class="Icon TopbarSearchTypeahead-icon MagnifyerIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M29.707,28.293l-8.256-8.256C23.042,18.13,24,15.677,24,13c0-6.075-4.925-11-11-11S2,6.925,2,13s4.925,11,11,11c2.677,0,5.13-0.958,7.037-2.549l8.256,8.256L29.707,28.293z M4,13c0-4.963,4.037-9,9-9c4.963,0,9,4.037,9,9s-4.037,9-9,9C8.037,22,4,17.963,4,13z"></path></svg>
                    </div>
                    <input type="text" class="inpt-search" placeholder="Search...">
                </div>
                <div class="inbox-item" @click="inboxShow = true">
                    <div class="profile-img">
                        <img src="../assets/background1.jpg" alt="">
                    </div>
                    <div class="profile-detail">
                        <div class="row">
                            <h2 class="profile-name">Noman Shahid</h2>
                            <p class="time">03:10 AM</p>
                        </div>
                        <p class="description">Hello! how are you...</p>
                    </div>
                </div>
                <div class="inbox-item">
                    <div class="profile-img">
                        <img src="../assets/background1.jpg" alt="">
                    </div>
                    <div class="profile-detail">
                        <div class="row">
                            <h2 class="profile-name">Noman Shahid</h2>
                            <p class="time">03:10 AM</p>
                        </div>
                        <p class="description">Hello! how are you...</p>
                    </div>
                </div>
                <div class="inbox-item">
                    <div class="profile-img">
                        <img src="../assets/background1.jpg" alt="">
                    </div>
                    <div class="profile-detail">
                        <div class="row">
                            <h2 class="profile-name">Noman Shahid</h2>
                            <p class="time">03:10 AM</p>
                        </div>
                        <p class="description">Hello! how are you...</p>
                    </div>
                </div>
                <div class="inbox-item">
                    <div class="profile-img">
                        <img src="../assets/background1.jpg" alt="">
                    </div>
                    <div class="profile-detail">
                        <div class="row">
                            <h2 class="profile-name">Noman Shahid</h2>
                            <p class="time">03:10 AM</p>
                        </div>
                        <p class="description">Hello! how are you...</p>
                    </div>
                </div>
            </div>
            <div class="inbox-detail" v-bind:class="{show: inboxShow}">
                <div class="inbox-detail-head">
                    <div class="inbox-profile">
                        <div class="profile-img">
                            <img src="../assets/background1.jpg" alt="">
                        </div>
                        <div class="profile-detail">
                            <h2 class="profile-name">Noman Shahid</h2>
                            <p class="time">Active Now</p>
                        </div>
                    </div>
                    <div class="inbox-tool"></div>
                </div>
                <div class="inbox-detail-body">
                    <div class="inbox-body">
                        <div class="inbox-message sender">Your story.</div>
                        <div class="inbox-message receiver">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                        <div class="inbox-message sender">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                        <div class="inbox-message receiver">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                        <div class="inbox-message receiver">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                        <div class="inbox-message sender">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                        <div class="inbox-message sender">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                        <div class="inbox-message receiver">Your story continues on mobile</div>
                        <div class="inbox-message sender">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                        <div class="inbox-message receiver">Your story</div>
                        <div class="inbox-message sender">Your story continues on mobile: Build and edit decks. 
                            Give and received feedback. Add content from any other app.</div>
                    </div>
                    <div class="inbox-footer">
                        <div class="inpt-inbox">
                            <input type="text" placeholder="Type a message">
                            <button class="inbox-btn">Send</button>
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
            inboxShow: false
        }
    }
}
</script>