$.get("testAudio.csv",loadCSV);
function loadCSV(data){
    console.log(data)
    var audioFiles = data.split("\n");
    console.log(audioFiles);
    playAudio(audioFiles);
}


