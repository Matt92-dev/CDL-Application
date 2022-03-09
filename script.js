var currentTotal = 0;

jQuery(document).ready(function () {
    var itemA = 0.5;
    var itemB = 0.3;
    var itemC = 0.2;
    var itemD = 0.12;
    

    //Item A click function
    $('#item-a').click(function () {
        currentTotal += itemA;
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item B click function
    $('#item-b').click(function () {
        currentTotal += itemB;
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item C click function
    $('#item-c').click(function () {
        currentTotal += itemC;
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item D click function
    $('#item-d').click(function () {
        currentTotal += itemD;
        $('#total').text(currentTotal.toFixed(2));
    });
});
