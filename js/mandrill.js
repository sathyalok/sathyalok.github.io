function sendMail(){
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'HVEljfPIZEcJcJFosN2k4g',
      'message': {
        'from_email': 'sathyalok_site@do_not_reply.com',
        'to': [
          {
            'email': 'changingrainbows@gmail.com',
            'name': 'Sathyalok Site Administrator',
            'type': 'to'
          }
        ],
        'subject': 'Message from Sathyalok website contact form',
        'html': 'Insert form field data here as html or text'
      }
    }
  });
}

function checkEmpty(field){
  if(field.value === '') {
    alert("This is a required field");
  }
}