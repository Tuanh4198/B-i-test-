document.addEventListener("DOMContentLoaded",function(){
	const nut = document.querySelectorAll('.cover-menu .slide i'),
		  slides = document.querySelectorAll('.cover-menu .slide img');
	var classhienNext = 'hien', 
		classanNext = 'an',
		classhienPrev = 'hien', 
		classanPrev = 'an', 
		dangxem = 'batdau',
		btnleft = nut[0],
		btnright = nut[1],
		chisohientai = 0, 
		soluongslide = slides.length, 
		trangthai = 0;		 
	function xacdinhnut(nut){
		if(trangthai == 1){return false;}
		trangthai = 1;
		var phantuhientai = slides[chisohientai],
			trangthaichuyendong = 0;
		chisohientai = (nut == 'nutphai') ? ((chisohientai < (soluongslide - 1)) ? (chisohientai+1) : 0) : ((chisohientai > 0) ? (chisohientai-1) : (slides.length-1));
		var phantuhienra = slides[chisohientai];
		phantuhientai.addEventListener('webkitAnimationEnd',function(){
			phantuhientai.classList.remove(classanNext);
			phantuhientai.classList.remove(classanPrev);
			phantuhientai.classList.remove(dangxem);
			trangthaichuyendong ++;
			trangthai = (trangthaichuyendong == 2) ? 0 : trangthai;	
		});	
		phantuhienra.addEventListener('webkitAnimationEnd',function(){
			phantuhienra.classList.remove(classhienNext);
			phantuhienra.classList.remove(classhienPrev);	
			phantuhienra.classList.add(dangxem);	
			trangthaichuyendong ++;	
			trangthai = (trangthaichuyendong == 2) ? 0 : trangthai;	
		});	
		phantuhientai.classList.add((nut == 'nutphai')?(classanNext):(classanPrev));
		phantuhienra.classList.add((nut == 'nutphai')?(classhienNext):(classhienPrev));
	}
	btnright.addEventListener('click',function(){xacdinhnut('nutphai')});
	btnleft.addEventListener('click',function(){xacdinhnut('nuttrai')});
	console.log(nut);
	console.log(slides);
},false)
// lsalamksdasdsal;dlsa;d;lsakd;sak;flk;á
