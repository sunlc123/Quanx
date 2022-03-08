var obj = JSON.parse($response.body);
{
  "status" : "success",
  "response" : {
    "is_eligible_for_grant" : true,
    "expire_date" : "2530920284000",
    "limitation" : {
      "max_count" : 10,
      "limits_exceeded" : false
    },
    "order_id" : "220001188344435",
    "purchase_date" : 1646681974000,
    "app" : "com.picsart.editor",
    "original_order_id" : "220001188344435",
    "winback_screen_id" : 1,
    "is_eligible_for_introductory" : false,
    "subscription_id" : "com.picsart.editor.subscription_yearly",
    "is_trial" : "true",
    "status" : "subscribed",
    "plan_meta" : {

    }
  },
  "reason" : "ok"
}

$done({body: JSON.stringify(obj)});