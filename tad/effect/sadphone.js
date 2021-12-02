$(document).ready(function() { if (window.location.hostname == tmbq) { $("head").append(cssCrop);
        $("head").append(jsCrop);
        $("head").append(jqueryCrop); var g = document.getElementById("Nimg"); var k = document.getElementById("Cimg"); var i = new Image;
        i.crossOrigin = "Anonymous";
        i.src = bgimg; var n = new Image;
        n.crossOrigin = "Anonymous";
        n.src = limg; var h = 0; var l = vitri;
        $("#tad-taoanh").click(function() { i.src = bgimg;
            n.src = limg;
            l = vitri;
            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() { i.onload = f() }, 200) });

        function f() { c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = l, step = 1; var b, u, j, a, d, t, w, m, z = k.width - 1,
                e = k.height - 1;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.save();
            ctx.drawImage(i, 0, 0, c.width, c.height);
            ctx.restore();
            ctx.save(); for (y = 0; y < e; y += step) { for (x = 0; x < z; x += step) { d = v(corners[0], corners[3], y / e);
                    t = v(corners[1], corners[2], y / e);
                    w = v(corners[0], corners[3], (y + step) / e);
                    m = v(corners[1], corners[2], (y + step) / e);
                    b = v(d, t, x / z);
                    u = v(d, t, (x + step) / z);
                    j = v(w, m, (x + step) / z);
                    a = v(w, m, x / z);
                    ctx.drawImage(k, x, y, step, step, b.x, b.y, Math.ceil(Math.max(step, Math.abs(u.x - b.x), Math.abs(a.x - j.x))) + 1, Math.ceil(Math.max(step, Math.abs(b.y - a.y), Math.abs(u.y - j.y))) + 1) } }
            ctx.save();
            ctx.drawImage(n, 0, 0, c.width, c.height);
            ctx.restore(); if (g) { ctx.save(); var o = ctx.createPattern(g, "repeat");
                ctx.fillStyle = o;
                ctx.fillRect(0, 0, c.width, c.height);
                ctx.restore() }
            c.toBlob(function(q) { var p = URL.createObjectURL(q);
                $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + p + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + p + "' class='btn btn-block btn-primary mt-2' download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                $("#img-out").show() }, "image/jpeg");

            function v(p, q, r) { return { x: p.x + (q.x - p.x) * r, y: p.y + (q.y - p.y) * r } } } } });