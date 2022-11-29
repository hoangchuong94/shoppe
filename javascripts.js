const EModal= document.getElementById('modal');
const ECloseModal = document.querySelector('.modal__header-close');
const EModalLogin = document.querySelector('.modal__login');
const EModalRegister= document.querySelector('.modal__register');
const ELogin = document.querySelector('.header__navbar-list-login');
const ERegister = document.querySelector('.header__navbar-list-register');
const ELoginConvert = document.querySelector('.modal__login-footer-register-convert');
const ERegisterConvert = document.querySelector('.modal__register-footer-login-convert');
const EBanerSlideList = document.querySelectorAll('.content__baner-wrap-slide-list-item');
const ESlideFirst = document.querySelector('.content__baner-wrap-slide-first');
const ESlideLast = document.querySelector('.content__baner-wrap-slide-last')
const ESlideTik = document.querySelectorAll('.content__baner-wrap-tik-list-item');

let indexSlideImg = 0;

let showImgSlideIndex = function() {
    for(let i = 0; i < EBanerSlideList.length; i++) {
        if(i == indexSlideImg) {
            EBanerSlideList[i].style.display = 'block';
            ESlideTik[i].classList.add('tik-active');
        }else {
            EBanerSlideList[i].style.display = 'none';
            ESlideTik[i].classList.remove('tik-active')
        }
    }
}

showImgSlideIndex();

ESlideLast.addEventListener('click' , function() {
    
    if(indexSlideImg === EBanerSlideList.length - 1) {
        indexSlideImg = 0;
          
    }else {
        indexSlideImg++;
    }
    showImgSlideIndex();
})

ESlideFirst.addEventListener('click' , function() {
    
    if(indexSlideImg !== 0) {
        indexSlideImg--;  
    }else {
        indexSlideImg = EBanerSlideList.length - 1;
    }
    showImgSlideIndex();
})


for(let i = 0; i < ESlideTik.length; i++) {
    ESlideTik[i].addEventListener('click', function() {
        indexSlideImg = i;
        showImgSlideIndex();
    })
}



ELogin.addEventListener('click', function() {
    EModal.style.display = 'block';
    EModalLogin.style.display = 'block';
})


ERegister.addEventListener('click', function() {
    EModal.style.display = 'block';
    EModalRegister.style.display = 'block';
})

ECloseModal.addEventListener('click', function() {
    EModal.style.display = 'none';
    EModalLogin.style.display = 'none';
    EModalRegister.style.display = 'none';
})


ELoginConvert.addEventListener('click', function() {
    EModalLogin.style.display = 'none';
    EModalRegister.style.display = 'block';
})

ERegisterConvert.addEventListener('click', function() {
    EModalRegister.style.display = 'none';
    EModalLogin.style.display = 'block';
})



