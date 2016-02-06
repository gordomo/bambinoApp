(function() {
    
    var app = angular.module('bambino', []);
    
    app.controller('controllerBarra', function(){
        
        this.showDescargaCompartir = function(){
          return $('.tarjeta').css('display') !== 'none';  
        };
        
        this.goHome = function()
        {
            $('.footer').hide('fast');
            $('.tarjeta').hide('fast');
            $('.juegos').hide('fast');
            $('.home').show('slow');
            $('.navbar-toggle').click();
        };
        
        this.descargar = function(){
          
            $('#inputTexto').css('display','none');
    
            html2canvas($('.tarjeta'), 
            {
                height: $('.footer').position().top,
                onrendered: function(canvas) 
                {
                    // canvas is the final rendered <canvas> element
                    var myImage = canvas.toDataURL("image/png");
                    window.open(myImage);
                }
            });
            
        };
        
    });
    
    app.controller('viewHome', function(){
        
        this.showJuegos = function(){
            $('.juegos').toggle('fast');
        };
        
        this.showTarjetas = function(){
            $('.home').hide('fast');
            $('.footer').show('fast');
            $('.tarjeta').show('slow');
        };
        
        this.showPresupuesto = function(){
            window.location.href = 'http://www.bambinoeventos.com.ar/#presupuesto';
        };
    });
    
    app.controller('controllerTarjeta', function(){

        this.colors = ["#80ff00", "#00ff80", "#007fff", "#7f00ff", '#5BC0DE'];
        this.letterSize = ["12px", "14px", "16px", '18px', '20px', '22px'];
        this.letterTop = ["41%", "40%", "39%", '38%', '34%', '30%'];
        this.indiceColoresFondo = 0;
        this.indiceColoresTexto = 0;
        this.indiceSizeTexto = 0;
        this.texto = '';
        this.claseTexto = '';
        
        this.changeSize = function(){
          
            if(this.indiceSizeTexto < 6)
           {
               $('.texto p').css('font-size', this.letterSize[this.indiceSizeTexto]);
               $('.texto p').css('top', this.letterTop[this.indiceSizeTexto]);
               this.indiceSizeTexto ++;
           }
           else
           {
               $('.texto p').css('font-size', '10px');
               $('.texto p').css('top', '42%');
               this.indiceSizeTexto = 0;
           }
            
        };
        
        this.changeColor = function(){
           
           if(this.indiceColoresFondo < 5)
           {
               $('.tarjeta').css('background-color', this.colors[this.indiceColoresFondo]);
               this.indiceColoresFondo ++;
           }
           else
           {
               $('.tarjeta').css('background-color', '#fff');
               this.indiceColoresFondo = 0;
           }
        };
        
        this.escribir = function(){
            
            if(this.texto === '')
            {
                this.texto = "Vamos a celebrar el primer añito de Juan Pablo! Te esperamos en: Entre Rios 2681, a las 10:00hs. del sábado 12 de junio 2016.";
                this.claseTexto = '';
            }
            else
            {
                if(this.indiceColoresTexto < 5)
                {
                    $('.tarjetaTexto').css('color', this.colors[this.indiceColoresTexto]);
                    this.indiceColoresTexto ++;
                }
                else
                {
                    $('.tarjetaTexto').css('color', 'black');
                    this.indiceColoresTexto = 0;
                }
            }
            
            $('#inputTexto').focus();
        };
        
    });
    
})();