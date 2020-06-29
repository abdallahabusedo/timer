/* @@@@@@@    @@@@@@    @@@@@@   @@@  @@@@@@@    @@@@@@    @@@@@@   @@@  @@@      @@@@@@@   @@@@@@   @@@@@@@   @@@@@@@@
   @@@@@@@@  @@@@@@@@  @@@@@@@   @@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@ @@@     @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@
   @@!  @@@  @@!  @@@  !@@       @@!  @@!  @@@  @@!  @@@  @@!  @@@  @@!@!@@@     !@@       @@!  @@@  @@!  @@@  @@!
   !@!  @!@  !@!  @!@  !@!       !@!  !@!  @!@  !@!  @!@  !@!  @!@  !@!!@!@!     !@!       !@!  @!@  !@!  @!@  !@!
   @!@@!@!   @!@  !@!  !!@@!!    !!@  @!@  !@!  @!@  !@!  @!@  !@!  @!@ !!@!     !@!       @!@  !@!  @!@  !@!  @!!!:!
   !!@!!!    !@!  !!!   !!@!!!   !!!  !@!  !!!  !@!  !!!  !@!  !!!  !@!  !!!     !!!       !@!  !!!  !@!  !!!  !!!!!:
   !!:       !!:  !!!       !:!  !!:  !!:  !!!  !!:  !!!  !!:  !!!  !!:  !!!     :!!       !!:  !!!  !!:  !!!  !!:
   :!:       :!:  !:!      !:!   :!:  :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!     :!:       :!:  !:!  :!:  !:!  :!:
    ::       ::::: ::  :::: ::    ::   :::: ::  ::::: ::  ::::: ::   ::   ::      ::: :::  ::::: ::   :::: ::   :: ::::
    :         : :  :   :: : :    :    :: :  :    : :  :    : :  :   ::    :       :: :: :   : :  :   :: :  :   : :: ::
*/
function Stopwatch(elem) {
  let time = 0;
  let offset;
  let interval;

  function update() {
    if (this.isOn) {
      time += delta();
    }

    elem.textContent = timeFormatter(time);
  }

  function delta() {
    let now = Date.now();
    let timePassed = now - offset;

    offset = now;

    return timePassed;
  }

  function timeFormatter(time) {
    time = new Date(time);

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

  this.start = function () {
    interval = setInterval(update.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
  };

  this.stop = function () {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  };

  this.reset = function () {
    time = 0;
    update();
  };

  this.isOn = false;
}
