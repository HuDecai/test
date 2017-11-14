$(function(){
	inputlength($("#inputlength1"));
	inputlength($("#inputlength2"));
	inputlength($("#inputlength3"));
	$(".BoxBack,.BoxBack1,.BoxBack2,.BoxBack3").css({opacity:0.5});
	
	$(".j_table1_input_dizhic").on("click",function(){
		
		$(".j_table1_input_dizhib,.BoxBack1").show();
	});
	$(".BoxBack1").on("click",function(){
		$(".j_table1_input_dizhib,.BoxBack1").hide();
	});
	
	$(".j_table1_input_dizhic1").on("click",function(){
		$(".j_table1_input_dizhib5,.BoxBack2").show();
	});
	$(".BoxBack2").on("click",function(){
		$(".j_table1_input_dizhib5,.BoxBack2").hide();
	});
	
	Tab($(".sheng_title"), $(".City_Box"), "ssq_clickOk", "click", $(".City_Boxon"));
	Tab($(".sheng_title1"), $(".City_Box1"), "ssq_clickOk", "click", $(".City_Boxon1"));
	
	if($("#provinceBox").length != 0){
		Linkage($("#provinceBox"), $("#province"), $("#cityBox"), $("#city"), $("#cityareaBox"), $("#cityarea"), $("#StreetBox"), $("#Street"), $("#committeeBox"), $("#committee"), $("#Mask"), "27");
	}
	if($("#provinceBox").length != 0){
		Linkage($("#provinceBox1"), $("#province1"), $("#cityBox1"), $("#city1"), $("#cityareaBox1"), $("#cityarea1"), $("#StreetBox1"), $("#Street1"), $("#committeeBox1"), $("#committee1"), $("#Mask1"), "27");
	}
	
	$(".City_Boxon a").live("click", function () {
		if ($(this).parent().attr("id") == "provinceBox") {
			$(".City_Boxon a").removeClass("City_BoxaClick")
		} else if ($(this).parents(".City_Boxon").attr("id") == "cityBox") {
			$(this).parents(".City_Boxon").find("a").removeClass("City_BoxaClick");
			$(this).parents(".City_Boxon").next().find("a").removeClass("City_BoxaClick");
		} else {
			$(this).parents(".City_Boxon").find("a").removeClass("City_BoxaClick");
		}
		$(this).addClass("City_BoxaClick");
	});
	
	$(".City_Boxon1 a").live("click", function () {
		if ($(this).parent().attr("id") == "provinceBox1") {
			$(".City_Boxon1 a").removeClass("City_BoxaClick1")
		} else if ($(this).parents(".City_Boxon1").attr("id") == "cityBox1") {
			$(this).parents(".City_Boxon1").find("a").removeClass("City_BoxaClick1");
			$(this).parents(".City_Boxon1").next().find("a").removeClass("City_BoxaClick1");
		} else {
			$(this).parents(".City_Boxon1").find("a").removeClass("City_BoxaClick1");
		}
		$(this).addClass("City_BoxaClick1");
	});

	$(".j_table1_input_dizhiclick").on("click",function(){
		var k = "";
		$(".City_Boxon a").each(function () {
			if ($(this).hasClass("City_BoxaClick")) {
				k = k + " " + $(this).html();
			}
		});
		$(".j_table1_input_dizhic").html(k+" "+$(".j_table1_input_dizhiinput").val());
		$(".j_table1_input_dizhib,.BoxBack1").hide();
	});
	
	$(".j_table1_input_dizhiclick1").on("click",function(){
		var k = "";
		$(".City_Boxon1 a").each(function () {
			if ($(this).hasClass("City_BoxaClick1")) {
				k = k + " " + $(this).html();
			}
		});
		$(".j_table1_input_dizhic1").html(k+" "+$(".j_table1_input_dizhiinput1").val());
		$(".j_table1_input_dizhib5,.BoxBack2").hide();
	});
	
	$(".j_table1_input_pinpaic").on("click",function(){
		$(".j_table1_input_pinpaib,.BoxBack").show();
	});
	$(".BoxBack").on("click",function(){
		$(".j_table1_input_pinpaib,.BoxBack").hide();
	});
	$(".j_table1_input_pinpaib div").on("click",function(){
		$(".j_table1_input_pinpaic").html($(this).html());
		$(".j_table1_input_pinpaib,.BoxBack").hide();
	});
	
	$(".j_tjhb").on("click",function(){
	    $($(".tcgc_gao")).append('<table cellspacing="0" cellpadding="0" class="j_table1 j_tablegy j_tablegys">' +
		  '<tr>'+
			  '<td class="j_table1_name">回报标题</td>'+
			  '<td><div class="tcgc_divwidth50"><div class="position inputlengthcopy'+ $(this).attr("data-id") +'"><input name="" type="text" maxlength="30"  class="j_table1_input1 j_inputlengthb"><span class="j_table1_length j_inputlengths"><i>0</i> / 30</span></div></div></td>'+
		  '</tr>'+
		  '<tr>'+
			  '<td class="j_table1_name">回报封面</td>'+
			  '<td class="j_table1_box"><span class="j_img2 position overflow">上传封面图<input name="" type="file" readonly="true"></span> &nbsp;可选填 (690*400px, JPG&nbsp;&nbsp; /&nbsp;&nbsp; GIF&nbsp;&nbsp; /&nbsp;&nbsp; PNG,&nbsp;&nbsp;RGB模式,&nbsp;&nbsp;200KB以内)</td>'+
		  '</tr>'+
		  '<tr>'+
			  '<td class="j_table1_name">投资金额</td>'+
			  '<td class="j_table1_box"><span class="tcgc_divwidth60 tcgc_divwidth30span"><input name="" type="text" onkeyup="shuzi(this)"  onafterpaste="shuzi(this)" class="j_table1_input2"></span><span class="tcgc_divwidth10 tcgc_divwidth30span">&nbsp;&nbsp;元</span</td>' +
		  '</tr>'+
		  '<tr>'+
			  '<td class="j_table1_name">投资人数</td>'+
			  '<td class="j_table1_box"><div class="tcgc_divwidth50"><span class="tcgc_divwidth60 tcgc_divwidth30span"><input name="" type="text"  onkeyup="shuzi(this)"  onafterpaste="shuzi(this)" class="j_table1_input2"></span><span class="tcgc_divwidth10 tcgc_divwidth30span"> &nbsp;&nbsp;人 <i class="j_table1_i_fg">/</i></span> <span class="tcgc_divwidth30 tcgc_divwidth30span"><span class="j_table1_input6">不限人数</span></span></div></td>' +
		  '</tr>'+
		  '<tr>'+
			  '<td class="j_table1_name">详细描述</td>'+
			  '<td><div class="tcgc_divwidth50"><textarea name="" cols="" rows="" class="j_table1_input3 j_table1_input5 "></textarea></div></td>'+
		  '</tr>'+
		   '<script type="text/javascript">$(function(){inputlength($(".inputlengthcopy'+ $(this).attr("data-id") +'"));})</script>'+
	  '</table>');
		$(".BoxBack,.BoxBack1,.j_scimg_c_input,.j_img2 input").css({opacity:0});
		$(this).attr("data-id",parseInt($(this).attr("data-id"))+1);
	});
	
	$("#_tjc,#jyl_b_tjsh").on("click", function () {
	    $("._tjb,.j_goxia_a_red_tjb,.BoxBack3").show();
		var time = setTimeout(function(){
		    $("._tjb,.j_goxia_a_red_tjb,.BoxBack3").hide();
			clearTimeout(time);
		},3000);
	});
	
	$(".j_sz_dz_x_table_xg,.j_tjhb1").on("click",function(){
		$(".j_sz_dz_x").hide();$(".j_sz_dz_s").show();
	});
	$(".j_sz_dz_x_fh").on("click",function(){
		$(".j_sz_dz_x").show();$(".j_sz_dz_s").hide();
	});
	
	$(".j_sz_dz_x_table_sc").on("click",function(){
		$(".BoxBack3,.j_sz_dz_x_table_sc_pd1").show();
		$(".j_sz_dz_x_table_sc_pd1").attr("data-id",$(this).parents("tr").index());
	});
	$(".j_sz_dz_x_table_sc_pdn1").on("click",function(){
		$(".BoxBack3,.j_sz_dz_x_table_sc_pd1").hide();
	});
	$(".j_sz_dz_x_table_sc_pdy1").on("click",function(){
		$(".j_sz_dz_x_table tr").eq($(".j_sz_dz_x_table_sc_pd1").attr("data-id")).remove();
		$(".BoxBack3,.j_sz_dz_x_table_sc_pd1").hide();
	});
	
	$(".jyl_banb").css({opacity:0.5});
	$(".jyl_br_whzc_jd li:last").css("border-left","0");
	
	$(".j_sz_dz_x_table_sc_pdn2").on("click",function(){
		$(".BoxBack3,.j_sz_dz_x_table_sc_pd2").hide();
	});
	$(".j_sz_dz_x_table_sc_pdy2").on("click",function(){
		$(".BoxBack3,.j_sz_dz_x_table_sc_pd2").hide();
	});
	$(".jzf_bb_yue a").on("click",function(){
		if($(this).attr("data-id") == "y"){
			$(this).attr("data-id","n");
			$(this).addClass("jzf_bb_yuea");
		}else{
			$(this).attr("data-id","y");
			$(this).removeClass("jzf_bb_yuea");
		}
	});
	
	$(".jzf_bb_table_i").on("click",function(){
		var dqtr = $(this).parents("tr");
		$(".jzf_bb_table tbody tr").removeClass("jzf_bb_table_dq");
		dqtr.addClass("jzf_bb_table_dq");
		$(".jzf_bb_addd1").html(dqtr.find(".jzf_bb_table_name span").html());
		$(".jzf_bb_addd2").html(dqtr.find(".jzf_bb_table_phone span").html());
		$(".jzf_bb_addd3").html(dqtr.find(".jzf_bb_table_add span").html());
	});
	
	$(".jzf_bb_table_xg,.jzf_bb_cli1").on("click",function(){
		$(".jzf_bb_add_tbox,.BoxBack3").show();
	});
	$(".jzf_bb_add_tbox_click1,.jzf_bb_add_tbox_click2").on("click",function(){
		$(".jzf_bb_add_tbox,.BoxBack3").hide();
	});
	Search($(".j_table1_addinput"), "详细地址");
	if($(".j_table1_input_add_box1").length !=0){
		gyAreaAddX($(".j_table1_input_add_box1"),$(".j_table1_input_add_box2"),$(".j_table1_input_add_box3"),$(".j_table1_input_add_box4"),$(".j_table1_input_add_sheng1_span"),$(".j_table1_input_add_shi1_span"),$(".j_table1_input_add_qu1_span"),$(".j_table1_input_add_jingquedizhi1_span"),".BoxBack5");
		gyAreaAddX($(".j_table1_input_add_box11"),$(".j_table1_input_add_box22"),$(".j_table1_input_add_box33"),$(".j_table1_input_add_box44"),$(".j_table1_input_add_sheng2_span"),$(".j_table1_input_add_shi2_span"),$(".j_table1_input_add_qu2_span"),$(".j_table1_input_add_jingquedizhi2_span"),".BoxBack5");
	}
});

