<template>
        <div class="project project-contianer">
            <div class="white-contianer bg-white">
                <div class="a-contianer advanace-heading">
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.783 2.024a1 1 0 0 1 1.193.76l3.168 14.255 1.684-5.614A2 2 0 0 1 15.744 10h1.427a3.001 3.001 0 1 1 0 2h-1.427l-2.786 9.287a1 1 0 0 1-1.934-.07L7.807 6.74l-1.63 4.891A2 2 0 0 1 4.279 13H1a1 1 0 0 1 0-2h3.28L7.05 2.684a1 1 0 0 1 .732-.66zM20 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                    <p>To do</p>
                </div>
                <div class="card-container advance-body">
                    <div class="card-display" style="width:100%"
                        v-for="(itm, ind) in data" :key="ind" v-if="itm.status=='Pending'" >
                        <div class="card" @click="addCardStatus(itm)" v-if="userInfo.type != 'Client' && userInfo.type != 'Employee'">
                            <div class="card-body no-header">
                                <p class="card-heading" v-if="itm.heading">{{itm.heading}}</p>
                                <p class="card-descrition" v-if="itm.description">{{itm.description}}</p>
                                <p class="card-date" id="cardDate" v-if="itm.due_date"><span><svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".205"></circle><rect width="11" height="10" x="4.5" y="5.5" stroke="currentColor" rx="2"></rect><path fill="currentColor" d="M13.499 5A2.498 2.498 0 0 1 16 7.51V8H4v-.49A2.511 2.511 0 0 1 6.501 5h6.998z"></path><circle cx="7" cy="10" r="1" fill="currentColor"></circle><circle cx="10" cy="10" r="1" fill="currentColor"></circle><circle cx="13" cy="10" r="1" fill="currentColor"></circle><circle cx="7" cy="13" r="1" fill="currentColor"></circle><circle cx="10" cy="13" r="1" fill="currentColor"></circle><circle cx="13" cy="13" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4.5v2M13.5 4.5v2"></path></g></svg></span>
                                 {{dateFormate(itm.due_date)}}</p>
                                <!-- <img src="../assets/robort.png" alt="robort" class="card-img"> -->
                                <div class="card-footer">
                                    <!-- <div class="count">
                                        <svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd"><circle cx="10" cy="10" r="10" opacity=".205"></circle><path d="M8.703 5.257a.688.688 0 1 1 .973.973l-3.55 3.55a2.56 2.56 0 0 0 3.622 3.622l4.385-4.386a1.675 1.675 0 0 0-2.368-2.368L9.05 9.363a.789.789 0 0 0 1.115 1.115l1.88-1.88a.688.688 0 0 1 .973.973l-1.88 1.88A2.165 2.165 0 1 1 8.077 8.39l2.715-2.715a3.05 3.05 0 1 1 4.314 4.314l-4.385 4.386a3.937 3.937 0 0 1-5.568-5.568l3.55-3.55z"></path></g></svg>               
                                        <div class="one">1</div>
                                    </div> #9ee7e3 -->
                                    <button class="basic card-button" style="background:#9ee7e3;color:#2d3748" v-if="itm && itm.priority == 'Low'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#f1bd6c;color:#2d3748" v-if="itm && itm.priority == 'Medium'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#b36bd4;color:#fcfcfc" v-if="itm && itm.priority == 'High'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#4ecbc4;color:#2d3748" v-if="itm && itm.tag_status == 'On track'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f8df72;color:#2d3748" v-if="itm && itm.tag_status == 'At risk'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f06a6a;color:#2d3748" v-if="itm && itm.tag_status == 'Off track'">{{itm.tag_status}}</button>
                                </div>
                            </div>
                        </div>
                        <div class="card" v-else>
                            <div class="card-body no-header">
                                <p class="card-heading" v-if="itm.heading">{{itm.heading}}</p>
                                <p class="card-descrition" v-if="itm.description">{{itm.description}}</p>
                                <p class="card-date" v-if="itm.due_date"><span><svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".205"></circle><rect width="11" height="10" x="4.5" y="5.5" stroke="currentColor" rx="2"></rect><path fill="currentColor" d="M13.499 5A2.498 2.498 0 0 1 16 7.51V8H4v-.49A2.511 2.511 0 0 1 6.501 5h6.998z"></path><circle cx="7" cy="10" r="1" fill="currentColor"></circle><circle cx="10" cy="10" r="1" fill="currentColor"></circle><circle cx="13" cy="10" r="1" fill="currentColor"></circle><circle cx="7" cy="13" r="1" fill="currentColor"></circle><circle cx="10" cy="13" r="1" fill="currentColor"></circle><circle cx="13" cy="13" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4.5v2M13.5 4.5v2"></path></g></svg></span>
                                 {{itm.due_date}}</p>
                                <!-- <img src="../assets/robort.png" alt="robort" class="card-img"> -->
                                <div class="card-footer">
                                    <!-- <div class="count">
                                        <svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd"><circle cx="10" cy="10" r="10" opacity=".205"></circle><path d="M8.703 5.257a.688.688 0 1 1 .973.973l-3.55 3.55a2.56 2.56 0 0 0 3.622 3.622l4.385-4.386a1.675 1.675 0 0 0-2.368-2.368L9.05 9.363a.789.789 0 0 0 1.115 1.115l1.88-1.88a.688.688 0 0 1 .973.973l-1.88 1.88A2.165 2.165 0 1 1 8.077 8.39l2.715-2.715a3.05 3.05 0 1 1 4.314 4.314l-4.385 4.386a3.937 3.937 0 0 1-5.568-5.568l3.55-3.55z"></path></g></svg>               
                                        <div class="one">1</div>
                                    </div> -->
                                    <button class="basic card-button" style="background:#9ee7e3;color:#2d3748" v-if="itm && itm.priority == 'Low'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#f1bd6c;color:#2d3748" v-if="itm && itm.priority == 'Medium'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#b36bd4;color:#fcfcfc" v-if="itm && itm.priority == 'High'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#4ecbc4;color:#2d3748" v-if="itm && itm.tag_status == 'On track'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f8df72;color:#2d3748" v-if="itm && itm.tag_status == 'At risk'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f06a6a;color:#2d3748" v-if="itm && itm.tag_status == 'Off track'">{{itm.tag_status}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white-contianer bg-lightgray">
                <div class="a-contianer addtask-heading">
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.783 2.024a1 1 0 0 1 1.193.76l3.168 14.255 1.684-5.614A2 2 0 0 1 15.744 10h1.427a3.001 3.001 0 1 1 0 2h-1.427l-2.786 9.287a1 1 0 0 1-1.934-.07L7.807 6.74l-1.63 4.891A2 2 0 0 1 4.279 13H1a1 1 0 0 1 0-2h3.28L7.05 2.684a1 1 0 0 1 .732-.66zM20 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                    <p>In Progress</p>
                </div>
                <div class="card-container addtask-body">
                    <div class="card-display" style="width:100%"
                     v-for="(itm, ind) in data" :key="ind" v-if="itm.status=='In Progress'">
                        <div class="card" @click="addCardStatus(itm)" v-if="userInfo.type != 'Client' && userInfo.type != 'Employee'">
                            <div class="card-body no-header">
                                <p class="card-heading" v-if="itm.heading">{{itm.heading}}</p>
                                <p class="card-descrition" v-if="itm.description">{{itm.description}}</p>
                                <p class="card-date" v-if="itm.due_date"><span><svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".205"></circle><rect width="11" height="10" x="4.5" y="5.5" stroke="currentColor" rx="2"></rect><path fill="currentColor" d="M13.499 5A2.498 2.498 0 0 1 16 7.51V8H4v-.49A2.511 2.511 0 0 1 6.501 5h6.998z"></path><circle cx="7" cy="10" r="1" fill="currentColor"></circle><circle cx="10" cy="10" r="1" fill="currentColor"></circle><circle cx="13" cy="10" r="1" fill="currentColor"></circle><circle cx="7" cy="13" r="1" fill="currentColor"></circle><circle cx="10" cy="13" r="1" fill="currentColor"></circle><circle cx="13" cy="13" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4.5v2M13.5 4.5v2"></path></g></svg></span>
                                 {{itm.due_date}}</p>
                                <!-- <img src="../assets/robort.png" alt="robort" class="card-img"> -->
                                <div class="card-footer" v-if="itm.tags">
                                    <!-- <div class="count">
                                        <svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd"><circle cx="10" cy="10" r="10" opacity=".205"></circle><path d="M8.703 5.257a.688.688 0 1 1 .973.973l-3.55 3.55a2.56 2.56 0 0 0 3.622 3.622l4.385-4.386a1.675 1.675 0 0 0-2.368-2.368L9.05 9.363a.789.789 0 0 0 1.115 1.115l1.88-1.88a.688.688 0 0 1 .973.973l-1.88 1.88A2.165 2.165 0 1 1 8.077 8.39l2.715-2.715a3.05 3.05 0 1 1 4.314 4.314l-4.385 4.386a3.937 3.937 0 0 1-5.568-5.568l3.55-3.55z"></path></g></svg>               
                                        <div class="one">1</div>
                                    </div> -->
                                    <button class="basic card-button" style="background:#9ee7e3;color:#2d3748" v-if="itm && itm.priority == 'Low'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#f1bd6c;color:#2d3748" v-if="itm && itm.priority == 'Medium'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#b36bd4;color:#fcfcfc" v-if="itm && itm.priority == 'High'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#4ecbc4;color:#2d3748" v-if="itm && itm.tag_status == 'On track'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f8df72;color:#2d3748" v-if="itm && itm.tag_status == 'At risk'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f06a6a;color:#2d3748" v-if="itm && itm.tag_status == 'Off track'">{{itm.tag_status}}</button>
                                </div>
                            </div>
                        </div>
                        <div class="card" v-else>
                            <div class="card-body no-header">
                                <p class="card-heading" v-if="itm.heading">{{itm.heading}}</p>
                                <p class="card-descrition" v-if="itm.description">{{itm.description}}</p>
                                <p class="card-date" v-if="itm.due_date"><span><svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".205"></circle><rect width="11" height="10" x="4.5" y="5.5" stroke="currentColor" rx="2"></rect><path fill="currentColor" d="M13.499 5A2.498 2.498 0 0 1 16 7.51V8H4v-.49A2.511 2.511 0 0 1 6.501 5h6.998z"></path><circle cx="7" cy="10" r="1" fill="currentColor"></circle><circle cx="10" cy="10" r="1" fill="currentColor"></circle><circle cx="13" cy="10" r="1" fill="currentColor"></circle><circle cx="7" cy="13" r="1" fill="currentColor"></circle><circle cx="10" cy="13" r="1" fill="currentColor"></circle><circle cx="13" cy="13" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4.5v2M13.5 4.5v2"></path></g></svg></span>
                                 {{itm.due_date}}</p>
                                <!-- <img src="../assets/robort.png" alt="robort" class="card-img"> -->
                                <div class="card-footer" v-if="itm.tags">
                                    <!-- <div class="count">
                                        <svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd"><circle cx="10" cy="10" r="10" opacity=".205"></circle><path d="M8.703 5.257a.688.688 0 1 1 .973.973l-3.55 3.55a2.56 2.56 0 0 0 3.622 3.622l4.385-4.386a1.675 1.675 0 0 0-2.368-2.368L9.05 9.363a.789.789 0 0 0 1.115 1.115l1.88-1.88a.688.688 0 0 1 .973.973l-1.88 1.88A2.165 2.165 0 1 1 8.077 8.39l2.715-2.715a3.05 3.05 0 1 1 4.314 4.314l-4.385 4.386a3.937 3.937 0 0 1-5.568-5.568l3.55-3.55z"></path></g></svg>               
                                        <div class="one">1</div>
                                    </div> -->
                                    <button class="basic card-button" style="background:#9ee7e3;color:#2d3748" v-if="itm && itm.priority == 'Low'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#f1bd6c;color:#2d3748" v-if="itm && itm.priority == 'Medium'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#b36bd4;color:#fcfcfc" v-if="itm && itm.priority == 'High'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#4ecbc4;color:#2d3748" v-if="itm && itm.tag_status == 'On track'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f8df72;color:#2d3748" v-if="itm && itm.tag_status == 'At risk'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f06a6a;color:#2d3748" v-if="itm && itm.tag_status == 'Off track'">{{itm.tag_status}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white-contianer bg-white">
                <div class="a-contianer done-heading">
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.783 2.024a1 1 0 0 1 1.193.76l3.168 14.255 1.684-5.614A2 2 0 0 1 15.744 10h1.427a3.001 3.001 0 1 1 0 2h-1.427l-2.786 9.287a1 1 0 0 1-1.934-.07L7.807 6.74l-1.63 4.891A2 2 0 0 1 4.279 13H1a1 1 0 0 1 0-2h3.28L7.05 2.684a1 1 0 0 1 .732-.66zM20 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                    <p>Complete</p>
                </div>
                <div class="card-container done-body">
                    <div class="card-display" style="width: 100%">
                        <div class="card" v-for="(itm, ind) in data" :key="ind" v-if="itm.status == 'Completed'">
                            <div class="status card-header success-bg">
                                <div class="kr-view" style="width: 20px; height: 20px; margin-right: 10px; color: rgb(61, 204, 61);"><svg width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="currentColor"></circle><path fill="#FFF" d="M10.173 13.114l-1.622-1.621a1.32 1.32 0 0 0-1.866 1.867L9.325 16a1.802 1.802 0 0 0 2.546 0l6.25-6.247a1.32 1.32 0 0 0-1.866-1.867l-5.233 5.23a.6.6 0 0 1-.849 0z"></path></g></svg></div>
                                <div class="complete">
                                    <p class="commentcard-green color-success">Complete</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="cardbody content">
                                    <p class="card-heading"><del>{{itm.heading}}</del></p>
                                    <div class="card-description"><del>{{itm.description}}</del></div>
                                    <p class="card-date" v-if="itm.due_date"><span><svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".205"></circle><rect width="11" height="10" x="4.5" y="5.5" stroke="currentColor" rx="2"></rect><path fill="currentColor" d="M13.499 5A2.498 2.498 0 0 1 16 7.51V8H4v-.49A2.511 2.511 0 0 1 6.501 5h6.998z"></path><circle cx="7" cy="10" r="1" fill="currentColor"></circle><circle cx="10" cy="10" r="1" fill="currentColor"></circle><circle cx="13" cy="10" r="1" fill="currentColor"></circle><circle cx="7" cy="13" r="1" fill="currentColor"></circle><circle cx="10" cy="13" r="1" fill="currentColor"></circle><circle cx="13" cy="13" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4.5v2M13.5 4.5v2"></path></g></svg></span>
                                        {{itm.due_date}}</p>
                                </div>
                                <div class="card-footer" v-if="itm.tags">
                                    <button class="basic card-button" style="background:#9ee7e3;color:#2d3748" v-if="itm && itm.priority == 'Low'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#f1bd6c;color:#2d3748" v-if="itm && itm.priority == 'Medium'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#b36bd4;color:#fcfcfc" v-if="itm && itm.priority == 'High'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#4ecbc4;color:#2d3748" v-if="itm && itm.tag_status == 'On track'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f8df72;color:#2d3748" v-if="itm && itm.tag_status == 'At risk'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f06a6a;color:#2d3748" v-if="itm && itm.tag_status == 'Off track'">{{itm.tag_status}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="gray-contianer bg-lightgray">
                <div class="a-contianer inprogress-heading">
                    <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.783 2.024a1 1 0 0 1 1.193.76l3.168 14.255 1.684-5.614A2 2 0 0 1 15.744 10h1.427a3.001 3.001 0 1 1 0 2h-1.427l-2.786 9.287a1 1 0 0 1-1.934-.07L7.807 6.74l-1.63 4.891A2 2 0 0 1 4.279 13H1a1 1 0 0 1 0-2h3.28L7.05 2.684a1 1 0 0 1 .732-.66zM20 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                    <p>Cancelled</p>
                </div>
                <div class="card-container inprogress-body">
                    <!-- <div class="card-display"> -->
                        <div class="card" v-for="(itm, ind) in data" :key="ind" 
                        v-if="itm.status == 'Cancelled'">
                            <div class="status card-header dull-bg">
                                <!-- <div class="kr-view" style="width: 20px; height: 20px; margin-right: 10px; color: rgb(61, 204, 61);"><svg width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="currentColor"></circle><path fill="#FFF" d="M10.173 13.114l-1.622-1.621a1.32 1.32 0 0 0-1.866 1.867L9.325 16a1.802 1.802 0 0 0 2.546 0l6.25-6.247a1.32 1.32 0 0 0-1.866-1.867l-5.233 5.23a.6.6 0 0 1-.849 0z"></path></g></svg></div> -->
                                <div class="complete">
                                    <p class="color-dull">Cancelled</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="cardbody content">
                                    <p class="card-heading"><del>{{itm.heading}}</del></p>
                                    <div class="card-description"><del>{{itm.description}}</del></div>
                                    <p class="card-date" v-if="itm.due_date"><span><svg width="100%" height="100%" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".205"></circle><rect width="11" height="10" x="4.5" y="5.5" stroke="currentColor" rx="2"></rect><path fill="currentColor" d="M13.499 5A2.498 2.498 0 0 1 16 7.51V8H4v-.49A2.511 2.511 0 0 1 6.501 5h6.998z"></path><circle cx="7" cy="10" r="1" fill="currentColor"></circle><circle cx="10" cy="10" r="1" fill="currentColor"></circle><circle cx="13" cy="10" r="1" fill="currentColor"></circle><circle cx="7" cy="13" r="1" fill="currentColor"></circle><circle cx="10" cy="13" r="1" fill="currentColor"></circle><circle cx="13" cy="13" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4.5v2M13.5 4.5v2"></path></g></svg></span>
                                        {{itm.due_date}}</p>
                                </div>
                                <div class="card-footer" v-if="itm.tags">
                                    <button class="basic card-button" style="background:#9ee7e3;color:#2d3748" v-if="itm && itm.priority == 'Low'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#f1bd6c;color:#2d3748" v-if="itm && itm.priority == 'Medium'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#b36bd4;color:#fcfcfc" v-if="itm && itm.priority == 'High'">{{itm.priority}}</button>
                                    <button class="basic card-button" style="background:#4ecbc4;color:#2d3748" v-if="itm && itm.tag_status == 'On track'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f8df72;color:#2d3748" v-if="itm && itm.tag_status == 'At risk'">{{itm.tag_status}}</button>
                                    <button class="basic card-button" style="background:#f06a6a;color:#2d3748" v-if="itm && itm.tag_status == 'Off track'">{{itm.tag_status}}</button>
                                </div>
                            </div>
                        </div>
                    <!-- </div>  -->
                </div>
            </div>
            <cardPopupStatus :data="item" />
        </div>
</template>
<script>
import cardPopupStatus from '../components/cardPopup.vue'
import moment from 'moment'
export default {
    data(){
        return{
            userInfo: {},
            route_id: 'hello',
            data: [],
            item: {},
            description: '',
        }
    },
    components: { cardPopupStatus},
    created(){
        // this.init()
    },
    watch: {
        "$route.params": {
        handler(newValue, preValue) {
              this.init()
        },  
        immediate: true
        }
    },
    methods: {
        addCardStatus(itm){
            if(this.$route.params.id){
                this.route_id = this.$route.params.id
            }
            this.item = itm
            document.getElementById('cardstatus').classList.add("cardStatusAdd")
        },
        async init(){
            if(this.$route.params.id){
                this.route_id = this.$route.params.id
            }
            this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            try{
                var data = []
                const userRef = this.$data.query(this.$data.collection(this.$data.db, "project"),this.$data.where("assign", "==", this.userInfo.name),this.$data.where("company", "==", this.userInfo.company))
                // console.log(userRef, 'userRef')
                const decRef = await this.$data.getDocs(userRef)
                .then((res)=>{
                    res.docs.forEach((doc) =>{
                        data.push({...doc.data(), id: doc.id})
                    })
                    this.data = data
                    // console.log(this.data, 'data')
                })
            }catch(e){
                console.error("Error adding document: ", e)
            }
        },
        addTask(){
            // console.log(this.description, 'description')
        },
        dateFormate(date){
            return moment(date).format('DD-MM-YYYY')
        }
    }

} 
</script>
<style scoped>
.add-btn{
    min-width: 35px;
    min-height: 35px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    margin-bottom: 40px;
    box-shadow: 0 1px 3px 1px #2d374826;
    margin-top: 10px;
}
.add-btn svg{
    width: 15px;
    height: 15px;
}
</style>