(function(dust){dust.register("card-image",body_0);function body_0(chk,ctx){return chk.w("<!--").x(ctx.getPath(false, ["data","cardImage"]),ctx,{"else":body_1,"block":body_2},{}).w(" --><!-- small -->").x(ctx.getPath(false, ["data","cardImage"]),ctx,{"else":body_3,"block":body_4},{}).w(" ");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.p("card-no-image",ctx,ctx,{});}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<picture><source type=\"").f(ctx.getPath(false, ["data","cardImage","image","mimeType"]),ctx,"h").w("\" srcset=\"").h("imgcdn",ctx,{},{"asset":ctx.getPath(false, ["data","cardImage","image"]),"width":"305","devicePixelRatio":"2","cropData":ctx.getPath(false, ["data","heroImageThumbLandscape"]),"cropType":"data.heroImageThumbLandscape","ratio":"16-9","resizeStyle":"aspectfill","quality":"50"},"h").w("\" media=\"(max-width: 439px)\"><img srcset=\"").h("imgcdn",ctx,{},{"asset":ctx.getPath(false, ["data","cardImage","image"]),"width":"600","ratio":"16-9","resizeStyle":"aspectfill","cropData":ctx.getPath(false, ["data","heroImageThumbLandscape"]),"cropType":"data.heroImageThumbLandscape"},"h").w("\" alt=\"").f(ctx.getPath(false, ["data","title"]),ctx,"h").w("\" title=\"").f(ctx.getPath(false, ["data","title"]),ctx,"h").w("\"></picture>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.p("card-no-image",ctx,ctx,{});}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<picture><source type=\"").f(ctx.getPath(false, ["data","cardImage","image","mimeType"]),ctx,"h").w("\" srcset=\"").h("imgcdn",ctx,{},{"asset":ctx.getPath(false, ["data","cardImage","image"]),"width":"120","devicePixelRatio":"2","cropData":ctx.getPath(false, ["data","heroImageThumbLandscape"]),"cropType":"data.heroImageThumbLandscape","ratio":"1-1","resizeStyle":"aspectfill","quality":"50"},"h").w("\" media=\"(max-width: 480px)\"><img srcset=\"").h("imgcdn",ctx,{},{"asset":ctx.getPath(false, ["data","cardImage","image"]),"width":"600","ratio":"16-9","resizeStyle":"aspectfill","cropData":ctx.getPath(false, ["data","heroImageThumbLandscape"]),"cropType":"data.heroImageThumbLandscape"},"h").w("\" alt=\"").f(ctx.getPath(false, ["data","title"]),ctx,"h").w("\" title=\"").f(ctx.getPath(false, ["data","title"]),ctx,"h").w("\"></picture>");}body_4.__dustBody=!0;return body_0}(dust));