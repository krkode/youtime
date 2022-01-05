$(document).ready(function(){
    $("#inputSearch").prop('disabled', true);

    populateYears();

    //enable #inputSearch once all fields are populated
        $("form#searchForm :input").each(function(){
        $(this).change(function(){
            updateDisableSubmit();
          }); 
       });
    $("#searchForm").submit(e=> {
        if (window.PasswordCredential) {
            var c = new PasswordCredential(e.target);
            navigator.credentials.store(c);
        }
        search();
    });
 });

function updateDisableSubmit(){
    let enable = true;
    $("form#searchForm :input").each(function(){
        enable = enable && !isEmpty($(this)); // TODO: dont need to iterate everything, if one is empty jump out
       });
    $("#inputSearch").prop('disabled', !enable);
}

function isEmpty(element){
    return element.val() == '';
}