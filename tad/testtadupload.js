var urlanh, tadcanv;



function tadUpload(b) {

let linkanh = b.toDataURL('image/jpeg', 1.0)
		let t = "<img src='" + linkanh + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>";
		$("#img-out").html("<div class='d-flex w-100'><label class='mt-2'> Kết quả: </label><label data-toggle='modal' data-target='#tipsdown' class='ml-auto mt-2 text-primary m1'><i class='far fa-question-circle'></i></label></div>" + t + "<a href='" + linkanh + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a><button class='btn btn-block btn-outline-primary mt-2 tad-shareimg' onclick='shareImg()'><i class='fas fa-share'></i> Chia sẻ ảnh</button><div id='share-out'></div>"); setTimeout(function() {
			$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh"); $("#img-out").show()



if (typeof (hengio) === 'undefined') {}

else{

clearTimeout(hengio);

}



if (typeof ($('#formTime')) === 'undefined') {}

else{

if($(".tad-timetao").val() >= 10){

$('#formTime').submit();

}

}




		}, 1000)


}




/////



$.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    headers: {
        Authorization: "Client-ID 69ed3ac654c3326",
        Accept: "application/json"
    },
    dataType: "json",
    data: {
        image: b
    },
    success: function(c) {
        let t = JSON.stringify(c),
            n = JSON.parse(t);
        urlanh = n.data.link;

$('#formShare #urlUp').val(urlanh)

$('#formShare').submit();


        let e = "https://taoanhdep.com" + location.pathname,
            s = $(".post-heading h1").text(),
            o = "<div class='mt-3'><div class='row'><div class='col pr-2'><a class='btn btn-block btn-outline-primary btn-sm mb-2' href='https://www.facebook.com/share.php?%20v=4&amp;src=bm&amp;u=" + urlanh + "&amp;t=" + s + "' rel='nofollow' target='_blank' title='Facebook Share'><i class='fab fa-facebook'></i> Chia sẻ ảnh</a></div><div class='col pl-2'><a class='btn btn-block btn-outline-danger btn-sm mb-2' href='https://pinterest.com/pin/create/button/?url=" + e + "&amp;media=" + urlanh + "&amp;description=" + s + "' rel='nofollow' target='_blank' title='Pinterest Share'><i class='fab fa-pinterest'></i> Lưu ảnh</a></div></div><div class='input-group mt-2'> <input class='form-control form-control-sm' type='text' value='" + urlanh + "' id='urlShare'><div class='input-group-append'> <button class='btn btn-primary btn-sm' type='button' onclick='tadShareCopy()'><i class='fas fa-copy'></i></button> </div></div> </div>";
        $("#share-out").html(o), $(".tad-shareimg").hide()
    },
    error: function(c) {
        console.log(c), alert("Lỗi tải ảnh lên, hãy thử lại sau.")
    }
})
