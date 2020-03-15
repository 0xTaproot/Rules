// const body = $response.body;
let body = $response.body;

let obj = JSON.parse(body);
if (obj.data && obj.data.adInfoList) {
    obj.data.adInfoList = [];
}

body = JSON.stringify(obj);
$done({ body });
