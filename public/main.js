var randFunc = function(){
  var rand = Math.floor(Math.random() * 255);
  return rand;
}

var clrChng = function(evt){
  if(evt.target.id === 'allBox'){
    console.log('I am allBox');
        $allBox.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
        $boxOne.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
        $boxTwo.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
        $boxThree.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
  } else if(evt.target.id === 'box1'){
      console.log('I am box 1');
      $boxOne.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
      $boxTwo.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
      $boxThree.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
    } else if(evt.target.id === 'box2'){
        console.log('I am box 2');
        $allBox.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
      } else if(evt.target.id === 'box3'){
          console.log('I am box 3');
          $boxOne.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
          $boxTwo.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
          $boxThree.css('background', 'rgba(' + randFunc() + ',' + randFunc() + ',' + randFunc() + ',1)');
        }
}

var $miniBox = $('.miniBox');
var $allBox = $('#allBox');
var $boxOne = $('#box1');
var $boxTwo = $('#box2');
var $boxThree = $('#box3');

$allBox.on('click', clrChng);
