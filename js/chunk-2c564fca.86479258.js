(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c564fca"],{1681:function(t,e,i){},"2b5d":function(t,e,i){"use strict";i("7db0"),i("c975"),i("fb6a"),i("a434"),i("b0c0"),i("d3b7"),i("25f0"),i("8a79");var n=i("5530"),a=(i("2bfd"),i("b974")),s=i("c6a6"),o=i("80d2");e["a"]=s["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return a["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var i=this,s=a["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(s.componentOptions.listeners=Object(n["a"])(Object(n["a"])({},s.componentOptions.listeners),{},{dblclick:function(){i.editingIndex=e,i.internalSearch=i.getText(t),i.selectedIndex=-1}})),s},onChipInput:function(t){a["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&s["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;a["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===o["r"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===o["r"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();s["a"].options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():s["a"].options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){var e;a["a"].options.methods.setValue.call(this,null!=(e=t)?e:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var i=this.internalValue.slice();i.splice(e,1),this.setValue(i)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var i=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");i&&-1===this.findExistingIndex(i)&&(t.preventDefault(),a["a"].options.methods.selectItem.call(this,i))}}}})},5157:function(t,e,i){"use strict";var n=i("e5f8"),a=i.n(n);a.a},"54ce":function(t,e,i){"use strict";var n=i("7312"),a=i.n(n);a.a},"630b":function(t,e,i){},6927:function(t,e,i){"use strict";var n=i("630b"),a=i.n(n);a.a},7312:function(t,e,i){},"7d93":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",{staticClass:"justify-center"},[t._v("編輯清單")]),i("v-card-text",[t._v(" 清單名稱"),i("v-row",[i("v-text-field",{attrs:{required:"",outlined:"",color:"#4d89a5"},model:{value:t.listInfo.info.name,callback:function(e){t.$set(t.listInfo.info,"name",e)},expression:"listInfo.info.name"}})],1),t._v("隱私設定"),i("v-row",[i("v-select",{attrs:{required:"",outlined:"",items:[{text:"公開",value:1},{text:"私人",value:2}],color:"#4d89a5"},model:{value:t.listInfo.info.privacy,callback:function(e){t.$set(t.listInfo.info,"privacy",e)},expression:"listInfo.info.privacy"}})],1),t._v("新增共編成員"),i("v-row",[i("v-combobox",{attrs:{"listInfo.editors_email":"",clearable:"",outlined:"",label:"請輸入完整email",multiple:"",solo:"",flat:"",color:"#4d89a5"},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[i("v-chip",{staticClass:"my-3",attrs:{"input-value":t.selected,close:"",label:""},on:{"click:close":function(e){return t.remove(n)}}},[t._v(t._s(n))])]}}]),model:{value:t.listInfo.editors_email,callback:function(e){t.$set(t.listInfo,"editors_email",e)},expression:"listInfo.editors_email"}})],1),t._v("清單描述"),i("v-row",[i("v-textarea",{attrs:{counter:"100",outlined:"",color:"#4d89a5",rows:"3"},model:{value:t.listInfo.info.description,callback:function(e){t.$set(t.listInfo.info,"description",e)},expression:"listInfo.info.description"}})],1),i("v-row",[i("v-btn",{staticClass:"btn cancel",on:{click:t.cancel}},[t._v("取消")]),i("v-btn",{staticClass:"btn save",on:{click:t.save}},[t._v("儲存")])],1)],1)],1)},a=[],s=(i("a4d3"),i("e01a"),i("c975"),i("a434"),i("b0c0"),i("2909")),o=i("5530"),l=i("2f62"),c={computed:Object(o["a"])({},Object(l["c"])("user",["listInfo"])),data:function(){return{}},methods:{save:function(){this.$store.dispatch("user/editList",{list_id:this.listInfo.info.id,name:this.listInfo.info.name,description:this.listInfo.info.description,privacy:this.listInfo.info.privacy,editors_email:this.listInfo.editors_email}),this.$emit("save")},cancel:function(){this.$emit("close")},remove:function(t){this.chips.splice(this.chips.indexOf(t),1),this.chips=Object(s["a"])(this.chips)}}},r=c,u=(i("b0c6"),i("2877")),d=i("6544"),h=i.n(d),f=i("8336"),p=i("b0af"),v=i("99d9"),m=i("cc20"),g=i("2b5d"),I=i("0fd9"),b=i("b974"),x=i("8654"),w=i("a844"),_=Object(u["a"])(r,n,a,!1,null,"08e7c987",null);e["a"]=_.exports;h()(_,{VBtn:f["a"],VCard:p["a"],VCardText:v["b"],VCardTitle:v["c"],VChip:m["a"],VCombobox:g["a"],VRow:I["a"],VSelect:b["a"],VTextField:x["a"],VTextarea:w["a"]})},"7dfa":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",{staticClass:"main-title"},[t._v(t._s(t.info.name))])],1),i("v-row",[i("v-col",[t._v("創建人："+t._s(t.info.creator_username)+" ")]),i("v-col",[t._v("時間： "+t._s(t.info.createdTime))]),i("v-col",{on:{formatPrivacy:function(e){return t.formatPrivacy()}}},[t._v("隱私："+t._s(1==t.info.privacy?"公開":"私人"))])],1),i("v-row",[i("v-col",{attrs:{cols:"auto"}},[t._v("清單介紹")]),i("v-col",[t._v(t._s(t.info.description))])],1)],1)},a=[],s={props:{info:{type:Object}},data:function(){return{privacy:null}},methods:{},mounted:function(){this.formatPrivacy()}},o=s,l=(i("cc07"),i("2877")),c=i("6544"),r=i.n(c),u=i("62ad"),d=i("a523"),h=i("0fd9"),f=Object(l["a"])(o,n,a,!1,null,"3cd6dbf0",null);e["a"]=f.exports;r()(f,{VCol:u["a"],VContainer:d["a"],VRow:h["a"]})},"8a79":function(t,e,i){"use strict";var n=i("23e7"),a=i("06cf").f,s=i("50c4"),o=i("5a34"),l=i("1d80"),c=i("ab13"),r=i("c430"),u="".endsWith,d=Math.min,h=c("endsWith"),f=!r&&!h&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!f&&!h},{endsWith:function(t){var e=String(l(this));o(t);var i=arguments.length>1?arguments[1]:void 0,n=s(e.length),a=void 0===i?n:d(s(i),n),c=String(t);return u?u.call(e,c,a):e.slice(a-c.length,a)===c}})},"90e8":function(t,e,i){},"917a":function(t,e,i){},a844:function(t,e,i){"use strict";i("a9e3");var n=i("5530"),a=(i("1681"),i("8654")),s=i("58df"),o=Object(s["a"])(a["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b0c6:function(t,e,i){"use strict";var n=i("90e8"),a=i.n(n);a.a},c461:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("router-link",{attrs:{to:{name:"List"}}},[i("v-btn",{staticClass:"ma-14",attrs:{fab:"",right:"",bottom:"",fixed:"",elevation:"0","x-large":"",color:"#a8b7c6"}},[i("svg",{attrs:{width:"35"}},[i("use",{attrs:{"xlink:href":"#see"}})])])],1),i("v-row",[i("EditedListPlacesContainer",{staticClass:"main"}),i("v-col",{attrs:{cols:"1"}})],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",{staticClass:"pa-2 info-wrap"},[i("ListInfo",{staticClass:"pa-4",attrs:{info:t.list.info}}),i("span",{attrs:{id:"edit"},on:{click:t.showDialog}},[i("v-btn",{staticClass:"pa-0 ma-0",attrs:{color:"#4d89a5",title:""},on:{click:t.showDialog}},[i("svg",{attrs:{width:"10"}},[i("use",{attrs:{"xlink:href":"#pen"}})]),i("span",{staticClass:"ml-1"},[t._v("編輯")])])],1)],1),i("v-col",{attrs:{cols:"auto","align-self":"end"}},[i("v-autocomplete",{attrs:{items:t.items,"search-input":t.search,loading:t.isLoading,"item-text":"name",dense:"",flat:"","hide-no-data":"","hide-selected":"",label:"新增地點",color:"#4d89a5","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},input:t.inputHandler},scopedSlots:t._u([{key:"append",fn:function(){return[i("svg",{attrs:{width:"20",height:"20"}},[i("use",{attrs:{"xlink:href":"#search"}})])]},proxy:!0}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1)],1),i("v-row",{staticClass:"place-wrap pa-4 mt-4"},[i("EditedListPlaceHeader"),t._l(t.list.places,(function(e,n){return i("EditedListPlaceItem",{key:n,attrs:{place:e,listId:t.listId},on:{showPlaceInfo:t.showPlaceInfo}})}))],2),i("v-dialog",{attrs:{persistent:"",width:"30%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("ListDialog",{attrs:{listInfo:t.list.info},on:{close:t.closeDialog,save:t.saveList}})],1),i("PlaceInfoDialog",{attrs:{dialog:t.placeInfo,setActive:t.isActive},on:{"update:dialog":function(e){t.placeInfo=e}}})],1)},o=[],l=(i("d81d"),i("d3b7"),i("5530")),c=i("2f62"),r=i("7dfa"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"wrapper pa-0 pb-3"},[i("v-row",{attrs:{id:"info","no-gutters":""}},[i("v-col",{attrs:{cols:"auto"}},[i("div",{staticClass:"pen fill-height d-flex justify-center align-center"},[t._v("編輯")])]),i("v-col",{attrs:{cols:"auto"}},[i("div",{staticClass:"photo fill-height d-flex justify-center align-center"},[t._v("照片")])]),i("v-col",[i("div",{staticClass:"fill-height d-flex justify-center align-center"},[t._v("地點")])]),i("v-col",{attrs:{cols:"auto"}},[i("div",{staticClass:"phone fill-height d-flex justify-center align-center"},[t._v("聯絡電話")])]),i("v-col",{attrs:{cols:"auto"}},[i("div",{staticClass:"pin fill-height d-flex justify-center align-center"},[t._v("導航")])]),i("v-col",{attrs:{cols:"auto"}},[i("div",{staticClass:"select fill-height d-flex justify-center align-center"},[t._v("刪除")])])],1)],1)},d=[],h=(i("c975"),{props:{obj:{type:Object}},mounted:function(){this.tagNames.indexOf}}),f=h,p=(i("e31e"),i("2877")),v=i("6544"),m=i.n(v),g=i("62ad"),I=i("a523"),b=i("0fd9"),x=Object(p["a"])(f,u,d,!1,null,"11d2948c",null),w=x.exports;m()(x,{VCol:g["a"],VContainer:I["a"],VRow:b["a"]});var _=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"pa-0",attrs:{id:"wrapper"}},[i("v-row",{attrs:{"no-gutters":""},on:{click:function(e){return t.showPlaceInfo(!1)}}},[i("v-col",{staticClass:"tag d-flex justify-center align-center",attrs:{cols:"auto"}},[i("svg",{attrs:{id:"btntag"},on:{click:function(e){return e.stopPropagation(),t.showPlaceInfo(!0)}}},[i("use",{attrs:{"xlink:href":"#tag"}})])]),i("v-col",{staticClass:"photo fill-height d-flex justify-center align-center pa-2",attrs:{cols:"auto"}},[i("img",{attrs:{src:t.place.photo_url?t.place.photo_url:"https://doqvf81n9htmm.cloudfront.net/data/Luke1226_165/2020-02/%E5%92%96%E5%95%A1%E5%BB%B3/%E5%8F%B0%E5%8C%97%E7%99%AE%E5%92%96%E5%95%A1_40a.jpg"}})]),i("v-col",{staticClass:"name d-flex justify-center px-8",attrs:{"align-self":"center"}},[t._v(t._s(t.place.name))]),i("v-col",{staticClass:"phone d-flex justify-center",attrs:{cols:"auto","align-self":"center"}},[t._v(t._s(t.place.phone))]),i("v-col",{staticClass:"pin d-flex justify-center",attrs:{cols:"auto","align-self":"center"},on:{click:function(e){return e.stopPropagation(),t.openNewTab(e)}}},[i("svg",{attrs:{id:"btnpin"}},[i("use",{attrs:{"xlink:href":"#pin"}})])]),i("v-col",{staticClass:"select d-flex justify-center",attrs:{cols:"auto","align-self":"center"},on:{click:function(e){return e.stopPropagation(),t.deletePlace(e)}}},[i("svg",{attrs:{id:"btntrash"}},[i("use",{attrs:{"xlink:href":"#trash"}})])])],1)],1)},C=[],y=(i("b0c0"),i("a9e3"),{props:{place:{type:Object},listId:{type:Number}},data:function(){return{setActive:!1}},methods:{deletePlace:function(){this.$store.dispatch("user/removeListPlaces",{list_id:this.listId,places:[this.place.id]}),this.$store.commit("common/MODIFY_LISTDETAIL",this.place.id)},showPlaceInfo:function(t){this.setActive=t,this.$emit("showPlaceInfo",{placeId:this.place.id,setActive:this.setActive})},openNewTab:function(){var t="https://www.google.com/maps/search/?api=1&query="+this.place.name+"&query_place_id="+this.place.gmap_id;window.open(t,"_blank")}}}),V=y,j=(i("6927"),Object(p["a"])(V,_,C,!1,null,"b0f19916",null)),k=j.exports;m()(j,{VCol:g["a"],VContainer:I["a"],VRow:b["a"]});var S=i("7d93"),$=i("d5de"),D={components:{ListInfo:r["a"],EditedListPlaceHeader:w,EditedListPlaceItem:k,ListDialog:S["a"],PlaceInfoDialog:$["a"]},data:function(){return{dialog:!1,listId:this.$route.params.listId,model:null,search:null,isLoading:!1,items:null,placeInfo:!1}},computed:Object(l["a"])(Object(l["a"])({},Object(c["c"])(["selectTags"])),Object(c["c"])("common",["list"])),watch:{selectTags:function(){this.$store.dispatch("common/getListDetail",{list_id:this.$route.params.listId,filter:this.selectTags.map((function(t){return t.id}))})},search:function(t){var e=this;null!==t&&(this.isLoading||(this.isLoading=!0,this.$store.dispatch("user/searchUserPlaces",{list_id:this.$route.params.listId,text:t}).then((function(t){e.items=t.data.data.places})).finally((function(){e.isLoading=!1}))))}},methods:{showDialog:function(){var t=this;this.$store.dispatch("user/getListInfo",{list_id:this.list.info.id}).then((function(){return t.dialog=!0}))},saveList:function(){this.dialog=!1,this.$store.dispatch("common/getListDetail",{list_id:this.$route.params.listId,filter:this.selectTags})},closeDialog:function(){this.dialog=!1},inputHandler:function(t){this.$store.dispatch("common/addListPlaces",{list_id:this.$route.params.listId,place:t}),this.items=[]},showPlaceInfo:function(t){var e=this,i=t.placeId,n=t.setActive;this.isActive=n,this.$store.dispatch("place/getDialogDetail",{place_id:i}).then((function(){return e.placeInfo=!0}))}},mounted:function(){this.$store.dispatch("common/getListDetail",{list_id:this.$route.params.listId,filter:[]})}},P=D,E=(i("5157"),i("c6a6")),L=i("8336"),O=i("169a"),T=Object(p["a"])(P,s,o,!1,null,"ada72e30",null),A=T.exports;m()(T,{VAutocomplete:E["a"],VBtn:L["a"],VCol:g["a"],VContainer:I["a"],VDialog:O["a"],VRow:b["a"]});var H={components:{EditedListPlacesContainer:A}},B=H,N=(i("54ce"),Object(p["a"])(B,n,a,!1,null,"64923d34",null));e["default"]=N.exports;m()(N,{VBtn:L["a"],VCol:g["a"],VContainer:I["a"],VRow:b["a"]})},cc07:function(t,e,i){"use strict";var n=i("917a"),a=i.n(n);a.a},e31e:function(t,e,i){"use strict";var n=i("e3c1"),a=i.n(n);a.a},e3c1:function(t,e,i){},e5f8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2c564fca.86479258.js.map