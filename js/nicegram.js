var obj = JSON.parse($response.body);

obj= {
  "in_apps" : [

  ],
  "transactions" : [transactied

  ],
  "subscriptions" : [subscribed

  ]
}


$done({body: JSON.stringify(obj)});
