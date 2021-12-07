$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		var j = $(".tad-in-text1");
		var l = $(".tad-in-text2");
		j.on("input", function() {
			n()
		});
		l.on("input", function() {
			n()
		});

		function n() {
			if (undefined !== j.val() && j.val().length == 0) {
				$("#tad-taoanh").addClass("disabled")
			} else {
				if (undefined !== l.val() && l.val().length == 0) {
					$("#tad-taoanh").addClass("disabled")
				} else {
					$("#tad-taoanh").removeClass("disabled")
				}
			}
		}
		var m = "#fff";
		var f = "#000";
		var h = "https://1.bp.blogspot.com/-PbxRsY_hWxY/YSr0aa3bXFI/AAAAAAAAwzI/_Qyuv657OF4JSJdKXJ-k-rieyFQUitySQCNcBGAsYHQ/s0/net.png";
		$(".chonmau #kieu1").click(function() {
			m = "#fff";
			f = "#000";
			h = "https://1.bp.blogspot.com/-PbxRsY_hWxY/YSr0aa3bXFI/AAAAAAAAwzI/_Qyuv657OF4JSJdKXJ-k-rieyFQUitySQCNcBGAsYHQ/s0/net.png"
		});
		$(".chonmau #kieu2").click(function() {
			m = "#000";
			f = "#fff";
			h = "https://1.bp.blogspot.com/-4GsyJHZrPkE/YSr8nGpkZuI/AAAAAAAAwzY/Ndqh0zEG0xQbtGDViXuzw6ll0u9_q6nngCNcBGAsYHQ/s0/net-2.png"
		});

		function g() {
			try {
				document.fonts.load('10pt "AR DARLING"').then(function() {
					document.fonts.load('10pt "Scripture"').then(function() {
						var b = new Image;
						b.crossOrigin = "Anonymous";
						b.src = h;
						b.onload = function() {
							var k = document.getElementById("temp");
							var e = k.getContext("2d");
							e.save();
							e.fillStyle = m;
							e.fillRect(0, 0, k.width, k.height);
							e.restore();
							var c = $(".tad-in-text1").val();
							var d = $(".tad-in-text2").val();
							e.save();
							e.font = "115px AR DARLING";
							e.fillStyle = f;
							e.translate(710, 210);
							e.rotate(Math.PI / 180 * -1);
							e.fillText(d, 0, 0);
							e.restore();
							e.save();
							e.font = "55px Scripture";
							e.fillStyle = f;
							e.translate(860, 290);
							e.rotate(Math.PI / 180 * -8);
							e.fillText(c, 0, 0);
							e.restore();
							e.drawImage(b, 0, 0);
							tadUpload(k)
						}
					})
				})
			} catch (a) {
				alert(a)
			}
		}
		$("#tad-taoanh").click(function() {
			$("#img-out").hide();
			$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
			g()
		})
	}
});