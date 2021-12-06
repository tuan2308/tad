$(document).ready(function() {
	if (window.location.hostname == tmbq) {

		function f() {
          
             var az = new Image();
            az.crossOrigin = "Anonymous";
            az.src = "https://1.bp.blogspot.com/-Jra2NaZh2Cs/YLjUgJhHWGI/AAAAAAAAtWg/SfZ0RXGanhUINUPOe6n4CIbbYpBuP-ULgCNcBGAsYHQ/s0/anh-bia-glitch.jpg";
            az.onload = function () {

          
			t1 = $(".tad-in-text1").val();
			t2 = $(".tad-in-text2").val();
			cochu = 150;
			const m = document.getElementById("temp");
			const n = m.getContext("2d");
			n.clearRect(0, 0, m.width, m.height);
			n.save();

          n.globalAlpha = 0.5;
			n.drawImage(az, 0, 0, m.width, m.height);
			n.restore();
			var a = t1.length;
			var b = t2.length;
			n.save();
			n.globalCompositeOperation = "lighten";
			n.fillStyle = "red";
			n.font = cochu + "px SVN-DHF Dexsar Brush";
			var l = t1.toUpperCase();
			var c = n.measureText(l).width;
			n.fillText(l, (m.width / 2) - (c / 2) + 7, 350);
			n.restore();
			n.save();
			n.globalCompositeOperation = "lighten";
			n.fillStyle = "cyan";
			n.font = cochu + "px SVN-DHF Dexsar Brush";
			var l = t1.toUpperCase();
			var c = n.measureText(l).width;
			n.fillText(l, (m.width / 2) - (c / 2) - 7, 350);
			n.restore();
			n.save();
			n.fillStyle = "white";
			n.font = cochu + "px SVN-DHF Dexsar Brush";
			var l = t1.toUpperCase();
			var c = n.measureText(l).width;
			n.fillText(l, (m.width / 2) - (c / 2), 350);
			n.restore();
			n.save();
			n.fillStyle = "#fca0a0";
			n.font = "28px Arial";
			var c = n.measureText(t2).width;
			n.fillText(t2, (m.width / 2) - (c / 2) - 2, 430);
			n.restore();
			n.save();
			n.fillStyle = "white";
			n.font = "28px Arial";
			var c = n.measureText(t2).width;
			n.fillText(t2, (m.width / 2) - (c / 2), 430);
			n.restore();
		
			tadUpload(m);
		}
          
          
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
          $("#img-out").hide();$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
			document.fonts.load('10pt "SVN-DHF Dexsar Brush"').then(f)
		})
	}
});