// setup() is called once at page-load
function setup() {
    createCanvas(800, 600); // make an HTML canvas element width x height pixels
    textFont('monospace');
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();   // 0–23
    let min = minute(); // 0–59
    let sec = second(); // 0–59

    background(0);

    // Margin on both sides
    let margin = 50;

    // --- HOUR BAR (24 blocks) ---
    let hourBlocks = 24;
    let hourBlockWidth = (width - 2 * margin) / hourBlocks;
    for (let i = 0; i < hourBlocks; i++) {
        if (i < hr) {
            fill(156,255,1); // filled blocks
        } else {
            fill(30);
        }
        rect(margin + i * hourBlockWidth, 215, hourBlockWidth - 2, 40, 5);
    }

   

    // --- MINUTE BAR (60 blocks) ---
    let minuteBlocks = 60;
    let minuteBlockWidth = (width - 2 * margin) / minuteBlocks;
    for (let i = 0; i < minuteBlocks; i++) {
        if ((i < min) && (sec % 2 == 0) {
            fill(253,34,49); // filled blocks
        } else {
            fill(30);
        }
        rect(margin + i * minuteBlockWidth, 260, minuteBlockWidth - 1, 40, 3);
    }

    // Minute tick marks every 15 minutes + ends
    stroke(0);
    strokeWeight(1);
    textSize(14);
    fill(255);
    textAlign(CENTER, TOP);
    for (let i = 0; i <= minuteBlocks; i += 15) {
        let x = margin + i * minuteBlockWidth;
        text(i + "m", x, 305);
    }
    noStroke();
  
   // Hour tick marks every 6 hours + ends
    strokeWeight(1);
    textSize(14);
    fill(255);
    textAlign(CENTER, TOP);
    for (let i = 0; i <= hourBlocks; i += 6) {
        let x = margin + i * hourBlockWidth;
        stroke(255);
        line(x, 215, x, 300);
        stroke(0);
        text(i + "h", x, 200);
    }
    noStroke();
}

