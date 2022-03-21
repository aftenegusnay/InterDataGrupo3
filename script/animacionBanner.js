$(document).ready(main);
var mov = 0 
var mov1 = 0
var mov2 = 0
var mov3 = 0
function main(){
    $('.boton-derB').click(function(){
        if(mov<300){
            console.log('hola');
            mov = mov +100;
            $('.ban').animate({
                left:"-"+mov+"%"
            });
        }else{
            $('.ban').animate ({
                left : '0'
            });
            mov=0;
        }
    });
    $('.boton-izB').click(function(){
        if(mov>0){
            mov = mov-100;
            $('.ban').animate({
                left: "-"+mov+"%"
            });
        }else{
           $('.ban').animate({
                left : '-300%'
            })
            mov = 300;
        }   
    });



    $('.boton-derB1').click(function(){
        if(mov1<300){
            console.log('hola1');
            mov1 = mov1 +100;
            $('.ban1').animate({
                left:"-"+mov1+"%"
            });
        }else{
            $('.ban1').animate ({
                left : '0'
            });
            mov1=0;
        }
    });
    $('.boton-izB1').click(function(){
        if(mov1>0){
            mov1 = mov1-100;
            $('.ban1').animate({
                left: "-"+mov1+"%"
            });
        }else{
           $('.ban1').animate({
                left : '-300%'
            })
            mov1 = 300;
        }   


    
    });$('.boton-derB2').click(function(){
        if(mov2<300){
            console.log('hola2');
            mov2 = mov2 +100;
            $('.ban2').animate({
                left:"-"+mov2+"%"
            });
        }else{
            $('.ban2').animate ({
                left : '0'
            });
            mov2=0;
        }
    });
    $('.boton-izB2').click(function(){
        if(mov2>0){
            mov2 = mov2-100;
            $('.ban2').animate({
                left: "-"+mov2+"%"
            });
        }else{
           $('.ban2').animate({
                left : '-300%'
            })
            mov2 = 300;
        }   
    });


    $('.boton-derB3').click(function(){
        if(mov3<300){
            console.log('hola3');
            mov3 = mov3 +100;
            $('.ban3').animate({
                left:"-"+mov3+"%"
            });
        }else{
            $('.ban3').animate ({
                left : '0'
            });
            mov3=0;
        }
    });
    $('.boton-izB3').click(function(){
        if(mov3>0){
            mov3 = mov3-100;
            $('.ban3').animate({
                left: "-"+mov3+"%"
            });
        }else{
           $('.ban3').animate({
                left : '-300%'
            })
            mov3 = 300;
        }   
    });
}