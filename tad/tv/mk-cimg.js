
$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		$("head").append(cssCrop), $("head").append(jsCrop), $("head").append(jsCimg);
		var t = document.getElementById("Nimg");
		vitri;
		$("#tad-taoanh").click(function() {
			$("#cropanh").click(), vitri, $("#img-out").hide(), $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> " + tdta), setTimeout(function() {
				! function() {
					var e, n, i, a, o, r,zz = [],
						s = !1;
					(a = new Image).crossOrigin = "Anonymous", a.src = markimg, a.onload = function() {
						(o = new Image).crossOrigin = "Anonymous", o.src = bgimg, o.onload = function() {
                          
                          
                          if (typeof(screenimg) === "undefined") {
var screenimg = "https://cdn.taoanhdep.com/tphoto/blank.png"
}
                          
                          	(zz = new Image).crossOrigin = "Anonymous", zz.src = screenimg, zz.onload = function() {
                          
							l()
                              
                              
                             } 
                              
						}
					}, e = document.getElementById("temp"), n = e.getContext("2d"), s = !0;
					var l = function() {
							n.clearRect(0, 0, e.width, e.height), n.fillStyle = "#999", n.fillRect(0, 0, e.width, e.height);
							var l = function(t, e) {
								t && d(n, t, e.p0.x, e.p0.y, e.p1.x, e.p1.y, e.p2.x, e.p2.y, e.t0.u, e.t0.v, e.t1.u, e.t1.v, e.t2.u, e.t2.v)
							};
							for (triangle of (s && (s = !1, h()), r)) l(cimg, triangle);
							if (n.save(), "black" == tadMk1 && (n.save(), n.globalAlpha = .3, n.fillStyle = "#333", n.fillRect(0, 0, e.width, e.height), n.restore()), n.globalCompositeOperation = "destination-in", n.drawImage(a, 0, 0, e.width, e.height), n.restore(), n.save(), n.globalCompositeOperation = "destination-over", n.drawImage(o, 0, 0, e.width, e.height), n.restore(), t) {
								n.save(), n.globalAlpha = .5;
								var c = n.createPattern(t, "repeat");
								n.fillStyle = c, n.fillRect(0, 0, e.width, e.height), n.restore()
							}
                      
             
                      n.save();
					n.globalCompositeOperation = "screen";
					n.drawImage(zz, 0, 0, e.width, e.height);
					n.restore()
                      
                      
                      
                      
							tadUpload(e)
						},
						h = function() {
							r = [];
							for (var t = vitri, e = t[3].x - t[0].x, n = t[3].y - t[0].y, a = t[2].x - t[1].x, o = t[2].y - t[1].y, s = cimg.width, l = cimg.height, h = 0; h < 5; ++h)
								for (var d = h / 5, m = (h + 1) / 5, u = t[0].x + e * d, f = t[0].y + n * d, w = t[1].x + a * d, v = t[1].y + o * d, y = t[0].x + e * m, x = t[0].y + n * m, b = t[1].x + a * m, I = t[1].y + o * m, C = 0; C < 5; ++C) {
									var $ = C / 5,
										k = (C + 1) / 5,
										A = w - u,
										O = v - f,
										R = b - y,
										T = I - x,
										B = u + A * $,
										E = f + O * $,
										P = u + (w - u) * k,
										S = f + (v - f) * k,
										j = y + R * k,
										q = x + T * k,
										H = y + R * $,
										M = x + T * $,
										N = $ * s,
										U = k * s,
										W = d * l,
										z = m * l,
										D = new g(new c(B - 1, E), new c(j + 2, q + 1), new c(H - 1, M + 1), new p(N, W), new p(U, z), new p(N, z)),
										F = new g(new c(B - 2, E), new c(P + 1, S), new c(j + 1, q + 1), new p(N, W), new p(U, W), new p(U, z));
									r.push(D), r.push(F)
								}
						},
						d = function(t, e, n, i, a, o, r, s, l, h, d, c, p, g) {
							t.save(), t.beginPath(), t.moveTo(n, i), t.lineTo(a, o), t.lineTo(r, s), t.closePath(), t.clip();
							var m = l * (g - c) - d * g + p * c + (d - p) * h;
							if (0 != m) {
								var u = -(h * (r - a) - c * r + g * a + (c - g) * n) / m,
									f = (c * s + h * (o - s) - g * o + (g - c) * i) / m,
									w = (l * (r - a) - d * r + p * a + (d - p) * n) / m,
									v = -(d * s + l * (o - s) - p * o + (p - d) * i) / m,
									y = (l * (g * a - c * r) + h * (d * r - p * a) + (p * c - d * g) * n) / m,
									x = (l * (g * o - c * s) + h * (d * s - p * o) + (p * c - d * g) * i) / m;
								t.transform(u, f, w, v, y, x), t.drawImage(e, 0, 0), t.restore()
							}
						},
						c = function(t, e) {
							this.x = t || 0, this.y = e || 0
						},
						p = function(t, e) {
							this.u = t || 0, this.v = e || 0
						},
						g = function(t, e, n, i, a, o) {
							this.p0 = t, this.p1 = e, this.p2 = n, this.t0 = i, this.t1 = a, this.t2 = o
						}
				}()
			}, 200)
		})
	}
});