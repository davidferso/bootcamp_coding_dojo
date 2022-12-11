console.log("page loaded...");

function change_name() {
    var profule_name = document.querySelector(".profile-name");
    profule_name.innerText = "Josh Moore";
}

function remove_connection_request_close() {
    var lis = document.querySelectorAll('.card-list-item');
    var counter1 = document.querySelector('.badge-1');

    for(var i=0; li=lis[i];) {
        li.parentNode.removeChild(li);

        if (counter1.innerText > 0) {
            console.log(counter1.innerText);
            counter1.innerText--;
        }
    }
}

function remove_connection_request_accept() {
    var lis = document.querySelectorAll('.card-list-item');
    var counter1 = document.querySelector('.badge-1');
    var counter2 = document.querySelector('.badge-2');

    for(var i=0; li=lis[i];) {
        li.parentNode.removeChild(li);

        if (counter1.innerText > 0 && counter2.innerText > 0) {
            console.log(counter1.innerText);
            counter1.innerText--;
            counter2.innerText++;
        }
    }
}
