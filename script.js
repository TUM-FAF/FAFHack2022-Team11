var kindadatabase ='';
var  usernamekeep='';
var dataazi='';
var spawnusernamekeep = document.getElementById('usernamekeep');
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
  }


  function htmlEncode (value){
    return $('<div/>').text(value).html();
  }

  function loginpassed (){
    console.log("looged in trying");
    $.getJSON("https://62adc88a645d00a28aff9ee5.mockapi.io//users", 
            function (data) {
          var student = '';
          console.log(data);
         
          
          $.each(data, function (key, value) {
if (htmlEncode($("#password").val())==value.password &&htmlEncode($("#username").val())==value.username){
  
  usernamekeep=value.name+" "+value.surname;
  spawnusernamekeep.textContent = usernamekeep;
  document.getElementById("userimage").src=value.avatar;

  show('Page2','Page1');
}
            
          });

         
         
       
    
        });
  }




document.addEventListener('DOMContentLoaded', function () {


 // document.getElementById("sel2").style.display='none';



  addtasks();


  var today = new Date(); // yyyy-mm-dd

  // Getting short month name (e.g. "Oct")
  var month = today.toLocaleString('default', { month: 'long' });
  

  let currentDatey = new Date().toJSON().slice(0, 4);
  let currentDated = new Date().toJSON().slice(8, 10);
  dataazi= currentDatey+ " "+ month+", "+currentDated
  var element1 = document.getElementById("timetoday");
        element1.innerHTML =dataazi;






        
  show('Page2','Page1');
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});



function addtasks(){


  $.getJSON("https://62adc88a645d00a28aff9ee5.mockapi.io//tasks", 
  function (data) {
var student = '';
console.log(data);


$.each(data, function (key, value) {
  student+='<div class="message-box">';
  //CONSTRUCTION OF ROWS HAVING
  // DATA FROM JSON OBJECT
  
  student += '<img src="'+value.avatar+'" alt="profile image">'+
  '<div class="message-content"> <div class="message-header">';

  student += '<div class="name">'+value.name+'</div>';
student+='<div class="star-checkbox">'+
              '<input type="checkbox" id="star-1">'+
              '<label for="star-1">'+
                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">'+
                  '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>'+
              '</label>'+
            '</div>'+
          '</div>';
          student+=' <p class="message-line"> '+value.text+'</p>';
          let c1= value.date.slice(0, 10);
          student+=' <p class="message-line time"> '+c1+'</p></div> </div>';
});

$('#aaaaaa').append(student);
  });

}