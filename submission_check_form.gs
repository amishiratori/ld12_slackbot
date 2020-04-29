function submitCheckForm(e){
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var sheetName = activeSheet.getName();
  var submitter = e.namedValues['ニックネーム'];
  var message = submitter + 'から' + sheetName + 'のチェックフォームの提出がありました！';
  slackPost(message);
}

function slackPost(message){
  var url = 'https://slack.com/api/chat.postMessage';
  var token = '';
  var channel = '#homework_submission';
  var username = '秘書うぇびこ';
  var parse = 'full';
  var method = 'post';
  var payload = {
    'token': token,
    'channel': channel,
    'text': message,
    'username': username,
    'parse': parse
  };
  var options = {
    'method': method,
    'payload': payload
  }
  var response = UrlFetchApp.fetch(url, options);
}