(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-mentalTest-index"],{"008c":function(t,i,a){"use strict";a.r(i);var n=a("8e6e"),e=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(i,t,(function(){return n[t]}))}(r);i["default"]=e.a},"06f7":function(t,i,a){"use strict";a.r(i);var n=a("ca5a"),e=a("4c60");for(var r in e)"default"!==r&&function(t){a.d(i,t,(function(){return e[t]}))}(r);a("b2d9");var o,s=a("f0c5"),l=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"16adb6d6",null,!1,n["a"],o);i["default"]=l.exports},"0d09":function(t,i,a){var n=a("93e4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("6fd99779",n,!0,{sourceMap:!1,shadowMode:!1})},1772:function(t,i,a){"use strict";var n=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("3d02")),r={name:"u-line",mixins:[uni.$u.mpMixin,uni.$u.mixin,e.default],computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"===this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.dashed?"dashed":"solid",t.width=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.dashed?"dashed":"solid",t.height=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};i.default=r},"3d02":function(t,i,a){"use strict";a("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{color:{type:String,default:uni.$u.props.line.color},length:{type:[String,Number],default:uni.$u.props.line.length},direction:{type:String,default:uni.$u.props.line.direction},hairline:{type:Boolean,default:uni.$u.props.line.hairline},margin:{type:[String,Number],default:uni.$u.props.line.margin},dashed:{type:Boolean,default:uni.$u.props.line.dashed}}};i.default=n},"3e6d":function(t,i,a){"use strict";a.r(i);var n=a("8c45"),e=a("ca15");for(var r in e)"default"!==r&&function(t){a.d(i,t,(function(){return e[t]}))}(r);a("9f9e");var o,s=a("f0c5"),l=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"ecc36d72",null,!1,n["a"],o);i["default"]=l.exports},"3ee6":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-ecc36d72], uni-scroll-view[data-v-ecc36d72], uni-swiper-item[data-v-ecc36d72]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-line[data-v-ecc36d72]{vertical-align:middle}',""]),t.exports=i},4321:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return n}));var n={uLine:a("3e6d").default,uIcon:a("06f7").default},e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"contaier",style:{minHeight:t.getHeight+"px"}},[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("答题测试")])],2),a("v-uni-view",{staticClass:"bannerBox"},[a("v-uni-image",{staticClass:"ggBox",attrs:{mode:"widthFix",src:"http://cdn.zhoukaiwen.com/Banner3.jpg"}})],1),a("v-uni-view",{staticClass:"padding"},[a("v-uni-view",{staticClass:"mainBox radius shadow-warp bg-white margin-top relative"},[a("v-uni-view",{staticClass:"userHeard cu-avatar lg round",staticStyle:{"background-image":"url(http://cdn.zhoukaiwen.com/logo.png)"}}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.hasData,expression:"hasData"}]},[t.DataList[t.num].serialNumber?a("v-uni-view",{staticClass:"animation-reverse shadow",class:t.animation,attrs:{"data-class":"slide-rights"}},[a("v-uni-view",{staticClass:"mentalTitle text-xl text-black text-bold"},[a("v-uni-text",[t._v(t._s(t.DataList[t.num].serialNumber||""))]),a("v-uni-text",[t._v("、")]),a("v-uni-text",[t._v(t._s(t.DataList[t.num].title||""))])],1),t._l(t.DataList[t.num].itemList,(function(i,n){return a("v-uni-view",{staticClass:"mentalList",class:{mentalListActive:n==t.mentalListActive},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.Toggle(n)}}},[a("v-uni-view",{staticClass:"indexBox text-shadow"},[t._v(t._s(i.number||""))]),t._v(t._s(i.answer||""))],1)}))],2):t._e(),a("u-line",{attrs:{color:"#dddddd"}}),a("v-uni-view",{staticClass:"margin-top cu-progress radius striped active"},[a("v-uni-view",{staticClass:"bg-blue",style:[{width:t.loading?t.progress+"%":""}]},[t._v(t._s(t.progress)+"%")])],1),a("v-uni-view",{staticClass:"explainMain"},[t._v("本测试仅提供参考，不会作为最终依据")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}]},[a("v-uni-view",{staticClass:"text-center text-bold text-black text-xxl margin-tb-xl"},[t._v("您已答题，感谢参与")]),a("v-uni-view",{staticClass:"text-center margin-tb-lg text-lg"},[t._v("评测结果：您的基础很好，继续加油。")]),a("v-uni-view",{staticClass:"text-gray text-center margin-tb-lg text-lg"},[t._v("题库正在更新中...")])],1)],1)],1),a("v-uni-view",{staticClass:"explain"},[a("v-uni-view",{staticClass:"integral"},[t._v("您当前积分："+t._s(t.currentPoints)+"分")]),a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goExplain.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"question-circle-fill",size:"30"}}),t._v("答题规则说明")],1)],1)],1)},r=[]},"47cf":function(t,i,a){var n=a("3ee6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("01398de7",n,!0,{sourceMap:!1,shadowMode:!1})},"4c60":function(t,i,a){"use strict";a.r(i);var n=a("c1ee"),e=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(i,t,(function(){return n[t]}))}(r);i["default"]=e.a},"5cce":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""};i.default=n},"8a8f":function(t,i,a){"use strict";a("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};i.default=n},"8c45":function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"u-line",style:[t.lineStyle]})},r=[]},"8e6e":function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{show:!1,getHeight:"",loading:!1,animation:"",mentalListActive:-1,noData:!1,hasData:!0,num:0,DataList:[{serialNumber:"1",name:"",title:"下列元素中，为行内元素的是（ ）",itemList:[{number:"A",answer:"div"},{number:"B",answer:"span"},{number:"C",answer:"p"},{number:"D",answer:"h3"}]},{serialNumber:"2",name:"",title:"下列是设置边框的属性（）",itemList:[{number:"A",answer:"border-color"},{number:"B",answer:"box-sizing"},{number:"C",answer:"background"},{number:"D",answer:"visibility"}]},{serialNumber:"3",name:"",title:"在javascript里，下列选项中不属于数组方法的是（ ）",itemList:[{number:"A",answer:"sort()"},{number:"B",answer:"length()"},{number:"C",answer:"concat()"},{number:"D",answer:"reverse()"}]},{serialNumber:"4",name:"",title:"下列属性哪一个能够实现层的隐藏？",itemList:[{number:"A",answer:"display:fals"},{number:"B",answer:"display:hidden"},{number:"C",answer:"display:none"},{number:"D",answer:"display:“”"}]},{serialNumber:"5",name:"",title:"以下哪个单词不属于javascript关键字",itemList:[{number:"A",answer:"with"},{number:"B",answer:"parent"},{number:"C",answer:"class"},{number:"D",answer:"void"}]}],setData:{},progress:0,currentPoints:0,isShare:3,showMessage:""}},onShareAppMessage:function(t){return{title:"我已完成答题，快来参与吧"}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(i){t.getHeight=i.windowHeight}}),setTimeout((function(){t.loading=!0}),300),this.getData()},watch:{progress:function(i){var a=this;t.log(this.progress+"% - 进度"),100==this.progress&&(this.noData=!0,this.hasData=!1,setTimeout((function(){a.show=!0}),1300))}},methods:{getData:function(){this.progress=0},Toggle:function(i){var a=this;this.mentalListActive=i,t.log(this.num+1),t.log("length:",this.DataList.length),this.progress=100/this.DataList.length*(this.num+1),this.progress<100?setTimeout((function(){a.animation="animation-slide-left",a.num++,setTimeout((function(){a.mentalListActive=-1,a.animation=""}),800)}),300):(t.log("没有下一题了"),this.show=!0)},closeMask:function(){this.show=!1},goExplain:function(){uni.navigateTo({url:"./explain"})}}};i.default=a}).call(this,a("5a52")["default"])},"93e4":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-16adb6d6], uni-scroll-view[data-v-16adb6d6], uni-swiper-item[data-v-16adb6d6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-16adb6d6]{display:flex;align-items:center}.u-icon--left[data-v-16adb6d6]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-16adb6d6]{flex-direction:row;align-items:center}.u-icon--top[data-v-16adb6d6]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-16adb6d6]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-16adb6d6]{font-family:uicon-iconfont;position:relative;display:flex;flex-direction:row;align-items:center}.u-icon__icon--primary[data-v-16adb6d6]{color:#3c9cff}.u-icon__icon--success[data-v-16adb6d6]{color:#5ac725}.u-icon__icon--error[data-v-16adb6d6]{color:#f56c6c}.u-icon__icon--warning[data-v-16adb6d6]{color:#f9ae3d}.u-icon__icon--info[data-v-16adb6d6]{color:#909399}.u-icon__img[data-v-16adb6d6]{height:auto;will-change:transform}.u-icon__label[data-v-16adb6d6]{line-height:1}',""]),t.exports=i},9825:function(t,i,a){"use strict";var n=a("a1aa"),e=a.n(n);e.a},"9f9e":function(t,i,a){"use strict";var n=a("47cf"),e=a.n(n);e.a},a1aa:function(t,i,a){var n=a("ac11");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("47b2fa77",n,!0,{sourceMap:!1,shadowMode:!1})},ac11:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* \r\n  Animation 微动画  \r\n  基于ColorUI组建库的动画模块 by 文晓港 2019年3月26日19:52:28\r\n */\r\n/* css 滤镜 控制黑白底色gif的 */.gif-black[data-v-4888ad94]{mix-blend-mode:screen}.gif-white[data-v-4888ad94]{mix-blend-mode:multiply}\r\n/* Animation css */[class*=animation-][data-v-4888ad94]{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animation-fade[data-v-4888ad94]{-webkit-animation-name:fade-data-v-4888ad94;animation-name:fade-data-v-4888ad94;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.animation-scale-up[data-v-4888ad94]{-webkit-animation-name:scale-up-data-v-4888ad94;animation-name:scale-up-data-v-4888ad94}.animation-scale-down[data-v-4888ad94]{-webkit-animation-name:scale-down-data-v-4888ad94;animation-name:scale-down-data-v-4888ad94}.animation-slide-top[data-v-4888ad94]{-webkit-animation-name:slide-top-data-v-4888ad94;animation-name:slide-top-data-v-4888ad94}.animation-slide-bottom[data-v-4888ad94]{-webkit-animation-name:slide-bottom-data-v-4888ad94;animation-name:slide-bottom-data-v-4888ad94}.animation-slide-left[data-v-4888ad94]{-webkit-animation-name:slide-left-data-v-4888ad94;animation-name:slide-left-data-v-4888ad94}.animation-slide-right[data-v-4888ad94]{-webkit-animation-name:slide-right-data-v-4888ad94;animation-name:slide-right-data-v-4888ad94}.animation-shake[data-v-4888ad94]{-webkit-animation-name:shake-data-v-4888ad94;animation-name:shake-data-v-4888ad94}.animation-reverse[data-v-4888ad94]{animation-direction:reverse}@-webkit-keyframes fade-data-v-4888ad94{0%{opacity:0}100%{opacity:1}}@keyframes fade-data-v-4888ad94{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes scale-up-data-v-4888ad94{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-data-v-4888ad94{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes scale-down-data-v-4888ad94{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-down-data-v-4888ad94{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes slide-top-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-top-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide-bottom-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-bottom-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes shake-data-v-4888ad94{0%,\r\n    100%{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@keyframes shake-data-v-4888ad94{0%,\r\n    100%{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@-webkit-keyframes slide-left-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-left-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slide-right-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-right-data-v-4888ad94{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.warp[data-v-4888ad94]{display:flex;align-items:center;justify-content:center;height:100%}.rect[data-v-4888ad94]{width:%?480?%;border-radius:%?20?%;padding:%?25?% %?25?% %?80?% %?25?%;box-sizing:border-box;background-color:#fff}.closeImg[data-v-4888ad94]{width:100%;height:%?200?%;margin:%?10?% auto %?30?%}.closeImg uni-image[data-v-4888ad94]{height:%?200?%}.cu-bar .cu-avatar[data-v-4888ad94]:first-child{margin-left:-11px}.cu-bar[data-v-4888ad94]{height:%?90?%!important}.mainBox[data-v-4888ad94]{padding:%?60?% %?40?% %?20?% %?40?%}.explainMain[data-v-4888ad94]{width:100%;text-align:center;font-size:%?24?%;text-align:center;color:#999;margin-top:%?30?%}.userHeard[data-v-4888ad94]{position:absolute;left:50%;top:%?-50?%;margin-left:%?-50?%}.mentalTitle[data-v-4888ad94]{margin:0 0 %?30?% 0}.mentalList[data-v-4888ad94]{width:100%;height:%?78?%;line-height:%?78?%;padding-right:%?20?%;border-radius:%?12?%;margin:%?30?% 0;overflow:hidden;border:1px solid #ddd}.mentalList .indexBox[data-v-4888ad94]{width:%?70?%;height:%?78?%;text-align:center;line-height:%?78?%;float:left;background-color:#ddd;margin-right:%?15?%}.mentalListActive[data-v-4888ad94]{width:100%;height:%?78?%;line-height:%?78?%;padding-right:%?20?%;border:1px solid #0081ff;border-radius:%?12?%;color:#0081ff;margin:%?30?% 0;font-weight:600;background-image:url(http://cdn.zhoukaiwen.com/answerYes.png);background-repeat:no-repeat;background-size:%?38?%;background-position:right %?30?% center}.mentalListActive .indexBox[data-v-4888ad94]{background-color:#0081ff;color:#fff}.contaier[data-v-4888ad94]{background-color:#f2f2f2}.contaier .bannerBox[data-v-4888ad94]{width:%?750?%}.contaier .bannerBox uni-image[data-v-4888ad94]{width:%?750?%}.contaier .explain[data-v-4888ad94]{width:%?750?%;bottom:%?40?%;font-size:%?24?%;margin:%?10?% 0 %?40?% 0;text-align:center;color:#999}.contaier .explain .integral[data-v-4888ad94]{font-size:%?30?%;margin-bottom:%?15?%;color:#333}',""]),t.exports=i},b2d9:function(t,i,a){"use strict";var n=a("0d09"),e=a.n(n);e.a},c1ee:function(t,i,a){"use strict";var n=a("4ea4");a("caad"),a("c975"),a("2532"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("5cce")),r=n(a("8a8f")),o={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],computed:{uClasses:function(){var t=[];return t.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&t.push("u-icon__icon--"+this.color),t},iconStyle:function(){var t={};return t={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(t.color=this.color),t},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var t={};return t.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),t.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),t},icon:function(){return e.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(t){this.$emit("click",this.index),this.stop&&uni.$u.preventEvent(t)}}};i.default=o},ca15:function(t,i,a){"use strict";a.r(i);var n=a("1772"),e=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(i,t,(function(){return n[t]}))}(r);i["default"]=e.a},ca5a:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+t.labelPos],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickHandler.apply(void 0,arguments)}}},[t.isImg?a("v-uni-image",{staticClass:"u-icon__img",style:[t.imgStyle,t.$u.addStyle(t.customStyle)],attrs:{src:t.name,mode:t.imgMode}}):a("v-uni-text",{staticClass:"u-icon__icon",class:t.uClasses,style:[t.iconStyle,t.$u.addStyle(t.customStyle)],attrs:{"hover-class":t.hoverClass}},[t._v(t._s(t.icon))]),""!==t.label?a("v-uni-text",{staticClass:"u-icon__label",style:{color:t.labelColor,fontSize:t.$u.addUnit(t.labelSize),marginLeft:"right"==t.labelPos?t.$u.addUnit(t.space):0,marginTop:"bottom"==t.labelPos?t.$u.addUnit(t.space):0,marginRight:"left"==t.labelPos?t.$u.addUnit(t.space):0,marginBottom:"top"==t.labelPos?t.$u.addUnit(t.space):0}},[t._v(t._s(t.label))]):t._e()],1)},r=[]},de9c:function(t,i,a){"use strict";a.r(i);var n=a("4321"),e=a("008c");for(var r in e)"default"!==r&&function(t){a.d(i,t,(function(){return e[t]}))}(r);a("9825");var o,s=a("f0c5"),l=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"4888ad94",null,!1,n["a"],o);i["default"]=l.exports}}]);