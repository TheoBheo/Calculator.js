const prompt = require('prompt-sync')();

// main
console.log("************************************");
console.log("         THEO CALCULATOR V1         ");
console.log("        - Javascript Edition        ");
console.log("************************************");
let option;
option = prompt("What do you want to calculate? ");
while(option == "" || option == null){
    option = prompt("What do you want to calculate? ");
}
switch(option){
    case 'perimeter':
        perimeter(); 
    case 'area':
        area();
    case 'volume':
        volume();    
    case 'hypotenuse':
        hypotenuse();    
    case 'temperature':
        temperature();   
    case 'notation':
        notation();     
}
end();

// perimeter
function perimeter(){
    let figure;
    figure = prompt("What figure do you want to work with? "); 
    while(figure == "" || figure == null){
        figure = prompt("What figure do you want to work with? "); 
    }   
    switch(figure){
        case 'square':
                let side001;
                perimeter = (side001*4); 
                side001 = prompt("What's the side? ");
                console.log("The perimeter is " + perimeter);
        case 'triangle':
                    let side002;
                    perimeter = (side002*3); 
                    side002 = prompt("What's the side? ");
                    console.log("The perimeter is " + perimeter);
        case 'rectangle':
                    let side003;
                    let side004;
                    perimeter = ((side003*2)+(side004*2)); 
                    side003 = prompt("What's the side AB? ");
                    side004 = prompt("What's the side BC? ");
                    console.log("The perimeter is " + perimeter);            
        case 'pentagon':
                let side005;
                perimeter = (side005 * 5); 
                side005 = prompt("What's the side? ");
                console.log("The perimeter is " + perimeter);                 
       case 'hexagon':
            let side006;
            perimeter = (side006 * 6); 
            side006 = prompt("What's the side? ");
            console.log("The perimeter is " + perimeter);                 
       }       
   }

// area
function area(){
    let figure;
    figure = prompt("What figure do you want to work with? ");
    while(figure == "" || figure == null){
        figure = prompt("What figure do you want to work with? "); 
    }   
    switch(figure){
        case 'square':
            let side01;
            area = (side01*side01);
            side01 = prompt("What's the side? ");
            console.log("The area is " + area);
        case 'triangle':
            let side02;
            let height02;
            area = (side02*height02/2);
            side02 = prompt("What's the side? ");
            height02 = prompt("What's the height? ")
            console.log("The area is " + area);
        case 'rectangle':
            let side03;
            let height03;
            area = (side03*height03);
            side03 = prompt("What's the side? ");
            height03 = prompt("What's the height? ")
            console.log("The area is " + area);     
        case 'pentagon':
            let side04;
            const n04 = 0.688;
            side04 = prompt("What's the side? ");
            perimeter = (side04*5);
            area = (perimeter*n04/2);
            area = Math.round(area);
            console.log("The area is " + area);    
        case 'hexagon':
            let side05;
            const n05 = 0.866;
            side05 = prompt("What's the side? ");
            perimeter = (side05*6);
            area = (perimeter*n05/2);
            area = Math.round(area);
            console.log("The area is " + area);                         
    }
}

// volume
function volume(){
    let figure;
    const PI = 3.14;
    figure = prompt("What figure do you want to work with? ");
    while(figure == "" || figure == null){
        figure = prompt("What figure do you want to work with? "); 
    }   
    switch(figure){
        case 'cube':
            let side001 = prompt("What's the side? ");
            volume = (side001*side001*side001);
            console.log("The volume is " + volume);
        case 'pyramid':
            let side002 = prompt("What's the base side? ");
            let height002 = prompt("What's the height? ");
            volume = (side002*height002);    
            console.log("Your volume is " + volume);
        case 'parallelepiped':
            let side003 = prompt("What's the side?");
            let height003 = prompt("What's the height? ");
            volume = (side003*height003);    
            console.log("Your volume is " + volume);        
        case 'sphere':
            let radius01 = prompt("What's the radius? ");
            volume = ((4*radius01*PI)/3); 
            volume = Math.round(volume);   
            console.log("Your volume is " + volume);       
        case 'cylinder':
            let radius02 = prompt("What's the radius? ");
            let height02 = prompt("What's the height? ");
            volume = (PI*(radius02*radius02)*height02);  
            volume = Math.round(volume);
            console.log("Your volume is " + volume);           
    }
}


// hypotenuse
function hypotenuse(){
    let side1;
    let side2;
    side1 = prompt("What's the first side? ");
    side2 = prompt("What's the second side? ");        
    hypotenuse = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
    console.log("The hypotenuse is " + hypotenuse);
}

// temperature
function temperature(){
    let opt = prompt("What do you want to convert it to? ");
    switch(opt){
        case 'Celsius':
                let temp1 = prompt("What's the temperature? ");
                new_temp = (temp1 - 32) * (5/9);
                new_temp = new_temp.Math.round();
                console.log(new_temp);
        case 'Fahrenheit':
                let temp2 = prompt("What's the temperature? ");
                new_temp = temp2 * 9 / 5 + 32;
                new_temp = new_temp.Math.round();
                console.log(new_temp);
    }
}

// notation
function notation(){
    let num = prompt("What's the number? ");
    num = Math.round();
    let len_num = num.length;
    let notation;
    if(len_num >= 1 && len_num < 2){
        const notation = "10¹"
    }
    else if(len_num >= 2 && len_num < 3){
        const notation = "10²"
    }
    else if(len_num >= 3 && len_num < 4){
        const notation = "10³"
    }
    else if(len_num >= 4 && len_num < 5){
        const notation = "10⁴"
    }
    else{
        console.log("Damn that's fr too long!")
    }
    console.log("Your number as scientific nationation is " + num + "*" + notation)
}


// end screen
function end(){
    console.log("************************************");
    console.log("         THEO CALCULATOR V1         ");
    console.log("        - Thanks for playing        ");
    console.log("************************************");
}
