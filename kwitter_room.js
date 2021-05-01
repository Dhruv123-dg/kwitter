var firebaseConfig = {
      apiKey: "AIzaSyB33YVq7ScjvEQzh4dR4NG1ID1JsSZ0g2M",
      authDomain: "kwitter-b514a.firebaseapp.com",
      databaseURL: "https://kwitter-b514a.firebaseio.com",
      projectId: "kwitter-b514a",
      storageBucket: "kwitter-b514a.appspot.com",
      messagingSenderId: "795837619478",
      appId: "1:795837619478:web:9fb86ba542dbd7b9788437"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem(user_name)
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!"

    function addRoom() { 
              
    room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"; 
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";

snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname-",Room_names)
       row="<div class=room_name id="+Room_names+"onclick=redirectToRoomName(this.id)>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       
       
       
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout() {
      
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"; 
      
}

