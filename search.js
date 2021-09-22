search()
function search(keyword,year){
    let startdate = new Date(year,0,1)
    let enddate = new Date(year,12,31)
    var results = YouTube.Search.list('id,snippet', {q: keyword, publishedAfter: startdate, publishedBefore:enddate, maxResults: 25});

    for(var i in results.items) {
      var item = results.items[i];
      console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
}