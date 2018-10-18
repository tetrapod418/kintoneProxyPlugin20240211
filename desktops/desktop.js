(function(PLUGIN_ID) {
    'use strict';

    kintone.events.on('app.record.index.show', function(event) {
      var URL = 'こちらにリクエスト先のURLを指定';
      //パスの指定
      var PATH = 'api/data';
      //保存したい情報をヘッダーに設定
      var desktopHeader = {
        'DESKTOP_HEADER': 'hoge'
      }
      //サーバ側にリクエスト送信
      kintone.plugin.app.proxy(PLUGIN_ID, URL + PATH, 'POST', desktopHeader, {}, function(body, status, headers) {
        console.log(status, body, headers);
      }, function(error) {
        console.log(error);
      });
      return event;
    });
})(kintone.$PLUGIN_ID);
