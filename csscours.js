const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL49wvvJ-grmwUu18cHONzkK9afe0DZBa5&maxResults=50&key=AIzaSyAf3Sxf1B9eKRQcIUstALSxqhuoBwj6QWc";
fetch(url).then(response => { return response.json() }).then(data => {

    getData(data.items);

}).catch(error => {

    console.log(error);
})


function getData(data) {
    console.log(data);
    data.forEach(element => {
        var title = element.snippet.title;
        var videoId = element.snippet.resourceId.videoId;
        var img = element.snippet.thumbnails.standard.url;
        var description = element.snippet.description;

        document.getElementById("content").innerHTML +=
            '<div class="card-header shadow p-3 mb-5 bg-white rounded" onclick="loadVideo(\'' + videoId + '\')"> ' + title + '</div>'

        ;

        ;
    });
}


function loadVideo(videoId) {
    document.getElementById("player").src = "https://www.youtube.com/embed/" + videoId + "?showinfo=0; rel=0;";


}




setInterval(function() {
    document.getElementById("player").style.height =
        document.getElementById("player").getBoundingClientRect().width * 0.5625 + "px";

}, 1000);