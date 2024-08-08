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
  room_name=localStorage.getItem("room_name");
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
  
      });
  
      document.getElementById("msg").value="";
  
  }
  
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //Start code
  
  //End code
      } });  }); }
  getData();
  
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }