function module(n,o,t){var r,a;t.export({useFormatDuration:function(){return u}}),t.link("react",{useCallback:function(n){r=n}},0),t.link("../contexts/TranslationContext",{useTranslation:function(n){a=n}},1);var u=function(){var n=a();return r((function(o){var t=Math.floor(o/86400),r=Math.floor(o%86400/3600),a=Math.floor(o%86400%3600/60),u=Math.floor(o%86400%3600%60),e="";return t>0&&(e+=t+" "+n("days")+", "),r>0&&(e+=r+" "+n("hours")+", "),a>0&&(e+=a+" "+n("minutes")+", "),u>0&&(e+=u+" "+n("seconds")),e}),[n])}}

