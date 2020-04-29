function submitOni() {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var activeCell = activeSheet.getActiveCell();
  if(activeSheet.getName() == '提出シート' && activeCell.getValue() != ''){
    var activeColumn = activeCell.getColumn();
    var submitter = activeSheet.getRange(4,activeColumn).getValue();
    var message = submitter + 'から鬼宿題提出シートに記入がありました！';
    slackPost(message);
  }
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