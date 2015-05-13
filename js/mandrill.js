function sendMail(){

  var email = $("#email").val();
  var name = $("#name").val();
  var address = $("#address1").val();
  var phone = $("#phone").val();
  var serializedForm = $("#frm").serializeArray();

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
        'html': collectData(serializedForm)
      }
    }
  });
}

function checkEmpty(field){
  if(field.value === '') {
    alert("This is a required field");
  }
}

function collectData(serializedForm){
  var formData = "";
  $.each(serializedForm, function(idx, val) {
      formData = formData + (val.name + " : " + val.value + "<br />");
    });
  return formData;
}