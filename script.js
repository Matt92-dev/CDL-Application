var currentTotal = 0;
var itemAOfferCount = 0;
var itemBOfferCount = 0;
var globalItemCount = 0;
var itemA = 0.5;
var itemB = 0.3;
var itemC = 0.2;
var itemD = 0.12;

jQuery(document).ready(function () {
    

    //Item A click function
    $('#item-a').click(function () {
        itemAOfferCount += 1;
        if (itemAOfferCount == 3) {
            globalItemCount += 1;
            itemAOfferCount = 0;
            currentTotal += .3;
            alert('3 for 2!');
        } else {
            globalItemCount += 1;
            currentTotal += itemA;
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item B click function
    $('#item-b').click(function () {
        itemBOfferCount += 1;
        if (itemBOfferCount == 2) {
            globalItemCount += 1;
            itemBOfferCount = 0;
            currentTotal += .15;
            alert('2 for 1!');
        } else {
            globalItemCount += 1;
            currentTotal += itemB;
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item C click function
    $('#item-c').click(function () {
        currentTotal += itemC;
        globalItemCount += 1;
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item D click function
    $('#item-d').click(function () {
        currentTotal += itemD;
        globalItemCount += 1;
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });
});
