$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("head").append(jsCrop);
        $("head").append(cssCrop);
        $("body").append("<img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Cimg' class='d-none'/>");
        $("body").append("<img src='https://cdn.taoanhdep.com/tad/effect/chuyen-gia/bg.jpg' crossorigin='anonymous' id='Bimg' class='d-none'/>");
        $("body").append("<img src='https://cdn.taoanhdep.com/tad/effect/chuyen-gia/mark.png' crossorigin='anonymous' id='Mimg' class='d-none'/>");
        $("body").append("<img src='https://cdn.taoanhdep.com/tad/effect/chuyen-gia/layer.png' crossorigin='anonymous' id='Limg' class='d-none'/>");
        $("body").append("<img src='https://cdn.taoanhdep.com/tad/effect/chuyen-gia/screen.jpg' crossorigin='anonymous' id='Simg' class='d-none'/>");
        $("body").append("<img src='https://cdn.taoanhdep.com/tad/effect/chuyen-gia/multiply.jpg' crossorigin='anonymous' id='Muimg' class='d-none'/>");
        var d = document.getElementById("Nimg");
        var a = document.getElementById("Cimg");
        var g = document.getElementById("Bimg");
        var j = document.getElementById("Limg");
        var e = document.getElementById("Mimg");
        var b = "1180";
        $("#tad-taoanh").click(function() {
            if ($(".tad-in-text1").val() == "") {
                alert("Vui lòng nhập tên");
                $(".tad-in-text1").focus();
                return false
            }
            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() {
                document.fonts.load('10pt "UTM Sharnay"').then(h)
            }, 1000)
        });

        function h() {
            c = document.querySelector("canvas"), ctx = c.getContext("2d");
            var f = $(".tad-in-text1").val().toUpperCase();
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.save();
            ctx.drawImage(g, 0, 0, c.width, c.height);
            ctx.restore();
            ctx.drawImage(a, 300, 300, 900, 900);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "multiply";
            ctx.fillStyle = "#ffe3fe";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.restore();
            ctx.save();
            ctx.drawImage(j, 0, 0, c.width, c.height);
            ctx.save();
            ctx.globalCompositeOperation = "screen";
            ctx.drawImage(Simg, 0, 0, c.width, c.height);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(Muimg, 0, 0, c.width, c.height);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "screen";
            ctx.fillStyle = "white";
            ctx.font = "122px UTM Sharnay";
            ctx.shadowColor = "#ec228f";
            ctx.textAlign = "center";
            ctx.shadowBlur = 10;
            ctx.fillText(f, c.width / 2, b);
            ctx.shadowBlur = 20;
            ctx.fillText(f, c.width / 2, b);
            ctx.shadowBlur = 30;
            ctx.fillText(f, c.width / 2, b);
            ctx.shadowBlur = 40;
            ctx.fillText(f, c.width / 2, b);
            ctx.shadowBlur = 50;
            ctx.fillText(f, c.width / 2, b);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "screen";
            ctx.fillStyle = "#111";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.restore();
            c.toBlob(function(i) {
                var k = URL.createObjectURL(i);
                $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + k + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + k + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                $("#img-out").show()
            }, "image/jpeg")
        }
        window.onload = function() {
            var x = window.Cropper;
            var l = window.URL || window.webkitURL;
            var B = document.querySelector(".img-container");
            var C = B.getElementsByTagName("img").item(0);
            var i = document.getElementById("actions");
            var y = {
                aspectRatio: tyle,
                viewMode: vmode,
                preview: ".img-preview1",
                autoCrop: true,
                strict: true,
                background: true,
                autoCropArea: 1
            };
            var A = new x(C, y);
            var f = C.src;
            var z = "image/jpeg";
            var k;
            if (!document.createElement("canvas").getContext) {
                $('button[data-method="getCroppedCanvas"]').prop("disabled", true)
            }
            if (typeof document.createElement("cropper").style.transition === "undefined") {
                $('button[data-method="rotate"]').prop("disabled", true);
                $('button[data-method="scale"]').prop("disabled", true)
            }
            i.querySelector(".docs-buttons").onclick = function(o) {
                var s = o || window.event;
                var r = s.target || s.srcElement;
                var q;
                var m;
                var n;
                var p;
                if (!A) {
                    return
                }
                while (r !== this) {
                    if (r.getAttribute("data-method")) {
                        break
                    }
                    r = r.parentNode
                }
                if (r === this || r.disabled || r.className.indexOf("disabled") > -1) {
                    return
                }
                p = {
                    method: r.getAttribute("data-method"),
                    target: r.getAttribute("data-target"),
                    option: r.getAttribute("data-option") || undefined,
                    secondOption: r.getAttribute("data-second-option") || undefined
                };
                q = A.cropped;
                if (p.method) {
                    if (typeof p.target !== "undefined") {
                        n = document.querySelector(p.target);
                        if (!r.hasAttribute("data-option") && p.target && n) {
                            try {
                                p.option = JSON.parse(n.value)
                            } catch (s) {
                                console.log(s.message)
                            }
                        }
                    }
                    switch (p.method) {
                        case "rotate":
                            if (q) {
                                A.clear()
                            }
                            break;
                        case "getCroppedCanvas":
                            try {
                                p.option = JSON.parse(p.option)
                            } catch (s) {
                                console.log(s.message)
                            }
                            if (z === "image/jpeg") {
                                if (!p.option) {
                                    p.option = {}
                                }
                                p.option.fillColor = "#fff"
                            }
                            break
                    }
                    m = A[p.method](p.option, p.secondOption);
                    switch (p.method) {
                        case "rotate":
                            if (q) {
                                A.crop()
                            }
                            break;
                        case "scaleX":
                        case "scaleY":
                            r.setAttribute("data-option", -p.option);
                            break;
                        case "getCroppedCanvas":
                            if (m) {
                                m.toBlob(function(t) {
                                    var u = l.createObjectURL(t);
                                    $("#Cimg").attr("src", u)
                                }, "image/png", 1);
                                $("#tad-taoanh").removeClass("disabled")
                            }
                            break;
                        case "destroy":
                            A = null;
                            if (k) {
                                l.revokeObjectURL(k);
                                k = "";
                                C.src = f
                            }
                            break
                    }
                    if (typeof m === "object" && m !== A && n) {
                        try {
                            n.value = JSON.stringify(m)
                        } catch (s) {
                            console.log(s.message)
                        }
                    }
                }
            };
            document.body.onkeydown = function(m) {
                var n = m || window.event;
                if (!A || this.scrollTop > 300) {
                    return
                }
                switch (n.keyCode) {
                    case 37:
                        n.preventDefault();
                        A.move(-1, 0);
                        break;
                    case 38:
                        n.preventDefault();
                        A.move(0, -1);
                        break;
                    case 39:
                        n.preventDefault();
                        A.move(1, 0);
                        break;
                    case 40:
                        n.preventDefault();
                        A.move(0, 1);
                        break
                }
            };
            $(".cropanh-container").hide();
            var w = document.getElementById("inputImage");
            if (l) {
                w.onchange = function() {
                    var n = this.files;
                    var m;
                    if (A && n && n.length) {
                        m = n[0];
                        if (/^image\/\w+/.test(m.type)) {
                            z = m.type;
                            if (k) {
                                l.revokeObjectURL(k)
                            }
                            C.src = k = l.createObjectURL(m);
                            A.destroy();
                            A = new x(C, y);
                            w.value = null;
                            $(".cropanh-container").show();
                            $(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác")
                        } else {
                            window.alert("Please choose an image file.")
                        }
                    }
                }
            } else {
                w.disabled = true;
                w.parentNode.className += " disabled"
            }
        }
    }
});