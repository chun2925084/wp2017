$(document).ready(function() {
    // $('#loading').fadeOut(5000);
    // $('ul li').fadeIn(5000);
    $('ul li a').click(function() {
        $('ul li a.active').removeClass('active');
        $(this).closest('li a').addClass('active');
        });
    });

// typing
var count=0;
var content="People still make the trek <br> through the wilderness to <br> the abandoned bus. <br> -INTO THE WILD";
function type_write(){
  // console.log("test");
  if(count<=content.length){
    count++;  
    document.getElementById('reply_comment').innerHTML=content.substring(0,count);

    setTimeout("type_write()",100);
  }
}

function myAnimation(){

  var elem=document.getElementById("table");
  var time=setInterval(frame,1);
  // var l=elem.style.left;
  // console.log(l);
  var pos=-400;
  function frame(){
    // console.log("test");
    if(pos==0){
      clearInterval(time);
    }
    else{
      pos++;
      elem.style.left=pos+"px";
    }
  }
}

function myAnimation2(){
  console.log("test");
  var elem2=document.getElementById("main_content")
    var time2=setInterval(frame2,1);
  var pos2=1000;
  function frame2(){
    elem2.style.opacity=1;
    console.log(pos2);
    if(pos2==50){
      clearInterval(time2);
    }
    else{
      pos2--;
      elem2.style.top=pos2+"px";
    }
  }
}


$(document).ready(function() {  
    $("#ajax_btn").click(function(){
        $.ajax({
method: "get",
url: "./a_data",
success: function(data) {
$("#ajax_content").text(data)
}
})
        })  
    })



$(document).ready(function() {
    $('button[type=submit]').click(function() {
        $.ajax({
data: { id: jQuery('input[name=id]').val() },

url: 'test.php',

success: function(data) {
$('#content').text(data);
//(A)
},        });
        $('#content').html('loading...');
        //(B)
        });
    });
