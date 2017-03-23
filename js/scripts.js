//Back End Logic
var evaluation = function(stressEffects, stressSymptoms, copingMethods) {
  var result = "";
  if ((stressEffects.length + stressSymptoms.length > 5) && (copingMethods.length < 1)) {
    result = "You seem really stressed. Here is a list of recommended stress management methods:";
  } else if ((stressEffects.length + stressSymptoms.length > 5) && (copingMethods.length < 3)) {
    result = "You seem to be utilizing some of the stress reduction methods, but maybe you should incorporate a few more. Here is a list of some reccommended stress reduction methods:";
  } else if ((stressEffects.length + stressSymptoms.length > 5) && (copingMethods.length > 4)) {
    result = "You are doing a great job at trying to reduce your stress. Keep at it!";
  } else {
    result = "You don't even need to be here, you're good to go."
  }

  return result;
}


//Front End Logic

$(function(){

  var stressEffects = [];
  var stressSymptoms = [];
  var copingMethods = [];

  $('#stress-effects').submit(function(event){
    event.preventDefault();

    $('input:checkbox[name=stress-effects]:checked').each(function(){
      var effect = $(this).val();
      stressEffects.push(effect);
    });

    $('input:checkbox[name=stress-symptoms]:checked').each(function(){
      var symptom = $(this).val();
      stressSymptoms.push(symptom);
    });

    $('input:checkbox[name=coping-methods]:checked').each(function(){
      var method = $(this).val();
      copingMethods.push(method);
    });

    $(".text").text(evaluation(stressEffects, stressSymptoms, copingMethods));
  });
});
