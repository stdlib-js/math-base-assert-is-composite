// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.sqrt,r=Math.floor,t={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0},n=Number.POSITIVE_INFINITY;return function(f){return function(e){return r(e)===e}(f)&&f>1&&f!==n&&!1===function(n){var f,i;if(r(n)!==n)return!1;if(n<=3)return n>1;if(n>9007199254740991||n%2==0)return!1;if(n<9)return!0;if(n%3==0)return!1;if(n%5==0)return!1;if(n%7==0)return!1;if(t[n])return!0;for(f=r(e(n)),i=11;i<=f;i+=210)if(n%i==0||n%(i+2)==0||n%(i+6)==0||n%(i+8)==0||n%(i+12)==0||n%(i+18)==0||n%(i+20)==0||n%(i+26)==0||n%(i+30)==0||n%(i+32)==0||n%(i+36)==0||n%(i+42)==0||n%(i+48)==0||n%(i+50)==0||n%(i+56)==0||n%(i+60)==0||n%(i+62)==0||n%(i+68)==0||n%(i+72)==0||n%(i+78)==0||n%(i+86)==0||n%(i+90)==0||n%(i+92)==0||n%(i+96)==0||n%(i+98)==0||n%(i+102)==0||n%(i+110)==0||n%(i+116)==0||n%(i+120)==0||n%(i+126)==0||n%(i+128)==0||n%(i+132)==0||n%(i+138)==0||n%(i+140)==0||n%(i+146)==0||n%(i+152)==0||n%(i+156)==0||n%(i+158)==0||n%(i+162)==0||n%(i+168)==0||n%(i+170)==0||n%(i+176)==0||n%(i+180)==0||n%(i+182)==0||n%(i+186)==0||n%(i+188)==0||n%(i+198)==0||n%(i+200)==0)return!1;return!0}(f)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComposite=r();
//# sourceMappingURL=index.js.map
