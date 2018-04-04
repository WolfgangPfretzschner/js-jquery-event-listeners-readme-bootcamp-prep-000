function getIt(){
  $('p').on('click', function(){
    alert ('Hey!')
  })
}

function frameIt(){
  $('img').on('load',function (){
    $('img').addClass("tasty");
  })
}

function pressIt(){
  $('#typing').on('keypress', function (key){
    if (key.which == 71){
    alert('G was pressed');
    }
  })
}

function submitIt(){
  $('form input:last-child').on('click', function (){
    alert('Your form is going to be sumbitted now.')
    })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
