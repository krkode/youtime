function search(){
    $("#results_table").empty();
    let url = generateUrl();

    fetch(url)
    .then(response => response.json())
    .then(data =>displayData(data));

}

function generateUrl(){
  let apiKey = getURLSafeVal($("#password"));
  let searchText =  getURLSafeVal($("#textSearch"));

  let year = $("#selectYear").val();
  let startdate = generateDate(year,0,1);
  let enddate = generateDate(year,11,31);

  let url = new URL('https://www.googleapis.com/youtube/v3/search?')

  let params = {
                key: apiKey,
                q: searchText,
                publishedAfter: startdate,
                publishedBefore: enddate,
                type: 'video',
                maxResults: 25,
                part: 'snippet'
            }
  url.search = new URLSearchParams(params).toString();
  return url;
}

function getURLSafeVal(element){
  return encodeURIComponent(element.val());
}

function generateDate(year, month, day){
  let date = new Date(year,month,day).toISOString();
  //date = encodeURIComponent(date);
  return date;
}