$("#phatsang").click(function() { $(".tad-main").toggleClass("phatsang"); });
$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("head").append(xlha);
        $("head").append(cssCrop);
        var dk1 = $(".dk1").val();

        function showlist() {
            $(".chonnen").html("");
            for (let i = 1; i < hinhnen + 1; i++) { $(".chonnen").append("<div class='col mb-3 text-center'><img alt='Hình nền' class='img-thumbnail' src='https://cdn.taoanhdep.com/cover-wallpaper/" + i + ".jpg'></div>"); }
            $("#cropanh").click(function() { $(".dk1").val(1);
                $(".chonnen div").removeClass("active"); });
            $(".chonnen div").click(function() {
                $(".btn-chonnen").html("<i class='fas fa-image'></i> Chọn nền khác")
                $(".dk1").val(1);
                $(".chonnen div").removeClass("active");
                $(this).addClass("active");
                var cropimg = $(this).children().attr("src");;
                $(".img-container img,.cropper-canvas img, .cropper-view-box img").attr("src", cropimg);
                $(".img-preview,.tad-main").css("background-image", "url(" + cropimg + ")").css("background-size", "cover").css("background-position", "center");
                $('#chonanhModal').modal('hide');
            });
        }
        $(".btn-chonnen").one("click", function() { showlist() });
        $("#tad-taianhve").hide();
        $(".tad-ketqua").hide();
        $("#tad-taoanh").click(function() {
            t1 = $(".tad-in-text1").val();
            $(".tad-out-text1").html(t1);
            t2 = $(".tad-in-text2").val();
            $(".tad-out-text2").html(t2);
            t3 = $(".tad-in-text3").val();
            $(".tad-out-text3").html(t3);
            if ($(".dk1").val() == "") {
                alert("Vui lòng chọn nền");
                showlist()
                $('#chonanhModal').modal('show');
                return false;
            }
            if (t1 == "") { alert("Vui lòng nhập tên");
                $(".tad-in-text1").focus(); return false; }
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            $("#img-out").hide();
            html2canvas(document.querySelector(".tad-main"), { useCORS: !0, scrollX: 0, scrollY: 0, width: rongh2, height: daih2, scale: 1, x: 0, y: 0 }).then(canvas => { canvas.toBlob(function(blob) { var bloburl = URL.createObjectURL(blob);
                    $("#img-out").html("<label class='mt-2 tad-ketqua'> Kết quả: </label><img src='" + bloburl + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + bloburl + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + ".jpg'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>"); }, 'image/jpeg');
                setTimeout(function() { $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                    $("#img-out").show(); }, 1000) });
        });
        window.onload = function() {
            var j = window.Cropper;
            var h = window.URL || window.webkitURL;
            var c = document.querySelector(".img-container");
            var d = c.getElementsByTagName("img").item(0);
            var f = document.getElementById("actions");
            var k = { aspectRatio: tyle, viewMode: vmode, autoCrop: true, strict: true, background: true, autoCropArea: 1 };
            var b = new j(d, k);
            var e = d.src;
            var a = "image/jpeg";
            var g;
            if (!document.createElement("canvas").getContext) { $('button[data-method="getCroppedCanvas"]').prop("disabled", true) }
            if (typeof document.createElement("cropper").style.transition === "undefined") { $('button[data-method="rotate"]').prop("disabled", true);
                $('button[data-method="scale"]').prop("disabled", true) }
            f.querySelector(".docs-buttons").onclick = function(n) {
                var r = n || window.event;
                var q = r.target || r.srcElement;
                var p;
                var l;
                var m;
                var o;
                if (!b) { return }
                while (q !== this) {
                    if (q.getAttribute("data-method")) { break }
                    q = q.parentNode
                }
                if (q === this || q.disabled || q.className.indexOf("disabled") > -1) { return }
                o = { method: q.getAttribute("data-method"), target: q.getAttribute("data-target"), option: q.getAttribute("data-option") || undefined, secondOption: q.getAttribute("data-second-option") || undefined };
                p = b.cropped;
                if (o.method) {
                    if (typeof o.target !== "undefined") { m = document.querySelector(o.target); if (!q.hasAttribute("data-option") && o.target && m) { try { o.option = JSON.parse(m.value) } catch (r) { console.log(r.message) } } }
                    switch (o.method) {
                        case "rotate":
                            if (p) { b.clear() }
                            break;
                        case "getCroppedCanvas":
                            try { o.option = JSON.parse(o.option) } catch (r) { console.log(r.message) }
                            if (a === "image/jpeg") {
                                if (!o.option) { o.option = {} }
                                o.option.fillColor = "#fff"
                            }
                            break
                    }
                    l = b[o.method](o.option, o.secondOption);
                    switch (o.method) {
                        case "rotate":
                            if (p) { b.crop() }
                            break;
                        case "scaleX":
                        case "scaleY":
                            q.setAttribute("data-option", -o.option);
                            break;
                        case "getCroppedCanvas":
                            if (l) { l.toBlob(function(blob) { var bloburl = URL.createObjectURL(blob);
                                    $(".img-preview,.tad-main").css("background-image", "url(" + bloburl + ")").css("background-size", "cover").css("background-position", "center"); }); }
                            break;
                        case "destroy":
                            b = null;
                            if (g) { h.revokeObjectURL(g);
                                g = "";
                                d.src = e }
                            break
                    }
                    if (typeof l === "object" && l !== b && m) { try { m.value = JSON.stringify(l) } catch (r) { console.log(r.message) } }
                }
            };
            document.body.onkeydown = function(l) {
                var m = l || window.event;
                if (!b || this.scrollTop > 300) { return }
                switch (m.keyCode) {
                    case 37:
                        m.preventDefault();
                        b.move(-1, 0); break;
                    case 38:
                        m.preventDefault();
                        b.move(0, -1); break;
                    case 39:
                        m.preventDefault();
                        b.move(1, 0); break;
                    case 40:
                        m.preventDefault();
                        b.move(0, 1); break }
            };
            $(".cropanh-container").hide();
            var i = document.getElementById("inputImage");
            if (h) {
                i.onchange = function() {
                    var m = this.files;
                    var l;
                    if (b && m && m.length) {
                        l = m[0];
                        if (/^image\/\w+/.test(l.type)) {
                            a = l.type;
                            if (g) { h.revokeObjectURL(g) }
                            d.src = g = h.createObjectURL(l);
                            b.destroy();
                            b = new j(d, k);
                            i.value = null;
                            $(".cropanh-container").show();
                            $(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác")
                        } else { window.alert("Vui lòng chọn một tệp hình ảnh.") }
                    }
                }
            } else { i.disabled = true;
                i.parentNode.className += " disabled" }
        };
    }
});