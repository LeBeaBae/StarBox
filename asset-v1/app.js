/*hehe it's my first mod*/
var app = new function() {
    this.name = "Stargold", this.version = "1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 5333, this.bpm = 90, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "1_poom",
        color: "14591D",
        uniqsnd: !1
    }, {
        name: "2_snic",
        color: "14591D",
        uniqsnd: !0
    }, {
        name: "3_tisk",
        color: "14591D",
        uniqsnd: !0
    }, {
        name: "4_shika",
        color: "14591D",
        uniqsnd: !0
    }, {
        name: "5_sweep",
        color: "14591D",
        uniqsnd: !0
    }, {
        name: "6_boose",
        color: "FFFF35",
        uniqsnd: !1
    }, {
        name: "7_",
        color: "FFFF35",
        uniqsnd: !0
    }, {
        name: "8_error",
        color: "FFFF35",
        uniqsnd: !1
    }, {
        name: "9_",
        color: "FFFF35",
        uniqsnd: !0
    }, {
        name: "10_",
        color: "FFFF35",
        uniqsnd: !0
    }, {
        name: "11_hound",
        color: "011627",
        uniqsnd: !1
    }, {
        name: "12_arp",
        color: "011627",
        uniqsnd: !1
    }, {
        name: "13_radar",
        color: "011627",
        uniqsnd: !1
    }, {
        name: "14_selk",
        color: "011627",
        uniqsnd: !1
    }, {
        name: "15_morse",
        color: "011627",
        uniqsnd: !1
    }, {
        name: "16_",
        color: "F71735",
        uniqsnd: !0
    }, {
        name: "17_",
        color: "F71735",
        uniqsnd: !0
    }, {
        name: "18_",
        color: "F71735",
        uniqsnd: !0
    }, {
        name: "19_",
        color: "F71735",
        uniqsnd: !0
    }, {
        name: "20_",
        color: "F71735",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Morse",
        src: "bonus-morse.mp4",
        code: "2,4,8,11,15",
        sound: "bonus-morse",
        aspire: "aspire-morse"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};