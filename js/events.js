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
  $('#typing').on('keypress', function (){
    if (key.which == 71){
    alert('enter was pressed');
  }
  })
}

function submitIt(){
  
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
