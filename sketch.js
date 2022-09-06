//This is a javascript comment!!



function setup() {
    createCanvas(windowWidth, windowHeight);
    
}
  
function draw() {
   //left side
    background(0)
    ellipseMode(CORNER);
    fill('Orange');
    ellipse(25, 25, 1000, 1000); // Outer white ellipse
    fill('yellow');
    ellipse(25, 25, 500, 500); // Outer white ellipse
    ellipseMode(CORNERS);
    fill('rgb(139,0,139)');
    ellipse(25, 25, 250, 250); // Inner gray ellipse
    //right side
    background(0)
    ellipseMode(CORNER);
    fill('Orange');
    ellipse(25, 25, 1000, 1000); // Outer white ellipse
    fill('yellow');
    ellipse(25, 25, 500, 500); // Outer white ellipse
    ellipseMode(CORNERS);
    fill('rgb(139,0,139)');
    ellipse(25, 25, 250, 250); // Inner gray ellipse
    
    //left side
    
    
    fill(255,0,0);
    rect(0,0,windowWidth/12, windowHeight);
     
    fill(0,255,0);
    rect(windowWidth/12, 0, windowWidth/12, windowHeight);
    
    fill(0,0,255);
    rect((windowWidth/12)*2, 0, windowWidth/12, windowHeight);
    
    fill(255,0,0);
    rect((windowWidth/12)*3, 0, windowWidth/12, windowHeight);
   
    fill(0,255,0);
    rect((windowWidth/12)*4, 0, windowWidth/12, windowHeight);

    fill(0,0,255);
    rect((windowWidth/12)*5, 0, windowWidth/12, windowHeight);
    

    ellipseMode(CORNER);
    fill('Orange');
    ellipse(25, 25, 1000, 1000); // Outer white ellipse
    fill('yellow');
    ellipse(25, 25, 500, 500); // Outer white ellipse
    ellipseMode(CORNERS);
    fill('rgb(139,0,139)');
    ellipse(25, 25, 250, 250); // Inner gray ellipse
    
    
    //right side
   
    
    fill(0);
    rect(windowWidth/2, 0, windowWidth/2, windowHeight/6);

    fill(255);
    rect(windowWidth/2, windowHeight/6, windowWidth/2, windowHeight/6);

    fill(0);
    rect(windowWidth/2, (windowHeight/6)*2, windowWidth/2, windowHeight/6);

    fill(255);
    rect(windowWidth/2, (windowHeight/6)*3, windowWidth/2, windowHeight/6);

    fill(0);
    rect(windowWidth/2, (windowHeight/6)*4, windowWidth/2, windowHeight/6);
   
    fill(255);
    rect(windowWidth/2, (windowHeight/6)*5, windowWidth/2, windowHeight/6);

    beginShape(TRIANGLE_STRIP);
   
    
    
    ellipse(CORNERS);
    fill('white');
    ellipse(350, 10, 4000, 4000); // Inner gray ellipse
    fill('black');
    ellipse(250, 25, 5000, 5000); // Outer white ellipse
    noStroke();
    ellipse(250, 25, 5000, 5000);
 
   
    
}
