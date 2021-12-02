
 function thongbaotd(a){
  

    alert("Bạn đang vào website từ trình duyệt của "+ a +". Hãy sử dụng trình duyệt Chrome hoặc Safari để tiếp tục tạo ảnh.");
    
      $("#tad-taoanh").html("<i class='fas fa-lock'></i> Bạn đang vào website từ trình duyệt của "+ a +". Hãy sử dụng trình duyệt Chrome hoặc Safari để tiếp tục tạo ảnh.").addClass("disabled-im").after("<div class='mt-3 text-center'>(Bạn có thể chọn dấu ba chấm góc phải và chọn Mở bằng trình duyệt)</div><iframe height='0' src='https://taoanhdepz.blogspot.com/p/fb.html' style='display:none' width='0'></iframe>")
      
      }
      
    var es_zalo = navigator.userAgent.toLowerCase().indexOf("zalo") > -1;
    if (es_zalo) {
      
    thongbaotd("Zalo")
      
    };
    var es_fb = navigator.userAgent.toLowerCase().indexOf("fb") > -1;
    if (es_fb) {
    thongbaotd("Facebook")
    };
      var es_ins = navigator.userAgent.toLowerCase().indexOf("instagram") > -1;
      if (es_ins) {
      
    thongbaotd("Instagram")
      
    };
    
    
    
    var es_gsa = navigator.userAgent.toLowerCase (). indexOf ('gsa')> -1; if (es_gsa) {
    
    $("#img-out").after("<div class='alert alert-danger mt-3'><i class='fas fa-exclamation-circle'></i> Hãy sử dụng trình duyệt Safari để tải được ảnh</div>")
    
    } 
    
    var es_crios = navigator.userAgent.toLowerCase (). indexOf ('crios')> -1; if (es_crios) {
    
    $("#img-out").after("<div class='alert alert-danger mt-3'><i class='fas fa-exclamation-circle'></i> Hãy sử dụng trình duyệt Safari để tải được ảnh</div>")
    
    } 





    ///


var es_fb = navigator.userAgent.toLowerCase().indexOf("fb") > -1;
if (es_fb) {
opentd();
};
  
var es_zalo = navigator.userAgent.toLowerCase().indexOf("zalo") > -1;
if (es_zalo) {
  
opentd();
  
};
  
 var es_ins = navigator.userAgent.toLowerCase().indexOf("instagram") > -1;
if (es_ins) {
opentd();
 
};
  
  
function opentd(){
  

if(!alert("Hãy dùng trình duyệt để tiếp tục tạo ảnh")){



var es_iphone = navigator.userAgent.toLowerCase().indexOf("iphone") > -1;
if (es_iphone) {
    setTimeout(function(){ 
window.location.replace("x-web-search://?site:taoanhdep.com "+document.title); 
    }, 3000);
}
    
    
var es_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
if (es_android) {
    

setTimeout(function(){ 
 
window.location.replace("intent://"+window.location.hostname + window.location.pathname+"#Intent;scheme=http;package=com.android.chrome;end"); 

}, 3000);


     
} 
    
    
  }

}

//
