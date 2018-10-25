function btnCalculer_onclick()
{
    var billetENF, billetAD, billetETU, billetVIEUX, PrixTot;

    billetENF = parseFloat(document.getElementById("txtENF").value);
    billetAD = parseFloat(document.getElementById("txtAD").value);
    billetETU = parseFloat(document.getElementById("txtETU").value);
    billetVIEUX = parseFloat(document.getElementById("txtVIEUX").value);
    PrixTot = billetETU * 12;
    PrixTot = PrixTot + billetAD * 20;
    PrixTot = PrixTot + billetVIEUX * 15;
    if (billetAD + billetVIEUX + billetETU >= 5)
    {
      PrixTot = PrixTot * 0.90;
    }
 	PrixTot = PrixTot * 1.149975;
    console.log(PrixTot);
}