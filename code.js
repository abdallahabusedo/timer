function StopWatch(elem) {
  let Time = 0;
  let Interval;
  let Offset;

  function Update() {
    if (this.IsOn) {
      Time += Delta();
    }
    elem.textContent = TimeFormatter(Time);
  }
  function Delta() {
    let now = Date.now();
    let TimePassed = now - Offset;
    Offset = now;
    return TimePassed;
  }
  function TimeFormatter(times) {
    time = new Date(times);
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return minutes + ' : ' + seconds + ' . ' + milliseconds;
  }

  this.Start = function () {
    Interval = setInterval(update.bind(this), 10);
    offset = Date.now();
    this.IsON = true;
  };
  this.Reset = function () {
    time = 0;
    Update();
  };
  this.Stop = function () {
    clearInterval(Interval);
    Interval = null;
    this.IsON = false;
  };
  this.IsON = false;
}

