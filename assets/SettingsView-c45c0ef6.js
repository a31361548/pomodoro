import{u as ne}from"./settings-6d3c8c7f.js";import{p as R,I as P,aI as ue,m as Z,t as se,z as re,g as p,ap as T,aC as U,l as i,al as ie,q as de,as as v,s as A,b as t,o as ce,R as fe,ai as j,r as ve,b4 as J,d as h,$ as me,a0 as Ve,ax as D,G as ye,af as be,D as Ce,b9 as G,aA as ge,ar as Se,ah as _e,n as Ie,aL as ke,ba as he,aQ as Re,aR as B,aS as xe,aT as y,aU as Pe,u as w,bb as z,aV as d,aZ as H,a_ as pe,aW as Ae,bc as Ge,bd as Be}from"./index-bdc739fa.js";import{b as K,a as we,V as Q,c as x,d as $e}from"./VLabel-1570a014.js";import{V as Te}from"./VTable-8a6b74b9.js";const X=Symbol.for("vuetify:selection-control-group"),F=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:ue},...Z(),...se(),...re()},"SelectionControlGroup"),Ue=R({...F({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),De=p()({name:"VSelectionControlGroup",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:r}=s;const l=T(e,"modelValue"),o=U(),m=i(()=>e.id||`v-selection-control-group-${o}`),n=i(()=>e.name||m.value),a=new Set;return ie(X,{modelValue:l,forceUpdate:()=>{a.forEach(u=>u())},onForceUpdate:u=>{a.add(u),ce(()=>{a.delete(u)})}}),de({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),A(()=>{var u;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(u=r.default)==null?void 0:u.call(r)])}),{}}}),Y=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...Z(),...F()},"VSelectionControl");function Fe(e){const s=be(X,void 0),{densityClasses:r}=Ce(e),l=T(e,"modelValue"),o=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=i(()=>e.falseValue!==void 0?e.falseValue:!1),n=i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=i({get(){const c=s?s.modelValue.value:l.value;return n.value?G(c).some(f=>e.valueComparator(f,o.value)):e.valueComparator(c,o.value)},set(c){if(e.readonly)return;const f=c?o.value:m.value;let V=f;n.value&&(V=c?[...G(l.value),f]:G(l.value).filter(g=>!e.valueComparator(g,o.value))),s?s.modelValue.value=V:l.value=V}}),{textColorClasses:u,textColorStyles:S}=ge(i(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:_,backgroundColorStyles:b}=Se(i(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),C=i(()=>a.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:r,trueValue:o,falseValue:m,model:a,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,icon:C}}const ee=p()({name:"VSelectionControl",directives:{Ripple:fe},inheritAttrs:!1,props:Y(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:l}=s;const{group:o,densityClasses:m,icon:n,model:a,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,trueValue:C}=Fe(e),c=U(),f=i(()=>e.id||`input-${c}`),V=j(!1),g=j(!1),I=ve();o==null||o.onForceUpdate(()=>{I.value&&(I.value.checked=a.value)});function O(k){V.value=!0,_e(k.target,":focus-visible")!==!1&&(g.value=!0)}function E(){V.value=!1,g.value=!1}function le(k){e.readonly&&o&&Ie(()=>o.forceUpdate()),a.value=k.target.checked}return A(()=>{var q,M;const k=l.label?l.label({label:e.label,props:{for:f.value}}):e.label,[ae,te]=J(r),L=t("input",h({ref:I,checked:a.value,disabled:!!(e.readonly||e.disabled),id:f.value,onBlur:E,onFocus:O,onInput:le,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:C.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},te),null);return t("div",h({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":V.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},m.value,e.class]},ae,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",u.value],style:S.value},[(q=l.default)==null?void 0:q.call(l,{backgroundColorClasses:_,backgroundColorStyles:b}),me(t("div",{class:["v-selection-control__input"]},[((M=l.input)==null?void 0:M.call(l,{model:a,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,inputNode:L,icon:n.value,props:{onFocus:O,onBlur:E,id:f.value}}))??t(D,null,[n.value&&t(ye,{key:"icon",icon:n.value},null),L])]),[[Ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&t(K,{for:f.value,clickable:!0,onClick:oe=>oe.stopPropagation()},{default:()=>[k]})])}),{isFocused:V,input:I}}}),Ne=R({...Y({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),$=p()({name:"VRadio",props:Ne(),setup(e,s){let{slots:r}=s;return A(()=>t(ee,h(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),r)),{}}});const Oe=R({height:{type:[Number,String],default:"auto"},...we(),...ke(F(),["multiple"]),trueIcon:{type:P,default:"$radioOn"},falseIcon:{type:P,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),W=p()({name:"VRadioGroup",inheritAttrs:!1,props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:l}=s;const o=U(),m=i(()=>e.id||`radio-group-${o}`),n=T(e,"modelValue");return A(()=>{const[a,u]=J(r),S=Q.filterProps(e),_=ee.filterProps(e),b=l.label?l.label({label:e.label,props:{for:m.value}}):e.label;return t(Q,h({class:["v-radio-group",e.class],style:e.style},a,S,{modelValue:n.value,"onUpdate:modelValue":C=>n.value=C,id:m.value}),{...l,default:C=>{let{id:c,messagesId:f,isDisabled:V,isReadonly:g}=C;return t(D,null,[b&&t(K,{id:c.value},{default:()=>[b]}),t(De,h(_,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:V.value,readonly:g.value,"aria-labelledby":b?c.value:void 0,multiple:!1},u,{modelValue:n.value,"onUpdate:modelValue":I=>n.value=I}),l)])}})}),{}}}),N=e=>(Ge("data-v-e2165185"),e=e(),Be(),e),Ee=N(()=>d("h1",{class:"text-center"},"通知設定",-1)),Le=N(()=>d("h1",{class:"text-center"},"鈴聲設定",-1)),qe=N(()=>d("thead",null,[d("tr",null,[d("th",null,"名稱"),d("th",null,"試聽"),d("th",null,"選擇")])],-1)),Me=["src"],je={__name:"SettingsView",setup(e){const s=ne(),{alarms:r,selectedAlarm:l,notify:o}=Re(s);return(m,n)=>(B(),xe(Pe,null,{default:y(()=>[t($e,null,{default:y(()=>[t(x,{cols:"12"},{default:y(()=>[Ee]),_:1}),t(x,{cols:"12"},{default:y(()=>[t(W,{inline:"",modelValue:w(o),"onUpdate:modelValue":n[0]||(n[0]=a=>z(o)?o.value=a:null)},{default:y(()=>[t($,{label:"開啟",value:!0}),t($,{label:"關閉",value:!1})]),_:1},8,["modelValue"])]),_:1}),t(x,{cols:"12"},{default:y(()=>[Le]),_:1}),t(x,{cols:"12"},{default:y(()=>[t(Te,null,{default:y(()=>[qe,d("tbody",null,[(B(!0),H(D,null,pe(w(r),a=>(B(),H("tr",{key:a.id},[d("td",null,Ae(a.name),1),d("td",null,[d("audio",{src:a.file,controls:""},null,8,Me)]),d("td",null,[t(W,{modelValue:w(l),"onUpdate:modelValue":n[1]||(n[1]=u=>z(l)?l.value=u:null)},{default:y(()=>[t($,{value:a.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},Ze=he(je,[["__scopeId","data-v-e2165185"]]);export{Ze as default};
