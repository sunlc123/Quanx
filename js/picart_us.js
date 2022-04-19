var obj = JSON.parse($response.body);
{
  "status" : "success",
  "response" : {
    "is_eligible_for_grant" : true,
    "expire_date" : 1899743974000,
    "limitation" : {
      "max_count" : 10,
      "limits_exceeded" : false
    },
    "order_id" : "520001022966341",
    "purchase_date" : 1650328891000,
    "app" : "com.picsart.studio",
    "original_order_id" : "520001022966341",
    "winback_screen_id" : 1,
    "is_eligible_for_introductory" : false,
    "subscription_id" : "com.picsart.studio.subscription_plus_yearly",
    "is_trial" : true,
    "status" : "SUBSCRIPTION_PURCHASED",
    "plan_meta" : {

    }
  },
  "reason" : "ok"
}
$done({body: JSON.stringify(obj)});