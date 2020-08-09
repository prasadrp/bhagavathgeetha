
$(document).ready(function() {

	$('body').addClass('first-load');

	// Init Page-Transition Pre-Check
	transitionCheckupOutside(); // IS NOT re-initiated on page-transition
	transitionCheckupInside(); // IS re-initiated on page-transition

	// Init Page-Transition Function
	//pageTransitions();


});
const bgTL = gsap.timeline();
function pageTransition() {
	var tl = gsap.timeline();

	tl.to(".transition li", {
		duration: 0.5,
		scaleY: 1,
		transformOrigin: "bottom left",
		stagger: 0.2,
	});

	tl.to(".transition li", {
		duration: 0.5,
		scaleY: 0,
		transformOrigin: "bottom left",
		stagger: 0.1,
		delay: 0.1,
	});
}


function allAnimation(){
	const rpbga = document.querySelector("#rp-bga");
	const rpbgb = document.querySelector("#rp-bgb");
	const h1Line = document.querySelectorAll('.line span');

	const rpImg = document.querySelectorAll('.rp img');
	bgTL.from([rpbga,rpbgb],{
         duration:1,
         width:0,
		 skewX:4,
		 ease:"power3.inOut",
		 stagger:{
			 amount:0.2
		 }
	}).from(".hero-text p", {
		duration: 0.6,
		x: 100,
		opacity: 0
		
	}).from(h1Line,{
		delay:-.4,
       y:80,
       duration:0.8,
       ease:"power3.out",
       stagger:{
	   amount:0.2
}
	}).to(rpImg,{
		clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
		delay:-.4,
        duration:0.8,
       ease:"power3.out",
       stagger:{
	   amount:0.2
}
	})
}

function subAnimation(){
	const rpbga = document.querySelector("#rp-bga");
	const rpbgb = document.querySelector("#rp-bgb");
	const h1Line = document.querySelectorAll('.line span');

	const rpImg = document.querySelectorAll('.rp img');
	bgTL.from([rpbga,rpbgb],{
         duration:1,
         width:0,
		 skewX:4,
		 ease:"power3.inOut",
		 stagger:{
			 amount:0.2
		 }
	}).from(".hero-text p", {
		duration: 0.6,
		x: 100,
		opacity: 0
		
	}).from(h1Line,{
		delay:-.4,
       y:80,
       duration:0.8,
       ease:"power3.out",
       stagger:{
	   amount:0.2
}
	}).to(rpImg,{
		clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
		delay:-.4,
        duration:0.8,
       ease:"power3.out",
       stagger:{
	   amount:0.2
}
	})
}




function navAnimation(){
	const mItem = document.querySelectorAll('.menu');
	const fItem = document.querySelectorAll('.fa-facebook');
	const iItem = document.querySelectorAll('.fa-twitter');
	const tItem = document.querySelectorAll('.fa-linkedin');
	const gItem = document.querySelectorAll('.fa-instagram');
	const yItem = document.querySelectorAll('.fa-youtube');
	const bItem = document.querySelectorAll('.btn-custom');
	bgTL.from( mItem, 1, {
		delay:0.1,
		x:'-100%',
		ease: Expo.easeInOut
		}).from([fItem,iItem,tItem,gItem,yItem,bItem],{
			delay:-.4,
       y:80,
       duration:0.8,
       ease:"power3.out",
       stagger:{
	   amount:0.2
	   }
		})
}
function sectionAnimation(){
	TweenMax.from('.hero', 1.5, {
    delay:0.2,
    top:'-100%',
    ease: Expo.easeInOut
	});
}
function contentAnimation() {
	
	var tl = gsap.timeline();
	tl.from(".hero-text h1", {
		duration: 0.5,
		x: -100,
		opacity: 0
		
	});
	tl.from(".hero-text p", {
		duration: 0.6,
		x: 100,
		opacity: 0
		
	});

	// tl.to(
	// 	"img",
	// 	{
	// 		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
	// 	},
	// 	"-=.1"
	// );
}




