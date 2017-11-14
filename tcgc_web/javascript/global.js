jQuery.fn.extend({
    "focusInput": function () {

        return this.each(function () {
            $(this).focus(function () {
                if ($(this).val() == $(this).get(0).defaultValue) {
                    $(this).val("");
                    $(this).parent().find(".tcgc_pop").hide();
                }
            });
            $(this).blur(function () {
                if ($(this).val() == "") {
                    $(this).val($(this).get(0).defaultValue);
                    $(this).parent().find(".tcgc_pop").show();
                }
            });
            $(this).parent().find(".tcgc_pop").click(function () {

                $(this).parent().find("input").select();
            });
        });
    },
   
});
(function ($) {
    var MaskPop, PopBox;
    $.extend({
        pop: function (op) {
            var defaluts = {
                bs: "",
                width: "200",
                height:"",
                title: "提示",
                conttxt: "提示内容",
                ok: {},
                cancel: {},
                oktxt: "确定",
                canceltxt: "取消",
                cancelhid:true
            }
            
            op = $.extend({}, defaluts, op);
            
            var popid = "pop_" + op.bs.attr("id"),
             popsubid = "popsub_" + op.bs.attr("id"),
             popsubidout = "popsubout_" + op.bs.attr("id");
            MaskPop = $("div[_pop='" + popid + "']");
            var StrPop = '<div class="tcgc_maskpopbox"><div class="tcgc_maskpoppd"><div class="poptitle">' + op.title + '</div><div class="popcont">' + op.conttxt + '</div><div class="popbtn"><span class="popok" id="' + popsubidout + '">' + op.canceltxt + '</span><span class="popcan" id="' + popsubid + '">' + op.oktxt + '</span></div></div></div>';
   
            if (MaskPop.length == 0) {
                MaskPop = $('<div class="tcgcmaskbox" _pop="' + popid + '"><div class="tcgc_maskpop"></div>' + StrPop + '</div>').appendTo($("body"));
            } else {
                
                if (MaskPop.is(":hidden")) {
                    MaskPop.show();
                } else {
                    MaskPop.hide();
                }
                
            }

            var to = parseInt($(window).height() / 2 - MaskPop.find(".tcgc_maskpopbox").outerHeight() / 2);
            var tow = parseInt($(window).width() / 2 - op.width / 2);
            var oph=op.height==""?oph="auto":oph=op.height;
            MaskPop.find(".tcgc_maskpopbox").css({ "width": op.width, "top": to, "left": tow,height:oph });
            MaskPop.find(".tcgc_maskpopbox")
            op.cancelhid == true ? MaskPop.find(".popok") : MaskPop.find(".popok").hide();
        },
        popclose: function (op) {
            var defaluts = { ok: {} };
            op = $.extend({}, defaluts, op);
            $(".popok").live("click", function () {
                var calls = op.ok.call();
                $(this).parents(".tcgcmaskbox").hide();
            });

        },
        popok: function (op) {
            var defaluts = {id:"xx",out:{}, ok: {} };
            op = $.extend({}, defaluts, op);

            $("#popsub_" + op.id).live("click", function () {
                var calls = op.ok.call(this);
                $(this).parents(".tcgcmaskbox").hide();

            });

            $("#popsubout_" + op.id).live("click", function () {
                var calls = op.out.call();
                $(this).parents(".tcgcmaskbox").hide();
            });
        }


    });
})(jQuery);
var win_w, win_h;

$(function () {
    win_w = $(window).width();
    win_h = $(window).height();
    $(".popclosex").live("click",function () {
        $(this).parents(".tcgcmaskbox").hide();
    });
    $(".border:eq(0)").animate({ "width": "100%", "height": "3px", "margin-left": "-110px" });
    $(".tcgc_logintoptba_ul li").click(function () {
        $(".border").removeAttr("style");
        $(".border", this).animate({ "width": "100%" ,"height":"3px","margin-left":"-110px"});
        $(".tcgc_loginreg").hide().eq($(this).index()).fadeToggle();
        $(".tcgc_logintoptba_ul li").removeClass("select");
        $(this).addClass("select");
    });
    
    var state = 0;
    $("#tcgc_headimg").hover(function () {
        if (state == 0) {
            $(this).parent().addClass("tcgc_hbox_select");
            $(".tcgc_setlist").show();
            state = 1;
        }
    }, function () {});
    $(".tcgc_hbox").hover(function () {}, function () {
        $(".tcgc_setlist").hide();
        $(this).removeClass("tcgc_hbox_select");
        state = 0;
    });
});
function tcgcdc() {
    var numb = 0;

    $(".tcgc_cktzr_inputcheitem").each(function (i) {
        if ($(this).is(":checked")) {
            numb = 1;
        }
    });

    if (numb == 0) {
        $.pop({
            bs: $("#tcgcdc"),
            title: "提示",
            width: "300",
            conttxt: "请先选取导出数据",
            oktxt: "确认",
            canceltxt: "取消"
        });
    }
}
function returnhead() {
    $("body,html").animate({ scrollTop: 0 }, 800);
}
function headshow(ops_box) {
    var ths = $("." + ops_box);
    if (ths.is(":hidden")) {
        ths.parent().addClass("tcgc_hbox_select");
        ths.show();
    } else {
        ths.hide();
        ths.parent().removeClass("tcgc_hbox_select");
    }

}
function tcgcclose() {
    $(".tcgc_maskbox").hide();
    $(".tcgc_loginbox").css({ "top": "-1000px" });
}
function tcgczreslogin() {
    $("#tcgc_zhmm").css({ "top": "-1000px" });
    $("#tcgc_login").animate({ "top": "100px" }, 500);
}
function tcgczhm() {
    $("#tcgc_login").css({ "top": "-1000px" });
    $("#tcgc_zhmm").animate({ "top": "100px" }, 500);
}
function tcgczhlogin() {
    $(".border").removeAttr("style");
    $(".border", $(".tcgc_logintoptba_ul li:eq(0)")).animate({ "width": "100%", "height": "3px", "margin-left": "-110px" });
    $(".tcgc_loginreg").hide().eq(0).fadeToggle();
    $(".tcgc_logintoptba_ul li").removeClass("select");
    $(".tcgc_logintoptba_ul li:eq(0)").addClass("select");
}
function boxmask() {
    $(".tcgc_maskbox").show();
    $("#tcgc_login").animate({ "top": "100px" }, 500);
}
function regbox() {
    $("#tcgc_login").css({ "top": "-1000px" });
    $("#tcgc_regs").animate({ "top": "100px" }, 500);
}

