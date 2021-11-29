$(function () {
    "use strict"
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky")
        }
    });

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // wow js
    new WOW().init();

    // tiny slider
    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        nav: false,
        controlsText: ['<i class="fas fa-angle-left prev"></i>', '<i class="fas fa-angle-right next"></i>'],
    });

    //   scrollit js
    $.scrollIt();
});

window.
onload
= function() {
  Particles.
init
({
    selector: 
'.background'
  });
}
let contador = 0;
fetch("https://sheet.best/api/sheets/b9e5c44a-97e5-447b-a248-f9f615e482b6")
.then((response) => response.json())
.then((data) => {
    
let productos = data;
console.log(productos); 
    /*Render*/
    productos.forEach(element => {
        contador = contador + 1;
        $("#marginPrecios").append(`
        <div class="col-lg-4 col-md-7 col-sm-9 cardPrecios" >
        <div class="single-pricing text-center wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.2s">
        <div class="pricin
        
        title">
            <h4 class="title">${element.nombredeltelefono}</h4>
        </div>
        <div class="pricing-price">
        <img src="${element.imagen}" alt="...">
        </div>
        <div class="pricing-list">
            <table class="table table-hover">
            
            <tbody id="tbody${contador}">
                
            </tbody>
            </table>
        </div>
        
        </div>
        </div>

        `);
        if (element.pantalla){
            $("#tbody" + contador).append(`
            <tr>
                <td>${element.pantalla}</td>
                <td>$${element.precioPantalla}</td>
                </tr>
            `);
        }
        if (element.bateria){
            $("#tbody" + contador).append(`
            <tr>
                <td>${element.bateria}</td>
                <td>$${element.precioBat}</td>
                </tr>
            `);
        }
        if (element.placa){
            $("#tbody" + contador).append(`
            <tr>
                <td>${element.placa}</td>
                <td>$${element.precioPlaca}</td>
                </tr>
            `);
        }
        if (element.vidrioTrasero){
            $("#tbody" + contador).append(`
            <tr>
                <td>${element.vidrioTrasero}</td>
                <td>$${element.precioVidrio}</td>
                </tr>
            `);
        }
        if (element.puertoCarga){
            $("#tbody" + contador).append(`
            <tr>
                <td>${element.puertoCarga}</td>
                <td>$${element.precioPuerto}</td>
                </tr>
            `);
        }
        if (element.botonHome){
            $("#tbody" + contador).append(`
            <tr>
                <td>${element.botonHome}</td>
                <td>$${element.precioBoton}</td>
                </tr>
            `);
        }
    });    

})

