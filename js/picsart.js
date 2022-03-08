var obj = JSON.parse($response.body);
{
  "status": "success",
  "reason": "ok",
  "response": {
    "purchase_date": 1646681974000,
    "expire_date": 1647283174000,
    "app": "com.picsart.editor",
    "subscription_id": "com.picsart.editor.subscription_yearly",
    "order_id": "220001188344435",
    "original_order_id": "220001188344435",
    "status": "SUBSCRIPTION_CANCELED",
    "is_trial": true,
    "winback_screen_id": 1,
    "is_eligible_for_introductory": false,
    "plan_meta": {},
    "limitation": {
      "max_count": 10,
      "limits_exceeded": false
    },
    "is_eligible_for_grant": true
  }
$done({body: JSON.stringify(obj)});