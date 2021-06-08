var script={props:{src:{type:Object,required:!0},ports:{type:Function,required:!1},flags:{type:Object,required:!1,default:{}}},render:function(e){return e("div",null)},mounted:function(){var e,r=this,t=r.$el,i=r.ports,n=r.flags,r=r.src;r.embed?e=r.embed(t,n):r.init&&(e=r.init({node:t,flags:n})),e&&void 0!==i&&i(e.ports)},__file:"src/elm.vue"};export default script;
//# sourceMappingURL=lib.js.map
