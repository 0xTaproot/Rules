dns = {} // Fallback to standard DND query

if ($network.wifi.ssid === 'Tomato50') {
  dns = { address: '10.50.1.50', ttl: 600 }
}

console.log("ssid: " + $network.wifi.ssid)
console.log("dns nas: " + dns.address)

$done(dns)
