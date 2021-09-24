function displayData(data){
    //TODO: i hate code like this, make it a class or something shit this is so trash
    let table = $("#results_table")
    let base_url = 'https://www.youtube.com/watch?v=';
    let body = '';
    for (let i = 0; i < data.items.length; i++){
        let result = data.items[i];
        body += '<tr>';

        let thumbnail = '<img src="' + result["snippet"]["thumbnails"]["default"]["url"] + '" alt="thumbnail">';
        body += generateTableEntry([thumbnail]);
        
        let details = [];
        let title = result["snippet"]["title"].link(base_url + result["id"]["videoId"]);
        details[0] = title;
        details[1] = result["snippet"]["channelTitle"];
        details[2] = result["snippet"]["description"];
        body += generateTableEntry(details);

        body += generateTableEntry([result["snippet"]["publishTime"]]);

        body += '</tr>';
    }
    table.append(body);
}

function generateTableEntry(details){
    let entry = '<td>';
    for (let i = 0; i < details.length; i++){
        entry += details[i] + '<br>';
    }
    entry += '</td>';
    return entry;
}