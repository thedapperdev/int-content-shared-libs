(function(dust){dust.register("large-content-card",body_0);function body_0(chk,ctx){return chk.w("<article><div class=\"large-content-card\">").h("ne",ctx,{"else":body_1,"block":body_2},{"key":ctx.getPath(false, ["data","primarySyndicatePosition"]),"value":""},"h").w("</div></article>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<a href=\"").h("link",ctx,{},{"article":ctx.get(["data"], false),"channel":ctx.getPath(false, ["settings","channel"])},"h").w("/\" class=\"large-content-card__link\">").p("large-card-image",ctx,ctx,{}).w("\n</a><div class=\"large-content-card__info\">").p("title",ctx,ctx,{}).w("\n").p("syndicate-time",ctx,ctx,{"channel":ctx.getPath(false, ["settings","channel"])}).w("\n</div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<a href=\"").h("primarySyndicate",ctx,{},{"urls":ctx.getPath(false, ["data","syndicateUrls"]),"channel":ctx.getPath(false, ["settings","channel"])},"h").w("\" class=\"large-content-card__link\">").p("large-card-image",ctx,ctx,{}).w("\n</a><div class=\"large-content-card__info\">").p("title",ctx,ctx,{}).w("\n").p("syndicate-time",ctx,ctx,{}).w("\n</div>");}body_2.__dustBody=!0;return body_0}(dust));