var a = ["https://lh3.googleusercontent.com/-DN2EJ2WwcZY/YbMLFRshcFI/AAAAAAAA2Jo/DJDbH8Lrdjg_1MukcRsEUj6y4AD1nTcfQCNcBGAsYHQ/h240/t0.jpg","https://lh3.googleusercontent.com/-dTXQRls7W7E/YbMLFUf5-3I/AAAAAAAA2Jg/Ee2ag-V6vf8TuvibxMofcrIklAjYW2I2wCNcBGAsYHQ/h240/t37.jpg","https://lh3.googleusercontent.com/-aW7oAuJ0oCw/YbMLFR5j7yI/AAAAAAAA2Jk/Yn1aqnaMdjAJo1MoKNb4gYNcr50xV8cdACNcBGAsYHQ/h240/t38.jpg","https://lh3.googleusercontent.com/-_8l2ow8IBlE/YbMLGG8_igI/AAAAAAAA2Js/jYl8_aEy0Ug2vQqgZtt_KbTEvdG0LC_tgCNcBGAsYHQ/h240/t39.jpg","https://lh3.googleusercontent.com/-3ivmg-ogPGU/YbMLGGkLhFI/AAAAAAAA2Jw/8FMJd6GA0O0U2s4XehJVP5jEsjJaeWidgCNcBGAsYHQ/h240/t40.jpg","https://lh3.googleusercontent.com/-KEZEcLxH14s/YbMLGZy3FPI/AAAAAAAA2J0/LIY6FlxWmGU9FU2zZWCDlTpQNhuWzAPmgCNcBGAsYHQ/h240/t41.jpg","https://lh3.googleusercontent.com/-MCTrOIuOTe0/YbMLGpwW2tI/AAAAAAAA2J4/vnsitd3_wck2uRrBAXihoNWcU1wg5uoUgCNcBGAsYHQ/h240/t42.jpg","https://lh3.googleusercontent.com/---AMr4aH7lA/YbMLG0QdUrI/AAAAAAAA2J8/9i0JSn8XDvwMOQfDXN2zW6pHsjdjsi8fACNcBGAsYHQ/h240/t43.jpg","https://lh3.googleusercontent.com/-W3ZJaNlKsHM/YbMLG9g7_DI/AAAAAAAA2KA/OPPIfFDZkrcUy2O8Cwqr8tHvadLD9V62gCNcBGAsYHQ/h240/t44.jpg","https://lh3.googleusercontent.com/-ZoQtt91R5yA/YbMLHhnJfcI/AAAAAAAA2KE/wMk4AWNdfSoC8LQLetl9GjgdjE3EjqrsACNcBGAsYHQ/h240/t45.jpg","https://lh3.googleusercontent.com/-MoHalPw6Us8/YbMLHjvXhII/AAAAAAAA2KI/sXui7kfVvXwK_-Kp6TRj5iWidVTV3T9-QCNcBGAsYHQ/h240/t46.jpg","https://lh3.googleusercontent.com/-mEzSpd9HzbU/YbMLH66k-BI/AAAAAAAA2KM/FBRdQoAAjRgDG1Dhj2dxCQ1auK7fLHFMACNcBGAsYHQ/h240/t47.jpg","https://lh3.googleusercontent.com/-9pNFai94lA8/YbMLINqW5tI/AAAAAAAA2KQ/QxeZZ90t8pQ-eFTYJ20BJ3expowiDHWYgCNcBGAsYHQ/h240/t48.jpg","https://lh3.googleusercontent.com/-ksW9MnXfjBQ/YbMLIULgF4I/AAAAAAAA2KU/I1F0jqEbgDkuZLROOBGTFIT_WLAaDUrlQCNcBGAsYHQ/h240/t49.jpg","https://lh3.googleusercontent.com/-IBvNSNhEoGA/YbMLIrW1i5I/AAAAAAAA2KY/NYZVRjVK8lwbjWsfil0J6S9LQhmhzTopgCNcBGAsYHQ/h240/t50.jpg","https://lh3.googleusercontent.com/-BHR2XY8d4SA/YbMLIjq_YOI/AAAAAAAA2Kc/lFTnDiN0U5MwjMZ2u0xlK5QD2u-ez91NQCNcBGAsYHQ/h240/t51.jpg","https://lh3.googleusercontent.com/-kPEMjs3g60Q/YbMLJB2zyTI/AAAAAAAA2Kg/fDGx4F8XT6IcLhrUtQfqqwpFam4zzgALACNcBGAsYHQ/h240/t52.jpg","https://lh3.googleusercontent.com/-HHDBDW3BnN0/YbMLJQexi3I/AAAAAAAA2Kk/WxDmjOTnY_sYhDvgP31e49s44KaNQR1FgCNcBGAsYHQ/h240/t53.jpg","https://lh3.googleusercontent.com/-r9G9FWNwQZU/YbMLJfeL9_I/AAAAAAAA2Ko/2boWCaZTfYQJEbeYSG-8RKslr5yZpx85QCNcBGAsYHQ/h240/t54.jpg","https://lh3.googleusercontent.com/-ESNB3Hxov8E/YbMLJ8zuA8I/AAAAAAAA2Ks/d4UnHgD3VcoArq3jbNPNbh9RUDKLYjW6ACNcBGAsYHQ/h240/t55.jpg","https://lh3.googleusercontent.com/-ZXHv-IPAhww/YbMLKLoIlzI/AAAAAAAA2Kw/1exoniaYKcUNppPnoC-pXBvvN7LGxkXoQCNcBGAsYHQ/h240/t56.jpg"]