function leaveAnimation(e) {
    return new Promise(async resolve => {
	  const elements = e.querySelectorAll("img, h1");
	  const rpbga = e.querySelector("#rp-bga");
	  const rpbgb = e.querySelector("#rp-bgb");
	  const h1Line = e.querySelectorAll('.line span');
	  await gsap.to([rpbga,rpbgb],{
		duration:0.8,
		width:0,
		skewX:4,
		ease:"power3.inOut",
		stagger:{
			amount:0.2
		}
   }) 
   .from(h1Line,{
	delay:-.8,
   y:80,
   duration:1.2,
   ease:"power3.out",
   stagger:{
   amount:0.2
}
})
   
    //   await gsap
    //     .to(elements, {
    //       duration: 1,
    //       y: 100,
    //       opacity: 0,
    //       ease: "power2.inOut",
    //       stagger: 0.3
    //     })
        .then();
      resolve()
    });
  }
  
  function enterAnimation(e) {
    return new Promise(resolve => {
	  const elements = e.querySelectorAll("img, h1");
	  const rpbga = e.querySelector("#rp-bga");
	  const rpbgb = e.querySelector("#rp-bgb");
	  const h1Line = e.querySelectorAll('.line span');
	  gsap.from([rpbga,rpbgb],{
		duration:1,
		width:0,
		skewX:4,
		ease:"power3.inOut",
		stagger:{
			amount:0.2
		}
   }).to(h1Line,{
	delay:-.4,
   y:80,
   duration:0.8,
   ease:"power3.out",
   stagger:{
   amount:0.2
}
})
    //   gsap
    //     .from(elements, {
    //       duration: 1,
    //       y: 100,
    //       opacity: 0,
    //       ease: "power2.inOut",
    //       stagger: 0.3
    //     })
        .then(resolve());
  
    });
  }
  
  barba.init({
    debug: true,
    transitions: [
      {
        sync: false,
        leave: ({ current }) =>
          leaveAnimation(current.container.querySelector("main")),
        once: ({ next }) => enterAnimation(next.container.querySelector("main")),
        enter: ({ next }) => enterAnimation(next.container.querySelector("main"))
      }
    ]
  });






// function delay(n) {
// 	n = n || 2000;
// 	return new Promise((done) => {
// 		setTimeout(() => {
// 			done();
// 		}, n);
// 	});
// }

// barba.init({
// 	sync:true,
// // transitions: [{
// // // 	requestError:(trigger,action,url,response) => {
// // // if (response.status === 404){
// // // 	barba.go('/');
// // // 	return false;
// // // }
// // // 	},
// // 			enter() {
				
// // 				allAnimation();
// // 				//contentAnimation();
// // 			},
// // 			once() {
// // 				navAnimation();
// // 				allAnimation();
// // 				//sectionAnimation();
// // 				//contentAnimation();
// // 			},
// // 			 leave(data) {
// // 				 console.log(data.current.url);
// // 				const done = this.async();
// // 				pageTransition();
// // 				setTimeout(function(){
// // 					done();
// // 				},700);
				
// // 			}
		
// // 			}],
// prevent: ({ el }) => el.classList && el.classList.contains('prevent-transition'),
// 		prevent: ({ event }) => {
// 									if (event.type === 'click') {				
// 									// Prevent the user to reload the site if a page transition is engaged.
// 									if (barba.transitions.isRunning) {

// 											event.preventDefault();

// 											return true;

// 									}
// 									}
// 								},


// 		cacheIgnore: false,
// 		prefetchIgnore: false,
// 		timeout: 2000,	// default: 2000


// 		transitions: [
			
// 			{
// 			name: 'default',
//           enter(){
// 	         //allAnimation();
//             },
// 			// Available hooks…
// 			beforeOnce( current, next, trigger ) {
				
// 			},

// 			once( current, next, trigger ) {
// 				allAnimation();
// 			},

// 			afterOnce( current, next, trigger ) {

// 			},

// 			beforeLeave( current, next, trigger ) {

// 			},

// 			leave( current, next, trigger ) {

// 				// var leavePromise = new Promise(function (resolve) {

// 				// 			var outTransition = gsap.timeline( {force3D:true} );

// 				// 			outTransition							

// 				// 			.to('.transit-overlay-simple', { duration: 0.75, scaleY: 1, ease: "power2.in" })

// 				// 			.then(function () {		

// 				// 					resolve();									
						
// 				// 			})				
						
// 				// });

// 				// return leavePromise;

// 			},

// 			afterLeave( current, next, trigger ) {
				
// 			},

// 			beforeEnter( current, next, trigger ) {

// 			},

// 			enter( current, next, trigger ) {
				
// 			},

// 			afterEnter( current, next, trigger ) {		

// 				// var afterEnterPromise = new Promise(function (resolve) {			
						

// 				// 	var inTransition = gsap.timeline( {force3D:true} );

// 				// 	inTransition
					
// 				// 	.to('.transit-overlay-simple', { duration: 1.0, scaleY: 0 , ease: "power2.out",

