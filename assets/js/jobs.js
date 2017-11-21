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
   var jobsTable = document.getElementById('jobsTable')
   var secondJobsTable = document.getElementById('secondList')
   
   //Create reference to jobs nonde    
   var jobs = firebase.database().ref().child('Guide/Jobs/0/'); 
   var secondJobs = firebase.database().ref().child('Guide/Jobs/1/'); 
  
    

   
//sync jobs       
   secondJobs.on('value', snap =>{
       snap.forEach(function(child){
          var secondData = child.val()
          
          console.log(child.key+': '+child.val())
           
           var tr = document.createElement('tr');
           var mSComapny = document.createElement('td');
           var mSPosition = document.createElement('td');
           var mSLocation = document.createElement('td');
           
           
           
           mSComapny.innerText = secondData.company
           mSPosition.innerText = secondData.title
           mSLocation.innerText = secondData.location
           
           tr.appendChild(mSComapny)
           tr.appendChild(mSPosition)
           tr.appendChild(mSLocation)
           
           secondJobsTable.append(tr)
       });
       
       
   });
    
     
   jobs.on('value', snap => {
       snap.forEach(function(child){
          var data = child.val()
      
           console.log(child.key+': '+child.val());
           
           var tr = document.createElement('tr');
           var mComapny = document.createElement('td');
           var mPosition = document.createElement('td');
           var mLocation = document.createElement('td');
           /*var mEmployment = document.createElement('td');*/
        
           mComapny.innerText = data.company
           mPosition.innerText = data.title
           mLocation.innerText = data.location

    
           tr.appendChild(mComapny)
           tr.appendChild(mPosition)
           tr.appendChild(mLocation)
          /* tr.appendChild(mEmployment)*/
           
           jobsTable.appendChild(tr)
       })

   });
     
}());
