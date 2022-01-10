$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		$("head").append(cssCrop);
		$("head").append(jsCrop);
		$("head").append(jsCimg);
		var d;
		for (var f = 1; f < $(".tad-input-ic").length + 1; f++) {
			var c = $(".tad-input-ic[data-form=" + f + "]").attr("data-ic-de");
			$(".tad-input-ic[data-form=" + f + "]").css("background-image", "url(" + listIcon[c] + ")")
		}
		for (var e = 0; e < listIcon.length; e++) {
			$(".tad-list-ic").append('<div style="background-image: url(' + listIcon[e] + '); " class="tad-chon-ic"></div>')
		}
		$(".tad-input-ic").click(function() {
			$(this).parent().parent().after($("#collapse-list-ic"));
			if ($(this).hasClass("acti") == true) {
				$("#collapse-list-ic").collapse("hide")
			} else {
				$("#collapse-list-ic").collapse("show")
			}
			$(".tad-input-ic").removeClass("acti");
			$(this).addClass("acti");
			$("#collapse-list-ic").collapse("show");
			var b = $(this).attr("data-ic-de");
			var g = $(this).attr("data-form");
			d = g;
			$(".tad-list-ic div").removeClass("active");
			$(".tad-list-ic div").eq(b).addClass("active")
		});
		$(".tad-list-ic div").click(function() {
			$(".tad-list-ic div").removeClass("active");
			$(this).addClass("active");
			var b = $(this).css("background-image");
			var g = $(this).index();
			$(".tad-input-ic[data-form=" + d + "]").css("background-image", b).attr("data-ic-de", g);
			$("#collapse-list-ic").collapse("hide")
		});
      
		$(".tad-in-color1").colorpicker().change(function() {
			var b = $(".tad-in-color1").val();
			$(".demomau").css("background-color", b)
		});
		$("#tad-taoanh").click(function() {
			if ($(".tad-in-text1").val() == "" || $(".tad-in-text2").val() == "" || $(".tad-in-text3").val() == "" || $(".tad-in-text4").val() == "" || $(".tad-in-text5").val() == "") {
				alert("Vui lòng nhập đủ thông tin");
				return false
			}
			$("#cropanh").click();
			$("#img-out").hide();
			$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
			setTimeout(function() {
				a()
			}, 500)
		});

		function a() {
			var t = $(".tad-in-text1").val().toUpperCase();
			var s = $(".tad-in-text2").val().toUpperCase();
			var i = $(".tad-in-text3").val();
			var g = $(".tad-in-text4").val();
			var u = $(".tad-in-text5").val();
			var h = $(".tad-in-color1").val();
			var j = $(".tad-input-ic[data-form='1']").css("background-image").replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
			var v = $(".tad-input-ic[data-form='2']").css("background-image").replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
			var b = $(".tad-input-ic[data-form='3']").css("background-image").replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
			document.fonts.load('bold 10pt "UTM Avo"').then(function() {
				document.fonts.load('10pt "UTM Avo"').then(function() {
					var k = new Image();
					k.crossOrigin = "Anonymous";
					k.src = "https://1.bp.blogspot.com/-ZyXHJE2S3ew/YSdA8Guah-I/AAAAAAAAwtQ/udZEj3sXhQkwh5Qn8jwfjRwesrGoY90cwCNcBGAsYHQ/s0/bg.jpg";
					k.onload = function() {
						var l = new Image();
						l.crossOrigin = "Anonymous";
						l.src = "https://lh3.googleusercontent.com/-Kk4c75d1Vao/YcQVA4yKsCI/AAAAAAAA2vY/-4_XssO_-2wlpub-4zWi5ThdjXfpWkf5ACNcBGAsYHQ/s0/mask.png";
						l.onload = function() {
                            
							$.get(j, function(m) {
								var n = new Image();
                              n.setAttribute('width', '48px');
    n.setAttribute('height', '48px');
								n.src = "data:image/svg+xml;base64," + window.btoa((new XMLSerializer).serializeToString(m).replace(/#FFFFFF/g, "#111111").replace(/#ffffff/g, "#000000"));
								n.onload = function() {
									$.get(v, function(o) {
										var p = new Image();
										p.src = "data:image/svg+xml;base64," + window.btoa((new XMLSerializer).serializeToString(o).replace(/#FFFFFF/g, "#111111").replace(/#ffffff/g, "#000000"));
										p.onload = function() {
											$.get(b, function(q) {
												var r = new Image();
												r.src = "data:image/svg+xml;base64," + window.btoa((new XMLSerializer).serializeToString(q).replace(/#FFFFFF/g, "#111111").replace(/#ffffff/g, "#000000"));
												r.onload = function() {
													var A = document.getElementById("temp");
													var B = A.getContext("2d");
													B.clearRect(0, 0, A.width, A.height);
													B.save();
													B.drawImage(k, 0, 0, A.width, A.height);
													B.strokeStyle = "rgba(255,255,255, 0.1)";
													B.lineWidth = 3;
													B.font = "bold 100px UTM Avo";
													B.strokeText(xoa_dau(t), 30, 100);
													B.strokeText(xoa_dau(t), 130, 200);
													B.textAlign = "right";
													B.strokeText(xoa_dau(t), A.width - 30, A.height - 30);
													B.strokeText(xoa_dau(t), A.width - 130, A.height - 130);
													B.globalCompositeOperation = "destination-out";
													B.drawImage(l, 0, 0, A.width, A.height);
													B.restore();
													B.save();
													B.globalCompositeOperation = "destination-over";
													B.fillStyle = h;
													B.fillRect(0, 0, A.width, A.height);
													B.restore();
													B.save();
													B.font = "900 55px UTM Avo";
													B.fillStyle = h;
													B.textAlign = "right";
													B.fillText(t, 680, 270);
													B.restore();
													B.save();
													B.font = "900 40px UTM Avo";
													B.fillStyle = "#fff";
													B.textAlign = "right";
													B.fillText(s, 680, 320);
													B.restore();
													B.save();
													B.font = "23px UTM Avo";
													B.fillStyle = "#fff";
													B.fillText(i, 1350, 252);
													B.fillText(g, 1350, 332);
													B.fillText(u, 1350, 410);
													B.restore();
													B.drawImage(n, 1272, 220, 50, 50);
													B.drawImage(p, 1272, 300, 50, 50);
													B.drawImage(r, 1272, 376, 50, 50);
													B.save();
													var z = 285;
													B.translate(825, 180);
													B.beginPath();
													B.arc(z / 2, z / 2, z / 2, 0, Math.PI * 2, true);
													B.closePath();
													B.clip();
													B.drawImage(cimg, 0, 0, z, z);
													B.restore();
													tadUpload(A)
												}
											})
										}
									})
								}
							})
						}
					}
				})
			})
		}
	}
});