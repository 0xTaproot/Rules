if ($network.wifi.ssid === 'Tomato50') {
  $done({ address: '10.50.1.50', ttl: 6000 })
} else {
  $done({});  // Fallback to standard DND query
}
