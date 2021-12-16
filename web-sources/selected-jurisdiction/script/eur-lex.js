document.getElementById("submit").onclick = function(){
    const domain = "http://data.europa.eu/eli/";
    
    var tipoAtto = document.getElementById("tipoProvvedimento").value;
    var numAtto = document.getElementById("numeroProvvedimento").value;
    var yyyyAtto = document.getElementById("annoProvvedimento").value;

    var ggVigen = document.getElementById("giornoVigenza").value;
    var mmVigen = document.getElementById("meseVigenza").value;
    var yyyyVigen = document.getElementById("annoVigenza").value;

    var query = domain + tipoAtto + "/" + yyyyAtto + "/" + numAtto + "/"

    if(ggVigen.length != 0 && mmVigen.length != 0 && yyyyVigen.length != 0){
        if(ggVigen.length == 1){
            ggVigen = "0" + ggVigen;
        }
        if(mmVigen.length == 1){
            mmVigen = "0" + mmVigen;
        }

        query = query + yyyyVigen + "-" + mmVigen + "-" + ggVigen;
    } else {
        query = query + "oj";
    }

    window.open(query);
    return false;
}