var kindadatabase ='';
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
  }


  function htmlEncode (value){
    return $('<div/>').text(value).html();
  }

  function loginpassed (){
    console.log("looged in");
    $.getJSON("https://62adc88a645d00a28aff9ee5.mockapi.io//users", 
            function (data) {
          var student = '';
          console.log(data);
          
          $.each(data, function (key, value) {
if (htmlEncode($("#password").val())==value.password &&htmlEncode($("#username").val())==value.username){
  show('Page2','Page1');
}
            
          });

         
         
       
    
        });
  }




document.addEventListener('DOMContentLoaded', function () {

  show('Page1','Page2');
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