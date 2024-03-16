// !======PROJECT IMG TRANSITION======
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5")

// !========IMAGE # 1========
img1.addEventListener("mouseenter", () => {
    img1.style.transform = "translateY(-32%)";
    img1.style.transition = "transform 2s ease-in-out 0.3s";
  })
  
  img1.addEventListener("mouseleave", () => {
    img1.style.transform = "translateY(0%)";
    img1.style.transition = "transform 2s ease-in-out 0.2s";
  })
  
  // !========IMAGE # 2========
  img2.addEventListener("mouseenter", () => {
    img2.style.transform = "translateY(-73.2%)";
    img2.style.transition = "transform 6s ease-in-out 0.3s";
  })
  
  img2.addEventListener("mouseleave", () => {
    img2.style.transform = "translateY(0%)";
    img2.style.transition = "transform 3s ease-in-out 0.2s";
  })
  
  // !========IMAGE # 3========
  img3.addEventListener("mouseenter", () => {
    img3.style.transform = "translateY(-48.6%)";
    img3.style.transition = "transform 5s ease-in-out 0.3s";
  })
  
  img3.addEventListener("mouseleave", () => {
    img3.style.transform = "translateY(0%)";
    img3.style.transition = "transform 2s ease-in-out 0.2s";
  })

  // !========IMAGE # 4========
  img4.addEventListener("mouseenter", () => {
    img4.style.transform = "translateY(-57%)";
    img4.style.transition = "transform 4s ease-in-out 0.3s";
  })
    
  img4.addEventListener("mouseleave", () => {
    img4.style.transform = "translateY(0%)";
    img4.style.transition = "transform 2s ease-in-out 0.2s";
  })

    // !========IMAGE # 5========
    img5.addEventListener("mouseenter", () => {
      img5.style.transform = "translateY(-39%)";
      img5.style.transition = "transform 3s ease-in-out 0.3s";
    })
      
    img5.addEventListener("mouseleave", () => {
      img5.style.transform = "translateY(0%)";
      img5.style.transition = "transform 2s ease-in-out 0.2s";
    })