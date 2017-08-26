class App {
    constructor() {
        this.init();
    }

    init() {
        this.popupControl();
    }

    popupControl() {
        $('.cart-buy-button').on('click', () => {
            $('.popup-box').addClass('active');
        });

        $('.popup__close-btn').on('click', () => {
            $('.popup-box').removeClass('active');
        })
    }
}


$(() => {
    
    let sliderItems = [
        {
            image: 'public/assets/img/slide1.jpg',
            altText: 'clock-01',
            isActive: true
        },
        {
            image: 'public/assets/img/slide2.jpg',
            altText: 'clock-02',
            isActive: false
        },
        {
            image: 'public/assets/img/slide3.jpg',
            altText: 'clock-03',
            isActive: false
        }
    ]

    let sliderItemRender = (obj, templateSelector, outputSelector) => {
        const sliderItemTemplate = $(templateSelector).html();
        const compiled = _.template(sliderItemTemplate);
        const newSliderItem = compiled(obj);
        $(outputSelector).append(newSliderItem);
    }
    
    sliderItems.forEach(item => {
        sliderItemRender(item, '#slider-item-template', '.carousel-inner');
    })

    let watchItems = [
        {
            brand: 'Casio',
            model: 'G-Shock',
            image: 'public/assets/img/clock-1.jpg',
            price: 180
        },
        {
            brand: 'Casio',
            model: 'Classic',
            image: 'public/assets/img/clock-2.jpg',
            price: 220
        },
        {
            brand: 'Sevenfriday',
            model: 'M-1',
            image: 'public/assets/img/clock-3.jpg',
            price: 130
        },
        {
            brand: 'Fossil',
            model: 'CH2565',
            image: 'public/assets/img/clock-4.jpg',
            price: 150
        },
        {
            brand: 'Casio',
            model: 'GM-011',
            image: 'public/assets/img/clock-5.jpg',
            price: 220
        },
        {
            brand: 'Fossil',
            model: 'ND25',
            image: 'public/assets/img/clock-6.jpg',
            price: 270
        },
        {
            brand: 'Casio',
            model: 'J-Shock',
            image: 'public/assets/img/clock-7.jpg',
            price: 350
        },
        {
            brand: 'Casio',
            model: 'EFR-526L-1A',
            image: 'public/assets/img/clock-8.jpg',
            price: 180
        },
    ]

    let accessorieItems = [
        {
            brand: '33 Element',
            model: '331501',
            image: 'public/assets/img/accessories-1.jpg',
            price: 499
        },
        {
            brand: 'Element',
            model: '331403',
            image: 'public/assets/img/accessories-2.jpg',
            price: 530
        },
        {
            brand: 'Element',
            model: '331503',
            image: 'public/assets/img/accessories-3.jpg',
            price: 530
        },
        {
            brand: 'Element',
            model: '331603',
            image: 'public/assets/img/accessories-4.jpg',
            price: 530
        },
        {
            brand: 'Element',
            model: '331703',
            image: 'public/assets/img/accessories-5.jpg',
            price: 530
        },
        {
            brand: 'Element',
            model: '331803',
            image: 'public/assets/img/accessories-6.jpg',
            price: 530
        },
        {
            brand: 'Element',
            model: '331903',
            image: 'public/assets/img/accessories-2.jpg',
            price: 530
        },
        {
            brand: 'Element',
            model: '331113',
            image: 'public/assets/img/accessories-1.jpg',
            price: 530
        }
    ]
    
    watchItems.forEach(item => {
        sliderItemRender(item, '#product-item-template', '#home');
    });

    accessorieItems.forEach(item => {
        sliderItemRender(item, '#product-item-template', '#profile');
    });

    let infoItems = [
        {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam atque dolor nobis, assumenda nisi!',
            image: 'public/assets/img/info1.jpg'
        },
        {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam atque dolor nobis, assumenda nisi!',
            image: 'public/assets/img/info2.jpg'
        },
        {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam atque dolor nobis, assumenda nisi!',
            image: 'public/assets/img/info3.jpg'
        }
    ]

    infoItems.forEach(item => {
        sliderItemRender(item, '#info-item-template', '.info-wrap');
    });
    

    $('.cart-buy-button').on('click', () => {
        $('.popup-box').addClass('active');
    });

    $('.popup__close-btn').on('click', () => {
        $('.popup-box').removeClass('active');
    })
    
})