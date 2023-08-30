(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[416],{2582:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(20791),i=n(13428),o=n(2265),a=n(57042),s=n(95600),d=n(35843),l=n(87927),c=n(26520),u=n(25702);function f(e){return(0,u.Z)("MuiFormGroup",e)}(0,c.Z)("MuiFormGroup",["root","row","error"]);var h=n(59592),m=n(54379),p=n(57437);let v=["className","row"],g=e=>{let{classes:t,row:n,error:r}=e;return(0,s.Z)({root:["root",n&&"row",r&&"error"]},f,t)},y=(0,d.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.row&&t.row]}})(({ownerState:e})=>(0,i.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),x=o.forwardRef(function(e,t){let n=(0,l.Z)({props:e,name:"MuiFormGroup"}),{className:o,row:s=!1}=n,d=(0,r.Z)(n,v),c=(0,h.Z)(),u=(0,m.Z)({props:n,muiFormControl:c,states:["error"]}),f=(0,i.Z)({},n,{row:s,error:u.error}),x=g(f);return(0,p.jsx)(y,(0,i.Z)({className:(0,a.Z)(x.root,o),ownerState:f,ref:t},d))});var Z=x},83321:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(20791),i=n(13428),o=n(2265),a=n(57042),s=n(95600),d=n(89975),l=n(78682),c=n(87927),u=n(59782),f=n(57437),h=(0,u.Z)((0,f.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),m=(0,u.Z)((0,f.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),p=n(35843);let v=(0,p.ZP)("span")({position:"relative",display:"flex"}),g=(0,p.ZP)(h)({transform:"scale(1)"}),y=(0,p.ZP)(m)(({theme:e,ownerState:t})=>(0,i.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));var x=function(e){let{checked:t=!1,classes:n={},fontSize:r}=e,o=(0,i.Z)({},e,{checked:t});return(0,f.jsxs)(v,{className:n.root,ownerState:o,children:[(0,f.jsx)(g,{fontSize:r,className:n.background,ownerState:o}),(0,f.jsx)(y,{fontSize:r,className:n.dot,ownerState:o})]})},Z=n(28702),w=n(62940).Z,b=n(14917),C=n(26520),j=n(25702);function k(e){return(0,j.Z)("MuiRadio",e)}let S=(0,C.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),N=["checked","checkedIcon","color","icon","name","onChange","size","className"],G=e=>{let{classes:t,color:n}=e,r={root:["root",`color${(0,Z.Z)(n)}`]};return(0,i.Z)({},t,(0,s.Z)(r,k,t))},R=(0,p.ZP)(l.Z,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${(0,Z.Z)(n.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${S.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${S.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),P=(0,f.jsx)(x,{checked:!0}),M=(0,f.jsx)(x,{}),z=o.forwardRef(function(e,t){var n,s,d,l;let u=(0,c.Z)({props:e,name:"MuiRadio"}),{checked:h,checkedIcon:m=P,color:p="primary",icon:v=M,name:g,onChange:y,size:x="medium",className:Z}=u,C=(0,r.Z)(u,N),j=(0,i.Z)({},u,{color:p,size:x}),k=G(j),S=o.useContext(b.Z),z=h,D=w(y,S&&S.onChange),F=g;return S&&(void 0===z&&(d=S.value,z="object"==typeof(l=u.value)&&null!==l?d===l:String(d)===String(l)),void 0===F&&(F=S.name)),(0,f.jsx)(R,(0,i.Z)({type:"radio",icon:o.cloneElement(v,{fontSize:null!=(n=M.props.fontSize)?n:x}),checkedIcon:o.cloneElement(m,{fontSize:null!=(s=P.props.fontSize)?s:x}),ownerState:j,classes:k,name:F,checked:z,onChange:D,ref:t,className:(0,a.Z)(k.root,Z)},C))});var D=z},42029:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(13428),i=n(20791),o=n(2265),a=n(2582),s=n(37663),d=n(73292),l=n(14917),c=n(33449).Z,u=n(57437);let f=["actions","children","defaultValue","name","onChange","value"],h=o.forwardRef(function(e,t){let{actions:n,children:h,defaultValue:m,name:p,onChange:v,value:g}=e,y=(0,i.Z)(e,f),x=o.useRef(null),[Z,w]=(0,d.Z)({controlled:g,default:m,name:"RadioGroup"});o.useImperativeHandle(n,()=>({focus:()=>{let e=x.current.querySelector("input:not(:disabled):checked");e||(e=x.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let b=(0,s.Z)(t,x),C=c(p),j=o.useMemo(()=>({name:C,onChange(e){w(e.target.value),v&&v(e,e.target.value)},value:Z}),[C,v,w,Z]);return(0,u.jsx)(l.Z.Provider,{value:j,children:(0,u.jsx)(a.Z,(0,r.Z)({role:"radiogroup",ref:b},y,{children:h}))})});var m=h},14917:function(e,t,n){"use strict";var r=n(2265);let i=r.createContext(void 0);t.Z=i},5555:function(e,t,n){Promise.resolve().then(n.t.bind(n,78139,23)),Promise.resolve().then(n.bind(n,37644))},5654:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(57437),i=n(21975);function o(e){let{value:t,onChange:n,onKeyDown:o}=e;return(0,r.jsx)(i.Z,{required:!0,value:t,onChange:n,onKeyDown:o})}o.defaultProps={onKeyDown:void 0}},37644:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(57437),i=n(3198),o=n(33546),a=n(9812),s=n(51469),d=n(42029),l=n(83321),c=n(39227),u=n(43226),f=n(25901),h=n(44089),m=n(5654);function p(){let e=(0,i.I0)(),t=(0,i.v9)(h.yN),n=(0,i.v9)(h.IF),p=(0,i.v9)(h.u),v=(0,i.v9)(h.Eb),g=()=>{e((0,h.yU)())};return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{control:(0,r.jsx)(s.Z,{checked:t,onClick:()=>g()}),label:"Gender"}),t&&(0,r.jsx)(d.Z,{value:n,onChange:t=>{let{value:n}=t.target;e((0,h.v0)(n))},sx:{display:"flex",flexDirection:"row"},children:f.K.map(e=>{let{text:t}=e;return(0,r.jsx)(a.Z,{value:t,control:(0,r.jsx)(l.Z,{}),label:t},t)})}),n===f.Y.Other&&(0,r.jsx)(m.Z,{value:p,onChange:t=>{let n=t.target.value;e((0,h.ud)(n))}}),t&&(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(u.Z,{children:"Description"}),(0,r.jsx)(m.Z,{value:v,onChange:t=>{e((0,h.nY)(t.target.value))}})]})]})}},44089:function(e,t,n){"use strict";n.d(t,{Eb:function(){return f},IF:function(){return c},nY:function(){return d},u:function(){return u},ud:function(){return s},v0:function(){return a},yN:function(){return l},yU:function(){return o}});var r=n(50663);let i=(0,r.oM)({name:"gender",initialState:{exist:!1,value:void 0,other:"",desc:""},reducers:{toggleExistGender:e=>{e.exist=!e.exist,e.exist||(e.value=void 0,e.other="",e.desc="")},setGender:(e,t)=>{e.value=t.payload},setOtherGender:(e,t)=>{e.other=t.payload},setDescription:(e,t)=>{e.desc=t.payload}}}),{toggleExistGender:o,setGender:a,setOtherGender:s,setDescription:d}=i.actions,l=e=>e.gender.exist,c=e=>e.gender.value,u=e=>e.gender.other,f=e=>e.gender.desc;t.ZP=i.reducer},25901:function(e,t,n){"use strict";n.d(t,{K:function(){return i},Y:function(){return o}});var r=n(97764);let i=[{text:"Female",description:"A person who identifies as female, typically assigned female at birth."},{text:"Male",description:"A person who identifies as male, typically assigned male at birth."},{text:"Non-binary",description:"Non-binary individuals do not exclusively identify as male or female.They may identify outside of or beyond the traditional binary gender system."},{text:"Genderqueer",description:"Genderqueer individuals may have a gender identity that is fluid, encompasses multiple genders, or falls outside of the traditional gender categories."},{text:"Genderfluid",description:"Genderfluid individuals experience their gender identity as fluid, where it may shift and change over time.They may identify with different genders at different times."},{text:"Agender",description:"Agender individuals do not identify with any gender or have a gender identity that is neutral or without gender."},{text:"Bigender",description:"Bigender individuals have a gender identity that encompasses two distinct genders.They may identify as both male and female or as a combination of other genders."},{text:"Androgynous",description:"Androgynous individuals have a gender expression or presentation that is a mix of masculine and feminine traits, or that is neutral and lacks distinct gender markers."},{text:"Two-Spirit",description:"Two-Spirit is an Indigenous concept that encompasses diverse gender identities and expressions among Indigenous communities in North America. It is specific to Indigenous cultures and should not be generalized beyond those contexts."},{text:"Gender Nonconforming",description:"Gender nonconforming individuals express themselves in ways that defy societal expectations or norms associated with their assigned gender at birth."},{text:"Other",description:""},{text:"Transgender",description:"Transgender individuals have a gender identity that does not align with the sex they were assigned at birth. They may transition socially, medically, or legally to live in alignment with their true gender identity."},{text:"Demigender",description:"Demigender individuals have a partial connection or identification with a particular gender. For example, someone may identify as demigirl, meaning they partially identify as a girl while also having another gender identity."},{text:"Neutrois",description:"Neutrois individuals have a gender identity that is neutral or null, experiencing little or no connection to gender."},{text:"Pangender",description:"Pangender individuals have a wide and inclusive sense of gender identity, encompassing many or all genders."},{text:"Third Gender",description:"Some cultures recognize and embrace the existence of more than two genders, often referred to as third gender identities. These identities can vary across cultures and may have specific local names or terms."},{text:"Other",description:""}],o=(0,r.D)(i)},97764:function(e,t,n){"use strict";function r(e){return Object.fromEntries(e.map(e=>[e.text,e.description]))}n.d(t,{D:function(){return r}})}},function(e){e.O(0,[476,139,815,928,529,413,971,596,744],function(){return e(e.s=5555)}),_N_E=e.O()}]);