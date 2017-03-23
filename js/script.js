var user=function(firstname,lastname,Email,password,date)
{
  this.firstname=firstname;
  this.lastname=lastname;
  this.Email=Email;
  this.password=password;
  this.date=date;
}
console.log(user);
function userObj()
{
  var firstname=document.getElementById('fname').value;

  var lastname=document.getElementById('lname').value;

  var Email=document.getElementById('exampleInputEmaillog').value;
var password=document.getElementById('exampleInputPasswordpas').value;
   console.log(firstname);
   var date=document.getElementById('dateentry').value;
var newUser=new user(firstname,lastname,Email,password,date);
console.log(typeof(newUser));
var temp;
// var i=1;
console.log(typeof(temp));
try {
  temp=JSON.parse(localStorage.getItem("user"))||[];
  console.log(typeof(temp));
} catch (e) {
  temp=[];
  console.log(typeof(temp));
}
temp.push(newUser);
console.log(typeof(temp));
var updated=JSON.stringify(temp);
localStorage.setItem('user',updated);
}

function fetchUser()
{
var v=localStorage.getItem("user");
var x=JSON.parse(v);
for(var i in x)
{
  if(x[i].Email==document.getElementById('exampleInputEmaillog').value && x[i].password==document.getElementById('exampleInputPasswordpas').value)
  {
    alert("you are the valid user");
    printPage();
    break;
  }
}
  if(x[i].Email!=document.getElementById('exampleInputEmaillog').value && x[i].password!=document.getElementById('exampleInputPasswordpas').value)
  {
    alert("you are not the valid user");
  }
}
function printPage()
{
  // $("button").click(function(){
  $.ajax({
    url:"/html/welcome.html",
    type:"GET",
    datatype:"html",
    success:function(response){
      console.log("the page was loaded",response);
      $('body').html('response');
    },
    error:function(error)
    {
      console.log("the page not loaded due to error",error);

    },
    complete:function(xhr,status){
    console.log("the request is complete");
  },
//});
});
}
