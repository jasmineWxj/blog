module.exports = function (key) {
    const cookieArr = document.cookie.split(';');
    let value = '';
    cookieArr.forEach((item) => {
        if (item.split('=')[0].trim() === key) {
            value = item.split('=')[1];
        }
    });
    return value;
};
