$(document).ready(function() {
// if(window.location.hostname==tmbq){
        function f() {
            t1 = $(".tad-in-text1").val();
            t2 = $(".tad-in-text2").val();
            cochu = $(".tad-cochu").val();
            const m = document.getElementById("temp");
            const n = m.getContext("2d");
            n.clearRect(0, 0, m.width, m.height);
            n.save();


            var e = document.getElementById("Bimg")
            n.drawImage(e, 0, 0, m.width, m.height);
            n.restore();


            n.save();
            n.globalCompositeOperation = 'screen';
            n.fillStyle = "white";
            n.font = "122px UTM Banque";
            n.shadowColor = "#007bff";
            n.textAlign = "center";
            n.shadowBlur = 10;
            n.fillText(t1, m.width/2, m.height / 2 + 30);

            n.shadowBlur = 20;
            n.fillText(t1, m.width/2, m.height / 2 + 30);
            
            n.shadowBlur = 30;
            n.fillText(t1, m.width/2, m.height / 2 + 30);


            n.shadowBlur = 40;
            n.fillText(t1, m.width/2, m.height / 2 + 30);
            
            n.shadowBlur = 50;
            n.fillText(t1, m.width/2, m.height / 2 + 30);

            n.restore();



            m.toBlob(function(i) {
                var j = URL.createObjectURL(i);
                $("#img-out").html("<img src='" + j + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                $("#tad-taianhve").attr("download", "taoanhdep--anhbiahacker.jpg").attr("href", j)
            });
            
            $("#img-out,.tad-ketqua,#tad-taianhve").hide(0);



            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh")


            setTimeout(function(){ 
                
                $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
        
                $("#img-out,.tad-ketqua,#tad-taianhve").show(0)
        
        }, 2000);


            
        }
        var h = $(".tad-in-text1");
        h.on("input", function() {
            d()
        });





        function d() {
            if (undefined !== h.val() && h.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else {
                $("#tad-taoanh").removeClass("disabled")
            }
        }
        $("#tad-taoanh").click(function() {
            document.fonts.load('10pt "UTM Banque"').then(f)
        })



// }
});