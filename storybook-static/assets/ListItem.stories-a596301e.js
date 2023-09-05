import{j as l}from"./jsx-runtime-3efccc20.js";import"./index-a8142830.js";import{P as r}from"./index-1f6fda92.js";import{t as c,c as p}from"./style-020442b9.js";import"./_commonjsHelpers-23102255.js";const t=({theme:d,listStyle:e,children:a})=>{const m=c(p({"list-none":e=="none","list-disc":e=="bullets","list-decimal":e=="decimal","list-roman":e=="roman","list-square":e=="square","list-zh":e=="zh","list-emoji":e=="emoji"}));return l("li",{className:m,children:a})};t.propTypes={theme:r.string,listStyle:r.string};t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{theme:{type:{name:"string"},required:!1,description:""},listStyle:{type:{name:"string"},required:!1,description:""}}};const f={title:"components/List Item",component:t,tags:["autodocs"],argTypes:{theme:{options:["neutral","primary","secondary","success","danger"],control:{type:"select"}},listStyle:{options:["bullets","decimal","roman","square","zh","emoji","none"],control:{type:"select"}}},args:{theme:"neutral",listStyle:"none"}},s={args:{theme:"primary",listStyle:"bullets",children:"I'm list item"}};var o,i,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    listStyle: "bullets",
    children: "I'm list item"
  }
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const j=["Bullets"];export{s as Bullets,j as __namedExportsOrder,f as default};
//# sourceMappingURL=ListItem.stories-a596301e.js.map
