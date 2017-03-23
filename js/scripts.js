//Back End Logic



//Front End Logic

$(function(){
  $('#stress-effects').submit(function(event){
    event.preventDefault();
    var stressEffects = [];
    $('input:checkbox[name=stress-effects]:checked').each(function(){
      var effect = $(this).val();
      stressEffects.push(effect);
    });
    var stressSymptoms = [];
    $('input:checkbox[name=stress-symptoms]:checked').each(function(){
      var symptom = $(this).val();
      stressSymptoms.push(symptom);
    });
    var copingMethods = [];
    $('input:checkbox[name=coping-methods]:checked').each(function(){
      var method = $(this).val();
      copingMethods.push(method);
    });
    console.log(stressEffects);
    console.log(stressSymptoms);
    console.log(copingMethods);
  });
});
