/**
 * Created by Kinga on 17/07/2017.
 * Tabela z uzytkownikami
 */
var choice = "all";
var currentDate = new Date();
writeToTable();
var date =  currentDate.getFullYear()+ "-0" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() ;
var actualMonth = "0" + (currentDate.getMonth()+1);

$('.usersContent > form > select').change(function () {
    $('#tableUsers > tbody').text("");
    if(this.value == "Wybierz"){
        choice = "all";
    }else if(this.value == "Zarejestrowani dzisiaj") {
        choice = "today";
    }else if(this.value == "Zarejestrowani w ostatnim miesiącu"){
        choice = "month";
    }else if(this.value == "Administratorzy"){
        choice = "admin";
    }else if(this.value == "Użytkownicy"){
        choice = "users";
    }else if(this.value == "Menadżerowie"){
        choice = "manager";
    }else if(this.value == "Support"){
        choice = "support";
    }else if(this.value == "Partnerzy"){
        choice = "affiliate";
    }
    writeToTable();
});

function writeToTable() {
    $.getJSON('data.json', function (json) {
        var lengthJson = json.length; // ilosc userow w jsonie
        var firstname,
            surname,
            email,
            role,
            dateCreated,
            activateUser,
            ipRegister,
            lastLogin,
            newRow,
            // flag,
            counter = 0,
            monthCreated;

        var numberOfUsers = 0,
            numberOfActivateUsers = 0,
            numberOfAdmin = 0,
            AllEarnedDollars = 0;

        //uchwyt do tabeli
        var table = document.getElementById("tableUsers").getElementsByTagName("tbody")[0];


        // for po wszytskich userach - wpisywanie do tabeli
        for (var i = 0; i < lengthJson; i++) {

            firstname = json[i].firstname;
            surname = json[i].surname;
            email = json[i].email;
            role = json[i].role;
            dateCreated = json[i].dataCreated;
            monthCreated = dateCreated.substr(5,2);
            activateUser = json[i].activate;
            ipRegister = json[i].ipRegister;
            lastLogin = json[i].lastLogin;
            // var login = lastLogin.substr(0,16);
            // lastLogin = login;


            var x = 'false';
            if (role == choice) {
                x = 'true';
            } else if (choice == "all") {
                x = 'true';
            } else if (choice == "today") {
                if (dateCreated == date) {
                    x= 'true';
                }
            } else if(choice == "month"){
                if (actualMonth == monthCreated) {
                x= 'true';

            }
            }

            if (x == 'true') {
                counter += 1;

                //nowy wiersz
                newRow = table.insertRow(0);

                // id wiersza
                newRow.id = lengthJson - counter + 1;

                // wprowadzanie danych do wiersza
                var newCell1 = newRow.insertCell(0);
                newCell1.innerHTML = newRow.id;

                var newCell2 = newRow.insertCell(1);
                newCell2.innerHTML = email;

                var newCell3 = newRow.insertCell(2);
                newCell3.innerHTML = role;

                var newCell4 = newRow.insertCell(3);
                newCell4.innerHTML = dateCreated;

                var newCell5 = newRow.insertCell(4);
                newCell5.innerHTML = activateUser;

                var newCell6 = newRow.insertCell(5);
                newCell6.innerHTML = ipRegister;

                var newCell7 = newRow.insertCell(6);
                newCell7.innerHTML = lastLogin;

                var newCell8 = newRow.insertCell(7);
                newCell8.innerHTML = firstname;

                var newCell9 = newRow.insertCell(8);
                newCell9.innerHTML = surname;
            }


            // ilosc userow
            if (role == "users") {
                numberOfUsers += 1;
            } // liczba adminów
            else if (role == "admin") {
                numberOfAdmin += 1;
            }

            // ilosc kont aktywnych
            if (activateUser == true) {
                numberOfActivateUsers += 1;
            }

            // wartosc wplywow
            AllEarnedDollars += json[i].earnedDollars;

        }

        // ilosc kont aktywnych
        $('.statisticContent > div:nth-child(1) > div:nth-child(3)').text(numberOfActivateUsers);

        // wartosc wplywow
        $('.statisticContent > div:nth-child(2) > div:nth-child(3)').text(AllEarnedDollars);

        // ilosc wszytskich uzytkownikow
        $('.statisticContent > div:nth-child(3) > div:nth-child(2)').text(lengthJson);
        // ilosc userow
        $('.statisticContent > div:nth-child(4) > div:nth-child(2)').text(numberOfUsers);
        // liczba adminów
        $('.statisticContent > div:nth-child(5) > div:nth-child(2)').text(numberOfAdmin);
        
    });
}


