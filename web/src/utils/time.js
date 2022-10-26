function timestampToTime(timestamp) {
    var date = new Date(Number(timestamp)); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    console.log(date, 11);

    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D;
}
export default timestampToTime;