$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		$("#tad-taoanh").addClass("disabled");
		$("head").append(xlha);
		if ($(".btn-chonanh").length !== 0) {
			$("head").append(cssCrop);
			$("body").append("<input class='cropanh d-none' value=''>")
		}
		var f = $(".cropanh");
		var e = $(".tad-in-text1");
		var d = $(".tad-in-text2");
		var b = $(".tad-in-text3");
		var a = $(".tad-in-texta");
		$("#cropanh").click(function() {
			$(".cropanh").val(1);
			c()
		});
		e.on("input", function() {
			c()
		});
		d.on("input", function() {
			c()
		});
		b.on("input", function() {
			c()
		});
		a.on("input", function() {
			c()
		});

		function c() {
			if (undefined !== f.val() && f.val().length == "") {
				$("#tad-taoanh").addClass("disabled")
			} else {
				if (undefined !== e.val() && e.val().length == 0) {
					$("#tad-taoanh").addClass("disabled")
				} else {
					if (undefined !== d.val() && d.val().length == 0) {
						$("#tad-taoanh").addClass("disabled")
					} else {
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
				}
			}
		}
		$("#tad-taoanh").click(function() {
			$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
			$("#img-out").hide();
			t0 = $(".tad-in-text0").val();
			$(".tad-out-text0").html(t0);
			t1 = $(".tad-in-text1").val();
			$(".tad-out-text1").html(t1);
			t2 = $(".tad-in-text2").val();
			$(".tad-out-text2").html(t2);
			t3 = $(".tad-in-text3").val();
			$(".tad-out-text3").html(t3);
			ta = $(".tad-in-texta").val();
			if (ta) {
				$(".tad-out-texta").html(ta.replace(/\r?\n/g, "</div><div>"))
			}
			html2canvas(document.querySelector(".tad-main"), {
				useCORS: !0,
				scrollX: 0,
				scrollY: 0,
				width: rongh2,
				height: daih2,
				scale: 1,
				x: 0,
				y: 0
			}).then(function(g) {
				tadUpload(g)
			})
		});
		if ($(".btn-chonanh").length !== 0) {
		    
		    
		   $("#chonanhModal").on("hidden.bs.modal", function() {
			if ($(".cropanh-container").css("display") != "none") {
			
					$("#cropanh").click()
				
			}
		});
		    
		    
			window.onload = function() {
				var m = window.Cropper;
				var o = window.URL || window.webkitURL;
				var t = document.querySelector(".img-container");
				var s = t.getElementsByTagName("img").item(0);
				var q = document.getElementById("actions");
				var l = {
					aspectRatio: tyle,
					viewMode: vmode,
					preview: ".img-preview",
					autoCrop: true,
					strict: true,
					background: true,
					autoCropArea: 1
				};
				var u = new m(s, l);
				var r = s.src;
				var v = "image/jpeg";
				var p;
				if (!document.createElement("canvas").getContext) {
					$('button[data-method="getCroppedCanvas"]').prop("disabled", true)
				}
				if (typeof document.createElement("cropper").style.transition === "undefined") {
					$('button[data-method="rotate"]').prop("disabled", true);
					$('button[data-method="scale"]').prop("disabled", true)
				}
				q.querySelector(".docs-buttons").onclick = function(x) {
					var i = x || window.event;
					var j = i.target || i.srcElement;
					var k;
					var h;
					var g;
					var w;
					if (!u) {
						return
					}
					while (j !== this) {
						if (j.getAttribute("data-method")) {
							break
						}
						j = j.parentNode
					}
					if (j === this || j.disabled || j.className.indexOf("disabled") > -1) {
						return
					}
					w = {
						method: j.getAttribute("data-method"),
						target: j.getAttribute("data-target"),
						option: j.getAttribute("data-option") || undefined,
						secondOption: j.getAttribute("data-second-option") || undefined
					};
					k = u.cropped;
					if (w.method) {
						if (typeof w.target !== "undefined") {
							g = document.querySelector(w.target);
							if (!j.hasAttribute("data-option") && w.target && g) {
								try {
									w.option = JSON.parse(g.value)
								} catch (i) {
									console.log(i.message)
								}
							}
						}
						switch (w.method) {
							case "rotate":
								if (k) {
									u.clear()
								}
								break;
							case "getCroppedCanvas":
								try {
									w.option = JSON.parse(w.option)
								} catch (i) {
									console.log(i.message)
								}
								if (v === "image/jpeg") {
									if (!w.option) {
										w.option = {}
									}
									w.option.fillColor = "#fff"
								}
								break
						}
						h = u[w.method](w.option, w.secondOption);
						switch (w.method) {
							case "rotate":
								if (k) {
									u.crop()
								}
								break;
							case "scaleX":
							case "scaleY":
								j.setAttribute("data-option", -w.option);
								break;
							case "getCroppedCanvas":
								if (h) {
									$(".anhdacat").html(h)
								}
								break;
							case "destroy":
								u = null;
								if (p) {
									o.revokeObjectURL(p);
									p = "";
									s.src = r
								}
								break
						}
						if (typeof h === "object" && h !== u && g) {
							try {
								g.value = JSON.stringify(h)
							} catch (i) {
								console.log(i.message)
							}
						}
					}
				};
				document.body.onkeydown = function(h) {
					var g = h || window.event;
					if (!u || this.scrollTop > 300) {
						return
					}
					switch (g.keyCode) {
						case 37:
							g.preventDefault();
							u.move(-1, 0);
							break;
						case 38:
							g.preventDefault();
							u.move(0, -1);
							break;
						case 39:
							g.preventDefault();
							u.move(1, 0);
							break;
						case 40:
							g.preventDefault();
							u.move(0, 1);
							break
					}
				};
				$(".cropanh-container").hide();
				var n = document.getElementById("inputImage");
				if (o) {
					n.onchange = function() {
						var g = this.files;
						var h;
						if (u && g && g.length) {
							h = g[0];
							if (/^image\/\w+/.test(h.type)) {
								v = h.type;
								if (p) {
									o.revokeObjectURL(p)
								}
								s.src = p = o.createObjectURL(h);
								u.destroy();
								u = new m(s, l);
								n.value = null;
								$(".cropanh-container").show();
								$(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác")
							} else {
								window.alert("Vui lòng chọn một tệp hình ảnh.")
							}
						}
					}
				} else {
					n.disabled = true;
					n.parentNode.className += " disabled"
				}
			}
		}
	}
});