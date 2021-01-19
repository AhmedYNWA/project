<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
var cart = {
    item: "btn btn-success btn-xs",
    price: 35.50,
    qty: 2
};
var jsonStr = JSON.stringify( cart );
sessionStorage.setItem( "cart", jsonStr );
// now the cart is {"item":"btn btn-success btn-xs","price":35.50,"qty":2}
var cartValue = sessionStorage.getItem( "cart" );
var cartObj = JSON.parse( cartValue );
// original object
</script>