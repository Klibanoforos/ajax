'use strict';


//stworzenie funkcji

    function pobierzDane() {

    
// utworzenie obiektu
    
    var httpReq = new XMLHttpRequest();

    
// otwarcie polaczenia
    
    httpReq.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", true);
        
        
// kiedy stan dokumentu zostal zmieniony
        
    httpReq.onreadystatechange = function () {


// jeśli 4: dane zwrócone i gotowe do użycia
        
        if (httpReq.readyState == 4) {
           
            
// warunek sprawdzający czy połączenie się udało?
            
            if (httpReq.status >= 200 && httpReq.status < 300 ||
                httpReq.status == 304 ||
                navigator.userAgent.indexOf("Safari") >= 0 && typeof httpReq.status == "undefined"); {
                var returnData = JSON.parse(httpReq.responseText);

                console.log(returnData);
                
                
// ubierz pobrane dane w paragrafy i wyświetl je na stronie
                
                var userName = document.createElement('p');
                userName.innerHTML = 'Nazwa użytkownika to: ' + returnData.userName;
                document.body.appendChild(userName);

                var userId = document.createElement('p');
                userId.innerHTML = 'ID użytkownika to: ' + returnData.userId;
                document.body.appendChild(userId);

                var userURL = document.createElement('p');
                userURL.innerHTML = 'URL użytkownika to: <a href="https://">' + returnData.userURL + '</a>';
                document.body.appendChild(userURL);
                
                
// zeruj obiekt, aby nie utrzymywać niepotrzebnego już połączenia z serwerem
                
                httpReq = null;
            }
        }
    }

// wyślij prośbę o dane
    
    httpReq.send();

}
