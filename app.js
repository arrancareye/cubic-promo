(function(){
    window.onload = function() {
        console.log('DOM IS READY...');

        let nbtn = document.querySelector('.nbtn');
        let btside = document.querySelector('.bottom__right')
        let fst = document.querySelector('.slide-1');
        let cnt = document.querySelector('.swiper-wrapper');

        window.addEventListener('click', (e)=>{
            if(fst.classList.contains('active')) {
                btside.style.opacity = 0;
                console.log('clicked overlay');
            } else {
                fst.style.opacity = 1;
            }
        });
        
        setInterval(()=>{
            let inw = window.innerWidth;
            console.log(inw);
        }, 3000);

        let swiperObj = document.querySelector('.swiper-container');

        // window.addEventListener('resize', ()=> {
        //     if(window.innerWidth < 480) {
        //         swiperObj.style.display = 'none';
        //     } else {
        //         swiperObj.style.display = 'block';
        //     }
        // });

    };
})();