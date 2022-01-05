function search(){
    $("#results_table").empty();
    let url = generateUrl();

    fetch(url)
    .then(response => response.json())
    .then(data =>displayData(data));
    
}

function generateUrl(){
  let year = $("#selectYear").val();
  let startdate = generateDate(year,0,1);
  let enddate = generateDate(year,11,31);

  let url = new URL('https://www.googleapis.com/youtube/v3/search?')

  let params = {
                part: 'snippet',
                maxResults: 25,
                publishedAfter: startdate,
                publishedBefore: enddate,
                q: $("#textSearch").val(),
                type: 'video',
                key: $("#password").val()
            }
  url.search = new URLSearchParams(params).toString();
  return url;
}

function generateDate(year, month, day){
  let date = new Date(year,month,day).toISOString();
  return date;
}