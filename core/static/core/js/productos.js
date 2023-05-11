
$(document).ready(function () {

    //LISTA CON PRODUCTOS AÑADIDOS AL CARRITO
    let productosCarrito = []

//CONSUMO E INYECCION DE DATOS EN HTML
    $.get("https://636848caedc85dbc84e49015.mockapi.io/producto",
        function (data) {
            $.each(data, function (i, item) {
                $('#servicio').append(
                    "<div  class='cuadroservicio'>" +
                    "<div class='nombre'>" + "<h3>" + item.name + "</h3>" + "</div>" +
                    "<div class='container'>" +
                    "<img class='img_prod' src= '" + item.image + "' >" +
                    "</div>" +
                    "<div class='container dato'>" + "<h4>" + item.precio + "</h4>" +
                    "</div>" +
                    "<h5 class='desc_serv '>" + item.description + "</h5>" +
                    "<button class='btn btn-primary' >Agregar al carrito</button> " +
                    "</div>")

            })
        }
    );

    $('#servicio').on('click',function(e){
        if(e.target.classList.contains('btn')){
            const prod = e.target.parentElement

            const infoProd = {
                quantity:1,
                name: prod.querySelector('h3').textContent,
                precio: prod.querySelector('h4').textContent,
            }
            // console.log(infoProd)

            //combinando arrays 
            productosCarrito = [...productosCarrito,infoProd]
            console.log(productosCarrito)

        }
    })
});