// 				// 	onComplete: function () {																	
						
// 				// 			resolve();						
					
// 				// 	} })	

// 				// });

// 				// return afterEnterPromise;

// 			},

// 		},

// 		// More cases here

// 	],
// 			views: [

// 				// View Index .........................................................................................................................
// 				{
// 					// Actions taken when certain page is viewed.
// 					namespace: 'index',
	
// 					// Available hooks…
	
// 					beforeLeave(data) {		
	
// 						// scrollIndicationAnimation.kill();
// 						// gsap.set('.scroll-indicator-main', { clearProps: "all" })
// 						//allAnimation();
						
	
// 					},
	
// 					afterLeave(data) {
						
// 					},
	
// 					beforeEnter(data) {		
// 						allAnimation();
// 					},
	
// 					afterEnter(data) {																		
						
						
// 						// scrollIndicationAnimation.reversed() ? scrollIndicationAnimation.play() : scrollIndicationAnimation.reverse();
						
// 						console.log('enter')
	
// 					},
// 				},
	
// 				{
// 					// Actions taken when certain page is viewed.
// 					namespace: 'about',
	
// 					// Available hooks…
	
// 					beforeLeave(data) {					
						
// 					},
	
// 					afterLeave(data) {
	
// 					},
	
// 					beforeEnter(data) {
// 						subAnimation();
// 					},
	
// 					afterEnter(data) {							
						
// 					},
// 				},
	
// 	// View Grafik .........................................................................................................................
// 	{
// 		// Actions taken when certain page is viewed.
// 		namespace: 'service',

// 		// Available hooks…

// 		beforeLeave(data) {					
			
// 		},

// 		afterLeave(data) {

// 		},

// 		beforeEnter(data) {
// 			subAnimation();
// 		},

// 		afterEnter(data) {							
			
// 		},
// 	},
	
// 				// View Grafik .........................................................................................................................
// 				{
// 					// Actions taken when certain page is viewed.
// 					namespace: 'portfolio',
	
// 					// Available hooks…
	
// 					beforeLeave(data) {					
						
// 					},
	
// 					afterLeave(data) {
	
// 					},
	
// 					beforeEnter(data) {
// 						subAnimation();
// 					},
	
// 					afterEnter(data) {							
						
// 					},
// 				},
	
// 	// View Grafik .........................................................................................................................
// 				{
// 					// Actions taken when certain page is viewed.
// 					namespace: 'contact',
	
// 					// Available hooks…
	
// 					beforeLeave(data) {					
						
// 					},
	
// 					afterLeave(data) {
	
// 					},
	
// 					beforeEnter(data) {
// 						subAnimation();
// 					},
	
// 					afterEnter(data) {							
						
// 					},
// 				},
// 				// More cases here
	
// 			]



// });

// function transitionCheckupOutside() {

// 	var links = document.querySelectorAll('a[href]:not([target="_blank"])');

// 	var cbk = function(e) {
// 		if (!$(this).parents("main").length > 0) {

// 			console.log('OUTSIDE of MAIN.')

// 			if (e.currentTarget.href === window.location.href) {

// 				e.preventDefault();
// 				e.stopPropagation();

// 				//console.log("Targetting @ " + e.currentTarget.href);
// 				//console.log("Currently @ " + window.location.href);
// 				//console.log("No transition needed in this case.");

// 			} else {
// 				if ($('body').hasClass('first-load')) {
// 					$('body').removeClass('first-load');
// 				}
// 			}
// 		}
// 	};

// 	for (var i = 0; i < links.length; i++) {
// 		links[i].addEventListener('click', cbk);
// 	}

// }





// // DOES NEED re-initiation on page-transition

// function transitionCheckupInside() {

// 	var links = document.querySelectorAll('main a[href]:not([target="_blank"])');

// 	var cbk = function(e) {

// 		console.log('INSIDE of MAIN.')

// 		if (e.currentTarget.href === window.location.href) {

// 			e.preventDefault();
// 			e.stopPropagation();

// 			//console.log("Targetting @ " + e.currentTarget.href);
// 			//console.log("Currently @ " + window.location.href);
// 			//console.log("No transition needed in this case.");

// 		} else {
// 			if ($('body').hasClass('first-load')) {
// 				$('body').removeClass('first-load');
// 			}
// 		}
// 	};

// 	for (var i = 0; i < links.length; i++) {
// 		links[i].addEventListener('click', cbk);
// 	}

// }