function gyAreaAddX(box1,box2,box3,box4,titname1,titname2,titname3,titname4,backbox){
	var box1 = box1;var titname1 = titname1;
	var box2 = box2;var titname2 = titname2;
	var box3 = box3;var titname3 = titname3;
	var box4 = box4;var titname4 = titname4;
	$(backbox).css({opacity:0});
	Provincechange(box1,box2,box3,box4,titname1,titname2,titname3,titname4,backbox);
	box2.find("a").each(function(i){$(this).attr("data-shiid",i)});
	titname1.on("click",function(){box1.show();titname1.parent().find(backbox).show();});
	titname2.on("click",function(){box2.show();titname2.parent().find(backbox).show();});
	titname3.on("click",function(){box3.show();titname3.parent().find(backbox).show();});
	titname4.on("click",function(){box4.show();titname4.parent().find(backbox).show();});
	$(backbox).on("click",function(){box1.hide();box2.hide();box3.hide();box4.hide();$(this).hide();});
	box2.find("div").hide();
	box3.find("div").hide();
	box1.find("a").on("click",function(){
		var a = $(this).index();
		box2.find("div").hide();
		box3.find("div").hide();
		titname1.html($(this).html());
		titname2.html("市");
		titname3.html("区");
		box1.hide();$(backbox).hide();
		box2.find("div").each(function () {
			var b = $(this).index();
		    if (a == b) {
			  $(this).show();
		    }
		})
	});
	box2.find("a").on("click",function(){
		var a = $(this).attr("data-shiid");
		box3.find("div").hide();
		titname2.html($(this).html());
		titname3.html("区");
		box2.hide();$(backbox).hide();
		box3.find("div").each(function () {
			var b = $(this).index();
		    if (a == b) {
				$(this).show();
		    }
		})
	});
	box3.find("a").on("click",function(){
		titname3.html($(this).html());
		box3.hide();$(backbox).hide();
	});
	box4.find("a").on("click",function(){
		titname4.html($(this).html());
		box4.hide();$(backbox).hide();
	});
	
}

