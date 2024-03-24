const febHolidays = [
  
  "Happy Holi in advance my love! 🎉🌈❤️",
  "May this Holi bring more colors into your life and  🎨😊",
  "and fill it with joy and happiness. 🎨😊",
  "You're my sunshine, and I'm here to brighten your days ☀️😘",
  "You are strong, resilient, and capable of overcoming any challenge. 💪💖",
  "Together, we'll conquer all obstacles and create beautiful memories. 🌟💑",
  "Your smile is my favorite color, and I'll do everything to see it every day. 😊💕",
  "Believe in yourself, darling, for you are capable of achieving greatness. 🌟👏",
  "Your strength inspires me, and I'm grateful to have you by my side. 💪😍",
  "Forget the worries 🎉❤️",
  "I promise to stand by you, support you, and love you unconditionally. 💖😘",
  "You are loved, cherished, and cherished beyond words. ❤️🥰",
  "My dearest love, ❤️",
  "Every moment with you is precious. 💖😍",
  "You light up my world. 🌟😊",
  "I cherish every smile you give me. 😊💕",
  "You make my heart skip a beat. 💓😘",
  "You complete me in every way possible. 💑❤️",
  "Being with you is a dream come true. 💭😍",
  "You are more beautiful than words can express. 😍🌹",
  "I am grateful for your love every single day. ❤️🙏",
  "You are my soulmate and my best friend. 👫❤️",
  "I love you more than words can say. ❤️😘",
  "My love for you grows stronger each day. 💖🌱",
  "I am blessed to have you by my side. 🙌❤️",
  "You are the most amazing person I know. 😍💖",
  "You make my world brighter and better. 🌟😊",
  "I can't imagine my life without you. ❤️🌎",
  "You are the reason for my happiness. 😊❤️",
  "I am so lucky to have you in my life. 🍀😍",
  "Your love is the fuel that keeps my heart beating. 💓❤️",
  "You are the light at the end of my tunnel. 🕯️❤️",
  "You are my forever and always. ❤️🌟",
  "I Love You So much, my sweetheart. ❤️😘",
  
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
