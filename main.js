let timer = document.getElementById('timer');
let toggleBtn = document.getElementById('toggle');
let resetBtn = document.getElementById('reset');

let watch = new Stopwatch(timer);

function start() {
  toggleBtn.textContent = 'Stop';
  watch.start();
}

function stop() {
  toggleBtn.textContent = 'Start';
  watch.stop();
}

toggleBtn.addEventListener('click', function () {
  watch.isOn ? stop() : start();
});

resetBtn.addEventListener('click', function () {
  watch.reset();
});
