
$('#search').on('click',function(){
    let item = $('#search-input').val()
    $.get(`priceCheck/${item}`,function(price){
        $('.container').append(`<div>${price.price}</div>`)
    })
})

$('#buy').on('click',function(){
    let item = $('#buy-input').val()
    $.get(`buy/${item}`,function(message){
        $('.container').append(`<div> ${message}</div>`)
    })
})