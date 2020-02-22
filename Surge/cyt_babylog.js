const consolelog = false;
const forward_url = "http://192.168.50.105:9090/cyt"

forward_body();
$done({body: $response.body});

function forward_body() {
    const options = {
        url: forward_url,
        // headers: {
        //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        //     "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 - mmbWebBrowse - ios"
        // },
        body: $response.body,
    }
    $httpClient.post(options, function (error, response, data) {
        // console.log(data);
        if (!error) {
            if (consolelog) console.log("Data:\n" + data);
        } else {
            if (consolelog) console.log("Error:\n" + error);
        }
    })
}