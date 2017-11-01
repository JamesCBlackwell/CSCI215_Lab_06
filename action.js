function checkForBracket() {
    var regEx = new RegExp('<') ;

    if(regEx.test(document.getElementById('name').value)) {
        console.log('contains illegal character') ;
        //if illegal character it turns red
        document.getElementById('name').style.backgroundColor = 'red' ;
        //if not illegal character it does not change color
    } else {
        document.getElementById('name').style.backgroundColor = '' ;
    }
}

function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function checkAge() {
    var regEx = new RegExp('\w');

    if(regEx.test(document.getElementById('age').value)){
        document.getElementById('age')style.backgroundColor='red' ;
    } else{
        document.getElementsById('age').style.backgroundColor='' ;
    }
}

function checkName() {
    var regEx = new RegExp('<') ;
    if(regEx.test(document.getElementById('name').value)){
        document.getElementById('name')style.backgroundColor='red' ;
    } else{
        document.getElementsById('name').style.backgroundColor='' ;
    }
}
