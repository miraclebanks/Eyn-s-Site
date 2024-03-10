(function(){"use strict";var e={934:function(e,t,a){var n=a(328),o=a(760);function r(e,t,a,n,r,i){const s=(0,o.E1)("Navigation"),l=(0,o.E1)("Map");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.K2)(s),(0,o.K2)(l)],64)}const i=e=>((0,o.ED)("data-v-5d89a032"),e=e(),(0,o.ii)(),e),s={class:"nav-container"},l=i((()=>(0,o.QD)("div",{class:"links"},[(0,o.QD)("a",null," Home")],-1))),c=i((()=>(0,o.QD)("div",{class:"links"},[(0,o.QD)("a",null," About Us")],-1))),u=i((()=>(0,o.QD)("div",{class:"links"},[(0,o.QD)("a",null," Contact Us")],-1))),d=[l,c,u];function v(e,t,a,n,r,i){return(0,o.Wz)(),(0,o.An)("div",s,d)}var m={name:"MainNavigation"},f=a(152);const h=(0,f.c)(m,[["render",v],["__scopeId","data-v-5d89a032"]]);var p=h,b=a.p+"img/us-map.252ea404.jpg";const y=(0,o.QD)("div",null,[(0,o.QD)("img",{class:"map",src:b})],-1),g={class:"layover"},w=(0,o.QD)("h3",null,"Updates to Bereavement Leave Policies",-1),k=(0,o.QD)("sup",null,"5",-1),D=(0,o.QD)("sup",null,"6",-1),A=(0,o.IL)('<button class="california"><div class="tooltip"> This <a href=" https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2023/04/Bereavement-Leave_AB-1949_FAQ_ENG.pdf" target="_">law</a> became effective January 1, 2023. The law dictates that a private employer with more than 5 employees must give 3-5 days of unpaid leave for bereavement leave if an employee has worked at said company for more than 30 days. </div></button><button class="oregon"><div class="tooltip"><a href=" https://www.portland.gov/bhr/documents/ofla-bereavement-leave-guidance/download" target="_">Oregon’s bereavement law</a> has been effective since January 1, 2014. It dictates employers with 25 or more employees must allow qualifying employees to take 2 weeks of leave for each family member that dies, this is not required to be paid. </div></button><button class="washington"><div class="tooltip"><a href="https://www.lni.wa.gov/workers-rights/leave/holiday-vacation-bereavement-leave#:~:text=Washington%20State%20does%20not%20require,between%20an%20employer%20and%20employee." target="_">Washington law</a> is different compared to the four listed above. They do not require bereavement leave except for an employee who lost a child under defined circumstances. </div></button><button class="illnois"><div class="tooltip"><a href="https://labor.illinois.gov/faqs/flbafaqs.html" target="_">Illinois state</a> dictates that the Family Bereavement Leave Act (FBLA) requires eligible employees to take 2 weeks (10 workdays) off of unpaid leave following the death of a covered family member. </div></button><button class="maryland"><div class="tooltip"><a href="https://dbm.maryland.gov/employees/pages/leave_home.aspx#:~:text=Death%20in%20the%20Family&amp;text=An%20employee%20may%20elect%20to,for%20other%20designated%20family%20members" target="_">Maryland law</a> dictates that an employee may take 3 days of bereavement leave instead of using 3 of their sick days, however 1 sick day may be charged to sick leave during this time. </div></button><button class="vermont pending"><div class="tooltip"><a href="https://legislature.vermont.gov/bill/status/2024/H.66" target="_">Vermont - House Bill 66</a> If passed in the Vermont Senate this would create an integrated bereavement leave component in the Family and Medical Leave Act. It would allow employees to take 2 weeks out of the 12 offered by FMLA for bereavement leave. The bill is currently with the Economic Development, Housing and General Affairs committee in the senate. It passed during a Vermont House vote in March of 2023 </div></button><button class="ny pending"><div class="tooltip"><a href="https://www.lni.wa.gov/workers-rights/leave/holiday-vacation-bereavement-leave#:~:text=Washington%20State%20does%20not%20require,between%20an%20employer%20and%20employee." target="_">New York- Bill #A06605</a>This bill would amend workers compensation law for paid bereavement leave starting in 2025. This bill was previously passed in the assembly and senate in 2018, but ultimately vetoed. This bill was referred to labor on January 3, 2024. </div></button>',7);function _(e,t,a,n,r,i){const s=(0,o.E1)("Blurb");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.K2)(s),y,(0,o.QD)("div",g,[(0,o.QD)("button",{onClick:t[0]||(t[0]=(...e)=>i.close&&i.close(...e)),class:"layover-button"},"x"),w,(0,o.mY)(" Updating who is considered family, expanding the definition to include important people in the person's life who are not “direct family”"),k,(0,o.mY)(" Updating the amount of time off in a format similar to maternity and paternity leave. As it stands “76% of bereaved employees’ overall performance at work was harmed after suffering a loss”"),D]),A],64)}const Q=e=>((0,o.ED)("data-v-3ed57724"),e=e(),(0,o.ii)(),e),x={class:"about-blurb-container"},M=Q((()=>(0,o.QD)("div",{class:"about-blurb-container_text"},[(0,o.QD)("p",{class:"about-blurb-container_text-blurb"}," All of the states that currently have bereavement leave are unpaid. This causes greater hardship as now a choice has to be made, does the family member go to the funeral or stay at work in order to get paid? "),(0,o.QD)("p",{class:"about-blurb-container_text-blurb"}," Funerals are important for the living, they offer closure, and in many cultures are seen as a key part of the grieving process. As bereavement leave stands now many miss that opportunity due to the lack of compensation for the days off. ")],-1))),O=[M];function B(e,t,a,n,r,i){return(0,o.Wz)(),(0,o.An)("div",x,O)}var T={name:"MapBlurb",data(){return{showMore:!1}},methods:{toggleShowMore(){this.showMore=!this.showMore}}};const q=(0,f.c)(T,[["render",B],["__scopeId","data-v-3ed57724"]]);var E=q,F={name:"UsMap",components:{Blurb:E},methods:{close(){document.querySelector("layover-button").style.display="none"}}};const I=(0,f.c)(F,[["render",_]]);var W=I,j={name:"App",components:{Navigation:p,Map:W}};const L=(0,f.c)(j,[["render",r]]);var U=L;(0,n.W0)(U).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/EatonFirm/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkeryn"]=self["webpackChunkeryn"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[999],(function(){return a(934)}));n=a.O(n)})();
//# sourceMappingURL=app.2cc5178e.js.map