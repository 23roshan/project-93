const firebaseConfig = {
    apiKey: "AIzaSyDJUhIJJ-69cvw4GSc2CWssl7IsBl-QL_k",
    authDomain: "project-93-15014.firebaseapp.com",
    databaseURL: "https://project-93-15014-default-rtdb.firebaseio.com",
    projectId: "project-93-15014",
    storageBucket: "project-93-15014.appspot.com",
    messagingSenderId: "996786001504",
    appId: "1:996786001504:web:ceb80a490e82b2ab861505",
  };
   firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Roomname= " + Room_names);
        row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  
  function redirectToRoomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
  } 
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  