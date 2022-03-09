//Item A Globals
var itemA = 0.5;
var itemAOfferCount = 0;
var itemAOfferInt = 3;
var itemAOfferAmount = .3;
var noOfferA = true;

//Item B Globals
var itemB = 0.3;
var itemBOfferCount = 0;
var itemBOfferInt = 2;
var itemBOfferAmount = .15;
var noOfferB = true;

//Item C Globals
var itemC = 0.2;
var itemCOfferCount = 0;
var itemCOfferInt = 2;
var itemCOfferAmount = .15;
var noOfferC = true;

//Item D Globals
var itemD = 0.15;
var itemDOfferCount = 0;
var itemDOfferInt = 2;
var itemDOfferAmount = .15;
var noOfferD = true;


var globalItemCount = 0;
var currentTotal = 0;

jQuery(document).ready(function () {

    //Item A click function
    $('#item-a').click(function () {
        if (noOfferA) {
            globalItemCount += 1;
            currentTotal += itemA;
        } else {
            itemAOfferCount += 1;
            if (itemAOfferCount == itemAOfferInt) {
                globalItemCount += 1;
                itemAOfferCount = 0;
                currentTotal += itemAOfferAmount;
                alert('You have saved \u00A3' + ((itemA - itemAOfferAmount).toFixed(2)) + '!');
            } else {
                globalItemCount += 1;
                currentTotal += itemA;
            }
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item B click function
    $('#item-b').click(function () {
        if (noOfferB) {
            globalItemCount += 1;
            currentTotal += itemB;
        } else {
            itemBOfferCount += 1;
            if (itemBOfferCount == itemBOfferInt) {
                globalItemCount += 1;
                itemBOfferCount = 0;
                currentTotal += itemBOfferAmount;
                alert('You have saved \u00A3' + ((itemB - itemBOfferAmount).toFixed(2)) + '!');
            } else {
                globalItemCount += 1;
                currentTotal += itemB;
            }
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item C click function
    $('#item-c').click(function () {
        if (noOfferC) {
            globalItemCount += 1;
            currentTotal += itemC;
        } else {
            itemCOfferCount += 1;
            if (itemCOfferCount == itemCOfferInt) {
                globalItemCount += 1;
                itemCOfferCount = 0;
                currentTotal += itemCOfferAmount;
                alert('You have saved \u00A3' + ((itemC - itemCOfferAmount).toFixed(2)) + '!');
            } else {
                globalItemCount += 1;
                currentTotal += itemC;
            }
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item D click function
    $('#item-d').click(function () {
        if (noOfferD) {
            globalItemCount += 1;
            currentTotal += itemD;
        } else {
            itemDOfferCount += 1;
            if (itemDOfferCount == itemDOfferInt) {
                globalItemCount += 1;
                itemDOfferCount = 0;
                currentTotal += itemDOfferAmount;
                alert('You have saved \u00A3' + ((itemD - itemDOfferAmount).toFixed(2)) + '!');
            } else {
                globalItemCount += 1;
                currentTotal += itemD;
            }
        }
        $('#item-count').text(globalItemCount);
        $('#total').text(currentTotal.toFixed(2));
    });

    //Item A price setup
    $('#submit-item-info').click(function () {
        getItemAInfo();
        getItemBInfo();
        getItemCInfo();
        getItemDInfo();
        $('.pre-checkout').css("display", "none");
        $('.checkout-view-wrap').css("display", "block");
    })
    
    //Reset Variables and go back to item input
    $('#reset-application').click(function() {
        $('.pre-checkout').css("display", "block");
        $('.checkout-view-wrap').css("display", "none");
        var itemA = 0.5;
        var itemAOfferCount = 0;
        var itemAOfferInt = 3;
        var itemAOfferAmount = .3;
        var itemB = 0.3;
        var itemBOfferCount = 0;
        var itemBOfferInt = 2;
        var itemBOfferAmount = .15;
        var itemC = 0.2;
        var itemCOfferCount = 0;
        var itemCOfferInt = 2;
        var itemCOfferAmount = .15;
        var itemD = 0.15;
        var itemDOfferCount = 0;
        var itemDOfferInt = 2;
        var itemDOfferAmount = .15;
    })

});

function getItemAInfo() {
        itemA = parseFloat($("#item-a-price").val());
        if ($('#item-a-check').is(":checked")) {
            noOfferA = true;
        } else {
            noOfferA = false;
            itemAOfferInt = parseFloat($("#item-a-offer-amount").val());
            itemAOfferAmount = parseFloat($("#item-a-offer-price").val());
        }
}
function getItemBInfo() {
        itemB = parseFloat($("#item-b-price").val());
        if ($('#item-b-check').is(":checked")) {
            noOfferB = true;
        } else {
            itemBOfferInt = parseFloat($("#item-b-offer-amount").val());
            itemBOfferAmount = parseFloat($("#item-b-offer-price").val());
            noOfferB = false;
        }
}
function getItemCInfo() {
        itemC = parseFloat($("#item-c-price").val());
        if ($('#item-c-check').is(":checked")) {
            noOfferC = true;
        } else {
            itemCOfferInt = parseFloat($("#item-c-offer-amount").val());
            itemCOfferAmount = parseFloat($("#item-c-offer-price").val());
            noOfferC = false;
        }
}
function getItemDInfo() {
        itemD = parseFloat($("#item-d-price").val());
        if ($('#item-d-check').is(":checked")) {
            noOfferD = true;
        } else {
            itemDOfferInt = parseFloat($("#item-d-offer-amount").val());
            itemDOfferAmount = parseFloat($("#item-d-offer-price").val());
            noOfferD = false;
        }
}
