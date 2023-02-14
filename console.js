console.log("hellow guys");
console.log("hellow guys22"); // 2nd time

var elements = document.querySelectorAll(".multiple-sticky");
for (var i = 0; i < elements.length; i++) {
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    pin: elements[i],
    pinSpacing: false,
    markers: false
  });
}

// GSAP code to pin element
