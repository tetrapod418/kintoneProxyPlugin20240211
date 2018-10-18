jQuery.noConflict();
(function($, PLUGIN_ID) {
    'use strict';

    $('#check-plugin-submit').on('click', function() {
      var URL = 'こちらにリクエスト先のURLを指定';
      //パスの指定
      var PATH = 'api/data';
      // HTMLのinputFieldのテキスト情報の取得
      var text = $('#inputText').val();
      //保存したい情報をヘッダーに設定
      var pluginHeader = {
        'CUSTOM-REQUEST-HEADER': text
      }
      kintone.plugin.app.setProxyConfig(URL + PATH, 'POST', pluginHeader, {});
    });

    $('#check-plugin-cancel').on('click', function() {
      history.back();
    });
})(jQuery, kintone.$PLUGIN_ID);
