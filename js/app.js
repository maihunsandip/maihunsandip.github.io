const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)] 
        })
        .join("");

        if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 30)
}

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

let timeouts = [],
    intervals = [];

const magic = document.querySelector(".magic");

magic.onmouseenter = () => {
  let index = 1;
  
  for(const star of document.getElementsByClassName("magic-star")) {
    timeouts.push(setTimeout(() => {  
      animate(star);
      
      intervals.push(setInterval(() => animate(star), 1000));
    }, index++ * 300));
  };
}

magic.onmouseleave = onMouseLeave = () => {
  for(const t of timeouts) clearTimeout(t);  
  for(const i of intervals) clearInterval(i);
  
  timeouts = [];
  intervals = [];
}

const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    // blob.style.left = `${clientX}px`;
    // blob.style.top = `${clientY}px`;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}

const btn =document.querySelector('.btn')
btn.addEventListener('click',()=>{
    btn.classList.add('active')
    setTimeout(() => {
      btn.classList.remove('active')
  }, 13000);
})
