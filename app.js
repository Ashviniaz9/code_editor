function initialize(){
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var jss= document.getElementById("jss");
  var code = document.getElementById("code").contentWindow.document;
 document.body.onkeyup=function(){
  code.open();
  code.writeln(
    html.value +


   "<style>"+ css.value+"</style>"+


   "<script>" + jss.value+"</script>"
  );
  code.close();
 }
}
initialize();