function tcgczhmm(phone, code, passw, passwo) {
    
    var tcgcphone = $(phone);
    var tcgccode = $(code);
    var tcgcpassw = $(passw);
    var tcgcpasswo = $(passwo);
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (tcgcphone.val().length == 0) {
        txtnull(tcgcphone, '请输入手机号码！');
        boxshow(tcgcphone);
        tcgcphone.focus();
        return false;
    } else if (tcgcphone.val().length != 11) {
        txtnull(tcgcphone, '请输入有效的手机号码！');
        tcgcphone.focus();
        return false;
    } else if (!myreg.test(tcgcphone.val())) {
        txtnull(tcgcphone, '请输入有效的手机号码！');
        tcgcphone.focus();
        return false;
    } else {
        txtnull(tcgcphone, '');
        boxmode(tcgcphone);
    }
    if (tcgccode.val().length == 0) {
        txtnull(tcgccode, '请输入验证码！');
        boxshow(tcgccode);
        return false;
    } else {
        txtnull(tcgccode, '');
        boxmode(tcgccode);
    }
    if (tcgcpassw.val().length == 0) {
        txtnull(tcgcpassw, '');
        boxshow(tcgcpassw);
        return false;
    } else if (tcgcpassw.val().length < 6 || tcgcpassw.val().length > 8) {
        txtnull(tcgcpassw, '请输入6-8位的数字密码！');
        return false;
    } else {
        txtnull(tcgcpassw, '');
        boxmode(tcgcpassw);
    }
    if (tcgcpasswo.val().length == 0) {
        txtnull(tcgcpasswo, '请输入6-8位的数字密码！');
        boxshow(tcgcpasswo);
        return false;
    } else if (tcgcpasswo.val().length < 6 || tcgcpasswo.val().length > 8) {
        txtnull(tcgcpasswo, '请输入6-8位的数字密码！');
        return false;
    } else {
        txtnull(tcgcpasswo, '');
        boxmode(tcgcpasswo);
        $("#tcgc_headlogin").hide();
        
    }
}
function tcgclogin() {
    var state = 1;
    if (state == 0) {
        //未登录
        boxmask();
    } else {
        //登录成功
        tcgcclose();
        modebtn();
    }
}
function tcgcfb() {
    var state = 0;
    if (state == 0) {
        //未登录
        boxmask();
    } else {
        //登录成功
        tcgcclose();
        modebtn();
    }
}
function tcgcout() {
    $("#tcgc_headlogin").show();
    $(".tcgc_hide").hide();
}
function modebtn() {
    $("#tcgc_headlogin").hide();
    $(".tcgc_hide").show();
}
function txtnull(opt, str) {
    opt.parents(".tcgc_itempd").parent().find(".tcgc_erromsg").html(str);
}
function boxshow(opt) {
    opt.parents(".tcgc_itempd").parent().find(".tcgc_error").show();
}
function boxmode(opt) {
    opt.parents(".tcgc_itempd").parent().find(".tcgc_error").hide();
    opt.parents(".tcgc_itempd").parent().find(".tcgc_ok").show();
}
function codes(opt) {
    var myreg = /^[0-9]+$/;
    if (opt.val().length == 0) {
        opt.parents(".tcgc_itempd").parent().find(".tcgc_erromsg").html("请输入验证码！");
        return false;
    } else if (!myreg.test(opt.val())) {
        opt.parents(".tcgc_itempd").parent().find(".tcgc_erromsg").html("请输入验证码！");
    } else {
        opt.parents(".tcgc_itempd").parent().find(".tcgc_erromsg").html("");
    }

}