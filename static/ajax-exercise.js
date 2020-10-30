"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', (response) => {
        $('#show fortune),text(response');
    }).
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get('/weather.json', { "zipcode": "#zipcode-field"}, (response) => {
        $('weather-form').html(response);
    });
};

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    // const formInputs = {
    //     'qty' : $('qty-field').val(),
    //     'melon-type' : $('melon-type-field').val()
    // };
    const formValues = $('#order-form').serialize();
    $.post('/order-melons', formValues, resultHandler);
        
};
}

$("#order-form").on('submit', orderMelons);


