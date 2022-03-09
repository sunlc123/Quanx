var obj = JSON.parse($response.body);

obj= {
  "premium" : true,
  "settings" : {
    "custom_notifications" : false,
    "sync_chats" : false,
    "max_pinned_chats" : 5
  },
  "restricted" : [
    845385857,
    699361853
  ],
  "allowed" : [

  ],
  "reasons" : [
    "porn",
    "copyright"
  ]
	
$done({body: JSON.stringify(obj)});
