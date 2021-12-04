$(document).ready(function() {
    // if (window.location.hostname == tmbq) {
        var b = "";

        function c() {
            t1 = $(".tad-in-text1").val();
            t2 = $(".tad-in-text2").val();
            cochu = $(".tad-cochu").val();
            const j = document.getElementById("temp");
            const o = j.getContext("2d");
            
            o.clearRect(0, 0, j.width, j.height);
            o.save();
            const k = document.getElementById("scream");
            o.drawImage(k, 0, 0, j.width, j.height);
            o.restore();
            var i = t1.length;
            var h = t2.length;
            o.save();
            o.globalCompositeOperation = "lighten";
            o.fillStyle = "red";
            o.font = cochu + "px Edo SZ";
            var d = t1.toUpperCase();
            var n = o.measureText(d).width;
            o.fillText(d, (j.width / 2) - (n / 2) + 7, 320);
            o.restore();
            o.save();
            o.globalCompositeOperation = "lighten";
            o.fillStyle = "cyan";
            o.font = cochu + "px Edo SZ";
            var d = t1.toUpperCase();
            var n = o.measureText(d).width;
            o.fillText(d, (j.width / 2) - (n / 2) - 7, 320);
            o.restore();
            o.save();
            o.fillStyle = "white";
            o.font = cochu + "px Edo SZ";
            var d = t1.toUpperCase();
            var n = o.measureText(d).width;
            o.fillText(d, (j.width / 2) - (n / 2), 320);
            o.restore();
            o.save();
            o.fillStyle = "#fca0a0";
            o.font = "25px Arial";
            var n = o.measureText(t2).width;
            o.fillText(t2, (j.width / 2) - (n / 2) - 2, 200);
            o.restore();
            o.save();
            o.fillStyle = "white";
            o.font = "25px Arial";
            var n = o.measureText(t2).width;
            o.fillText(t2, (j.width / 2) - (n / 2), 200);
            o.restore();
            o.save();
            o.globalAlpha = 0.2;

            o.drawImage(k, 0, 0, j.width, j.height);
            o.restore();
            j.toBlob(function(g) {
                var f = URL.createObjectURL(g);
                $("#img-out").html("<img src='" + f + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                $("#tad-taianhve").attr("download", "taoanhdep--bia-glitch.jpg").attr("href", f)
            });
            $(".load-anh").show(0).delay(2000).hide(0);
            $("#img-out,.tad-ketqua,#tad-taianhve").hide(0).delay(2000).show(0)
        }
        var a = $(".tad-in-text1");
        a.on("input", function() {
            e()
        });

        function e() {
            if (undefined !== a.val() && a.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else {
                $("#tad-taoanh").removeClass("disabled")
            }
        }
        $("#tad-taoanh").click(function() {
            document.fonts.load('10pt "Edo SZ"').then(c)
        })
    // }
});