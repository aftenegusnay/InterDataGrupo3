$(document).ready(main);
var con=1 ;
function main(){
    $('.boton').click(function(){
        if(con==1){
            console.log('mostrar')
            $('.menu_deslizable').animate({
                left:"80%"
            });
            con = 0;
        }else{
            console.log('ocultar');
            $('.menu_deslizable').animate({
                left:"100%"
            });
            con = 1;
        }
    });
}