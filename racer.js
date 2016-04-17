var gameCount=0;
var level2Tack;

var startGame= function(){

      gameCount++;

      document.getElementById("keytoRace").style.visibility="visible";
      document.getElementById("imgCop").style.visibility="visible";

      document.getElementById("imgTraffic").style.visibility="visible";

      if(level2Tack==undefined || level2Tack<1){

         trackLen()
         newGame()

        // gunMusic()
    }
}
var gunSound=document.getElementById("gunSound");

var gunMusic=function(){

         gunSound.play();

                 }
var trackLen=function(){

      if(gameCount<=1) {

         //Creating track length
         trackLength = prompt("LEVEL 1-How many km required for you to escape from the city?")

         var playerStrip = document.querySelectorAll('tr') 

         for (var i = 0; i < playerStrip.length; i++) { 

           for ( var j = 0; j < trackLength; j++){

             var trackColoumn = document.createElement('td')

             playerStrip[i].appendChild(trackColoumn)   

             document.getElementById("pChaseTrack").innerHTML="LEVEL 1"; 
                }
              }
            }
          }

var newGame=function(){

     //when user want new game while progressing the current
      if(gameCount>1) {

               location.reload();

               alert("Oops!! you want to start a new game");
               alert("Click again on Start button for new game");
                }
              }

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("keytoRace").style.visibility="hidden";

  document.getElementById("imgCop").style.visibility="hidden";
  document.getElementById("imgTraffic").style.visibility="hidden";

  document.getElementById("imgrob1").style.visibility="hidden";
  document.getElementById("imgrob2").style.visibility="hidden";

  var playerStrip = document.querySelectorAll('tr')
  var player1Strip = document.querySelectorAll('#player1_strip td')

  document.addEventListener('keyup', udatePlayerPosition); 

  var pCount=0;
  var qCount=0;
 
  function udatePlayerPosition() {

   //when user release 'p' key
    if (event.which ===80) {
    pCount++;

    pTrackLength()
    pTrackFinish()
      }

   //when user release 'q' key
       else if (event.which ===81) {

         qCount++;

         qTrackLength()
         qTrackFinish()
           }
}
var pTrackLength=function(){

     if(pCount<=trackLength){

       var j=pCount;
       var player1Strip = document.querySelectorAll('#player1_strip td')

       player1Strip[j].className="active";
       player1Strip[j-1].className="";
         }
       }

