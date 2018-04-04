function getIt(){
  $('div').on('click', function(){
    alert ('Hey!')
  })
}

function frameIt(){
  $('img').on('load',function (){
    $('img').addClass("tasty");
  })
}

function pressIt(){
  $('#typing')
}

function submitIt(){
  
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
