body =
$response.body.replace(/"message":".*"/g, '"data":{"premiumAccess":true} ');
$done({body});