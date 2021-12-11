var urlanh, tadcanv;
function tadUpload(b, dd) {
	tadcanv = b;
	try {
		if (typeof (dd) !== 'undefined') {
			b.toBlob(function (blob) {
				var zz = URL.createObjectURL(blob);
				$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + zz + "' alt='Kết quả' class='img-thumbnail'><a href='" + zz + "' class='btn btn-block btn-primary mt-2 taianh' download='taoanhdep_" + tenanhxuat + ".png'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a><button class='btn btn-block btn-outline-primary mt-2 tad-shareimg' onclick='shareImg(&#39;png&#39;)'><i class='fas fa-share'></i> Chia sẻ ảnh</button><div id='share-out'></div>");
			});
		}
		else {
			b.toBlob(function (blob) {
				var zz = URL.createObjectURL(blob);
				$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + zz + "' alt='Kết quả' class='img-thumbnail'><a href='" + zz + "' class='btn btn-block btn-primary mt-2 taianh' download='taoanhdep_" + tenanhxuat + ".jpg'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a><button class='btn btn-block btn-outline-primary mt-2 tad-shareimg' onclick='shareImg()'><i class='fas fa-share'></i> Chia sẻ ảnh</button><div id='share-out'></div>");
			}, 'image/jpeg',0.9);
		}
		alert("a")
	} catch {
		//if png
		if (typeof (dd) !== 'undefined') {
			var z = b.toDataURL('image/' + dd);
			$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + z + "' alt='Kết quả' class='img-thumbnail'><a href='#' class='btn btn-block btn-primary mt-2 taianh' onclick='taianh(&#39;png&#39;)'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a><button class='btn btn-block btn-outline-primary mt-2 tad-shareimg' onclick='shareImg(&#39;png&#39;)'><i class='fas fa-share'></i> Chia sẻ ảnh</button><div id='share-out'></div>");
		}
		else {
			var z = b.toDataURL('image/jpeg', 0.9);
			$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + z + "' alt='Kết quả' class='img-thumbnail'><a href='#' class='btn btn-block btn-primary mt-2 taianh' onclick='taianh()'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a><button class='btn btn-block btn-outline-primary mt-2 tad-shareimg' onclick='shareImg()'><i class='fas fa-share'></i> Chia sẻ ảnh</button><div id='share-out'></div>");
		}
		//
		alert("b")
	}
	//show
	setTimeout(function () {
		$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh"); $("#img-out").show()
	}, 1000);
	//form
	if (typeof (hengio) === 'undefined') { }
	else {
		clearTimeout(hengio);
	}
	if (typeof ($('#formTime')) === 'undefined') { }
	else {
		if ($(".tad-timetao").val() >= 10) {
			$('#formTime').submit();
		}
	}
}
function taianh(ddd) {
	var linkt = $("#img-out img").attr("src");
	$(".taianh").attr("href", linkt)
	if (typeof (ddd) !== 'undefined') {
		$(".taianh").attr("download", "taoanhdep_" + tenanhxuat + "." + ddd)
	}
	else {
		$(".taianh").attr("download", "taoanhdep_" + tenanhxuat + ".jpg")
	}
}
// if(window.location.hostname!="\x77\x77\x77\x2E\x74\x61\x6F\x61\x6E\x68\x64\x65\x70\x2E\x63\x6F\x6D"){window.location="\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x61\x6F\x61\x6E\x68\x64\x65\x70\x7A\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F"}
function shareImg(cc) {
	$(".tad-shareimg").html("<span class='spinner-border spinner-border-sm'></span> Đang tải ảnh lên").addClass("disabled").blur();
	if (typeof (cc) !== 'undefined') {
		var b = tadcanv.toDataURL('image/' + cc).split(",")[1];
	}
	else {
		var b = tadcanv.toDataURL('image/jpeg', 0.9).split(",")[1];
	}
	$.ajax({
		url: "https://api.imgur.com/3/image",
		type: "POST",
		headers: {
			Authorization: "Client-ID 906acd390f9ab78",
			Accept: "application/json"
		},
		dataType: "json",
		data: {
			image: b
		},
		success: function (c) {
			var t = JSON.stringify(c);
			var n = JSON.parse(t);
			var urlanh = n.data.link.replace(/jpg/g, "webp");
			$('#formShare #urlUp').val(urlanh);
			$("#share-out").html("<div class='mt-3'><div class='row'><div class='col pr-2'><a class='btn btn-block btn-outline-primary btn-sm mb-2' href='https://www.facebook.com/share.php?%20v=4&amp;src=bm&amp;u=" + urlanh + "&amp;t=" + document.title + "' rel='nofollow' target='_blank' title='Facebook Share'><i class='fab fa-facebook'></i> Chia sẻ ảnh</a></div><div class='col pl-2'><a class='btn btn-block btn-outline-danger btn-sm mb-2' href='https://pinterest.com/pin/create/button/?url=https://taoanhdep.com" + location.pathname + "&amp;media=" + urlanh + "&amp;description=" + document.title + "' rel='nofollow' target='_blank' title='Pinterest Share'><i class='fab fa-pinterest'></i> Lưu ảnh</a></div></div><div class='input-group mt-2'> <input class='form-control form-control-sm' type='text' value='" + urlanh + "' id='urlShare'><div class='input-group-append'> <button class='btn btn-primary btn-sm' type='button' onclick='tadShareCopy()'><i class='fas fa-copy'></i></button> </div></div> </div>");
			$(".tad-shareimg").hide();
			$('#formShare').submit();
		},
		error: function (c) {
			console.log(c), alert("Lỗi tải ảnh lên, hãy thử lại sau.")
		}
	})
}
function tadShareCopy() {
	var b = document.getElementById("urlShare");
	b.focus(), b.select(), document.execCommand("copy"), alert("Đã sao chép url ảnh!")
};
$('#formShare').submit(function (e) {
	e.preventDefault();
	$.ajax({
		url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScQ9-jU80GgaVTp4zkmjyNhUZcXB4TWIolCAWp3Nl-AKfxkQA/formResponse',
		type: 'post',
		data: $('#formShare').serialize(),
		success: function () {
			// Whatever you want to do after the form is successfully submitted
		}
	});
});