function Provincechange(box1,box2,box3,box4,titname1,titname2,titname3,titname4,backbox) {
	var box1 = box1;var titname1 = titname1;
	var box2 = box2;var titname2 = titname2;
	var box3 = box3;var titname3 = titname3;
	var box4 = box4;var titname4 = titname4;
	var province_html = "", city_html = "", cityarea_html = ""
	$.each(area, function (i, adr) {
		//console.log("地区:" + adr.Name);
    	$.each(adr.List, function (a, p) {
		   //console.log("--省份:" + p.Name);
		   province_html += "<a>" + p.Name + "</a>";
		   var city_a = "";
		   $.each(p.List, function (y, n) {
			   //console.log("----市:" + n.Name);
			   city_a += "<a>" + n.Name + "</a>";
			   var cityarea_a = "";
			   $.each(n.List, function (t, q) {
				   //console.log("-------区:" + q.Name)
				   cityarea_a += "<a>" + q.Name + "</a>";
				   var Street_a = "";
			   });
			   cityarea_html += "<div>" + cityarea_a + "</div>";
			   cityarea_a = "";	
		   });
		   city_html += "<div>" + city_a + "</div>";
		   city_a = "";
	   });
	   box1.html(province_html);
	   box2.html(city_html);
	   box3.html(cityarea_html);
	});
}

