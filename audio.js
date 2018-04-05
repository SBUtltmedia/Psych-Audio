
function playAudio(playlist){
console.log(playlist)
var context;
var bufferLoader;
var sources = []
var  divs=["d1","d2"]
var keys=["37","39"]
var i=0;
var trial=[]
function init() {
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
        context, playlist, finishedLoading
    );

    bufferLoader.load();
}
init();
function finishedLoading(bufferList) {
    // Create two sources and play them both together.

   
    //        context.close();

        sources[i] = context.createBufferSource();
        sources[i].buffer = bufferList[i];
        sources[i].connect(context.destination);
            sources[i].start(0);  
     $(".container").off("click keypress");
       $("body").off("keydown")
sources[i].onended =function(evt){
    
     $(".container").css("opacity",1) 
       $(".container").on("click", clicked)
           $("body").on("keydown", clicked)
    
}
        var clicked=function(evt){
            var whichPressed=divs.indexOf($(this).attr("id"));
            if(whichPressed==-1){
            whichPressed=keys.indexOf(""+evt.which);
            }
            if(whichPressed!=-1){
                recordWord(whichPressed)
            }
        }
           
        
        
        function recordWord(which){
            trial.push(which);
                   console.log(trial)
            
               $(".container").css("opacity",0)  
            i++;
            finishedLoading(bufferList)
            
            
        }
     



    }

   

   
}

