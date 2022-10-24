import http from '../utils/axios';

function getArticleList(params: any) {
    return new Promise((resolve, reject) => {
        http('ps', '/', params).then(
            (res) => {
                resolve(res);
            },
            (error) => {
                console.log('网络异常~', error);
                reject(error);
            },
        );
    });
}
// login
function getLogin(params: any) {
    return new Promise((resolve, reject) => {
        http('get', '/login', params).then(
            (res) => {
                resolve(res);
            },
            (error) => {
                console.log('网络异常~', error);
                reject(error);
            },
        );
    });
}

function message(params: any) {
    return new Promise((resolve, reject) => {
        http('post', '/message', params).then(
            (res) => {
                resolve(res);
            },
            (error) => {
                console.log('网络异常~', error);
                reject(error);
            },
        );
    });
}
// 获取评论
function getmessage(params: any) {
    return new Promise((resolve, reject) => {
        http('get', '/getmessage', params).then(
            (res) => {
                resolve(res);
            },
            (error) => {
                console.log('网络异常~', error);
                reject(error);
            },
        );
    });
}

// 删除评论
function delmessage(params: any) {
    return new Promise((resolve, reject) => {
        http('get', '/delmessage', params).then(
            (res) => {
                resolve(res);
            },
            (error) => {
                console.log('网络异常~', error);
                reject(error);
            },
        );
    });
}

export { getArticleList, getLogin, message, getmessage, delmessage };
