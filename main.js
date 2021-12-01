  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
    
  let seconds1 = 0;
  let seconds2 = 0;
  let seconds3 = 0;
  let seconds4 = 0;
  
  let interval;
    
  function countUp() {
    seconds1++;
    if(seconds1 / 10 == 1) {
      seconds2++;
      seconds1 = 0;
      if(seconds2 / 10 == 1) {
        seconds3++;
        seconds2 = 0;
        if(seconds3 / 10 == 1) {
          seconds4++;
          seconds3 = 0;
        }
      }
    }
    timer.innerHTML = seconds4 + ":" + seconds3 + ":" + seconds2 +":" +seconds1;
  }
  
  // 状態:初期 または Reset直後
  function setButtonStateInitial() {
    start.classList.remove('inactive'); // 活性
    stop.classList.add('inactive')    // 非活性
    reset.classList.add('inactive')   // 非活性
  }

  // 状態:タイマー動作中
  function setButtonStateRunning() {
    start.classList.add('inactive')   // 非活性
    stop.classList.remove('inactive');  // 活性
    reset.classList.remove('inactive')   // 非活性
  }

  // 状態:タイマー停止中
  function setButtonStateStopped() {
    start.classList.remove('inactive'); // 活性
    stop.classList.add('inactive')    // 非活性
    reset.classList.remove('inactive'); // 活性
  }

  // ボタンを'初期'状態とする
  setButtonStateInitial()
  
  
  start.addEventListener('click',function(){
    if(start.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateRunning();
    interval = setInterval(countUp,100);
    
  });

  stop.addEventListener('click', function() {
    if(stop.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateStopped();
    clearInterval(interval);
    
  });
  
  reset.addEventListener('click',function() {
    if(reset.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateInitial()
    clearInterval(interval);
    timer.innerHTML = "0:0:0:0";
    seconds1 = 0;
    seconds2 = 0;
    seconds3 = 0;
    seconds4 = 0;
  })  
 