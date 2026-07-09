// 問ノ森 命式計算エンジン
// Ver0.1

console.log("meishiki.js loaded");
function createMeishiki(year, month, day, hour = null, minute = null) {

  return {

    year,
    month,
    day,
    hour,
    minute,

    nen: null,
    getsu: null,
    nichi: null,
    ji: null,

    dayStem: null,
    monthBranch: null,
    hiddenStem: null,

    tsuhen: null,
    juniun: null,

    residentNo: null,
    meguriKana: null,
    moonName: null

  };

}
