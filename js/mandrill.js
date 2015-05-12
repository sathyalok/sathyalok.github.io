function sendMail(){
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'HVEljfPIZEcJcJFosN2k4g',
      'message': {
        'from_email': 'YOUR_SENDER@example.com',
        'to': [
          {
            'email': 'changingrainbows@gmail.com',
            'name': 'From Sathyalok',
            'type': 'to'
          }
        ],
        'subject': 'title',
        'html': 'html can be used'
      }
    }
  });
}