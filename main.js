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
 * store the element from the html by get element by id
 */
let timer = document.getElementById('timer');
let toggleBtn = document.getElementById('toggle');
let resetBtn = document.getElementById('reset');
/**
 * crate a new var that have the time in it
 */
let watch = new Stopwatch(timer);

function start() {
  toggleBtn.textContent = 'Stop';
  watch.start();
}

function stop() {
  toggleBtn.textContent = 'Start';
  watch.stop();
}
/**
 * this is add event listener that is click if i click in the toggle btn it must do it
 */
toggleBtn.addEventListener('click', function () {
  /**
   * conditional statement the if it true do stop if false do start
   */
  watch.isOn ? stop() : start();
});

resetBtn.addEventListener('click', function () {
  /**
   * reset if i click in the reset btn
   */
  watch.reset();
});
