
        $(document).ready(function () {

            // if(window.location.hostname==tmbq){
                var chonkieu = document.getElementById("tad-chonkieu");
                dsAnime.forEach(function (kieu) {
        
                    var ds = document.createElement('div');
        
                    ds.style.backgroundImage = "url(" +kieu + ")";
        
                    ds.setAttribute("dataImg", kieu);
        
        
                    chonkieu.appendChild(ds);
        
                });
        
        
                $("#tad-chonkieu>div").click(function () {
        
                    $("#tad-chonkieu>div").removeClass("active");
        
                    $(this).addClass("active")
        
        
                    var dataImg = $(this).attr("dataImg").replace(/s120/g, 's0');
        
                    var dataColor = $(this).attr("dataColor")
        
                    imgAnime = dataImg;
        
                    colorBg = dataColor;
        
        
                });

                

$("#tad-chonkieu").children("div:first-child").click();


                      var ti1 = $(".tad-in-text1");
                    var ti2 = $(".tad-in-text2");
                  
                    ti1.on("input", function() {
                        ktform();
                    });
                    ti2.on("input", function() {
                        ktform();
                    });
                
            
                    function ktform() {
                      if (undefined !== ti1.val() && ti1.val().length == 0) {
                            $("#tad-taoanh").addClass("disabled")
                        } else if (undefined !== ti2.val() && ti2.val().length == 0) {
                            $("#tad-taoanh").addClass("disabled")
                        } else {
                            $("#tad-taoanh").removeClass("disabled")
                        }
                    }
            
            
            
            
                        $("#tad-taoanh").click(function () {
            
                            //
                            $("#img-out").hide();
                            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
                            setTimeout(function () {
            
                                document.fonts.load('10pt "MTD William Letter"').then(function () {
            
            
                                    document.fonts.load('10pt "Steelfish"').then(function () {
            
            
                                        var line = new Image;
                                        line.crossOrigin = "Anonymous";
                                        line.src = "./img/line.png"
                                        line.onload = function () {
            
                                            var anime = new Image;
                                            anime.crossOrigin = "Anonymous";
                                            anime.src = imgAnime
                                            anime.onload = function () {
            
                                          
            
                                                t1 = $(".tad-in-text1").val();
                                                t2 = $(".tad-in-text2").val().toUpperCase();
            
            
            
            
            
            
                                                
                                                //
                                                var c = document.getElementById("myCanvas");
                                                var ctx = c.getContext("2d");
                                                //
                                                ctx.clearRect(0, 0, c.width, c.height);
                                                //
                                                ctx.save();
                                                ctx.fillStyle = colorBg
                                                ctx.fillRect(0, 0, c.width, c.height);
                                                ctx.restore();
            
                                                //
            
                                                ctx.save();
                                     
                                                ctx.fillStyle = '#fff';
                                                ctx.font = "300px MTD William Letter";
                                                ctx.textAlign = "center";
                                                ctx.fillText(t1, c.width / 2, 350);
                                                ctx.restore();
                                                //
                                                ctx.save();
                                     
                                                ctx.strokeStyle = 'white';
                                                ctx.lineWidth = 7;
                                                ctx.font = "450px Steelfish";
                                                ctx.textAlign = "center";
                                                ctx.strokeText(t2, c.width / 2, 900);
                                                ctx.restore();
                                                //
                                                ctx.save();
                                      
                                                ctx.fillStyle = 'rgb(255 255 255 / 70%)';
                                                ctx.font = "450px Steelfish";
                                                ctx.textAlign = "center";
                                                ctx.fillText(t2, c.width / 2, 1350);
                                                ctx.restore();
                                                //
                                                ctx.save();
                                         
                                                ctx.strokeStyle = 'white';
                                                ctx.lineWidth = 7;
                                                ctx.font = "450px Steelfish";
                                                ctx.textAlign = "center";
                                                ctx.strokeText(t2, c.width / 2, 1800);
                                                ctx.restore();
                                                //
                                                ctx.save();
                                        
                                                ctx.drawImage(line, 0, 0, c.width, c.height);
                                                ctx.restore();
                                                //
                                                ctx.save();
                                                ctx.drawImage(anime, 0, 0, c.width, c.height);
            
                                                ctx.restore();
                                                //
            
                                                ctx.save();
                                                gradient2 = ctx.createLinearGradient(0, 0, 0, 2000);
                                                gradient2.addColorStop(0, 'rgba(0,0,0,0.05)');
                                                gradient2.addColorStop(0.5, 'rgba(0,0,0,0)');
                                                gradient2.addColorStop(1, 'rgba(0,0,0,0.1)');
                                                ctx.fillStyle = gradient2;
                                                ctx.fillRect(0, 0, 2000, 2000);
                                                ctx.restore();
            
            
                                                c.toBlob(function (m) {
                                                    var o = URL.createObjectURL(m);
                                                    $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + o + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + o + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                                                    $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                                                    $("#img-out").show()
                                                }, "image/jpeg");
            
            
                                            }
                                        } }
                                    
                                    )
            
            
            
                                })
            
            
            
            
                            }, 1000)
            
                            //
                        });
                    // }
                    });
            
            