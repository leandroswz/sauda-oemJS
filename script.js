
 function ola(){
    var data = new Date();
    var hora=data.getHours();
    var txt ="";
    if (hora < 12){
        txt="Bom dia";
    }else if (hora < 18){
        txt="Boa tarde";
    }else{
        txt="Boa noite";
    }
    alert("Olá, "+txt);
}
