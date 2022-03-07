let obj = JSON.parse($response.body)
let pro= obj["response"];
pro["is_trial"] = "true";
pro["expire_date"] = "2530920284000";
pro["status"] = "subscribed";
$done({body: JSON.stringify(obj)})