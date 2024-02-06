 const img = document.querySelector(".img-conteiner img") 
 img.setAttribute("src", "../img/alunobb.jpg")  
    function tooglemode(){
    const html = document.documentElement
    html.classList.toggle("light")
  

    if(html.classList.contains("light")){
        img.setAttribute("src","../img/lightmodo_foto.jpg")
    }
    else{
        img.setAttribute("src", "../img/alunobb.jpg")
    }

}