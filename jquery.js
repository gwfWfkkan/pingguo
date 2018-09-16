/*
* @Author: gf880623
* @Date:   2018-09-16 17:45:59
* @Last Modified by:   gf880623
* @Last Modified time: 2018-09-16 19:02:10
*/
$(function(){
	let list=$(".list");
	let xiala=$(".xiala");
	list.click(function(){
		xiala.slideToggle("slow");
	})


	let jiahao=$(".list dt i");
	let ll=$(".ll");
	console.log(jiahao,ll)
	jiahao.eq(0).click(function(){
		$(this).css("transform","rotate(45deg)");
		ll.eq(0).slideToggle("slow");
	})
	jiahao.eq(1).click(function(){
		$(this).css("transform","rotate(45deg)");
		ll.eq(1).slideToggle("slow");
	})
	jiahao.eq(2).click(function(){
		$(this).css("transform","rotate(45deg)");
		ll.eq(2).slideToggle("slow");
	})
	jiahao.eq(3).click(function(){
		$(this).css("transform","rotate(45deg)");
		ll.eq(3).slideToggle("slow");
	})
	jiahao.eq(4).click(function(){
		$(this).css("transform","rotate(45deg)");
		ll.eq(4).slideToggle("slow");
	})
	jiahao.eq(5).click(function(){
		$(this).css("transform","rotate(45deg)");
		ll.eq(5).slideToggle("slow");
	})
	jiahao.eq(6).click(function(){
		$(this).css("transform","rotate(45deg)");
		ll.eq(6).slideToggle("slow");
	})
})