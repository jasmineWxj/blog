module.exports = function (name, liveName) {
    var data = new Date();
    data.setTime(data.getTime() - 1000 * 60 * 60 * 8 + 1000 * 60 * 60 * 3);
    document.cookie = `${name} = ${liveName};expires = ${data};path=/`;
};
