function btnCalculer_onclick()
{ 
 	var Note1,Note2,Moy;

 	Note1 = parseFloat(document.getElementById("txtNote1").value);
    Note2 = parseFloat(document.getElementById("txtNote2").value);
    Moy = (Note1+Note2)/2;
    console.log("la moyenne est de " + Moy);

}