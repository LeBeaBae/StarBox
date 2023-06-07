/*ROY IS HANDSOME*/
var app = new function() {
    this.name = "Stargold", this.version = "1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 6400, this.bpm = 150, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 8, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#03061B", this.col0 = "#001044", this.col1 = "#22225F", this.col2 = "#4343AD", this.col3 = "#4E4EC7", this.col4 = "#6464FB", this.animearray = [{
        name: "1_roy",
        color: "D8355E",
        uniqsnd: !1
    }, {
        name: "2_snic",
        color: "D8355E",
        uniqsnd: !1
    }, {
        name: "3_tisk",
        color: "D8355E",
        uniqsnd: !0
    }, {
        name: "4_shika",
        color: "D8355E",
        uniqsnd: !0
    }, {
        name: "5_sweep",
        color: "D8355E",
        uniqsnd: !0
    }, {
        name: "6_boose",
        color: "F1A502",
        uniqsnd: !1
    }, {
        name: "7_whistle",
        color: "F1A502",
        uniqsnd: !0
    }, {
        name: "8_error",
        color: "F1A502",
        uniqsnd: !1
    }, {
        name: "9_radar",
        color: "F1A502",
        uniqsnd: !0
    }, {
        name: "10_thunder",
        color: "F1A502",
        uniqsnd: !0
    }, {
        name: "11_hound",
        color: "2E2747",
        uniqsnd: !1
    }, {
        name: "12_arp",
        color: "2E2747",
        uniqsnd: !1
    }, {
        name: "13_shine",
        color: "2E2747",
        uniqsnd: !0
    }, {
        name: "14_selk",
        color: "2E2747",
        uniqsnd: !1
    }, {
        name: "15_morse",
        color: "2E2747",
        uniqsnd: !1
    }, {
        name: "16_void",
        color: "00AACD",
        uniqsnd: !1
    }, {
        name: "17_starlight",
        color: "00AACD",
        uniqsnd: !0
    }, {
        name: "18_constil",
        color: "00AACD",
        uniqsnd: !0
    }, {
        name: "19_ether",
        color: "00AACD",
        uniqsnd: !0
    }, {
        name: "20_",
        color: "00AACD",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Morse",
        src: "bonus-morse.mp4",
        code: "1,4,6,11,15",
        sound: "bonus-morse",
        aspire: "aspire-morse",
        expire: "expire-morse"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a";
        this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b";
        this.animearray[n].anime = a + "-sprite.png";
        this.animearray[n].animeData = a + ".json";
    }
};
