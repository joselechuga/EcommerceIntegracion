$(document).ready(function () {

    
$.get("https://636848caedc85dbc84e49015.mockapi.io/producto",
function(data){
    $.each(data ,function(i,item){
        $('#servicio').append(
            "<div class='cuadroservicio'>" +
                "<div class='nombre'>" + "<h3>"+item.name+"</h3>"+"</div>" +
                "<div class='container'>"+
                "<img class='img_prod' src= '"+ item.image + "' >"+
                "</div>" +
                "<div class='container dato'>"+"<h4>" + item.precio + "</h4>"+
            "</div>"+
            " <h5 class='desc_serv '>" + item.description + "</h5>" + 
        "</div>")
    })
}
);


});