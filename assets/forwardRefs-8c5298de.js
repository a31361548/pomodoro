import{b8 as x}from"./index-bdc739fa.js";class m{constructor(t){let{x:n,y:r,width:s,height:i}=t;this.x=n,this.y=r,this.width=s,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function v(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function R(e){return Array.isArray(e)?new m({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function y(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),r=n.transform;if(r){let s,i,o,f,a;if(r.startsWith("matrix3d("))s=r.slice(9,-1).split(/, /),i=+s[0],o=+s[5],f=+s[12],a=+s[13];else if(r.startsWith("matrix("))s=r.slice(7,-1).split(/, /),i=+s[0],o=+s[3],f=+s[4],a=+s[5];else return new m(t);const h=n.transformOrigin,c=t.x-f-(1-i)*parseFloat(h),u=t.y-a-(1-o)*parseFloat(h.slice(h.indexOf(" ")+1)),d=i?t.width/i:e.offsetWidth+1,l=o?t.height/o:e.offsetHeight+1;return new m({x:c,y:u,width:d,height:l})}else return new m(t)}function B(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let r;try{r=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof r.finished>"u"&&(r.finished=new Promise(s=>{r.onfinish=()=>{s(r)}})),r}const W="cubic-bezier(0.4, 0, 0.2, 1)",O="cubic-bezier(0.0, 0, 0.2, 1)",P="cubic-bezier(0.4, 0, 1, 1)",I=parseInt("1500"),b=parseInt("300"),E=x("list",{state:()=>({items:[],id:1,timeleft:I,break:!1,finishedItems:[],currentItem:""}),actions:{addItem(e){this.items.push({id:this.id++,name:e,edit:!1,model:e})},findIndexById(e){return this.items.findIndex(t=>t.id===e)},editItem(e){const t=this.findIndexById(e);t<0||(this.items[t].edit=!0)},delItem(e){const t=this.findIndexById(e);t<0||this.items.splice(t,1)},cancelEditItem(e){const t=this.findIndexById(e);t<0||(this.items[t].model=this.items[t].name,this.items[t].edit=!1)},confirmEditItem(e){const t=this.findIndexById(e);t<0||(this.items[t].name=this.items[t].model,this.items[t].edit=!1)},setCurrentItem(){this.currentItem=this.break?"休息一下":this.items.shift().name},countdown(){this.timeleft--},setFinishedItem(){this.break||this.finishedItems.push({name:this.currentItem,id:this.id++}),this.currentItem="",this.items.length>0&&(this.break=!this.break),this.timeleft=this.break?b:I},delFinishedItem(e){const t=this.finishedItems.findIndex(n=>n.id===e);t<0||this.finishedItems.splice(t,1)}},persist:{key:"pomodoro-list"}}),p=Symbol("Forwarded refs");function g(e,t){let n=e;for(;n;){const r=Reflect.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function F(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e[p]=n,new Proxy(e,{get(s,i){if(Reflect.has(s,i))return Reflect.get(s,i);if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,i)){const f=Reflect.get(o.value,i);return typeof f=="function"?f.bind(o.value):f}}},has(s,i){if(Reflect.has(s,i))return!0;if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,i))return!0;return!1},set(s,i,o){if(Reflect.has(s,i))return Reflect.set(s,i,o);if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const f of n)if(f.value&&Reflect.has(f.value,i))return Reflect.set(f.value,i,o);return!1},getOwnPropertyDescriptor(s,i){var f;const o=Reflect.getOwnPropertyDescriptor(s,i);if(o)return o;if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const a of n){if(!a.value)continue;const h=g(a.value,i)??("_"in a.value?g((f=a.value._)==null?void 0:f.setupState,i):void 0);if(h)return h}for(const a of n){const h=a.value&&a.value[p];if(!h)continue;const c=h.slice();for(;c.length;){const u=c.shift(),d=g(u.value,i);if(d)return d;const l=u.value&&u.value[p];l&&c.push(...l)}}}}})}export{m as B,B as a,P as b,v as c,O as d,F as f,R as g,y as n,W as s,E as u};
