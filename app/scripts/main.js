console.log('\'Allo \'Allo!');

$("input").keyup(function() {
    $("#result").text(
    '<table width="580" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" bgcolor="#ffffff  "><tr><td><table align="left" width="50%" cellpadding="0" cellspacing="0" border="0" class="deviceWidth" bgcolor="#ffffff  " style="font-family:Helvetica;"><tr><td style="font-size: 12px; color: #666666 ; font-weight: normal; text-align: center; font-family: Helvetica; line-height: 14px; vertical-align: top; padding:5px 10px"><p style="mso-table-lspace:0;mso-table-rspace:0; margin:0; color:#000000  ">' +
        '<img src="' + $(".image").val() +  
        '" width="250px"/></p><p style="color:#c2152f  ; font-weight:bold">' + $('.make').val() +    '<br>' + '<span style="font-size:10px;">Stk#' + $('.stock').val() + '</span></p><br>' + '  <span style="font-size: 14px; font-weight: bolder; color: #666666">MSRP: ' + $('.MSRP').val() + '<br><span style="color:#000000;">Internet Price: ' + $('.internet').val() + '</span></span><br><br>' + 'Year End Price:' + $('.Special').val() + '<br><br>' + '<span style="font-size: 46px; font-weight: bolder; color: #c2152f"><sup style="font-size:20px">$</sup>' + $('.price').val() + '</span><br></p>'

        );
});

