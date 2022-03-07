let obj = JSON.parse($response.body)
let pro= obj["response"];
pro["is_trial"] = "true";
pro["expire_date"] = "2530920284000";
pro["subscription_id"] = "com.picsart.editor.subscription_yearly";
pro["status"] = "SUBSCRIPTION_CANCELED";
$done({body: JSON.stringify(obj)})