ScrollReveal({reset:true});
    ScrollReveal().reveal('.flex' ,{
      delay:300
    });

    ScrollReveal().reveal('.imagem',{
      delay:200
    });




    const navs = document.querySelectorAll('.cabecalho .posi1 .flex nav a ');
    navs.forEach(item =>{
      item.addEventListener('click', scrollToTo);
    })

    function scrollToTo(event){
      const elem = event.target;
      const id = elem.getAttribute('href');
      const to = document.querySelector(id);
  
      window.scroll({
        top:to,
        behavior:"smooth"
      });
    }