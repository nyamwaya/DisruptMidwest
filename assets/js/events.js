(function(){
    //initialize firebase
    
 var config = {
    apiKey: "AIzaSyAmMmhII9k5U9yd7XQ7fXUIgNx9_kY9LD4",
    authDomain: "guide-92fe0.firebaseapp.com",
    databaseURL: "https://guide-92fe0.firebaseio.com",
    projectId: "guide-92fe0",
    storageBucket: "guide-92fe0.appspot.com",
    messagingSenderId: "770376284588"
  };
  firebase.initializeApp(config);
    
   //get elements
   var eventsTable = document.getElementById('events')
  
   //Create reference to jobs nonde    
   var events = firebase.database().ref().child('Events/Events/'); 

    
  
    events.on('value', snap =>{
        var data = snap.val()
        
        console.log(data)
        
        var tr = document.createElement('tr');
        var mSComapny = document.createElement('td');
        
        mSComapny.innerText = data
        
        tr.appendChild(mSComapny)
        
        eventsTable.append(tr)
        
    })
     
}());
