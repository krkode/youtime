let connected = false;
$(document).ready(function(){
    $("#inputSearch").prop('disabled', true);

    $("#textKey").change(function(){
        connected = establishApiConnection();
    });

    //check if everything in div searchForm has a value thats not empty, if yes enable #inputSearch
        $("div#searchForm :input").each(function(){
        // $(this).change();
        $(this).change(function(){
            updateDisableSubmit();
          }); 
       });
 });

function establishApiConnection(){
    let key = $("#textKey").text();
    //return status of connection
    return true;
}

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
