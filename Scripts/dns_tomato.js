if ($network.wifi.ssid === 'Tomato50') {
  $done({ address: '192.168.50.50', ttl: 6000 })
} else {
  $done({});  // Fallback to standard DND query
}