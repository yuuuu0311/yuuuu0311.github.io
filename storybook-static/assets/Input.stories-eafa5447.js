import{j as a,F as c,a as h}from"./jsx-runtime-3efccc20.js";import{r as n}from"./index-a8142830.js";import{P as t}from"./index-1f6fda92.js";import{t as p,c as d}from"./style-020442b9.js";import{G as P}from"./iconBase-658cccfe.js";import"./_commonjsHelpers-23102255.js";function F(e){return P({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"defs",attr:{},child:[{tag:"clipPath",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"}}]}]},{tag:"path",attr:{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}},{tag:"path",attr:{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"}}]})(e)}function G(e){return P({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]})(e)}const u=({theme:e,direction:i,inputList:z})=>a(c,{children:z.map((L,A)=>{const{label:m,type:s,isReadOnly:O,isInvalid:E,isDisable:R,placeholder:D}=L,[C,o]=n.useState(s),[M,N]=n.useState(""),[f,y]=n.useState(!1);n.useEffect(()=>{o(s)},[s]);const q=()=>{f?(y(!1),o("password")):(y(!0),o("text"))},S=p(d("flex text-neutral-400 transition w-96",{"flex-col":i=="vertical","flex-row gap-1 items-center":i=="horizontal"},{"focus-within:text-neutral-300":e=="neutral"},{"focus-within:text-blue-500":e=="primary"},{"focus-within:text-neutral-500":e=="secondary"},{"focus-within:text-green-500":e=="success"},{"focus-within:text-red-500":e=="danger"})),T=p(d("inline-flex items-center border-b border-neutral-200",{"pb-1 mb-1 ":i=="vertical"})),V=p(d("outline-none text-slate-800 text-xl placeholder:text-neutral-200"));return h("label",{ket:A,className:S,children:[m,h("span",{className:T,children:[a("input",{name:m,type:C,readOnly:O,disabled:R,placeholder:D,onChange:_=>{N(_.target.value)},value:M,className:V}),s=="password"?a("span",{onClick:q,children:f?a(F,{}):a(G,{})}):a(c,{})]}),E?a("span",{className:"text-sm text-red-500",children:"validate fail"}):a(c,{})]})})});u.propTypes={direction:t.oneOf(["vertical","horizontal"]),inputList:t.array[{type:t.oneOf(["text","number","password","date","email"]),isReadOnly:t.bool,isDisable:t.bool}]};u.__docgenInfo={description:"",methods:[],displayName:"Input",props:{direction:{type:{name:"enum",value:[{value:'"vertical"',computed:!1},{value:'"horizontal"',computed:!1}]},required:!1,description:""},inputList:{type:{name:"array"},required:!1,description:""}}};const J={title:"components/Input",component:u,tags:["autodocs"],argTypes:{direction:{options:["vertical","horizontal"],control:{type:"radio"}},theme:{options:["neutral","primary","secondary","success","danger"],control:{type:"select"}}}},l={args:{theme:"primary",direction:"vertical",inputList:[{label:"Account",type:"text",isReadOnly:!1,isInvalid:!1,isDisable:!1,placeholder:"Place Enter Account"}]}},r={args:{theme:"primary",direction:"vertical",inputList:[{label:"Account",type:"text",isReadOnly:!1,isInvalid:!1,isDisable:!1,placeholder:"Place Enter Account"},{label:"Password",type:"password",isReadOnly:!1,isInvalid:!1,isDisable:!1,placeholder:"Place Enter Passsword"}]}};var b,x,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    direction: "vertical",
    // horizontal

    inputList: [{
      label: "Account",
      type: "text",
      isReadOnly: false,
      isInvalid: false,
      isDisable: false,
      placeholder: "Place Enter Account"
    }]
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,w,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    direction: "vertical",
    // horizontal

    inputList: [{
      label: "Account",
      type: "text",
      isReadOnly: false,
      isInvalid: false,
      isDisable: false,
      placeholder: "Place Enter Account"
    }, {
      label: "Password",
      type: "password",
      isReadOnly: false,
      isInvalid: false,
      isDisable: false,
      placeholder: "Place Enter Passsword"
    }]
  }
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const K=["Primary","Group"];export{r as Group,l as Primary,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Input.stories-eafa5447.js.map
