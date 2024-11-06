document.addEventListener('DOMContentLoaded',()=>{




    //responsive header js


    const bar=document.querySelector('.fa-bars');
    const cross=document.querySelector('.fa-xmark');
    const header=document.querySelector('header');


    bar.addEventListener('click',()=>{
        header.style.opacity='1';
        bar.style.display='none';
        cross.style.display='block';
    });


    cross.addEventListener('click',()=>{
        header.style.opacity='0';
        bar.style.display='block';
        cross.style.display='none';
    });




    //responsive slider js
    const slider=document.querySelector('.slider');
    const slides=document.querySelectorAll('.slides');


    let slidernumber=1;
    function autoslider(){      
        if(slidernumber<slides.length){
            slider.style.transform=`translateX(-${slidernumber*100}%)`;
            slidernumber++;
        
        }else{
            slider.style.transform=`translateX(0px)`;
            slidernumber=1;
        }
    
    }
    setInterval(autoslider,5000);


    //scroll animatoin

    const section=document.querySelectorAll('section');
    window.addEventListener('scroll',()=>{
        section.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-480;
            let height=sec.offsetHeight;
            if(top >= offset && top < offset + height){
                sec.classList.add('animation');
            }
            //for repeating animation
            // else{
            //     sec.classList.remove('animation');
            // }
        });
    });

});
    


