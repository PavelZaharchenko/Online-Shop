$(() => {
    let renderItems = (obj, templateSelector, outputSelector) => {
        const sliderItemTemplate = $(templateSelector).html();
        const compiled = _.template(sliderItemTemplate);
        const newSliderItem = compiled(obj);
        $(outputSelector).append(newSliderItem);
    }

    $.get('/arrays', {}, onAjaxSuccess);
       
    function onAjaxSuccess(data) {
        data.sliderItems.forEach(item => {
            renderItems(item, '#slider-item-template', '.carousel-inner');
        });

        data.watchItems.forEach(item => {
            renderItems(item, '#product-item-template', '#home');
        });

        data.accessorieItems.forEach(item => {
            renderItems(item, '#product-item-template', '#profile');
        });

        data.infoItems.forEach(item => {
            renderItems(item, '#info-item-template', '.info-wrap');
        });


        $('.main-content').on('click', '.cart-buy-button', e => {
            $('.popup-box').addClass('active');
            
            let $currentProduct = $(e.target).parents('.product-item');
            let productId = $currentProduct.attr('id');
            let isWatch = $currentProduct.hasClass('watch');
    
            (isWatch ? data.watchItems : data.accessorieItems).forEach(item => {
                if (item.id === productId) {
                    $('.popup__content').html('');
                    renderItems(item, '#product-popup-temlate', '.popup__content');
                }
            })
        });

        $('.info-block').on('click', '.show-more', e => {
            $('.popup-box').addClass('active');
            
            let $currentProduct = $(e.target).parents('.info-block__item');
            let productId = $currentProduct.attr('id');
    
            data.infoItems.forEach(item => {
                if (item.id === productId) {
                    $('.popup__content').html('');
                    item.isPopup = true;
                    console.log(item)
                    renderItems(item, '#info-item-template', '.popup__content');
                }
            })
        });


    }
    
    $('.popup__close-btn').on('click', () => {
        $('.popup-box').removeClass('active');
    })

})
