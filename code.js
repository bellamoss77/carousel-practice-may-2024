document.addEventListener('DOMContentLoaded', () => {
    let images = [
        {
            src: 'images/fleurs_1.png',
            alt: 'Sprouting Lily',
            title: 'Sprouting Lily',
            id: '1'
        }, {
            src: 'images/fleurs_2.png',
            alt: 'buttercups',
            title: 'Buttercups',
            id: '2'
        }, {
            src: 'images/fleurs_3.png',
            alt: 'Dark Iris Bud',
            title: 'Dark Iris Bud',
            id: '3'
        }, {
            src: 'images/fleurs_4.png',
            alt: 'Royal Purple Iris',
            title: 'Royal Purple Iris',
            id: '4'
        }, {
            src: 'images/fleurs_5.png',
            alt: 'Royal Purple Irises - Bud and Bloom',
            title: 'Royal Purple Irises - Bud and Bloom',
            id: '5'
        }, {
            src: 'images/fleurs_6.png',
            alt: 'Royal Purple Irises',
            title: 'Royal Purple Irises',
            id: '6'
        }, {
            src: 'images/fleurs_7.png',
            alt: 'Dark Iris Bud 2',
            title: 'Dark Iris Bud 2',
            id: '7'
        }, {
            src: 'images/fleurs_8.png',
            alt: 'Purple Irises',
            title: 'Purple Irises',
            id: '8'
        }, {
            src: 'images/fleurs_9.png',
            alt: 'Purple Iris',
            title: 'Purple Iris',
            id: '9'
        }, {
            src: 'images/fleurs_10.png',
            alt: 'Purple Irises 2',
            title: 'Purple Irises 2',
            id: '10'
        }, {
            src: 'images/fleurs_11.png',
            alt: 'Light Purple Irises - Bud and Blooms',
            title: 'Light Purple Irises - Bud and Blooms',
            id: '11'
        }, {
            src: 'images/fleurs_12.png',
            alt: 'Irises',
            title: 'Irises',
            id: '12'
        }, {
            src: 'images/fleurs_13.png',
            alt: 'Shriveled Irises',
            title: 'Shriveled Irises',
            id: '13'
        }, {
            src: 'images/fleurs_14.png',
            alt: 'Flora Skeletons',
            title: 'Flora Skeletons',
            id: '14'
        }, {
            src: 'images/fleurs_15.png',
            alt: 'Flora Skeletons 2',
            title: 'Flora Skeletons 2',
            id: '15'
        }, {
            src: 'images/fleurs_16.png',
            alt: 'Flora Skeletons 3',
            title: 'Flora Skeletons 3',
            id: '16'
        }, {
            src: 'images/fleurs_17.png',
            alt: 'Flora Skeletons 4',
            title: 'Flora Skeletons 4',
            id: 17
        }, {
            src: 'images/fleurs_18.png',
            alt: 'Field Roses',
            title: 'Field Roses',
            id: '18'
        }, {
            src: 'images/fleurs_19.png',
            alt: 'Field Roses 2',
            title: 'Field Roses 2',
            id: '19'
        }, {
            src: 'images/fleurs_20.png',
            alt: 'Field Roses 3',
            title: 'Field Roses 3',
            id: '20'
        }, {
            src: 'images/fleurs_21.png',
            alt: 'Field Roses 4',
            title: 'Field Roses 4',
            id: '21'
        }, {
            src: 'images/fleurs_22.png',
            alt: 'Field Roses 5',
            title: 'Field Roses 5',
            id: '22'
        }, {
            src: 'images/fleurs_23.png',
            alt: 'Field Roses 6',
            title: 'Field Roses 6',
            id: '23'
        }, {
            src: 'images/fleurs_24.png',
            alt: 'Field Roses 7',
            title: 'Field Roses 7',
            id: '24'
        }, {
            src: 'images/fleurs_25.png',
            alt: 'Field Roses 8',
            title: 'Field Roses 8',
            id: '25'
        }, {
            src: 'images/fleurs_26.png',
            alt: 'Irises 2',
            title: 'Irises 2',
            id: '26'
        }, {
            src: 'images/fleurs_27.png',
            alt: 'Close Up Light Purple Iris',
            title: 'Close Up Light Purple Iris',
            id: '27'
        }, {
            src: 'images/fleurs_28.png',
            alt: 'Bergundy Red Leaf',
            title: 'Bergundy Red Leaf',
            id: '28'
        }, {
            src: 'images/fleurs_29.png',
            alt: 'Shriveling Iris 2',
            title: 'Shriveling Iris 2',
            id: '29'
        }, {
            src: 'images/fleurs_30.png',
            alt: 'Light Purple Iris Bud',
            title: 'Light Purple Iris Bud',
            id: '30'
        }, {
            src: 'images/fleurs_31.png',
            alt: 'Royal Purple Iris',
            title: 'Royal Purple Iris',
            id: '31'
        }, {
            src: 'images/fleurs_32.png',
            alt: 'Yellow Irises',
            title: 'Yellow Irises',
            id: '32'
        }, {
            src: 'images/fleurs_33.png',
            alt: 'Royal Purple Irises 2',
            title: 'Royal Purple Irises 2',
            id: '33'
        }, {
            src: 'images/fleurs_34.png',
            alt: 'Spiky Pink Wildflower',
            title: 'Spiky Pink Wildflower',
            id: '34'
        }, {
            src: 'images/fleurs_35.png',
            alt: 'Close Up Yellow Iris - Bloom and Bud',
            title: 'Close Up Yellow Iris - Bloom and Bud',
            id: '35'
        }, {
            src: 'images/fleurs_36.png',
            alt: 'Shriveled Irises 2',
            title: 'Shriveled Irises 2',
            id: '36'
        }, {
            src: 'images/fleurs_37.png',
            alt: 'Shriveled Iris',
            title: 'Shriveled Iris',
            id: '37'
        }, {
            src: 'images/fleurs_38.png',
            alt: 'Shriveled Irises 3',
            title: 'Shriveled Irises 3',
            id: '38'
        }, {
            src: 'images/fleurs_39.png',
            alt: 'Yellow Iris Buds',
            title: 'Yellow Iris Buds',
            id: '39'
        }, {
            src: 'images/fleurs_40.png',
            alt: 'Sprouting Lily 2',
            title: 'Sprouting Lily 2',
            id: '40'
        }, {
            src: 'images/fleurs_41.png',
            alt: 'Royal Purple Irises 3',
            title: 'Royal Purple Irises 3',
            id: '41'
        }, {
            src: 'images/fleurs_42.png',
            alt: 'Light Purple Irises and Their Ghosts',
            title: 'Light Purple Irises and Their Ghosts',
            id: '42'
        }, {
            src: 'images/fleurs_43.png',
            alt: 'Yellow Irises 2',
            title: 'Yellow Irises 2',
            id: '43'
        }, {
            src: 'images/fleurs_44.png',
            alt: 'Plantain Lily',
            title: 'Plantain Lily',
            id: '44'
        }, {
            src: 'images/fleurs_45.png',
            alt: 'Fringed Bluestar',
            title: 'Fringed Bluestar',
            id: '45'
        }, {
            src: 'images/fleurs_46.png',
            alt: 'Dried Hydrangea',
            title: 'Dried Hydrangea',
            id: '46'
        }, {
            src: 'images/fleurs_47.png',
            alt: 'Fragile Leaves',
            title: 'Fragile Leaves',
            id: '47'
        }, {
            src: 'images/fleurs_48.png',
            alt: 'Fragile Leaves 2',
            title: 'Fragile Leaves 2',
            id: '48'
        }
    ]

    const slideshow = document.querySelector('section.slideshow');
    const navDots = document.querySelector('.nav-dots');

    function appendSlides(image) {
        const slide = document.createElement('div');
        slide.className = 'slide';

        const imgElement = document.createElement('img');
        imgElement.className = 'slide-img';
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.title = image.title;
        imgElement.id = image.id;

        const slideCaption = document.createElement('h3');
        slideCaption.className = 'slide-title';
        slideCaption.textContent = `${imgElement.title}`;
   
        slide.appendChild(imgElement);
        slide.appendChild(slideCaption);

        slideshow.appendChild(slide);

        addNavigationDot(image.id);
    }

    function addNavigationDot(id) {
        const dot = document.createElement('li');
        dot.className = 'dot';

        const link = document.createElement('a');
        link.href = `#`;
        link.setAttribute('data-id', id);
        link.innerHTML = '&bull;';

        dot.appendChild(link);
        navDots.appendChild(dot);

        link.addEventListener('click', (event) => {
            event.preventDefault();
            const slideId = event.target.getAttribute('data-id');
            setActiveSlide(slideId);
        });
    }

    function setActiveSlide(slideId) {
        let slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        const activeSlide = document.querySelector(`img[id='${slideId}']`).parentNode;
        activeSlide.style.display = 'block';
    }
    
    function generateImages() {
        images.forEach(image => {
            appendSlides(image);
        })
    }
    generateImages();

});