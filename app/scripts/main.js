console.log('\'Allo \'Allo!');

$("input").keyup(function() {
    $("#result").text(
    '<table width="580" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" bgcolor="#ffffff  "><tr><td><table align="left" width="50%" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#ffffff  " style="font-family:Helvetica;"><tr><td style="font-size: 12px; color: #666666 ; font-weight: normal; text-align: center; font-family: Helvetica; line-height: 14px; vertical-align: top; padding:5px 10px"><p style="mso-table-lspace:0;mso-table-rspace:0; margin:0; color:#000000  ">' +
        '<img src="' + $(".deal").val() +  
        '" width="250px"/></p><p style="color:#c2152f  ; font-weight:bold">' + $('.what').val() +
        '<br>'

        );
});

