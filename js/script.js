$(document).ready(function(){
  $("#first").click(function(){
    $("#second").show();
    $("#first").hide();
  });

})

$(document).ready(function(){
  $("#second").click(function(){
    $("#first").show();
    $("#second").hide();
  })
})

$(document).ready(function(){
$("#pro").hover(
  function(){
  $("#program").show();
},
function(){
  $("#program").hide();
}
)

});


$(document).ready(function(){
  $("#jo").hover(
  function(){
    $("#jobs").show();
  },
  function(){
    $("#jobs").hide();
  }
  )
    
});
  