var script={props:{src:{type:Object,required:!0},ports:{type:Function,required:!1},flags:{type:Object,required:!1,default:{}}},render:function(e){return e("div",null,e("div",{ref:"placeholder"}))},mounted:function(){var e,r=this,t=r.$el,i=r.$refs.placeholder,d=r.ports,l=r.flags,r=r.src,r=r&&r.Main;r.embed?e=r.embed(t,l):r.init&&(e=r.init({node:i,flags:l})),e&&void 0!==d&&d(e.ports)},__file:"src/elm.vue"};export default script;
//# sourceMappingURL=lib.js.map