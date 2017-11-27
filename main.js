$(document).ready(function(){
  var showTotal = 0;
  var displayTotal_page1 = 0;
  var valueSaved = window.location.search.substring(1);


  $(window).on('keyup',function(e){
    saveAll()
    var total = calculateTotal()
    $('.a000').text('$ ' + total);
    showTotal = total;
  })

  $('.a11-reward-saver-cross-sell-proposed2-blank .homeloancontainer .headerexpense .view1').click(function(){
     window.location.href='index.html';
  });


  $('.a10-reward-saver-cross-sell-proposed2-blank .homeloancontainer .view3').click(function()
  {
    window.location.href='a11rewardsavercrosssellproposed2blank.html';
  });

  $('.a10-reward-saver-cross-sell-proposed2-blank .homeloancontainer .group').click(function()
  {
    window.location.href='a11rewardsavercrosssellproposed2blank.html';
  });


  $('.a10-reward-saver-cross-sell-proposed2-blank .view48 .group4 .rectangle6').click(function()
  {
    window.location.href='a11rewardsavercrosssellproposed2blank.html?showTotal=' + showTotal ;
  });


    $('.a10-reward-saver-cross-sell-proposed2-blank .homeloancontainer .headerexpense .view2').click(function()
    {
      window.location.href='index.html?showTotal=' + showTotal;
    });


    $('.a10-reward-saver-cross-sell-proposed2-blank .group5 .rectangle6-copy').click(function()

    {
      $('input[type="number"]').val("");

          $('.a000').text('$ ' + '0.00');

    })

    $('.a11-reward-saver-cross-sell-proposed2-blank .group5 .rectangle6-copy').click(function()

    {
      $('input[type="number"]').val("");

          $('.a000').text('$ ' + '0.00');

    })

      if(valueSaved){
        testCall()
      }

})


    // $( '.field-border' ).keyup(function() {
    //   displayTotal_page1 = $('.field-border').val();
    //   if(displayTotal_page1 != ''){
    //
    //   $('.a000_page1').text('$  '+ displayTotal_page1);
    // }
    // else{
    //     $('.a000_page1').text('$  '+ '0.00');
    // }
    //   loadAll()
    //   var total = calculateTotal()
    //   $('.a000').text('$ ' + total);
    //
    //

    // });

function calculateTotal(){
var total = 0
$('input[type="number"]').each(function(i,v){
  total += +$(v).val();
});
return total
}

function saveAll(){
$('input[type="number"]').each(function(i,v){
  sessionStorage.setItem($(v).attr('name'), $(v).val());
});
}

function loadAll(){
//var fields = ["field1", "field2"]
//$.each(fields, function( index, value ) {


  $('input[type="number"]').each(function(i,v){
    var value = sessionStorage.getItem($(v).attr('name'));

    if (value !== null){
        $(v).val(value)
    }
  });

//}
}

function testCall(){

var valueSaved = window.location.search.substring(1);
var savedTotal = valueSaved.split("=").pop();
$('div[class*=a000]').text('$  '+ savedTotal );
}

//
// var x = $('input.field-border').val();
// var a = $('input.view12').val();
// var b = $('input.view13').val();
// var c = $('input.view18').val();
// var d = $('input.view14').val();
// var e = $('input.view19').val();
// var f = $('input.view15').val();
// var g = $('input.view20').val();
// var h = $('input.view16').val();
// var i = $('input.view21').val();
// var j = $('input.view17').val();


// var inputsValue = $('input').val();
// var inputs = $('input');


// $('.view12').on('keyup',function(){
//
// });

// function testCall(){
//   var valueSaved = window.location.search.substring(1);
//   var savedTotal = valueSaved.split("=").pop();
//
//   $('.a000_page1').text('$ ' + savedTotal);
//
// }
//
// // var qsParm = new Array();
// // function qs() {
//     var query = window.location.search.substring(1);
//     var parms = query.split('&');
//     for (var i=0; i < parms.length; i++) {
//         var pos = parms[i].indexOf('=');
//         if (pos > 0) {
//             var key = parms[i].substring(0, pos);
//             var val = parms[i].substring(pos + 1);
//             qsParm[key] = val;
//             console.log(qsParm)
//         }
//     }
// }
