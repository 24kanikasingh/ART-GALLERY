// get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var image = document.getElementById('clickableimage');
// get close button
var closeBtn = document.getElementById('closeButton').className ="closeBtn";

//Listen for click
clickableimage.addEventListener('click', openModal);

//Listen for close modal
closeButton.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);

//Function to open modal
function openModal(){
 modal.style.display = 'block';
}

//Function to close the modal
function closeModal(){
	modal.style.display = 'none';
}

//Function to close the modal if outside click
function clickOutside(e){
	if(e.target === modal){
	modal.style.display = 'none';
}
}
 //For slide show
let sliderImages = document.querySelectorAll('#simpleModal'),
   arrowRight = document.querySelector('#arrowLeft'),
   arrowLeft = document.querySelector('#arrowRight'),
   current = 0;

   //Clear all images
   function reset(){
    for(let i = 0; i< sliderImages.length; i++){
      sliderImages[i].style.display = 'none';
    }
   }
  
  function startSlide(){
   reset();
   //sliderImages[0].style.display = 'block';
  }
//Show Prev
    function slideLeft(){
    	reset();
    	sliderImages[current-1].style.display ='block';
    	current--;
    }

    //Show next
    function slideRight(){
    	reset();
    	sliderImages[current + 1].style.display ='block';
    	current++;
    }

    //left arrow click
    arrowLeft.addEventListener('click', function(){
       if(current === 0 ){
       	current = sliderImages.length;
       }
       slideLeft();
    });
     //left arrow click
    arrowRight.addEventListener('click', function(){
       if(current === sliderImages.length ){
       	current = -1;
       }
       slideRight();
    });

  startSlide();