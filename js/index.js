//window.onresize = function(){
//    if ((document.body) && (document.body.clientWidth)){
//		var winWidth = document.body.clientWidth;
//	}
//	var rightWidth=winWidth*0.6
//	if(rightWidth > 344 && rightWidth < 666){
//		window.resizeTo(344);
//	}
//	else if(rightWidth >= 666 && rightWidth < 990 )
//		window.resizeTo(666)
//}

function rsz() {
    var winWidht = $(window).width();
    var winHeight = $(window).height();

    $('.left').css("height", winHeight);
    $('.right').css("height", winHeight);
    var leftWidth = $('.left')[0].offsetWidth;
    var rightWidht = winWidht - leftWidth;

    var singleDlobjMarginLeft = 12;
    var singleDlobjWidth = $('dl')[0].offsetWidth + singleDlobjMarginLeft;
    var singleRowDlCount = parseInt(rightWidht / singleDlobjWidth);
    if (singleRowDlCount <= 1) rightWidht = singleDlobjWidth;
    else rightWidht = singleRowDlCount * singleDlobjWidth;
    rightWidht += singleDlobjMarginLeft;
    var bodyWidth = rightWidht + leftWidth;
    $('.right').css('width', rightWidht);


    //�������Ⱥ���Ҫ������Ƿ�����˴�ֱ���������������¹������Ŀ��
    var _right=$('.right')[0];
    if (_right.scrollHeight != _right.offsetHeight) { //����������߶Ⱥ�ʵ�ʸ߶Ȳ��Ȳ���Ϊ���ֻ춯��
        var vScroolWidth = _right.offsetWidth - _right.scrollWidth;
        var newRWidth = (rightWidht + vScroolWidth);
        $(_right).css('width', newRWidth);
        bodyWidth = newRWidth + leftWidth
    }
    $(document.body).css("width", bodyWidth);
}

window.onresize = function () {

    rsz();

}
$(document).ready(function () {
    $(document.body).css({ "overflow": "hidden", "white-space": "nowrap" });
    rsz();
});