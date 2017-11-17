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
   var jobsTable = document.getElementById('jobsTable')
   var elements = document.getElementById('swag')
  
   //Create reference    
   var jobs = firebase.database().ref().child('Jobs'); 
    
    
   //Sync object changes    
   jobs.on('value', snap => {
       snap.forEach(function(child){
          var data = child.val()
              
           console.log(child.key+': '+child.val());
           
           var tr = document.createElement('tr');
           var mComapny = document.createElement('td');
           var mPosition = document.createElement('td');
           var mLocation = document.createElement('td');
           var mEmployment = document.createElement('td');
        
           mComapny.innerText = data.company
           mPosition.innerText = data.title
           mLocation.innerText = data.location
           mEmployment.innerText = data.employment
           
           if(data.employment == null){
                mEmployment.innerText = ""
           }
    
           tr.appendChild(mComapny)
           tr.appendChild(mPosition)
           tr.appendChild(mLocation)
           tr.appendChild(mEmployment)
           
           jobsTable.appendChild(tr)
       })
//       bigOne.innerHTML = JSON.stringify(snap.val(), null,3)
   });
     
}());
/*
jQuery.each(arrayobj, function(key, value){ 
    jQuery.each(value, function(label, answer){
        display = '<tr><td>'+label+ '</td><td>' +answer+'</td></tr>'
    }); 
});
$('#tbody').append(display); */