$(window).scroll(function(){
	if($("#fudong").length != 0){
		var fudong = $("#fudong").offset().top;
		if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
			if(fudong < document.documentElement.scrollTop){
				$(".jck_b_wz_mune").addClass("fixed");
			}else{
				$(".jck_b_wz_mune").removeClass("fixed");
			}
		}else{
			if(fudong < document.body.scrollTop){
				$(".jck_b_wz_mune").addClass("fixed");
			}else{
				$(".jck_b_wz_mune").removeClass("fixed");
			}
		}
	}
	
	if($("#jyl_b").length != 0){
		var fudong = $("#jyl_b").offset().top;
		if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
			if(fudong < document.documentElement.scrollTop){
				$(".jyl_bfixed").addClass("fixed2");
			}else{
				$(".jyl_bfixed").removeClass("fixed2");
			}
			$(".jyl_bfixed li").removeClass("jyl_bfixedli");
			if(document.documentElement.scrollTop  >=$("#jyl_bl_main7").offset().top){
				$(".jyl_bfixed li").eq(6).addClass("jyl_bfixedli");
			}else if(document.documentElement.scrollTop  >=$("#jyl_bl_main6").offset().top){
				$(".jyl_bfixed li").eq(5).addClass("jyl_bfixedli");
			}else if(document.documentElement.scrollTop  >=$("#jyl_bl_main5").offset().top){
				$(".jyl_bfixed li").eq(4).addClass("jyl_bfixedli");
			}else if(document.documentElement.scrollTop  >=$("#jyl_bl_main4").offset().top){
				$(".jyl_bfixed li").eq(3).addClass("jyl_bfixedli");
			}else if(document.documentElement.scrollTop  >=$("#jyl_bl_main3").offset().top){
				$(".jyl_bfixed li").eq(2).addClass("jyl_bfixedli");
			}else if(document.documentElement.scrollTop  >=$("#jyl_bl_main2").offset().top){
				$(".jyl_bfixed li").eq(1).addClass("jyl_bfixedli");
			}else{
				$(".jyl_bfixed li").eq(0).addClass("jyl_bfixedli");
			}
			
		}else{
			if(fudong < document.body.scrollTop){
				$(".jyl_bfixed").addClass("fixed2");
			}else{
				$(".jyl_bfixed").removeClass("fixed2");
			}
			$(".jyl_bfixed li").removeClass("jyl_bfixedli");
			if(document.body.scrollTop  >=$("#jyl_bl_main7").offset().top){
				$(".jyl_bfixed li").eq(6).addClass("jyl_bfixedli");
			}else if(document.body.scrollTop  >=$("#jyl_bl_main6").offset().top){
				$(".jyl_bfixed li").eq(5).addClass("jyl_bfixedli");
			}else if(document.body.scrollTop  >=$("#jyl_bl_main5").offset().top){
				$(".jyl_bfixed li").eq(4).addClass("jyl_bfixedli");
			}else if(document.body.scrollTop  >=$("#jyl_bl_main4").offset().top){
				$(".jyl_bfixed li").eq(3).addClass("jyl_bfixedli");
			}else if(document.body.scrollTop  >=$("#jyl_bl_main3").offset().top){
				$(".jyl_bfixed li").eq(2).addClass("jyl_bfixedli");
			}else if(document.body.scrollTop  >=$("#jyl_bl_main2").offset().top){
				$(".jyl_bfixed li").eq(1).addClass("jyl_bfixedli");
			}else{
				$(".jyl_bfixed li").eq(0).addClass("jyl_bfixedli");
			}
		}
	}
	
});

