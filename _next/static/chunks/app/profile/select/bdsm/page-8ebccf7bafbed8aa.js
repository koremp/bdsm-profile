(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{2582:function(e,t,i){"use strict";i.d(t,{Z:function(){return v}});var n=i(20791),o=i(13428),r=i(2265),s=i(57042),a=i(95600),l=i(35843),h=i(87927),u=i(26520),c=i(25702);function p(e){return(0,c.Z)("MuiFormGroup",e)}(0,u.Z)("MuiFormGroup",["root","row","error"]);var d=i(59592),m=i(54379),f=i(57437);let y=["className","row"],b=e=>{let{classes:t,row:i,error:n}=e;return(0,a.Z)({root:["root",i&&"row",n&&"error"]},p,t)},g=(0,l.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.row&&t.row]}})(({ownerState:e})=>(0,o.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),w=r.forwardRef(function(e,t){let i=(0,h.Z)({props:e,name:"MuiFormGroup"}),{className:r,row:a=!1}=i,l=(0,n.Z)(i,y),u=(0,d.Z)(),c=(0,m.Z)({props:i,muiFormControl:u,states:["error"]}),p=(0,o.Z)({},i,{row:a,error:c.error}),w=b(p);return(0,f.jsx)(g,(0,o.Z)({className:(0,s.Z)(w.root,r),ownerState:p,ref:t},l))});var v=w},38099:function(e,t,i){Promise.resolve().then(i.t.bind(i,78139,23)),Promise.resolve().then(i.bind(i,70047))},5654:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(57437),o=i(21975);function r(e){let{value:t,onChange:i,onKeyDown:r}=e;return(0,n.jsx)(o.Z,{required:!0,value:t,onChange:i,onKeyDown:r})}r.defaultProps={onKeyDown:void 0}},70047:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var n=i(57437),o=i(2265),r=i(3198),s=i(33546),a=i(9812),l=i(51469),h=i(39227),u=i(2582),c=i(47827),p=i(43226),d=i(97812),m=i(60321),f=i(5654);function y(){let e=(0,r.I0)(),t=(0,r.v9)(d.QZ),i=(0,r.v9)(d.t1),y=(0,r.v9)(d._f),b=(0,r.v9)(d.Eb),[g,w]=(0,o.useState)(""),v=()=>{e((0,d.iS)())};return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(a.Z,{control:(0,n.jsx)(l.Z,{checked:t,onClick:()=>v()}),label:"BDSM"}),t&&(0,n.jsx)(h.Z,{children:(0,n.jsxs)(u.Z,{onChange:t=>{let i=t.target.value;e((0,d.h)(i))},sx:{display:"flex",flexDirection:"row"},children:[m.l.map(e=>{let{text:t}=e;return(0,n.jsx)(a.Z,{value:t,control:(0,n.jsx)(l.Z,{}),label:t},t)}),i.includes(m.r.Other)&&(0,n.jsx)(h.Z,{children:(0,n.jsx)(f.Z,{value:g,onChange:e=>w(e.target.value),onKeyDown:t=>{"Enter"===t.key&&(t.preventDefault(),e((0,d.op)(g)),w(""))}})}),y.map(t=>(0,n.jsx)(c.Z,{label:t,onDelete:()=>e((0,d.op)(t))})),t&&(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(p.Z,{children:"Description"}),(0,n.jsx)(f.Z,{value:b,onChange:t=>{e((0,d.nY)(t.target.value))}})]})]})})]})}},97812:function(e,t,i){"use strict";i.d(t,{Eb:function(){return p},QZ:function(){return h},_f:function(){return c},h:function(){return s},iS:function(){return r},nY:function(){return l},op:function(){return a},t1:function(){return u}});var n=i(50663);let o=(0,n.oM)({name:"bdsm",initialState:{exist:!1,values:[],others:[],desc:""},reducers:{toggleExistBDSM:e=>{e.exist=!e.exist,e.exist||(e.values=[],e.others=[],e.desc="")},setBDSMs:(e,t)=>{let i=t.payload;if(e.values.includes(i)){let t=e.values.indexOf(i);e.values.splice(t)}else e.values.push(i)},setOtherBDSMs:(e,t)=>{let i=t.payload;if(e.others.includes(i)){let t=e.others.indexOf(i);e.others.splice(t)}else e.others.push(i)},setDescription:(e,t)=>{e.desc=t.payload}}}),{toggleExistBDSM:r,setBDSMs:s,setOtherBDSMs:a,setDescription:l}=o.actions,h=e=>e.bdsm.exist,u=e=>e.bdsm.values,c=e=>e.bdsm.others,p=e=>e.bdsm.desc;t.ZP=o.reducer},60321:function(e,t,i){"use strict";i.d(t,{l:function(){return o},r:function(){return r}});var n=i(97764);let o=[{text:"Dominant",description:"Dominants like to be in charge. Some like to have their partner obey them without questioning, others like some resistance while taking it their way. Some are dominant only in the bedroom, others are dominant throughout their daily life as well. Unlike the top roles (giving pain/bondage/degradation), being dominant is more about who decides what happens (and takes the responsibility that comes with it) than about the contents of what happens."},{text:"Submissive",description:"Submissives like to follow. Some like to give the control away to their partner(s), some like to have it forcibly taken from them. Some are submissive only in the bedroom, others are submissive throughout their daily life as well (usually with limitations). Unlike the bottom roles (receiving pain/bondage/degradation), being submissive is more about who decides what happens (and takes the responsibility that comes with it) than about the contents of what happens."},{text:"Sadist",description:"Sadists enjoy inflicting (certain types of) pain on their partner(s), usually in a sexual context."},{text:"Masochist",description:"Masochists enjoy receiving (certain types of) pain from their partner(s), usually in a sexual context. Masochism is independent of pain tolerance: it is purely about the ability to enjoy (or get aroused by) certain levels of pain."},{text:"Switch",description:"Switches like to... well, switch. Always taking a dominant or top position is not for them, neither is always taking a submissive or bottom position. Some prefer to switch with the same partner or partners, others have a dominant play partner and a submissive play partner, but in either case they do not fit on one end point of the spectrum."},{text:"Master/Mistress",description:"Masters/Mistresses receive complete control over the life of their slave(s), and all responsibilities that come with it. They go a step further than dominants in the sense that their power exchange is present 24/7 and in all aspects of their life (except for negotiated exceptions such as during their office jobs). Their primary focus is to create a stable and safe environment for their slave(s), to allow optimal servitude."},{text:"BratTamer",description:"Brat tamers are, in essence, dominants who enjoy handling bratty submissives. They find disobedience a form of playfulness from the side of the submissive, rather than a form of rudeness. They will take no offence to it, but will still teach the sub a well deserved lesson (because, of course, that is why the bratty sub shows such behavior in the first place)."},{text:"Brat",description:"Brats are, in essence, naughty submissives. They find disobedience a form of playfulness rather than letting their dominant down, and require a compatible dominant who will not only teach them a lesson, but also accept that any number of lessons might still not necessarily change this behavior."},{text:"Daddy/Mommy",description:"Daddies/Mommies take on a caretaker role in the relationship, being a guide as much a dominant. Daddies/Mommies dominate their little treasure submissives with an iron fist in a velvet glove: much cuddly and affectionate on the outside, while being as sturdy and hard on the inside as other dominants. Using subtle psychological mechanisms rather than brute power, they nurture their littles into obedience. Sexuality is not necessarily involved, and there is no link at all with pedophilia (which is simply not on the BDSM spectrum)."},{text:"Little",description:"Littles (girls/boys) are submissive spirits with a strong flavor childlike innocence. They long for a nurturing loving dominant who plays a guiding, almost parental role in their lives. While they require a softer approach to be dominated than most other submissives, their submission can be just as deep as that of other submissives or slaves. Sexuality is not necessarily involved, and there is no link at all with pedophilia (which is simply not on the BDSM spectrum)."},{text:"Owner",description:"Owners own pets/properties and take responsibility over them, on a 24/7 basis. Sexuality is not necessarily involved; in some cases role play attributes are also provided (e.g. a cage for the pet). There is no link at all with sex with animals (which is simply not on the BDSM spectrum), and many pets don't even feel like they're playing an animal, it's more about the typical relationship between an owner and a pet."},{text:"Pet",description:"Pets are property of their owner in daily life. Sexuality is not necessarily involved; in some cases role play attributes are also provided (e.g. a cage for the pet). There is no link at all with sex with animals (which is simply not on the BDSM spectrum), and many pets don't even feel like they're playing an animal, it's more about the typical relationship between an owner and a pet."},{text:"Ageplayer",description:"Ageplayers like to play with age as part of their kink. They typically take on a much younger or older age than they actually are, or prefer playing with a partner that does so. Attributes and behavior changes (such as pacifiers, coloring books, speaking in more childlike language, etc.) are commonly paired with this, to enrich the context and make it more appropriate for the played age. Sexuality is not necessarily involved, and there is no link at all with pedophilia (which is simply not on the BDSM spectrum)."},{text:"Spanker",description:"Someone who spanks."},{text:"Spankee",description:"The receiver or victim of a spanking"},{text:"Exhibitionist",description:"Exhibitionists enjoy showing their naked body or a sexual activity to other people. Consensually, of course."},{text:"Voyeur",description:"Voyeurs enjoy watching the nakedness or sexual activity of other people. Consensually, of course."},{text:"Ropebunny",description:"Rope bunny likes to be tied up and restrained, using rope and/or other attributes (chains, cuffs, spreader bars, etc.). Whether for sexual enhancement, for art or just for fun, they enjoy being totally at the mercy of their partner(s)."},{text:"Hunter",description:"Primals are mainly focused on their natural instincts and they enjoy letting their inner animal out during sex. The key part for primals play is that the participants show their raw, emotional sexual feelings during play. All of the labels, roles, and protocols go out the window, and the prey can become a snarling, growing, clawing animal hell-bent on getting away from its predator (you)."},{text:"Prey",description:"Primals are mainly focused on their natural instincts and they enjoy letting their inner animal out during sex. The key part for primals play is that the participants show their raw, emotional sexual feelings during play. All of the labels, roles, and protocols go out the window, and the prey (you) can become a snarling, growing, clawing animal hell-bent on getting away from its predator."},{text:"Rigger",description:"Riggers like to tie up and restrain their partner(s), using rope and/or other attributes (chains, cuffs, spreader bars, etc.). Whether for sexual enhancement, for art or just for fun, they enjoy having their partners completely at their mercy."},{text:"Vanilla",description:""},{text:"Other",description:""}],r=(0,n.D)(o)},97764:function(e,t,i){"use strict";function n(e){return Object.fromEntries(e.map(e=>[e.text,e.description]))}i.d(t,{D:function(){return n}})}},function(e){e.O(0,[476,139,815,928,529,413,827,971,596,744],function(){return e(e.s=38099)}),_N_E=e.O()}]);