$(document).ready(function(){
    $("#inputSearch").prop('disabled', true);

    //enable #inputSearch once all fields are populated
        $("div#searchForm :input").each(function(){
        $(this).change(function(){
            updateDisableSubmit();
          }); 
       });
    
       $("#inputSearch").click(function(){
           search();
       });
 });

function updateDisableSubmit(){
    let enable = true;
    $("div#searchForm :input").each(function(){
        enable = enable && !isEmpty($(this)); // dont need to iterate everything, if one is empty jump out
       });
    $("#inputSearch").prop('disabled', !enable);
}

function isEmpty(element){
    return element.val() == '';
}