$(document).keypress(function( e ) 
{
     console.log(e.key);
     $("#container").text( $("#container").text() + e.key);
     if (e.key == "Enter") 
     {
          $("#container").text("");
     }
});
    