!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self)["vue-elm-components"]=t()}(this,function(){"use strict";var e={props:{src:{type:Object,required:!0},ports:{type:Function,required:!1},flags:{type:Object,required:!1,default:{}}},render:function(e){return e("div",null)},mounted:function(){var e,t=this,n=t.$el,i=t.ports,o=t.flags,t=t.src;t.embed?e=t.embed(n,o):t.init&&(e=t.init({node:n,flags:o})),e&&void 0!==i&&i(e.ports)},__file:"src/elm.vue"};return e});
//# sourceMappingURL=vue-elm-components.js.map
