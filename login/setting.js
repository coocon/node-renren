var data = {
        email: 'maoshuyu@gmail.com',
        password: 'msy1119MAO',
        icode: 'jk6r',
        origURL: 'http://www.renren.com/home',
        domain: 'renren.com',
        key_id: '1',
        captcha_type: 'web_login'
    },
    userAgend = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1';
exports.data = data;
exports.options_login = {
    host: 'www.renren.com',
    port: 80,
    method: 'POST',
    path: '/ajaxLogin/login',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'userAgend': userAgend,
        'Cookie': 'anonymid=h6u77qwl-r9kdgu; depovince=GW; _r01_=1; JSESSIONID=abcWKPANknTTu6vimfKMt; ick=4dcb9798-78fb-4bd5-9a8d-9f667e1b93ec; mop_uniq_ckid=127.0.0.1_1347087579_152687249; jebe_widget_zaned1000070368000700002428950431=; vip=1; XNESSESSIONID=66455c546bbc; jebe_widget_zaned1000070721002600001423603526=; jebe_widget_zaned1000070368000700002423603526=; at=1; l4pager=0; jebe_widget_zaned1000070721000500001423603526=; jebe_widget_zaned1000071407000200001423603526=; loginfrom=null; feedType=423603526_hot; _de=7C47F66821BAC8FA17FDD995416F3B708ED172744450A224; jebecookies=b3d59b7e-dc90-42be-a389-24e0638404cf|||||; ick_login=a6c35c75-c834-49e0-8d94-57e317545b35; __utma=151146938.588021776.1347087483.1347272042.1347293986.9; __utmb=151146938.7.10.1347293986; __utmc=151146938; __utmz=151146938.1347271333.7.5.utmcsr=renren.com|utmccn=(referral)|utmcmd=referral|utmcct=/SysHome.do;'
    }
}
