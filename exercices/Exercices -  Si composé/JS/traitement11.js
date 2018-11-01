function btnCalculer_onclick()
{
    var Nbr1,Nbr2,signe;

    Nbr1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbr2 = parseFloat(document.getElementById("txtNbre2").value);


    if (Nbr1 <= 0 && Nbr2 <= 0 || Nbr1 >= 0 && Nbr2 >= 0)
    {
        signe = "positif";
    }
    else
    {
        signe = "negatif";
    }
    document.getElementById("lblMessage").innerHTML = "le signe du résultat est " + signe;
}