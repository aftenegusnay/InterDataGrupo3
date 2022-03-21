
var integrante0 = document.querySelectorAll('.targeta-integrnate0 .boton_pest');
var integrante1 = document.querySelectorAll('.targeta-integrnate1');
var con = 0;
integrante0.forEach(integrantes =>{
    integrantes.addEventListener('click',e =>{
        if(con==0){
            e.path[1].style.top = '200px';
            e.path[1].style.transition = "500ms"
            console.log(e.path[1].style);
            con = 1;
        }else{
            e.path[1].style.top = '15px';
            e.path[1].style.transition = "500ms"
            con = 0;
        }
        
    })
})
integrante1.forEach(integrantes =>{
    integrantes.addEventListener('click',e =>{
        if(con==0){
            e.path[1].style.top = '200px';
            e.path[1].style.transition = "500ms"
            con = 1;
        }else{
            e.path[1].style.top = '15px';
            e.path[1].style.transition = "500ms"
            con = 0;
        }
        
    })
})
        
  