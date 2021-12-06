$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		var b = $(".tad-in-text1");
		var a = $(".tad-in-text2");
		b.on("input", function() {
			d()
		});
		a.on("input", function() {
			d()
		});

		function d() {
			if (undefined !== b.val() && b.val().length == 0) {
				$("#tad-taoanh").addClass("disabled")
			} else {
				if (undefined !== a.val() && a.val().length == 0) {
					$("#tad-taoanh").addClass("disabled")
				} else {
					$("#tad-taoanh").removeClass("disabled")
				}
			}
		}

		function c() {
			try {
				document.fonts.load('10pt "Arial"').then(function() {
					var f = new Image;
					f.crossOrigin = "Anonymous";
					f.src = "https://i.imgur.com/VrJDraY.jpg";
					f.onload = function() {
						var g = document.getElementById("temp");
						var l = g.getContext("2d");
						l.drawImage(f, 0, 0);
						var n = $(".tad-in-text1").val().toUpperCase();
						var m = $(".tad-in-text2").val().toUpperCase();
						var h = g.width / 2;
						var j = 360;
						l.save();
						l.font = "bold 25px Arial";
						l.fillStyle = "#333";
						l.translate(400, 320);
						l.rotate(Math.PI / 180 * 17);
						l.fillText(n, 0, 0);
						l.restore();
						l.save();
						l.font = "bold 25px Arial";
						l.fillStyle = "#333";
						l.translate(440, 382);
						l.rotate(Math.PI / 180 * 17);
						l.fillText(m, 0, 0);
						l.restore();
						tadUpload(g)
					}
				})
			} catch (e) {
				alert(e)
			}
		}
		$("#tad-taoanh").click(function() {
			$("#img-out").hide();
			$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
			c()
		})
	}
});