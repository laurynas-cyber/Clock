window.addEventListener("load", (_) => {
  const seconds = document.querySelector(".seconds-container");
  const minutes = document.querySelector(".minutes-container");
  const hours = document.querySelector(".hour-container");
  const date = new Date();

  const HoursOption = [];

  for (let i = 0; i < 12; i++) {
    HoursOption.push(i * 30);
  }

  for (let i = 0; i < 12; i++) {
    HoursOption.push(i * 30);
  }

  console.log(HoursOption[date.getHours()]);

  seconds.style.rotate = date.getSeconds() * 6 + "deg";
  minutes.style.rotate = date.getMinutes() * 6 + "deg";
  hours.style.rotate =
    HoursOption[date.getHours()] + date.getMinutes() / 2 + "deg";

  class Handcount {
    constructor() {
      this.getObjseconds = date.getSeconds();
      this.getObjminutes = date.getMinutes();
      this.rotateSecValue = this.getObjseconds * 6;
      this.rotateMinValue = this.getObjminutes * 6;
      this.TwominutesEqualOneHourDeg = 0;
      this.rotateHourValue =
        HoursOption[date.getHours()] + date.getMinutes() / 2;
    }

    add6degSecond() {
      this.getObjseconds += 1;
      this.rotateSecValue += 6;
    }

    add6degMinute() {
      this.rotateMinValue += 6;
      this.TwominutesEqualOneHourDeg++;
    }
    add6degHour() {
      this.rotateHourValue += 1;
    }

    ResetGetObjSeconds() {
      this.getObjseconds = 0;
    }
  }

  const handcount = new Handcount();
  function PushOneSec(hand) {
    handcount.add6degSecond();
    seconds.style.rotate = `${handcount.rotateSecValue}deg`;

    if (handcount.getObjseconds == 60) {
      handcount.add6degMinute();
      handcount.ResetGetObjSeconds();
      minutes.style.rotate = `${handcount.rotateMinValue}deg`;
    }

    if (handcount.TwominutesEqualOneHourDeg == 2) {
      handcount.TwominutesEqualOneHourDeg = 0;
      handcount.add6degHour();
      hours.style.rotate = `${handcount.rotateHourValue}deg`;
    }
  }

  setInterval(PushOneSec, 1000);
});

// 1 valandos laipsnis DEG = 12 minutės DEG
// 6 Mintės deg = 1 MIN
// 50 min = 300 deg = 25 deg
// 25 min = 120 deg = 10 deg