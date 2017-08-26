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
            model: 'G-Shock',
            image: 'public/assets/img/clock-2.jpg',
            price: 220
        }
    ]

    let accessorieItems = [
        {
            brand: 'Dapper Bristol',
            model: 'Dapper Bristol',
            image: 'public/assets/img/accessories-1.jpg',
            price: 499
        },
        {
            brand: 'Dapper Bristol',
            model: 'Dapper Bristol',
            image: 'public/assets/img/accessories-2.jpg',
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