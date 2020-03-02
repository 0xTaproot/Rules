// const body = $response.body;
let body = $response.body;

let obj = JSON.parse(body);
if (obj.data && obj.data.adInfoList) {
    obj.data.adInfoList = [];
}
// if (obj.statuses) obj.statuses = filter_timeline_statuses(obj.statuses);
// if (obj.advertises) obj.advertises = [];
// if (obj.ad) obj.ad = [];
// if (obj.num) obj.num = obj.original_num;
// if (obj.trends) obj.trends = [];

body = JSON.stringify(obj);
$done({ body });
