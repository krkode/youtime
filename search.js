function search(){
    let url = generateUrl();

    fetch(url).then(response => {
      console.log(response);
      displayResults(response);
    });

}

function generateUrl(){
  let apiKey = getURLSafeVal($("#textKey"));
  let searchText =  getURLSafeVal($("#textSearch"));

  let year = $("#selectYear").val();
  //repeat code right there
  let startdate = encodeURIComponent(new Date(year,0,1).toISOString());
  let enddate = encodeURIComponent(new Date(year,11,31).toISOString());

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

function displayResults(data){
  console.log("got in display");
  console.log(data);
}