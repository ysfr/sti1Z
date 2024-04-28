function valider() {
    var cin = document.getElementById("cin").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var dur1 = document.getElementById("duree1").checked;
    var dur2 = document.getElementById("duree2").checked;
    var dur3 = document.getElementById("duree3").checked;
    var op1 = document.getElementById("op1").checked;
    var res = true;
    
    if (cin.length !== 8 || isNaN(parseInt(cin))) {
        alert("Veuillez entrer un numéro CIN valide (8 chiffres).");
        res = false;
    }
    
    if (!isNaN(parseInt(nom)) || !isNaN(parseInt(prenom))) {
        alert("Veuillez entrer des valeurs valides pour le nom et le prénom.");
        res = false;
    }
    
    if (!dur1 || !dur2 || !dur3) {
        alert("Veuillez sélectionner la durée.");
        res = false;
    }
    
    if (op1) { // Changed condition to check if op1 is checked
        alert("Veuillez vérifier votre sélection.");
        res = false;
    }
    
    console.log("hello");
    
    return res;
}

function calculer() {
    var d = new Date();
    ch =d.getDate() +"/"+d.getMonth() +"/"+d.getFullYear()
    console.log(ch)
    var selected_option = document.getElementById("option").value;
    alert(selected_option)
    prix =selected_option

    var dur1 = document.getElementById("duree1").checked;
    var dur2 = document.getElementById("duree2").checked;
    var dur3 = document.getElementById("duree3").checked;

    var montant = 0;

    if (dur1) {
        montant = prix * Number(document.getElementById("duree1").value);
    } else if (dur2) {
        montant = prix * Number(document.getElementById("duree2").value);
    } else if (dur3) {
        montant = prix * Number(document.getElementById("duree3").value);
    } else {
        alert("Veuillez sélectionner une durée.");
        return;
    }

    alert("Montant: " + montant);
}
