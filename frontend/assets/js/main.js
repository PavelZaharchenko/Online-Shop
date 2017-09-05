class App {
    constructor() {
        this.init();
    }

    init() {
        this.showContent();
        this.popupControl();
        this.buyButton();
    }

    renderItems(obj, templateSelector, outputSelector) {
        const sliderItemTemplate = $(templateSelector).html();
        const compiled = _.template(sliderItemTemplate);
        const newSliderItem = compiled(obj);
        $(outputSelector).append(newSliderItem);
    }

    async showContent() {
        let data = await $.get('/arrays');

        data.sliderItems.forEach(item => {
            this.renderItems(item, '#slider-item-template', '.carousel-inner');
        });

        data.watchItems.forEach(item => {
            this.renderItems(item, '#product-item-template', '#home');
        });

        data.accessorieItems.forEach(item => {
            this.renderItems(item, '#product-item-template', '#profile');
        });

        data.infoItems.forEach(item => {
            this.renderItems(item, '#info-item-template', '.info-wrap');
        });

        this.showItem(data);
        this.newsControl(data);
    }
    
    showItem(data) {
        $('.main-content').on('click', '.show-item', e => {
            $('.popup-box').addClass('active');
            $('body').addClass('stop-scroll');
            
            let $currentProduct = $(e.target).parents('.product-item');
            let productId = $currentProduct.attr('id');
            let isWatch = $currentProduct.hasClass('watch');
    
            (isWatch ? data.watchItems : data.accessorieItems).forEach(item => {
                if (item.id === productId) {
                    $('.popup__content').html('');
                    this.renderItems(item, '#product-popup-temlate', '.popup__content');
                }
            })
        });
    }

    newsControl(data) {
        $('.info-block').on('click', '.show-more', e => {
            $('.popup-box').addClass('active');
            $('body').addClass('stop-scroll');
            
            let $currentProduct = $(e.target).parents('.info-block__item');
            let productId = $currentProduct.attr('id');
    
            data.infoItems.forEach(item => {
                if (item.id === productId) {
                    $('.popup__content').html('');
                    item.isPopup = true;
                    this.renderItems(item, '#info-item-template', '.popup__content');
                }
            })
        });
    }

    buyButton() {
        $('.popup').on('click', '.cart-buy-button', () => {
            console.log('hello')
            $('.popup-box').removeClass('active');
            $('body').removeClass('stop-scroll');
        })
    }

    popupControl() {
        $('.popup__close-btn').on('click', () => {
            $('.popup-box').removeClass('active');
            $('body').removeClass('stop-scroll');
        })
    }
}

$(() => {
    new App
})


