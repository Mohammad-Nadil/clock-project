let secondHand = document.querySelector(".second");
let minuteHand = document.querySelector(".min");
let hourHand = document.querySelector(".hour");

function updateClock() {
  const now = new Date();

  // Including milliseconds for smoothness
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;

  // Minutes adjusted by the current seconds
  const minutes = now.getMinutes() + seconds / 60;

  // Hours adjusted by the current minutes
  const hours = (now.getHours() % 12) + minutes / 60;
  
  const secondAngle = seconds * 6; // 6 degrees per second
  const minuteAngle = minutes * 6; // 6 degrees per minute
  const hourAngle = hours * 30; // 30 degrees per hour

  // Rotate the hands smoothly
  gsap.to(secondHand, { rotate: secondAngle, duration: 0.1, ease: "none" });
  gsap.to(minuteHand, { rotate: minuteAngle, duration: 0.1, ease: "none" });
  gsap.to(hourHand, { rotate: hourAngle, duration: 0.1, ease: "none" });
}

// Initialize clock with correct starting position
function initializeClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondAngle = seconds * 6; // 6 degrees per second
  const minuteAngle = minutes * 6; // 6 degrees per minute
  const hourAngle = hours * 30; // 30 degrees per hour

  // Apply the initial positions of the hands without animation
  gsap.set(secondHand, { rotate: secondAngle });
  gsap.set(minuteHand, { rotate: minuteAngle });
  gsap.set(hourHand, { rotate: hourAngle });
}

// Start clock and update every second
initializeClock();
setInterval(updateClock, 0.03);

gsap.from(".bigFlowerPc",{
    rotate:0,
    stagger:0.3,
})
gsap.from(".bigFlowerMain",{
    rotate:360,
    delay:3,
    duration:60,
    repeat:-1,
    ease:"none"
})
