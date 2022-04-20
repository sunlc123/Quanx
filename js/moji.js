const url = `https://rtn.api.moji.com/ucrating/sign_in/do?user_id=LCjMOLvINIunWftgJGHl1qgj5sZ84vYfceIVOYh1w4g%3D&sns_id=4YoZYX2%2Fs6FqwzTxc907aw%3D%3D&client_id=11&app_version=5009040204&pid=5009040204&clientId=11&current_city=5274`;
const method = `GET`;
const headers = {
'Origin' : `https://html5.moji.com`,
'Accept' : `application/json, text/plain, */*`,
'Connection' : `keep-alive`,
'Referer' : `https://html5.moji.com/`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `rtn.api.moji.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 mojii/5009040204 mj_session_id/33EC6CF8F1564B52BBA221C17E1FBD8D mj_session_id/EFFFFB50E720407098AC2C51B46EE075`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});