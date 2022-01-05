function search(){
    $("#results_table").empty();
    let url = generateUrl();

    fetch(url)
    .then(response => response.json())
    .then(data =>displayData(data));
    
}

function generateUrl(){
  let apiKey = getURLSafeVal($("#password"));
  //let searchText =  getURLSafeVal($("#textSearch"));
  let searchText = $("#textSearch").val();

  let url = new URL('https://www.googleapis.com/youtube/v3/search?')

  let params = {
                part: 'snippet',
                maxResults: 25,
                q: searchText,
                type: 'video',
                key: apiKey
            }
  url.search = new URLSearchParams(params).toString();
  url.href = AppendDateToUrl(url.href)
  return url;
}

//work around cause i think (not super sure) the google api doesn't support url encoding on ':' character, dates with '%3A' returns limited search results
function AppendDateToUrl(href){
  let year = $("#selectYear").val();
  let startdate = generateDate(year,0,1);
  let enddate = generateDate(year,11,31);

  href = href + "&publishedAfter=" + startdate
              + "&publishedBefore=" + enddate;
  
  return href;
}

function getURLSafeVal(element){
  return encodeURIComponent(element.val());
}

function generateDate(year, month, day){
  let date = new Date(year,month,day).toISOString();
  //date = encodeURIComponent(date);
  return date;
}