// szukanie w zakladce Użytkownicy
function searah() {

    var serachedVariable = document.getElementById("inputSearch").value;

    if(serachedVariable != "") {
        $.getJSON('data.json', function (json) {
            var lengthJson = json.length; // ilosc userow w jsonie
            var firstname,
                surname,
                email,
                role,
                dateCreated,
                activateUser,
                ipRegister,
                lastLogin,
                newRow,
                // flag,
                counter = 0,
                clearTable=true,
                notFound = true;


            //uchwyt do tabeli
            var table = document.getElementById("tableUsers").getElementsByTagName("tbody")[0];



            // for po wszytskich userach - wpisywanie do tabeli
            for (var i = 0; i < lengthJson; i++) {
                firstname = json[i].firstname;
                surname = json[i].surname;
                email = json[i].email;
                role = json[i].role;
                dateCreated = json[i].dataCreated;
                activateUser = json[i].activate;
                ipRegister = json[i].ipRegister;
                lastLogin = json[i].lastLogin;


                if (firstname.indexOf(serachedVariable) != -1 || surname.indexOf(serachedVariable) != -1 || email.indexOf(serachedVariable) != -1 || role.indexOf(serachedVariable) != -1 || dateCreated.indexOf(serachedVariable) != -1 || ipRegister.indexOf(serachedVariable) != -1 || lastLogin.indexOf(serachedVariable) != -1) {
                    if(clearTable == true){
                        $('#tableUsers > tbody').text("");
                        clearTable = false;
                    }
                    notFound = false;
                    counter += 1;
                    newRow = table.insertRow(0);
                    newRow.id = lengthJson - counter + 1;

                    // wprowadzanie danych do wiersza
                    var newCell1 = newRow.insertCell(0);
                    newCell1.innerHTML = newRow.id;

                    var newCell2 = newRow.insertCell(1);
                    newCell2.innerHTML = email;

                    var newCell3 = newRow.insertCell(2);
                    newCell3.innerHTML = role;

                    var newCell4 = newRow.insertCell(3);
                    newCell4.innerHTML = dateCreated;

                    var newCell5 = newRow.insertCell(4);
                    newCell5.innerHTML = activateUser;

                    var newCell6 = newRow.insertCell(5);
                    newCell6.innerHTML = ipRegister;

                    var newCell7 = newRow.insertCell(6);
                    newCell7.innerHTML = lastLogin;

                    var newCell8 = newRow.insertCell(7);
                    newCell8.innerHTML = firstname;

                    var newCell9 = newRow.insertCell(8);
                    newCell9.innerHTML = surname;
                }

            }
            if(notFound){
                choice = "all";
                writeToTable();
                $('#notFoundPerson').show();
                $('#shadowAlert').show();
            }


            // $('#tableUsers > tbody > tr').each(function(i) {
            //     //wpisz nowy numer wewnątrz pierwszej komórki danego wiersza
            //     $(this).find('td:first-child').text(i+1);
            // });

        });
    }

}

$('.usersContent > form > input').change(function () {
    searah();
});

$('.usersContent > form > button').click(function () {
    searah()
});


// zablokowanie entera


$('#inputSearch').keydown(function lock_enter()
{
    if (event.keyCode==13)
    {
        window.event.returnValue=false;
    }
});


// alert o braku wyszkuiwania

$('#notFoundPerson > button, #shadowAlert, #notFoundPerson > i').click(function () {
        $('#notFoundPerson').hide();
        $('#shadowAlert').hide();
});