function inputlength(box){
	var box1 = box;
	box1.find(".j_inputlengthb").on("keyup",function(){
		box1.find(".j_inputlengths i").html($(this).val().length);
	});
}
function checkPhone(thi){ 
	var thi = thi;
    if(!(/^1[34578]\d{9}$/.test(thi.val()))){ 
		thi.val("");
        return false; 
    } 
}
function shuzi(thi){
	var thi = thi;
	thi.value=thi.value.replace(/\D/g,'');
}

/*
	----------手制下拉框----------
	Click 点击按钮 下拉框出现在此按钮下
	Box 点击后弹出的框
	ClickHeight按钮与弹出框上下的距离
*/
function DropdownBox(Click,Box,ClickHeight){
	var ClickC;
	var Box = Box;
	var ClickHeight = ClickHeight;
	var OcclusionBack = $(".BoxBack");	
	Click.live("click",function(){
		ClickC = $(this);
		Box.css({"top":parseInt(ClickC.offset().top) + parseInt(ClickHeight)+"px" , "left":ClickC.offset().left + "px"});
		Box.show();
		OcclusionBack.show();
	});
	Box.find("a").live("click",function(){
		Click.html($(this).html());
		Box.hide();
		OcclusionBack.hide();
	});
	$(window).resize(function () {
		if(!Box.is(":hidden") && Box.length != 0){
			Box.css({"top":parseInt(ClickC.offset().top) + parseInt(ClickHeight)+"px" , "left":ClickC.offset().left + "px"});
		}
	});
	OcclusionBack.live("click",function(){
		Box.hide();
		OcclusionBack.hide();
	});
}

/*
	----------通用选项卡----------
	TabName 名称包 
	TabBox 内容包 
	TabNameCss 名称样式 
	Incident 触发事件
	TabSubclassBox 内容包子层
*/
function Tab(TabName,TabBox,TabNameCss,incident,TabSubclassBox){
	TabSubclassBox.hide();
	TabName.find("li").first().addClass(TabNameCss);
	TabBox.find("div").first().show();
	var dLi = TabName.find("li");
	dLi.live(incident,function(){
	  dLi.removeClass(TabNameCss);
	  $(this).addClass(TabNameCss);
	  var index=$(this).index();
		TabBox.children().each(function(i){
			if(index==i){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
	});
}

/*
	----------搜索框_默认参数----------
	SearchBox 搜索框ID
	SearchName 默认参数
*/
function Search(SearchBox,SearchName){
	SearchBox.val(SearchName);
	SearchBox.focus(function () {
		$(this).val("");
		$(this).css("color","#000");
	}).blur(function () {
		//if($(this).val() == "" || $(this).val().trim()==""){
		if($(this).val() == ""){
			$(this).val(SearchName);
			$(this).removeAttr("style");
		}
	});
}
