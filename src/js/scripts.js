var count         = 0,
    firstTapTime  = 0,
    prevTapTime   = 0;

function reset() {
  count = 0;
}

function tapTempo(e) {
  console.log('tapTempo started');
}

// $(document).keypress()