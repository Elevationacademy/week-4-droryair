
$('#search').on('click', function () {
    $('.container').empty()
    const item = $('#search-input').val()
    if (!item) {
        $.get(`/`, function () {
            $('.container').append(`<h4>We have:</h4> <p> table, chair, couch, picture frame </p>`)
        })
    } else {
        $.get(`priceCheck/${item}`, function (price) {
            $('.container').append(`<div>${price.price}</div>`)
        })
    }
})

$('#buy').on('click', function () {
    $('.container').empty()
    const item = $('#buy-input').val()
    if (!item) {
        $.get(`/`, function () {
            $('.container').append(`<h4>We have:</h4> <p> table, chair, couch, picture frame </p>`)
        })
    } else {
        $.get(`buy/${item}`, function (message) {
            $('.container').append(`<div> ${message}</div>`)
        })
    }
})