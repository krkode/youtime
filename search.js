function search(){
    $("#results_table").empty();
    let url = generateUrl();

    let headers = {
      'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Encoding' : 'gzip, deflate, br',
      'Alt-Used' :	'youtube.googleapis.com'

    }
    let fetchHeaders = new Headers(headers);

    const init = {
      method: 'GET',
      headers: fetchHeaders,
      mode: 'cors',
      cache: 'default'
    };

    fetch(url, init)
    .then(response => response.json())
    .then(data =>displayData(data));

}

function generateUrl(){
  let apiKey = getURLSafeVal($("#password"));
  let searchText =  getURLSafeVal($("#textSearch"));

  let year = $("#selectYear").val();
  let startdate = generateDate(year,0,1);
  let enddate = generateDate(year,11,31);

  let url = new URL('https://youtube.googleapis.com/youtube/v3/search?')

  let params = {
                part: 'snippet',
                maxResults: 25,
                publishedAfter: startdate,
                publishedBefore: enddate,
                q: searchText,
                type: 'video',
                key: apiKey
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