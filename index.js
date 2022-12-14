function onclickhandler(dis) {
    val = dis.value.replace(/\s+/g, '').length;
    if(val >=3){
        document.getElementById('btnBuscar').disabled=false;
    }else{
        document.getElementById('btnBuscar').disabled=true;
    }
    
}

function changeImage(flores){
    switch(flores) {
        case 'home':
            document.getElementById("productoImg").src="./imagenes/flor1a.jpg"
            break;
        case 'news':
            document.getElementById("productoImg").src="./imagenes/flor2a.jpg"
            break;    
        case 'events':
            document.getElementById("productoImg").src="./imagenes/flor3a.jpg"
            break;    
        case 'contact':
            document.getElementById("productoImg").src="./imagenes/flor4a.jpg"
            break;    
        case 'login':
            document.getElementById("productoImg").src="./imagenes/flor5a.jpg"
            break;    
        case 'products':
            document.getElementById("img1").src="./imagenes/flor1b.jpg"
            break; 
        case 'services':
            document.getElementById("img2").src="./imagenes/flor2b.jpg"
            break; 
        case 'solutions':
            document.getElementById("img3").src="./imagenes/flor3b.jpg"
            break; 
        case 'parts':
            document.getElementById("img4").src="./imagenes/flor4b.jpg"
            break; 
    }
}

