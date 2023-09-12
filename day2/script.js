const promoCode = "SELL200";
    const discountPercent = 20;
    const minOrderAmount = 200;
    var subtotal=0;
    var discount=0;
    var total=0;
    var cartItem = 0;
    $(document).ready(()=>{
        $(".product_item").click(function(e){
            console.log(e);
            let name = $(this).data('name');
            let price = $(this).data('price');
            cartItem++;
            subtotal +=  +price;
            $('#selected-items').append(`<p class="font-bold text-black capitalize">${cartItem}. ${name}</p>`)
            calculateSummery();
        });
    })

    function calculateSummery() {
        let promoCodeInput = $('#promoCodeInput').val();
        if (subtotal >= minOrderAmount && promoCodeInput === promoCode){
            discount = (subtotal * discountPercent) /100;
        }else{
            discount = 0;
        }
        total = subtotal - discount;
        $('#subtotal').html(subtotal.toFixed(2));
        $('#discount').html(discount.toFixed(2));
        $('#total').html(total.toFixed(2));
    }
   