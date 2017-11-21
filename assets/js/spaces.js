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
    
   //get table 
   var spacesTable = document.getElementById('spaceTable')
 
   
   //Create reference to spaces nonde    
   var spaces = firebase.database().ref().child('Guide/Sapces'); 
  
       
   //sync co-working spaces      
    spaces.on('value', snap =>{
        snap.forEach(function(child){
            
            var coworkingData = child.val()
            console.log(child.key+': '+child.val());
            
            var tr = document.createElement('tr');
            var mName = document.createElement('td');
            var mNeighborhood = document.createElement('td');
            var mPriceRange = document.createElement('td');
            var mSize = document.createElement('td');
            
            mName.innerText = coworkingData.Name
            mNeighborhood.innerText = coworkingData.Neighborhood
            mPriceRange.innerText = coworkingData.PriceRange
            mSize.innerText = coworkingData.Size
            
            tr.appendChild(mName)
            tr.appendChild(mNeighborhood)
            tr.appendChild(mPriceRange)
            tr.appendChild(mSize)
            
            spacesTable.appendChild(tr)            
        })
    })
     
}());
