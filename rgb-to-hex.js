const ctoH = require('./comp-to-hex')

module.exports.rgbToHex = (r, g, b) => {
    return "#" + ctoH.componentToHex(r) + ctoH.componentToHex(g) + ctoH.componentToHex(b);
}