function submitProgress() {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var activeCell = activeSheet.getActiveCell();
  if(activeCell.getValue() != '') {
    var sheetName = activeSheet.getName();
    var message = 'りーさんが' + sheetName + 'に記入をしました！';
    slackPost(message);
  }
}

function slackPost(message){
  var url = 'https://slack.com/api/chat.postMessage';
  var token = '';
  var channel = '#times_liisan';
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