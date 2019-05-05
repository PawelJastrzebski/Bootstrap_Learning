
function load(path, querySelectorDestination){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", path, true);
    ajax.send();
    ajax.onreadystatechange = function (aEvt) {
        if (ajax.readyState == 4) {
            if (ajax.status == 200)
                document.querySelector(querySelectorDestination).innerHTML += ajax.responseText;
            else
                dump("Błąd podczas ładowania strony\n");
        }
    };
}