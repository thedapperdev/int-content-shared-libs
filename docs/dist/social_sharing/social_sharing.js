function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function social_sharing_social_sharing(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Cul class=\"social-sharing\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Cli class=\"article-social-share-facebook\" data-partial=\"social-share\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Ca" + (" href=\"#\""+pug_attr("data-social-share-url", `${data.protocol}${data.host}${data.pathname}`, true, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Cimg" + (" src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fwebicons\u002F2.0.0\u002Fwebicons\u002Fwebicon-facebook.svg\""+pug_attr("alt", data.facebook, true, false)+pug_attr("title", data.facebook, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Cli class=\"article-social-share-twitter\" data-partial=\"social-share\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Ca" + (" href=\"#\""+pug_attr("data-social-share-url", `${data.protocol}${data.host}${data.pathname}`, true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Cimg" + (" src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fwebicons\u002F2.0.0\u002Fwebicons\u002Fwebicon-twitter.svg\""+pug_attr("alt", data.twitter, true, false)+pug_attr("title", data.twitter, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Cli class=\"article-social-share-whatsapp\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `whatsapp://send?text=http%3a%2f%2f${data.host}${data.pathname}`, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fjoegasewiczadmin\u002FDocuments\u002Fwork\u002Fshared-components\u002Fcomponents\u002Fsocial_sharing\u002Fsocial_sharing.pug";
pug_html = pug_html + "\u003Cimg" + (" img=\"img\" src=\"https:\u002F\u002Fimage.flaticon.com\u002Ficons\u002Fsvg\u002F124\u002F124034.svg\" data-action=\"share\u002Fwhatsapp\u002Fshare\""+pug_attr("alt", data.whatsApp, true, false)+pug_attr("title", data.whatsApp, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}