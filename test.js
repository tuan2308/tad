



	var id = '1BTHIQgR0OTHBetjaVwaLULMhRw8TqBESOEnNjMdhVvM';
    var gid = '0';
    var url = 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?tqx=out:json&tq&gid=' + gid;
    fetch(url)
        .then(function(response){return response.text()})
        .then(
            function(data){
                return exportx(data.substring(47).slice(0, -2))
            }
        ).catch(function(err){alert("Lỗi: "+err)});
    
    
    function exportx(jsonString) {
        var json = JSON.parse(jsonString);


            for (i = 0 ; i < json.table.rows.length; i++) {

              var b = json.table.rows[i].c[0].v;

				var j = b.substring(b.lastIndexOf("/") + 1, b.length).replace(/-/g, " ").replace(/.png/g, "").toUpperCase();

                console.log(j)
    }


}


$(document).ready(function() {
	  $(".label-chonnv .badge").click(function() {
		  var d = $("#tad-chonnv>div");
		  for (var b = 0; b < d.length; b++) {
			  var c = Math.floor(Math.random() * d.length - 1) + 1;
			  var a = Math.floor(Math.random() * d.length - 1) + 1;
			  d.eq(c).before(d.eq(a))
		  }
	  });
	  $("#doimaunen").colorpicker().change(function() {
		  var a = $("#doimaunen").val();
		  $(".demomau").css("background-color", a);
		  $(".active span").css("color", a);
		  colorBg = a
	  });
	  $("#tad-chonnv>div").click(function() {
		  $("#tad-chonnv>div").removeClass("active");
		  $(this).addClass("active");
		  var a = $(this).attr("dataImg").replace(/h240/g, "s0");
		  var b = $(this).attr("dataColor");
		  $("#tad-chonnv>div>span").attr("style", "");
		  $(this).find("span").css("color", b);
		  imgAnime = a;
		  colorBg = b;
		  marginL = $(this).attr("dataMarginL");
		  $("#doimaunen").val(b).trigger("change");
		  $("#doimaunen").colorpicker("setValue", b);

		  var c = $(this).find("b").text();
		  $("#chondanhmuc").val(c)
		timdm()
		
	  });
	  $("#tad-chonnv").children("div:first-child").click();
	

});

