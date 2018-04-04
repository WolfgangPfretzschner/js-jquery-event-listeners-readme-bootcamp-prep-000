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
  $('#typing').on('keydown', function (key){
    if (key.which == 71){
    alert('G was pressed');
    }
  })
}

function submitIt(){
  $('form input:child-last').on('submit' ,function (){
    alert('Your form is going to be sumbitted now.')
    })
  $('form').trigger('submit')
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
