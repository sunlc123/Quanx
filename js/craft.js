var obj = JSON.parse($response.body);
obj= {
tier:"Pro",
subscriptionActive: true,
expirationDate: 2040418629080,
subscriptionType: "yearly",
rawSubscriptionType:"Appstore",
productId: "com.lukilabs.lukiapp.pro.sub.yearly" }
$done({body:JSON.stringify(obj)});