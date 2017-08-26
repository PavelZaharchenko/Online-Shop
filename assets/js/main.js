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
            price: 180,
            id: 'e55c0494',
            type: 'watch',
            description: 'lorem ipsum'
        },
        {
            brand: 'Sevenfriday',
            model: 'M-1',
            image: 'public/assets/img/clock-3.jpg',
            price: 130,
            id: 'e55c89194',
            type: 'watch',
            description: 'lorem ipsum'
        },
        {
            brand: 'Fossil',
            model: 'CH2565',
            image: 'public/assets/img/clock-4.jpg',
            price: 150,
            id: 'e67c0494',
            type: 'watch',
            description: 'lorem ipsum'
        },

    ]

    let accessorieItems = [
        {
            brand: '33 Element',
            model: '331501',
            image: 'public/assets/img/accessories-1.jpg',
            price: 499,
            id: 'e55c0421',
            type: 'accessories',
            description: 'lorem ipsum'
        },

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
            image: 'public/assets/img/info1.jpg',
            id: 'e80c0494',
            isPopup: false
        },
        {
            name: 'Lorem',
            description: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
            image: 'public/assets/img/info2.jpg',
            id: 'e55g5994',
            isPopup: false
        },
        {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam atque dolor nobis, assumenda nisi!',
            image: 'public/assets/img/info3.jpg',
            id: 'e65c0488',
            isPopup: false
        }
    ]

    infoItems.forEach(item => {
        sliderItemRender(item, '#info-item-template', '.info-wrap');
    });
    

    $('.cart-buy-button').on('click', e => {
        $('.popup-box').addClass('active');

        let $currentProduct = $(e.target).parents('.product-item');
        let productId = $currentProduct.attr('id');
        let isWatch = $currentProduct.hasClass('watch');

        (isWatch ? watchItems : accessorieItems).forEach(item => {
            if (item.id === productId) {
                $('.popup__content').html('');
                sliderItemRender(item, '#product-popup-temlate', '.popup__content');
            }
        })
        
    });

    $('.popup__close-btn').on('click', () => {
        $('.popup-box').removeClass('active');
    })


    $('.show-more').on('click', e => {
        $('.popup-box').addClass('active');
        
        let $currentProduct = $(e.target).parents('.info-block__item');
        console.log($currentProduct)
        let productId = $currentProduct.attr('id');

        infoItems.forEach(item => {
            if (item.id === productId) {
                $('.popup__content').html('');
                item.isPopup = true;
                console.log(item)
                sliderItemRender(item, '#info-item-template', '.popup__content');
            }
        })
    })
    
})