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
/**
 * @function StopWatch
 * @param elem
 */
function Stopwatch(elem) {
  /**
   * the time var
   */
  let time = 0;
  /**
   * this var take the now time and save it
   */
  let offset;
  /**
   * this var set the interval in the start and delete it in the stop
   */
  let interval;

  /**
   * @function Update
   * this function update the time and send the time var to the time formatter function
   */
  function update() {
    /**
     * if the timer is on
     * add the time with the time Passed
     */
    if (this.isOn) {
      time += delta();
    }
    /**
     * send the time to the time formatter
     */
    elem.textContent = timeFormatter(time);
  }
  /**
   * @function Delta
   * @returns timePassed
   */
  function delta() {
    /**
     * culc the now time
     */
    let now = Date.now();
    /**
     * minus it from the offset to now the time passed
     */
    let timePassed = now - offset;
    /**
     * save it to the offset again
     */
    offset = now;
    /**
     * then return it to use it in the anther functions
     */
    return timePassed;
  }
  /**
   * @function TimeFormatter
   * @param {*} time
   */
  function timeFormatter(time) {
    time = new Date(time);

    /**
     * convert each one to string
     */
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    /**
     * this part done bc i dont want to delete the zero when the number is less than 10 so if the minutes is 1
     * it must appear like that 01
     */
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }
    /**
     * then return the format that i want ot display it
     */
    return minutes + ' : ' + seconds + ' . ' + milliseconds;
  }
  /**
   * @function Start
   * Global function
   */
  this.start = function () {
    /**
     * set the interval and bind the update
     */
    interval = setInterval(update.bind(this), 10);
    /**
     * save the time in the offset
     */
    offset = Date.now();
    /**
     * set is on to true
     */
    this.isOn = true;
  };
  /**
   * @function Stop
   * Global function
   */
  this.stop = function () {
    /**
     * clear the interval
     */
    clearInterval(interval);
    /**
     * set the interval to null
     */
    interval = null;
    /**
     * set the is on to false
     */
    this.isOn = false;
  };
  /**
   * @function reset
   * Global function
   */
  this.reset = function () {
    /**
     * set the time to zero
     */
    time = 0;
    /**
     * and update the clock
     */
    update();
  };

  this.isOn = false;
}
