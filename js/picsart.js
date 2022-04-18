var obj = JSON.parse($response.body);

obj={
  "status" : "success",
  "response" : {
    "original_order_id" : "220001188344435",
    "order_id" : "220001188344435",
    "status" : "subscribed",
    "app" : "com.picsart.editor",
    "is_trial" : true,
    "plan_meta" : {

    },
    "subscription_id" : "com.picsart.editor.subscription_yearly",
    "is_eligible_for_introductory" : false,
    "purchase_date" : 1646681974000,
    "expire_date" : 1899743974000
  },
  "reason" : "ok"
}

$done({body: JSON.stringify(obj)});