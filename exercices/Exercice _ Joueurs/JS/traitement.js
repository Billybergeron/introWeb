var nomJ, point, nbturn, numJoueur;
var joueur = new Array(4);
var Pointjoueur = new Array(4);
numJoueur = 1;
nbturn = 0;

function btnAjouter_onclick()
{
    joueur[nbturn]= document.getElementById("txtNom").value;
    Pointjoueur[nbturn] = document.getElementById("txtPoints").value;
    if(numJoueur < 4)
    {
        nbturn++;
        numJoueur ++;
        document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur " + numJoueur;
    }
    else if(numJoueur  > 3)
    {
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("lblNbreJoueur").innerHTML = "Tout les joueurs ont été pris !";
    }
}
function btnTrouverMoy_onclick()
{
    var total;
    total = 0;
    for(var i = 0;i < 4; i++)
    {
        total = total + Pointjoueur[i];
    }
    total = total / 4;
    return total;
}
function btnTrouverMeilleur_onclick()
{


}
function btnTrouverPire_onclick()
{


}