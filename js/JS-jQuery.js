'use strict';

//    zapis ajaxowy za pomocą jQuery

$(function() {
    
    
//    $.ajax({
//        url:'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
//        dataType: 'json',
//        success: function(resultJSON) {
//            console.log(resultJSON);
//        },
//        error: function(msg) {
//            console.log(msg);
//        }
//    });
    
    
//    to samo plus paragrafy
//    
   
    
    $('#get-data').click(function() {
        
         $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
             function(data) {
        $('body').append('<p>Nazwa użytkownika to: ' + data.userName + '</p>');
        $('body').append('<p>ID użytkownika to: ' + data.userId + '</p>');
        $('body').append('<p>URL użytkownika to: <a href="https://">' + data.userURL + '</a></p>');
    });
    });
    
});