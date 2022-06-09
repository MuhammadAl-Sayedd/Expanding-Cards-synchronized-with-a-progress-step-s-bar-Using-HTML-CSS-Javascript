const panels = document.querySelectorAll('.panel')
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let counter = 1;

/*
when clicking on any card:
1- it opens to preview
2- the progress bar moves to the exact card(step) number
 */
panels.forEach((panel,index) => {
  panel.addEventListener('click', () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
    panel.classList.add('active');
    counter = index+1 ;
  update();
    
  })
})

/*when pressing next:
1- the next circle be blue : adding the active class to it
2- the progress bar move : increasing its width dynamically
3-when reaching the last circle the next button disabled*/

next.addEventListener('click',() => {
counter ++;
  if (counter===circles.length) {
      counter=circles.length 
  }
      panels.forEach(panel => {
          panel.classList.remove('active')
      })
      panels[counter-1].classList.add('active')
  
    
 
  update();
  })

  
    /*
when pressing prev:
1- remove the active class from the circle
2- the progress bar move : decrease its width dynamically
3-when reaching the first circle the prev button disabled
*/
prev.addEventListener('click',() => {
    counter --;
    
   
      if (counter===1) {
        counter=1;
      }
      
      panels.forEach(panel => {
        panel.classList.remove('active')
    })
    panels[counter-1].classList.add('active')
      update();
   
    })

    const update = () => {
      console.log(counter)
      circles.forEach((circle,index) => {
        if(index<counter){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
      })
      progress.style.width = (counter-1) / (circles.length-1)*100 + '%'

      if(counter===circles.length){
        next.disabled = true;
        prev.disabled=false;
      }else if (counter ===1){
        prev.disabled = true;
        next.disabled = false;
      }else{
        next.disabled = false;
        prev.disabled = false;
      }


    }





    /*
when pressing prev:
1- remove the active class from the circle
2- the progress bar move : decrease its width dynamically
3-when reaching the first circle the prev button disabled
*/