var pTrackFinish=function(){

     if(pCount>trackLength && pCount>qCount) { 

        pCount=0;

        var player2Strip = document.querySelectorAll('#player2_strip td');
        var player1Strip = document.querySelectorAll('#player1_strip td')

        alert(" LEVEL 1 COMPLETED -JOHN ESCAPED")
        var level2Tack=prompt("LEVEL 2- How many km required you to escape from city?");  
        
        document.getElementById("keytoRace").innerHTML="Press x or y key to advance";
        document.getElementById("pChaseTrack").innerHTML="LEVEL 2";
        
        for(i=0;i<=trackLength;i++)
         {

           player1Strip[i].className="";  
           player2Strip[i].className="";  
   
          }
           if(level2Tack>0 || level2Tack!==undefined)
            {

              var playerStrip = document.querySelectorAll('tr') 

               for (var i = 0; i < playerStrip.length; i++) { 

                for ( var j = 0; j < level2Tack; j++){

                 var trackColoumn = document.createElement('td')

                 playerStrip[i].appendChild(trackColoumn)  

                 player1Strip[trackLength].className="active";  
                 player2Strip[trackLength].className="active";

                 player1Strip[trackLength-1].style.visibility="hidden" ;
                 player2Strip[trackLength-1].style.visibility="hidden" ;
              
                 player1Strip[0].className=""; 
                 player2Strip[0].className=""; 
 
document.addEventListener('keyup', newUpdatePlayerPosition); 

var pnewCount=trackLength;
var qnewCount=trackLength;

var xnewCount=0;
var ynewCount=0;

function newUpdatePlayerPosition() {

    if (event.which ===88) {

     pnewCount++;
     xnewCount++;

     pNewTrackLength();

    // ptrackSpeed();

     //pxTrackFinish();

      }
     if (event.which ===81) {
        
      for(i=0;i<=trackLength;i++){

      player2Strip[i].className=""; 
     
       if(qnewCount===trackLength){

        player2Strip[i].className=""; 
        player2Strip[trackLength].className="active"; 
          }
        }
 
       alert("Please press x or y key to advance");
         }
       if (event.which ===80) {

         for(i=0;i<=trackLength;i++)

         {
         player1Strip[i].className=""; 

          if(pnewCount==trackLength){

           player1Strip[i].className=""; 
           player1Strip[trackLength].className="active"; 
           }
          }

           alert("Please press x or y key to advance");
          }
         //when user release 'q' key
        if (event.which ===89) {

         ynewCount++;
         qnewCount++;

         qNewTrackLength()

         //ptrackSpeed()

         //pyTrackFinish()
           }

         } 
var pxTrackFinish=function(){
            
      if(xnewCount>=level2Tack && xnewCount>ynewCount) {

          document.getElementById("imgrob1").style.visibility="visible";
        
          document.getElementById("trackEsc").innerHTML="HURRAY!'JOHN' ESCAPED FROM CITY";
          document.getElementById("trackEsc").style.visibility="visible";

          alert("HURRAY!'JOHN' ESCAPED FROM CITY");
          alert("GAME OVER")

          pageReload()
         }
   
       }
var pyTrackFinish=function(){

      if(ynewCount>=level2Tack && ynewCount>xnewCount) {

          document.getElementById("imgrob2").style.visibility="visible";

          document.getElementById("trackEsc").innerHTML="HURRAY!'JOHN' ESCAPED FROM CITY";
          document.getElementById("trackEsc").style.visibility="visible";

          alert("HURRAY!'WALTER' ESCAPED FROM CITY");
          alert("GAME OVER")

          pageReload()
          }

        }
var ptrackSpeed=function() {

      //when p chase faster than q 
      if(xnewCount>ynewCount) {

          document.getElementById("trackEsc").innerHTML="JOHN IS DRIVING FAST";
        
          document.getElementById("imgrob1").style.visibility="visible";
          document.getElementById("imgrob2").style.visibility="hidden";
                            }
      //when q chase faster than p
      if(ynewCount>xnewCount) {

          document.getElementById("trackEsc").innerHTML="WALTER IS DRIVING FAST";
          
          document.getElementById("imgrob2").style.visibility="visible";
          document.getElementById("imgrob1").style.visibility="hidden";

               }
             }
var pNewTrackLength=function(){ 

      if(level2Tack<=pnewCount || level2Tack>=pnewCount){

          var j=pnewCount;
          var player1Strip = document.querySelectorAll('#player1_strip td')

          player1Strip[j].className="active";
          player1Strip[j-1].className="";
       
              }
            }
var qNewTrackLength=function(){

      if(level2Tack<=qnewCount || level2Tack>=qnewCount){

          var j=qnewCount;
          var player2Strip = document.querySelectorAll('#player2_strip td')

          player2Strip[j].className="active";
          player2Strip[j-1].className="";
      
                   }
                 }
                }
              }
            }
          }
       }
 var qTrackLength=function(){

     if(qCount<=trackLength) {

        var j=qCount;
        var player2Strip = document.querySelectorAll('#player2_strip td') 

        player2Strip[j].className="active";
        player2Strip[j-1].className="";

           }
         }
