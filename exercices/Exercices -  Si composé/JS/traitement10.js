function btnCalculer_onclick()
{ 
 	var age,categorie;

    age = parseFloat(document.getElementById("txtAge").value);

if (age >= 6 && age <= 8)
{
    categorie = "Poussin";
}
else if(age >= 9 && age <= 10)
{
    categorie = "Pupille";
}
else if(age >= 11 && age <= 12)
{
    categorie = "Minime";
}
else if (age > 13)
{
    categorie = "Cadet";
}
document.getElementById("lblMessage").innerHTML = "ton groupe de garderie est " + categorie;
}
