let body = $response.body;

let obj = JSON.parse(body);
if (obj.data && obj.data.appConfigSwitchList) {
    // obj.data.mallTab = {};

    obj.data.appConfigSwitchList = [
        {
            "status": 0,
            "type": 1
        },
        {
            "status": 1,
            "type": 2
        },
        {
            "status": 1,
            "type": 3
        },
        {
            "status": 1,
            "type": 4
        },
        {
            "status": 0,
            "type": 5
        },
        {
            "status": 1,
            "type": 6
        }
    ];
}

body = JSON.stringify(obj);
$done({ body });
