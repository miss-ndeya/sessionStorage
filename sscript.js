// fonction pour incrementer le chiffre
function incrementer() {
    if (sessionStorage.getItem('chiffre')) {
        let chiffre = parseInt(sessionStorage.getItem('chiffre'));
        chiffre += 1;
        sessionStorage.setItem('chiffre', chiffre.toString());
    } else {
        sessionStorage.setItem('chiffre', '1');
    }
    document.getElementById('chiffre').innerHTML =  'Voici un chiffre ' + sessionStorage.getItem('chiffre');
}






