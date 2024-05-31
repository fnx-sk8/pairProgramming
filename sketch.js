function setup() {
    createCanvas(800, 1200);
    textAlign(CENTER, CENTER);
    textSize(60);
   
}

function draw() {
    background('#E24672');


    fill('white')
    text('World Time Zones', width / 2, 150);

   

    fill(51); 
    noStroke();

    ellipse(150, 350, 200, 200); // Top Left - Los Angeles
    ellipse(400, 350, 200, 200); // Top Midddle - New York
    ellipse(650, 350, 200, 200); // Top Right - 

    ellipse(400, 600, 200, 200); // Middle Middle -
    ellipse(150, 600, 200, 200); // Middle Left -
    ellipse(650, 600, 200, 200); // Middle Right -


    ellipse(150, 850, 200, 200); // Bottom Left -
    ellipse(400, 850, 200, 200); // Bottom Middle -
    ellipse(650, 850, 200, 200); // Bottom Right -



// Group Project - Eli Fenix, Maddie Leyva, Erin Lee. 
   


}

