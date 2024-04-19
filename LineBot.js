const LINE_ACCESS_TOKEN = 'YOUR Channel access token BOT';
const OPENAI_APIKEY = 'YOUR OPENAI API';

function doPost(e) {
  const event = JSON.parse(e.postData.contents).events[0];

  const replyToken = event.replyToken;
  let userMessage = event.message.text;
  const url = 'https://api.line.me/v2/bot/message/reply';

  if (userMessage === undefined) {
    // メッセージ以外(スタンプや画像など)が送られてきた場合 // ( If you receive something other than a message (stamps, images, etc.)) // หากคุณได้รับสิ่งอื่นนอกเหนือจากข้อความ (แสตมป์ รูปภาพ ฯลฯ)
    userMessage = 'Hello, World';
  }

  const prompt = userMessage;
  const requestOptions = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ OPENAI_APIKEY
    },
    "payload": JSON.stringify({
      "model": "gpt-4-0613",
      "messages": [
        // you can change role to make you own cute bot LOL
         {"role": "system", "content": 'you name is Gura in hololive your are girl, เธอเป็นเพศผู้หญิง and you are shark '},
         {"role": "user", "content": prompt},
         ]
    })
  }
  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);

  const responseText = response.getContentText();
  const json = JSON.parse(responseText);
  const text = json['choices'][0]['message']['content'].trim();

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + LINE_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': text,
      }]
    })
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}
