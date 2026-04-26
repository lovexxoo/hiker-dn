
eval(fetch('hiker://files/cache/fileLinksᴰⁿ.txt'));
var Route = {
    jxLazy: "require('https://hk.gh-proxy.org/https://raw.githubusercontent.com/lovexxoo/hiker-dn/refs/heads/main/Route.js');aytmParse(input)",
    setParse: function() {
        eval(fetch('hiker://files/cache/fileLinksᴰⁿ.txt'));
        if (!getVar('jxItemV')) {
            require(fLinks.jxItUrl);
        }
        d.push({
            desc: 'auto',
            url: fLinks.x5Route + 'Parse_Dn.html',
            col_type: 'x5_webview_single'
        });      
    }
};

function addLanJie(d) {
    let lanjie = ['baidu.*.png', '\.jpg', 'baidu\.', 'cnzz\.', 'dykj\.'];
    try {
        eval('var ylanjie =' + fetchCache(fLinks.kT + 'x5ParseLanJie.txt', 12));
    } catch (e) {}
    lanjie = typeof(ylanjie) == 'object' ? ylanjie : lanjie;
    for (let i = 0; i < d.length; i++) {
        let durl = d[i].url;
        if (durl != undefined && /lazyRule/.test(durl) && /aytmParse|defaultParse/.test(durl)) {
            d[i].extra = d[i].extra == undefined ? {} : d[i].extra;
            d[i].extra.blockRules = lanjie;
        }
    }
    setResult(d);
}

function x5Parse(Url) {
    return $(Url).lazyRule((cfRoute) => {
        try {
            eval('Config=' + fetch(cfRoute));
            eval(fetch(Config.cj));
        } catch (e) {}
        if (typeof ParseS == 'object') {
            return ParseS.defaultParse(input, tools.handleUrl);
        } else {
            return 'toast://没有插件或者设置的插件无效';
        }
    }, fLinks.config)
}

function aytmParse(vipUrl, parseName) {
    try {
        eval('Config=' + fetch(fLinks.config));
        eval(fetch(Config.cj));
    } catch (e) {}
    if (typeof ParseS == 'object') {
        return aytmParse(vipUrl, parseName);
    } else {
        return 'toast://没有插件或者设置的插件无效';
    }
}

function playerParse(jurl) {
    return $(jurl).lazyRule((cfRoute) => {
        try {
            eval('Config=' + fetch(cfRoute));
            eval(fetch(Config.cj));
        } catch (e) {}
        if (typeof playParse == 'object') {
            return playParse.playerS(input);
        } else {
            return 'toast://没有插件或者设置的插件无效';
        }
    }, fLinks.config)
}

function setupPages(type, ls) {
    var empty = ls != undefined ? 'hiker://empty#noHistory#' : 'hiker://empty#noRecordHistory##noHistory#';
    switch (type) {
        case "设置":
            return $(empty).rule((setParse) => {
                this.d = [];
                setParse();
                setResult(d);
            }, Route.setParse)
            break;
        case "编辑":
            return $(empty).rule(() => {
                this.d = [];
                eval(fetch('hiker://files/cache/fileLinksᴰⁿ.txt'));
                require(fLinks.jxItUrl);
                jxItem.jxList();
                setResult(d);
            })
            break;
        default:
            return 'toast://需要传入正确参数'
            break;
    }
}
Route.x5Parse = x5Parse;
Route.addLanJie = addLanJie;