var qTrackFinish=function(){

      //when 'q' reaches finish point
      if(qCount>trackLength && qCount>pCount) {

         qCount=0;

         var player1Strip = document.querySelectorAll('#player1_strip td')
         var player2Strip = document.querySelectorAll('#player2_strip td')
        
         alert("LEVEL 1 COMPLETED - WALTER ESCAPED")
         var level2Tack=prompt("LEVEL 2- How many km required you to escape from city?")   

         document.getElementById("keytoRace").innerHTML="Press x or y key to advance";
         document.getElementById("pChaseTrack").innerHTML="LEVEL 2";

         for(i=0;i<=trackLength;i++){

           player1Strip[i].className="";  
           player2Strip[i].className="";  

           document.getElementById("keytoRace").style.visibility="hidden";
           document.getElementById("trackEsc").style.visibility="hidden";

           document.getElementById("imgrob1").style.visibility="hidden";
           document.getElementById("imgrob2").style.visibility="hidden";
  
           }     
            if(level2Tack>0 || level2Tack!==undefined)
            {
      
            var playerStrip = document.querySelectorAll('tr') 

             for (var i = 0; i < playerStrip.length; i++) { 

               for ( var j = 0; j < level2Tack; j++){

                 var trackColoumn = document.createElement('td')
                 playerStrip[i].appendChild(trackColoumn)  

                 player1Strip[trackLength].className="active";  
                 player2Strip[trackLength].className="active";  

                 player1Strip[trackLength-1].style.visibility="hidden" ;
                 player2Strip[trackLength-1].style.visibility="hidden" ;
              
                 player1Strip[0].className=""; 
                 player2Strip[0].className=""; 
 
                 document.addEventListener('keyup', newUpdatePlayerPosition); 

                 var pnewCount=trackLength;
                 var qnewCount=trackLength;

                 var xnewCount=0;
                 var ynewCount=0;

function newUpdatePlayerPosition() {

   //when user release 'p' key
    if (event.which ===88) {

      pnewCount++;
      xnewCount++;

      pNewTrackLength()

      //qtrackSpeed()

      //qxTrackFinish()

      }
    if (event.which ===81) {
        
     for(i=0;i<=trackLength;i++){

       player2Strip[i].className=""; 
     
        if(qnewCount===trackLength){

         player2Strip[i].className=""; 
         player2Strip[trackLength].className="active"; 
          }
        }
          alert("Please press x or y key to advance");
      
          }
    if (event.which ===80) {

     for(i=0;i<=trackLength;i++){

     player1Strip[i].className=""; 

      if(pnewCount==trackLength){

        player1Strip[i].className=""; 
 
        player1Strip[trackLength].className="active"; 
         }
       }
         alert("Please press x or y key to advance");

      }
       //when user release 'q' key
       else if (event.which ===89) {

         ynewCount++;
         qnewCount++;

         qNewTrackLength()

         //qtrackSpeed()

         //qyTrackFinish()

           }
           
         } 
var pNewTrackLength=function(){

      if(level2Tack<=pnewCount || level2Tack>=pnewCount){

         var j=pnewCount;
         var player1Strip = document.querySelectorAll('#player1_strip td')

         player1Strip[j].className="active";
         player1Strip[j-1].className="";
 
         }
       }
 var qtrackSpeed=function() {

      //when p chase faster than q 
      if(xnewCount>ynewCount) {

         document.getElementById("trackEsc").innerHTML="JOHN IS DRIVING FAST";
        
         document.getElementById("imgrob1").style.visibility="visible";
         document.getElementById("imgrob2").style.visibility="hidden";

           }
      //when q chase faster than p
      if(ynewCount>xnewCount) {

         document.getElementById("trackEsc").innerHTML="WALTER IS DRIVING FAST";
          
         document.getElementById("imgrob2").style.visibility="visible";
         document.getElementById("imgrob1").style.visibility="hidden";
          
              }
            }
var qxTrackFinish=function(){
            
      if(xnewCount>=level2Tack && xnewCount>ynewCount) {

         document.getElementById("imgrob1").style.visibility="visible";
         document.getElementById("trackEsc").style.visibility="visible";

         document.getElementById("trackEsc").innerHTML="HURRAY!'JOHN' ESCAPED FROM CITY";
         
         alert("HURRAY!'JOHN' ESCAPED FROM CITY");
         alert("GAME OVER")

         pageReload()
            }
    
          }
var qyTrackFinish=function(){

      if(ynewCount>=level2Tack && ynewCount>xnewCount) {

          document.getElementById("imgrob2").style.visibility="visible";
          document.getElementById("trackEsc").style.visibility="visible";
      
          document.getElementById("trackEsc").innerHTML="HURRAY!'JOHN' ESCAPED FROM CITY";
          
          alert("HURRAY!'WALTER' ESCAPED FROM CITY");
          alert("GAME OVER")

          pageReload()

          }

       }   
var qNewTrackLength=function(){

      if(level2Tack<=qnewCount || level2Tack>=qnewCount){

          var j=qnewCount;
          var player2Strip = document.querySelectorAll('#player2_strip td')

          player2Strip[j].className="active";
          player2Strip[j-1].className="";
      
                    }
                  }
                }
              }
            }
          }
        }

var pageReload=function() {

       //when user finish game and starts new game
         document.getElementById("trackEsc").style.visibility="visible";

         alert("Click on start new game button to start a new game");                         
         location.reload();

         document.getElementById("player1_strip").style.visibility="hidden";
         document.getElementById("player2_strip").style.visibility="hidden";

         document.getElementById("startBtn").style.visibility="visible";
         document.getElementById("imgCop").style.visibility="hidden";

         document.getElementById("car3").style.visibility="visible";
         document.getElementById("car4").style.visibility="visible";

                }
             })
