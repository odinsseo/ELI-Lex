document.getElementById("submit").onclick = function(){
    const domain = "http://www.normattiva.it/eli/stato/";
    
    var tipoAtto = document.getElementById("tipoProvvedimento").value;
    var numAtto = document.getElementById("numeroProvvedimento").value;
    var ggAtto = document.getElementById("giornoProvvedimento").value;
    var mmAtto = document.getElementById("meseProvvedimento").value;
    var yyyyAtto = document.getElementById("annoProvvedimento").value;

    var ggVigen = document.getElementById("giornoVigenza").value;
    var mmVigen = document.getElementById("meseVigenza").value;
    var yyyyVigen = document.getElementById("annoVigenza").value;

    if(ggAtto.length == 1){
        ggAtto = "0" + ggAtto;
    }
    if(mmAtto.length == 1){
        mmAtto = "0" + mmAtto;
    }

    var query = domain + tipoAtto + "/" + yyyyAtto + "/" + mmAtto + "/" + ggAtto + "/" + numAtto + "/CONSOLIDATED"

    if(ggVigen.length != 0 && mmVigen.length != 0 && yyyyVigen.length != 0){
        if(ggVigen.length == 1){
            ggVigen = "0" + ggVigen;
        }
        if(mmVigen.length == 1){
            mmVigen = "0" + mmVigen;
        }

        query = query + "/" + yyyyVigen + mmVigen + ggVigen;
    }

    window.open(query);
    return false;
}