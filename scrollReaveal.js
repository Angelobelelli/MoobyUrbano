
window.sr = ScrollReveal({ reset:true });



sr.reveal('#service',{ duration: 1000 });
sr.reveal('.card',{ duration: 1000 });
sr.reveal('#cartaoFidelidade',{ duration: 1000 });
sr.reveal('.funcionalidades',{ duration: 1000 });
sr.reveal('.imagemMotorista',{ duration: 1000 });
sr.reveal('.textoMotorista',{ duration: 1000 });
sr.reveal('.passageiroCard',{ duration: 1000 });
sr.reveal('.text',{ duration: 1000 });
sr.reveal('#celularMotorista',{ duration: 1000 });
sr.reveal('.botaoDownload',{ duration: 1000 });
sr.reveal('.img',{ duration: 1000 });
sr.reveal('.imagemMotorista',{ duration: 1000 });
sr.reveal('.textPassageiro',{ duration: 1000 });
sr.reveal('.sobre',{ duration: 1000 });
sr.reveal('#img',{ duration: 1000 });





const header = document.getElementById('header');
const headerClassList = header.classList;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop && scrollTop >= 200) {
    // Scroll down
    if (!headerClassList.contains('scrollHide')) {
      headerClassList.add('scrollHide');
    }
  } else {
    // Scroll up
    if (headerClassList.contains('scrollHide')) {
      headerClassList.remove('scrollHide');
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
