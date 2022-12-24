const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var colorbgval='';
var lastid='';
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
  lastid=value.id;
  usernamekeep=value.name+" "+value.surname;
  spawnusernamekeep.textContent = usernamekeep;
  document.getElementById("userimage").src=value.avatar;

  show('Page2','Page1');
}
            
          });

         
         
       
    
        });
  }




document.addEventListener('DOMContentLoaded', function () {


  document.getElementById("sel2").style.display='none';
  document.getElementById("sel3").style.display='none';
  document.getElementById("sel4").style.display='none';
  document.getElementById("sel5").style.display='none';
  document.getElementById("hidenelemet").style.display = "none";

  addtasks();


  var today = new Date(); // yyyy-mm-dd

  // Getting short month name (e.g. "Oct")
  var month = today.toLocaleString('default', { month: 'long' });
  

  let currentDatey = new Date().toJSON().slice(0, 4);
  let currentDated = new Date().toJSON().slice(8, 10);
  dataazi= currentDatey+ " "+ month+", "+currentDated
  var element1 = document.getElementById("timetoday");
        element1.innerHTML =dataazi;
        var element2 = document.getElementById("timetoday2");
        element2.innerHTML =dataazi;
        var element3 = document.getElementById("timetoday3");
        element3.innerHTML =dataazi;
        




        
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









  $.getJSON("vacancies.json", 
  function (data2) {
var student22 = '';
console.log(data2);


$.each(data2, function (key, value2) {



  student22+=
  ' <div class="project-box-wrapper">'+
  '<div class="project-box" style="background-color: #f3f6fd;">'+
    
'<div class="project-box-content-header">'+
  '<p class="box-content-header">'+value2.topic+' | '+value2.worktime+'</p>'+
  '<p class="box-content-subheader">'+value2.location+'</p>'+
  '<p style="text-align: left;" >'+'experience - '+value2.experience+'</p>'+
  '<p style="text-align: left;" >'+'salary - '+value2.salary+'</p>'+
  '<p style="text-align: left;" >'+'studies -'+value2.studies+'</p>'+
  '</div>'+

'<div class="project-box-footer">'+
  '<div class="participants">'+
    
 ' </div>'+
  '<div class="days-left" style="color: #ff942e;">'+
   ' '+value2.employer+''+
  '</div>'+
'</div>'+
'</div>'+
'</div>';
  student22 += '';


});

$('#rebdiv').append(student22);
  });











  $.getJSON("https://62adc88a645d00a28aff9ee5.mockapi.io//volunteering", 
  function (data3) {
var student23 = '';
console.log(data3);


$.each(data3, function (key, value3) {


if(value3.type=="event"){colorbgval='ff4150'}
else colorbgval='ff672b';
  student23+=
  ' <div class="project-box-wrapper">'+
  '<div class="project-box" style="background-color: #'+colorbgval+'">'+
    
'<div class="project-box-content-header">'+
'<div class="project-box-header">'+
'<span>'+value3.date.slice(0, 10)+'</span>'+

'</div>'+

  '<p class="box-content-header">'+value3.name+'</p>'+
  '<p class="box-content-subheader">'+value3.orgranization+'</p>'+
 
  '</div>'+

'<div class="project-box-footer">'+
  '<div class="participants">'+
    
 ' </div>'+
  '<div class="days-left" style="color: #ff942e;">'+
   ' '+value3.type+''+
  '</div>'+
'</div>'+
'</div>'+
'</div>';
  student23 += '';


});

$('#voldiv').append(student23);
  });


















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


function sel1on(){
  document.getElementById("sel1").style.display='block';
  document.getElementById("sel2").style.display='none';
  document.getElementById("sel3").style.display='none';
  document.getElementById("sel4").style.display='none';
  document.getElementById("sel5").style.display='none';
  document.getElementById("taskmess").style.display='block';
}

function sel2on(){
  document.getElementById("sel1").style.display='none';
  document.getElementById("sel2").style.display='block';
  document.getElementById("sel3").style.display='none';
  document.getElementById("sel4").style.display='none';
  document.getElementById("sel5").style.display='none';
  document.getElementById("taskmess").style.display='block';
}
function sel3on(){
  document.getElementById("sel1").style.display='none';
  document.getElementById("sel2").style.display='none';
  document.getElementById("sel3").style.display='block';
  document.getElementById("sel4").style.display='none';
  document.getElementById("sel5").style.display='none';
  document.getElementById("taskmess").style.display='block';
}
function sel4on(){
  document.getElementById("sel1").style.display='none';
  document.getElementById("sel2").style.display='none';
  document.getElementById("sel3").style.display='none';
  document.getElementById("sel4").style.display='block';
  document.getElementById("sel5").style.display='none';
  document.getElementById("taskmess").style.display='none';
}
function addnewthing(){
  document.getElementById("sel1").style.display='none';
  document.getElementById("sel2").style.display='none';
  document.getElementById("sel3").style.display='none';
  document.getElementById("sel4").style.display='none';
  document.getElementById("sel5").style.display='block';
  document.getElementById("taskmess").style.display='block';
}
var score = parseInt(lastid);
score ++;

function singupform(){
  var datachanger = {
    companianame: '',
    name: '',
    present: '',
    id: '',
    name: '',
    surname: '',
    avatar: 'https://avatars.githubusercontent.com/u/3178900?s=200&v=4',
    gender: 'Hip Hop',
    description: '',
    location_latitude: '0',
    lacation_longitude: '0',
    username: htmlEncode($("#useraddform").val()),
    email: '',
    password: htmlEncode($("#passaddform").val()),
    id: score
    }
  
  //datachanger.username=this.htmlEncode($("#useraddform").val());
  console.log(datachanger);
 // datachanger.password=htmlEncode($("#passaddform").val());
  axios.post(`https://62adc88a645d00a28aff9ee5.mockapi.io//users`, datachanger);



}