(function(dust){dust.register("pagination",body_0);function body_0(chk,ctx){return chk.w("<ul class=\"pagination\">").h("paginate",ctx,{"current":body_1,"prev":body_2,"next":body_3,"block":body_4},{"page":ctx.getPath(false, ["data","currentPage"]),"totalPages":ctx.getPath(false, ["data","totalPages"]),"path":body_5},"h").w("</ul>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<li><a class=\"active\" href=\"").f(ctx.get(["path"], false),ctx,"h").w("\">").f(ctx.get(["n"], false),ctx,"h").w("</a></li>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<li><a href=\"").f(ctx.get(["path"], false),ctx,"h").w("\">&lt;</a></li>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(" <li><a href=\"").f(ctx.get(["path"], false),ctx,"h").w("\">&gt;</a></li>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<li><a href=\"").f(ctx.get(["path"], false),ctx,"h").w("\">").f(ctx.get(["n"], false),ctx,"h").w("</a></li>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.f(ctx.get(["pathNoPage"], false),ctx,"h").w("/").f(ctx.get(["n"], false),ctx,"h").w("/");}body_5.__dustBody=!0;return body_0}(dust));