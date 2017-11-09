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
    
   //get element
   var bigOne = document.getElementById('object'); 
   var jobList = document.getElementById('jobItem')
  
   //Create reference    
   var dbRef = firebase.database().ref().child('Jobs'); 
   var dbRefList = dbRef.child('first')
    
   //Sync object changes    
   dbRef.on('value', snap => {
       bigOne.innerHTML = JSON.stringify(snap.val(), null,3)
   });
    

    
    //syc list changes 
    dbRefList.on('child_added', snap => {
    
        var td = document.createElement('td');
        td.innerText = snap.val()
        td.id = snap.key;
        jobList.appendChild(td)
        
    });
    
    dbRefList.on('child_changed', snap =>{
        var liChaged = document.getElementById(snap.key)
        liChaged.innerText = snap.val();
    })
    
        dbRefList.on('child_removed', snap =>{
        var liToremove = document.getElementById(snap.key)
        liToRemove.remove();
    })
    
}());