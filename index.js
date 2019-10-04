// console.log(process.argv)

// Requires
const rtoH = require('./rgb-to-hex');
const htoR = require('./hex-to-rgb');
const hexEqualsHsl = require("./hex-to-hsl");
const rgbEqualHsl = require('./rgb-to-hsl');
const pro = process.argv;



// rgb to hex & HSL
if(pro[2] === 'rgb') {
    var r = pro[3];
    var b = pro[4];
    var g = pro[5];
    var colorMe = `\x1b[38;2;${r};${g};${b}m%s\x1b[0m`;

    console.log(colorMe, "Hex: " + rtoH.rgbToHex(parseInt(pro[3]), parseInt(pro[4]), parseInt(pro[5])) );
   
    console.log(colorMe, rgbEqualHsl.rgb2hsl(parseInt(pro[3]), parseInt(pro[4]), parseInt(pro[5])))
} else {
    // hex to RGB & HSL
    console.log(htoR.hexToRgb(pro[2]))
    console.log(hexEqualsHsl.hexToHsl(pro[2]));
}






