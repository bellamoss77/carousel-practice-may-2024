document.addEventListener('DOMContentLoaded', () => {
    let slideshow = document.querySelector('.slideshow');
    let slides = document.querySelectorAll('.slideshow .slide');
    let images = document.querySelectorAll('.slide-img')
    let bars = document.querySelectorAll('.bars .bar');
    let dots = document.querySelectorAll('.nav-dots .dot a')
    let slideTitles = document.querySelectorAll('.slide-title');
    let easeInOutQuart = 'cubic-bezier(0.77, 0, 0.175, 1)';
    let easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    
    let staggeredSlideIn = (element: Element, delay: number) => {
        return element.animate(
            [
                { transform: 'scaleY(0)', transformOrigin: 'top' },
                { transform: 'scaleY(1)', transformOrigin: 'top' }
            ],
            {
                duration: 800,
                easing: easeInOutQuart,
                fill: 'forwards',
                delay: 80 * delay
            }
        );
    };

    let staggeredSlideOut = (element: Element, delay: number) => {
        return element.animate(
            [
                { transform: 'scaleY(1)', transformOrigin: 'top' },
                { transformOrigin: 'bottom', offset: 0.001 },
                { transform: 'scaleY(0)', transformOrigin: 'bottom' }
            ],
            {
                duration: 800,
                easing: easeInOutQuart,
                fill: 'forwards',
                delay: 80 * delay
            }
        );
    }; 

    let fadeIn = (element: Element) => {
        return element.animate(
            [
                { opacity: 0, tranform: 'translateY(100%)' },
                { opacity: 1, transform: 'translateY(0)' }
            ],
            {
                duration: 800,
                easing: easeOutCubic,
                fill: 'forwards',
                delay: 350
            }
        );
    };

    let fadeOut = (element: Element) => {
        return element.animate(
            [
                { opacity: 1, transform: 'translateY(0)' },
                { opacity: 0, transform: 'translateY(-100%)' }
            ],
            {
                duration: 600,
                easing: easeOutCubic,
                fill: 'forwards'
            }
        );
    };

    let pageTransition = (activeIndex: number) => {
        // Fade out titles of the current slide
        slideTitles.forEach(slideTitle => fadeOut(slideTitle));
    
        // Begin the bars animation to cover the current slide
        Promise.all(
            Array.from(bars).map((bar, i) => staggeredSlideIn(bar, i).finished))
        .then(() => {
            // Once bars have covered the current slide, set the active slide
            setActiveIndex(parseInt((images[activeIndex]).id));
            
            
            bars.forEach((bar, i) => {
                staggeredSlideOut(bar, i)                
            });
            slideTitles.forEach(slideTitle => fadeIn(slideTitle));
        });
    };
    
     let setActiveIndex = (activeIndex: number) => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[activeIndex].classList.add('active');
        (slideshow as HTMLElement).style.setProperty("--active-index", `${activeIndex}`);
        slides.forEach(slide => ((slide as HTMLElement).style.zIndex = `-1`));
        (slides[activeIndex] as HTMLElement).style.zIndex = `0`;          
    };    

    dots[0].classList.add('active');
    dots.forEach((dot, activeIndex) => {
        dot.addEventListener('click', () => {
            let currentActiveIndex = (slideshow as HTMLElement).style.getPropertyValue(
                '--active-index'
            );
            if (Number(currentActiveIndex) !== activeIndex) {
                pageTransition(activeIndex);
            }
        });
    });
    
})


        
