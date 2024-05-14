# Clock

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


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* transform: rotate(0deg); */

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.axisX {
  border: solid 1px red;
  width: 100%;
  position: absolute;
}

.axisY {
  border: solid 1px red;
  transform: rotate(90deg);
  width: 100vh;
  position: absolute;
}

.borderClock {
  width: 700px;
  height: 700px;
  border: 4px solid black;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bold-check {
  width: 10px;
  height: 696px; /*or 100%*/
  position: absolute;
  left: 49.4%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    div {
      background-color: black;
      width: 100%;
      height: 20px;
    }
  }
}

.min-check {
  position: absolute;
  width: 3px;
  height: 696px;
  background-color: black;
  left: 50%;
  z-index: -5;
}

.min-check::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 696px;
  background-color: black;
  /* left: 49.4%; */
  rotate: 6deg;
}

.coverMinutes {
  border-radius: 50%;
  background-color: white;
  position: absolute;
  width: 98%;
  height: 98%;
  z-index: -1;
}

.middleCover {
  border-radius: 50%;
  background-color: black;
  position: absolute;
  left: 49%;
  width: 20px;
  height: 20px;
  z-index: 11;
}

.seconds-container {
  width: 10px;
  height: 620px;
  position: absolute;
  left: 49.4%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.seconds {
  background-color: red;
  width: 6px;
  height: 50%;
  padding: 1px;
}

.minutes-container {
  width: 10px;
  height: 600px;
  position: absolute;
  left: 49.4%;
  z-index: 9;
  display: flex;
  transition: rotate 0.5s cubic-bezier(0.01, 0.97, 0.98, 1.19);
}

.minutes {
  background-color: black;
  width: 100%;
  height: 50%;
  border: solid 1px white;
  border-spacing: 0px;
  box-shadow: none;
}

.hour-container {
  width: 15px;
  height: 500px;
  position: absolute;
  left: 49.4%;
  z-index: 8;
  display: flex;
  transition: rotate 0.5s cubic-bezier(0.01, 0.97, 0.98, 1.19);
}

.hours {
  background-color: black;
  width: 100%;
  height: 50%;
  border-radius: 4px;
}
# Clock
