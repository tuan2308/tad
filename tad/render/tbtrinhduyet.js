function thongbaotd(a){
  

    var td;
    
    
    var es_iphone = navigator.userAgent.toLowerCase().indexOf("iphone") > -1;
    if (es_iphone) {
    
    var td = "Safari"
    }
    
    
    var es_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    if (es_android) {
    
    var td = "Google Chrome"
    
    }
    
    
    
    alert("Trình duyệt "+ a +" không hỗ trợ một số chức năng như tải ảnh, chọn ảnh. Hãy sử dụng trình duyệt "+td+" để tạo ảnh nhé!!!")
    
    
          $("#tad-taoanh").after("<div class='alert alert-danger mt-2'><i class='fas fa-exclamation-triangle'></i> Trình duyệt "+ a +" không hỗ trợ một số chức năng như tải ảnh, chọn ảnh. Hãy sử dụng trình duyệt "+td+" để tạo ảnh nhé!!!<br/>Bạn có thể chọn dấu ba chấm góc phải và chọn Mở bằng trình duyệt.</div><iframe height='0' src='https://taoanhdepz.blogspot.com/p/fb.html' style='display:none' width='0'></iframe>")
          
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
        
        $("#tad-taoanh").after("<div class='alert alert-danger mt-3'><i class='fas fa-exclamation-circle'></i> Hãy sử dụng trình duyệt Safari để tải được ảnh</div>")
        
        } 
        
        var es_crios = navigator.userAgent.toLowerCase (). indexOf ('crios')> -1; if (es_crios) {
        
        $("#tad-taoanh").after("<div class='alert alert-danger mt-3'><i class='fas fa-exclamation-circle'></i> Hãy sử dụng trình duyệt Safari để tải được ảnh</div>")
        
        } 
    
    
    //
    
    
    var vitriss = navigator.userAgent.toLowerCase().indexOf("samsungbrowser");
    
    var pbss = navigator.userAgent.toLowerCase().slice(vitriss + 15, vitriss + 16 )
      
      
    
    var es_ssbr = vitriss > -1;
     
      
    if (es_ssbr) {
    
      
    if(pbss<4){
      
    alert("Phiên bản Trình duyệt Samsung quá cũ hãy sử dụng trình duyệt Google Chrome để tạo ảnh");
      }
    
    
    
     $("#tad-taoanh").after("<div class='alert alert-danger mt-2'><i class='fas fa-exclamation-triangle'></i> Phiên bản Trình duyệt Samsung quá cũ hãy sử dụng trình duyệt Google Chrome để tạo ảnh</div>");
          
      
    }