// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {//newPresetArray - "PUT"
    if (requestType === 'GET') {
        if (isValidIndex(index))
            return [200, presets[index]];
        else
            return [404]; //Not Found - index
    }
    else if (requestType === 'PUT') {
        if (isValidIndex(index)) {
            presets[index] = newPresetArray;
            return [200, presets[index]];
        }
        else
            return [404]; //Not Found - index
    }
    else
        return [400]; //Bad Request
};

function isValidIndex(index) {
    //return (index >= 0 && index <= 16) || null;
    return presets[index] || null;
}

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
