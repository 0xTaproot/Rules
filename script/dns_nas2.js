// console.log(JSON.stringify($network));
if ($network.wifi.ssid === 'Tomato50') {
  $done({ address: '10.50.1.50', ttl: 600 })
} else {
  $done({ address: '101.42.253.73', ttl:600 });
}
