const consolelog = true;
const forward_url = "http://192.168.50.50:19091/cyt"
// const forward_url = "http://192.168.50.105:9091/cyt"

var ssidMatched = ($network.wifi.ssid === 'Tomato50');

if (ssidMatched) {
    forward_body();
}

$done({ body: $response.body });

function forward_body() {
    const options = {
        url: forward_url,
        body: $response.body,
    }
    $httpClient.post(options, function (error, response, data) {
        if (!error) {
            $notification.post("育学园数据同步成功！", "", "");
            if (consolelog) console.log("Data:\n" + data);
        } else {
            $notification.post("育学园数据同步失败！", "", "");
            if (consolelog) console.log("Error:\n" + error);
        }
    })
}
