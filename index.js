var i=0;
$("#view-more").hide();

$("#view").on("click",function(){
  if(!i){
    $("#view").text("view less");
    $("#view-more").show();
    i=1;
  }
  else{
    $("#view").text("view more");
    $("#view-more").hide();
    i=0;
  }
});
