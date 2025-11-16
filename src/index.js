const text = "As someone who has somehow turned the supposedly innocent habit of checking crypto prices into a full-blown emotional roller coaster powered by caffeine, denial, and a level of optimism that should probably be studied by scientists, I honestly cannot help but laugh in a confused and slightly unhinged way when I see how every so-called Literalshit coin along with all the big fancy tokens are dancing around like they are being remote controlled by governments. It feels as if officials wake up, sip their morning coffee, and randomly press buttons labeled pump, dump, instant chaos, and catastrophic meltdown just to make the day a little more interesting.\n\nWhat was once advertised as a glorious decentralized financial revolution now looks more like a chaotic soap opera in which regulators drop unexpected announcements like plot twists nobody wanted, charts collapse with the grace of a penguin slipping on ice, and entire communities pretend everything is fine while clutching their portfolios like relics from an ancient tomb. The market swings so wildly that it makes my ex look like a model of emotional stability, and yet everyone still talks about being in it for the long run despite the long run clearly turning into a comedy show.\n\nIn the middle of all this absurdity I sometimes catch myself considering a complete career shift into something more predictable like farming potatoes or becoming a full time cloud watcher, yet here I remain with suspicious levels of dedication, watching the chaos unfold as if I am unable to look away from a train of nonsense speeding downhill. Even though logic says to walk away, curiosity anchors me to the spectacle, waiting to see how much more ridiculous the situation can possibly get and why Literalshit coin somehow manages to keep surprising me every single day.";
const textElement = document.getElementById('text');
const skipButton = document.getElementById('skipButton');
const textContainer = document.getElementById('textContainer');
const cursor = document.getElementById('cursor');

let index = 0;
let isSkipping = false;
let typingInterval;
function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        typingInterval=setTimeout(typeText, 30);
    } else if (isSkipping) {
        textElement.textContent = text;
    }
}

skipButton.addEventListener('click', () => {
    clearInterval(typingInterval);
    textElement.textContent = text;
    isSkipping = true;
    cursor.style.display = 'none';
});
typeText();

 const container = document.getElementById("cursor-trail-container");

  document.addEventListener("mousemove", function (e) {
    if (e.buttons && (e.buttons & 1)) return;

    const dot = document.createElement("div");

    dot.className = `
      w-3 h-3 rounded-full absolute pointer-events-none
      bg-blue-500
      shadow-[0_0_12px_6px_rgba(0,150,255,0.8)]
      animate-trailFade
    `;
    dot.setAttribute("aria-hidden", "true");

    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    dot.style.transform = "translate(-50%, -50%)";

    container.appendChild(dot);

    setTimeout(() => dot.remove(), 400);
  });