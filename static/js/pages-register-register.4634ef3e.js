(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{2144:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("ccdf")),o={name:"u-status-bar",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{}},computed:{style:function(){var t={};return t.height=uni.$u.addUnit(uni.$u.sys().statusBarHeight,"px"),t.backgroundColor=this.bgColor,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=o},"2a2a":function(t,e,n){var i=n("f4e8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("0f903516",i,!0,{sourceMap:!1,shadowMode:!1})},"314e":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{text:{type:String,default:uni.$u.props.rowNotice.text},icon:{type:String,default:uni.$u.props.rowNotice.icon},mode:{type:String,default:uni.$u.props.rowNotice.mode},color:{type:String,default:uni.$u.props.rowNotice.color},bgColor:{type:String,default:uni.$u.props.rowNotice.bgColor},fontSize:{type:[String,Number],default:uni.$u.props.rowNotice.fontSize},speed:{type:[String,Number],default:uni.$u.props.rowNotice.speed}}};e.default=i},3214:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("06f7").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-notice",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("icon",[t.icon?n("v-uni-view",{staticClass:"u-notice__left-icon"},[n("u-icon",{attrs:{name:t.icon,color:t.color,size:"19"}})],1):t._e()]),n("v-uni-swiper",{staticClass:"u-notice__swiper",attrs:{"disable-touch":t.disableTouch,vertical:!t.step,circular:!0,interval:t.duration,autoplay:!0}},t._l(t.text,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"u-notice__swiper__item"},[n("v-uni-text",{staticClass:"u-notice__swiper__item__text u-line-1",style:[t.textStyle]},[t._v(t._s(e))])],1)})),1),["link","closable"].includes(t.mode)?n("v-uni-view",{staticClass:"u-notice__right-icon"},["link"===t.mode?n("u-icon",{attrs:{name:"arrow-right",size:17,color:t.color}}):t._e(),"closable"===t.mode?n("u-icon",{attrs:{name:"close",size:16,color:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1):t._e()],2)},o=[]},"39cd":function(t,e,n){"use strict";n.r(e);var i=n("6ba7"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"3e57":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNotify:n("d18d").default,uNoticeBar:n("ae50").default,"u-Input":n("e8c0").default,uButton:n("b537").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("u-notify",{ref:"uNotify",attrs:{speed:"50",duration:"3000",message:"",show:t.notifyShow}}),n("u-notice-bar",{staticClass:"notice-bar",attrs:{text:"---欢迎成为一名记sir!---"}}),n("v-uni-view",{staticClass:"inputTitle inputTitleName"},[t._v("昵称")]),n("u--input",{staticClass:"input-main",attrs:{shape:"circle",placeholder:"请输入昵称",border:"surround",focus:!0},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}}),n("v-uni-view",{staticClass:"inputTitle"},[t._v("账号")]),n("u--input",{staticClass:"input-main",attrs:{shape:"circle",placeholder:"请输入账号",border:"surround"},model:{value:t.uid,callback:function(e){t.uid=e},expression:"uid"}}),n("v-uni-view",{staticClass:"inputTitle"},[t._v("密码")]),n("u--input",{staticClass:"input-main",attrs:{shape:"circle",password:!0,clearable:!0,placeholder:"请输入密码",border:"surround"},model:{value:t.psw1,callback:function(e){t.psw1=e},expression:"psw1"}}),n("v-uni-view",{staticClass:"inputTitle"},[t._v("确认密码")]),n("u--input",{staticClass:"input-main",attrs:{shape:"circle",password:!0,clearable:!0,placeholder:"请再次输入密码",border:"surround"},model:{value:t.psw2,callback:function(e){t.psw2=e},expression:"psw2"}}),n("u-button",{staticClass:"register-btn",attrs:{loading:t.registering,shape:"circle",color:"#4dc11b",text:"注册"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Registering.apply(void 0,arguments)}}})],1)},o=[]},"46d5":function(t,e,n){"use strict";n.r(e);var i=n("4ad0"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"4ad0":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{uname:"",uid:"",psw1:"",psw2:"",registering:!1,notifyShow:!0,show:!1}},onLoad:function(){},mounted:function(){},methods:{Registering:function(){if(this.show=!0,this.notifyCode++,0!=this.uname.length)if(this.uid.length<6)this.$refs.uNotify.show({type:"error",message:"账号需填写六位及以上",duration:2e3});else if(this.psw1.length<6)this.$refs.uNotify.show({type:"error",message:"密码需填写六位及以上",duration:2e3});else if(this.psw2==this.psw1){this.registering=!0;var e=this;t.callFunction({name:"register",data:{name:this.uname,uid:this.uid,password:this.psw1},success:function(t){"注册成功"==t.result?(e.$refs.uNotify.show({type:"success",message:"注册成功,2s后将跳转至登录页面",duration:2e3}),setTimeout((function(){uni.redirectTo({url:"../login/login?backpage=../index/index&backtype=2"})}),2e3)):e.$refs.uNotify.show({type:"error",message:"注册失败，已存在该账号",duration:2e3}),n.log(t)},fail:function(t){n.log(t),uni.showToast({title:"注册失败，已存在该用户名",duration:2e3,image:"../../static/cuowu.png"})},complete:function(){e.registering=!1}})}else this.$refs.uNotify.show({type:"error",message:"二次密码输入不一致",duration:2e3});else this.$refs.uNotify.show({type:"error",message:"请输入昵称",duration:2e3})}}};e.default=i}).call(this,n("a9ff")["default"],n("5a52")["default"])},"61bc":function(t,e,n){"use strict";n.r(e);var i=n("a514"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},6669:function(t,e,n){"use strict";var i=n("9c96"),r=n.n(i);r.a},"6ba7":function(t,e,n){"use strict";var i=n("4ea4");n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("8af3")),o={name:"u-notify",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{open:!1,timer:null,config:{top:uni.$u.props.notify.top,type:uni.$u.props.notify.type,color:uni.$u.props.notify.color,bgColor:uni.$u.props.notify.bgColor,message:uni.$u.props.notify.message,duration:uni.$u.props.notify.duration,fontSize:uni.$u.props.notify.fontSize,safeAreaInsetTop:uni.$u.props.notify.safeAreaInsetTop},tmpConfig:{}}},computed:{containerStyle:function(){var t=0;0===this.tmpConfig.top&&(t=44);var e={top:uni.$u.addUnit(0===this.tmpConfig.top?t:this.tmpConfig.top),position:"fixed",left:0,right:0,zIndex:10076};return e},backgroundColor:function(){var t={};return this.tmpConfig.bgColor&&(t.backgroundColor=this.tmpConfig.bgColor),t},icon:function(){var t;return"success"===this.tmpConfig.type?t="checkmark-circle":"error"===this.tmpConfig.type?t="close-circle":"warning"===this.tmpConfig.type&&(t="error-circle"),t}},created:function(){var t=this;["primary","success","error","warning"].map((function(e){t[e]=function(n){return t.show({type:e,message:n})}}))},methods:{show:function(t){var e=this;this.tmpConfig=uni.$u.deepMerge(this.config,t),this.clearTimer(),this.open=!0,this.tmpConfig.duration>0&&(this.timer=setTimeout((function(){e.open=!1,e.clearTimer(),"function"===typeof e.tmpConfig.complete&&e.tmpConfig.complete()}),this.tmpConfig.duration))},close:function(){this.clearTimer()},clearTimer:function(){this.open=!1,clearTimeout(this.timer),this.timer=null}},beforeDestroy:function(){this.clearTimer()}};e.default=o},"6bff":function(t,e,n){"use strict";var i=n("2a2a"),r=n.n(i);r.a},"6c00":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-a3e69228], uni-scroll-view[data-v-a3e69228], uni-swiper-item[data-v-a3e69228]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-a3e69228]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-a3e69228]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-a3e69228]{margin-left:5px;align-items:center}.u-notice__swiper[data-v-a3e69228]{height:16px;display:flex;flex-direction:row;align-items:center;flex:1}.u-notice__swiper__item[data-v-a3e69228]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.u-notice__swiper__item__text[data-v-a3e69228]{font-size:14px;color:#f9ae3d}',""]),t.exports=e},"6c17":function(t,e,n){var i=n("e442");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("3f1c498b",i,!0,{sourceMap:!1,shadowMode:!1})},"6e49":function(t,e,n){"use strict";n.r(e);var i=n("2144"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"730f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-342b66de], uni-scroll-view[data-v-342b66de], uni-swiper-item[data-v-342b66de]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notify[data-v-342b66de]{padding:8px 10px}.u-notify__warpper[data-v-342b66de]{display:flex;flex-direction:row;align-items:center;text-align:center;justify-content:center}.u-notify__warpper__text[data-v-342b66de]{font-size:15px;text-align:center}.u-notify--primary[data-v-342b66de]{background-color:#3c9cff}.u-notify--success[data-v-342b66de]{background-color:#5ac725}.u-notify--error[data-v-342b66de]{background-color:#f56c6c}.u-notify--warning[data-v-342b66de]{background-color:#f9ae3d}',""]),t.exports=e},"74ea":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("06f7").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-notice",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("icon",[t.icon?n("v-uni-view",{staticClass:"u-notice__left-icon"},[n("u-icon",{attrs:{name:t.icon,color:t.color,size:"19"}})],1):t._e()]),n("v-uni-view",{ref:"u-notice__content",staticClass:"u-notice__content"},[n("v-uni-text",{ref:"u-notice__content__text",staticClass:"u-notice__content__text",style:[t.textStyle]},[t._v(t._s(t.text))])],1),["link","closable"].includes(t.mode)?n("v-uni-view",{staticClass:"u-notice__right-icon"},["link"===t.mode?n("u-icon",{attrs:{name:"arrow-right",size:17,color:t.color}}):t._e(),"closable"===t.mode?n("u-icon",{attrs:{name:"close",size:16,color:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1):t._e()],2)},o=[]},7643:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{text:{type:[Array,String],default:uni.$u.props.noticeBar.text},direction:{type:String,default:uni.$u.props.noticeBar.direction},step:{type:Boolean,default:uni.$u.props.noticeBar.step},icon:{type:String,default:uni.$u.props.noticeBar.icon},mode:{type:String,default:uni.$u.props.noticeBar.mode},color:{type:String,default:uni.$u.props.noticeBar.color},bgColor:{type:String,default:uni.$u.props.noticeBar.bgColor},speed:{type:[String,Number],default:uni.$u.props.noticeBar.speed},fontSize:{type:[String,Number],default:uni.$u.props.noticeBar.fontSize},duration:{type:[String,Number],default:uni.$u.props.noticeBar.duration},disableTouch:{type:Boolean,default:uni.$u.props.noticeBar.disableTouch},url:{type:String,default:uni.$u.props.noticeBar.url},linkType:{type:String,default:uni.$u.props.noticeBar.linkType}}};e.default=i},8685:function(t,e,n){"use strict";n.r(e);var i=n("89af"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"87df":function(t,e,n){"use strict";var i=n("a5c7"),r=n.n(i);r.a},"89af":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("7643")),o={name:"u-notice-bar",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{show:!0}},methods:{click:function(t){this.$emit("click",t),this.url&&this.linkType&&this.openPage()},close:function(){this.show=!1,this.$emit("close")}}};e.default=o},"8af3":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{top:{type:[String,Number],default:uni.$u.props.notify.top},type:{type:String,default:uni.$u.props.notify.type},color:{type:String,default:uni.$u.props.notify.color},bgColor:{type:String,default:uni.$u.props.notify.bgColor},message:{type:String,default:uni.$u.props.notify.message},duration:{type:[String,Number],default:uni.$u.props.notify.duration},fontSize:{type:[String,Number],default:uni.$u.props.notify.fontSize},safeAreaInsetTop:{type:Boolean,default:uni.$u.props.notify.safeAreaInsetTop}}};e.default=i},"8cb0":function(t,e,n){var i=n("dd16");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("71552f9a",i,!0,{sourceMap:!1,shadowMode:!1})},"8d66":function(t,e,n){var i=n("730f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("2f650c0d",i,!0,{sourceMap:!1,shadowMode:!1})},9010:function(t,e,n){"use strict";var i=n("8d66"),r=n.n(i);r.a},"989b":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uColumnNotice:n("9ee8").default,uRowNotice:n("dc88").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-notice-bar",style:[{backgroundColor:t.bgColor},t.$u.addStyle(t.customStyle)]},["column"===t.direction||"row"===t.direction&&t.step?[n("u-column-notice",{attrs:{color:t.color,bgColor:t.bgColor,text:t.text,mode:t.mode,step:t.step,icon:t.icon,"disable-touch":t.disableTouch,fontSize:t.fontSize,duration:t.duration},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})]:[n("u-row-notice",{attrs:{color:t.color,bgColor:t.bgColor,text:t.text,mode:t.mode,fontSize:t.fontSize,speed:t.speed,url:t.url,linkType:t.linkType,icon:t.icon},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})]],2):t._e()},o=[]},"9c96":function(t,e,n){var i=n("6c00");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("59cc5187",i,!0,{sourceMap:!1,shadowMode:!1})},"9ee8":function(t,e,n){"use strict";n.r(e);var i=n("3214"),r=n("e197");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("6669");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"a3e69228",null,!1,i["a"],a);e["default"]=s.exports},a514:function(e,n,i){"use strict";var r=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("96cf");var o=r(i("1da1")),a=r(i("314e")),u={name:"u-row-notice",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}},watch:{text:{immediate:!0,handler:function(t,e){this.vue(),uni.$u.test.string(t)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")}},fontSize:function(){t,this.vue()},speed:function(){this.vue()}},computed:{textStyle:function(){var t={};return t.color=this.color,t.animationDuration=this.animationDuration,t.animationPlayState=this.animationPlayState,t.fontSize=uni.$u.addUnit(this.fontSize),t}},mounted:function(){this.init()},methods:{init:function(){this.vue(),uni.$u.test.string(this.text)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")},vue:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 0,n=0,e.next=3,uni.$u.sleep();case 3:return e.next=5,t.$uGetRect(".u-notice__content__text");case 5:return n=e.sent.width,e.next=8,t.$uGetRect(".u-notice__content");case 8:e.sent.width,t.animationDuration="".concat(n/uni.$u.getPx(t.speed),"s"),t.animationPlayState="paused",setTimeout((function(){t.animationPlayState="running"}),10);case 12:case"end":return e.stop()}}),e)})))()},nvue:function(){return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},loopAnimation:function(t,e){},getNvueRect:function(t){},clickHandler:function(t){this.$emit("click")},close:function(){this.$emit("close")}}};n.default=u},a5c7:function(t,e,n){var i=n("d33a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("c3c22efc",i,!0,{sourceMap:!1,shadowMode:!1})},ae50:function(t,e,n){"use strict";n.r(e);var i=n("989b"),r=n("8685");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("f051");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"06e68c6a",null,!1,i["a"],a);e["default"]=s.exports},c650:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{text:{type:[Array],default:uni.$u.props.columnNotice.text},icon:{type:String,default:uni.$u.props.columnNotice.icon},mode:{type:String,default:uni.$u.props.columnNotice.mode},color:{type:String,default:uni.$u.props.columnNotice.color},bgColor:{type:String,default:uni.$u.props.columnNotice.bgColor},fontSize:{type:[String,Number],default:uni.$u.props.columnNotice.fontSize},speed:{type:[String,Number],default:uni.$u.props.columnNotice.speed},step:{type:Boolean,default:uni.$u.props.columnNotice.step},duration:{type:[String,Number],default:uni.$u.props.columnNotice.duration},disableTouch:{type:Boolean,default:uni.$u.props.columnNotice.disableTouch}}};e.default=i},c8ef:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-status-bar",style:[t.style]},[t._t("default")],2)},o=[]},ccdf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{bgColor:{type:String,default:uni.$u.props.statusBar.bgColor}}};e.default=i},d18d:function(t,e,n){"use strict";n.r(e);var i=n("fb06"),r=n("39cd");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("9010");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"342b66de",null,!1,i["a"],a);e["default"]=s.exports},d1999:function(t,e,n){"use strict";var i=n("6c17"),r=n.n(i);r.a},d33a:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wrap[data-v-230492b6]{display:flex;flex-direction:column;align-items:center}.wrap .notice-bar[data-v-230492b6]{width:90%}.wrap .inputTitle[data-v-230492b6]{color:#7e8087;margin-top:%?20?%;width:70%;text-align:left}.wrap .inputTitleName[data-v-230492b6]{margin-top:%?20?%}.wrap .input-main[data-v-230492b6]{margin-top:%?10?%;width:70%}.wrap .Tip[data-v-230492b6]{margin-top:%?30?%;color:#007aff;background-color:#f06f7e;border-radius:%?20?%}.wrap .register-btn[data-v-230492b6]{margin-top:%?30?%;width:%?200?%}',""]),t.exports=e},dc88:function(t,e,n){"use strict";n.r(e);var i=n("74ea"),r=n("61bc");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("d1999");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"6306985e",null,!1,i["a"],a);e["default"]=s.exports},dd16:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-06e68c6a], uni-scroll-view[data-v-06e68c6a], uni-swiper-item[data-v-06e68c6a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice-bar[data-v-06e68c6a]{overflow:hidden;padding:9px 12px;flex:1}',""]),t.exports=e},de47:function(t,e,n){"use strict";n.r(e);var i=n("c8ef"),r=n("6e49");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("6bff");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"163fd236",null,!1,i["a"],a);e["default"]=s.exports},e197:function(t,e,n){"use strict";n.r(e);var i=n("f736"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},e442:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6306985e], uni-scroll-view[data-v-6306985e], uni-swiper-item[data-v-6306985e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-6306985e]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-6306985e]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-6306985e]{margin-left:5px;align-items:center}.u-notice__content[data-v-6306985e]{text-align:right;flex:1;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden}.u-notice__content__text[data-v-6306985e]{font-size:14px;color:#f9ae3d;padding-left:100%;word-break:keep-all;white-space:nowrap;-webkit-animation:u-loop-animation-data-v-6306985e 10s linear infinite both;animation:u-loop-animation-data-v-6306985e 10s linear infinite both}@-webkit-keyframes u-loop-animation-data-v-6306985e{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-6306985e{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e},ec18:function(t,e,n){"use strict";n.r(e);var i=n("3e57"),r=n("46d5");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("87df");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"230492b6",null,!1,i["a"],a);e["default"]=s.exports},f051:function(t,e,n){"use strict";var i=n("8cb0"),r=n.n(i);r.a},f4e8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-status-bar[data-v-163fd236]{width:100%}',""]),t.exports=e},f736:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("c650")),o={mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],watch:{text:{immediate:!0,handler:function(t,e){uni.$u.test.array(t)||uni.$u.error("noticebar组件direction为column时，要求text参数为数组形式")}}},computed:{textStyle:function(){var t={};return t.color=this.color,t.fontSize=uni.$u.addUnit(this.fontSize),t},vertical:function(){return"horizontal"!=this.mode}},data:function(){return{}},methods:{clickHandler:function(t){this.$emit("click",t)},close:function(){this.$emit("close")}}};e.default=o},fb06:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uTransition:n("d37f").default,uStatusBar:n("de47").default,uIcon:n("06f7").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("u-transition",{attrs:{mode:"slide-down",customStyle:t.containerStyle,show:t.open}},[n("v-uni-view",{staticClass:"u-notify",class:["u-notify--"+t.tmpConfig.type],style:[t.backgroundColor,t.$u.addStyle(t.customStyle)]},[t.tmpConfig.safeAreaInsetTop?n("u-status-bar"):t._e(),n("v-uni-view",{staticClass:"u-notify__warpper"},[t._t("icon",[["success","warning","error"].includes(t.tmpConfig.type)?n("u-icon",{attrs:{name:t.tmpConfig.icon,color:t.tmpConfig.color,size:1.3*t.tmpConfig.fontSize,customStyle:{marginRight:"4px"}}}):t._e()]),n("v-uni-text",{staticClass:"u-notify__warpper__text",style:{fontSize:t.$u.addUnit(t.tmpConfig.fontSize),color:t.tmpConfig.color}},[t._v(t._s(t.tmpConfig.message))])],2)],1)],1)},o=[]}}]);