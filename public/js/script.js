const createEmptyDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

const toggleDrum = (drumArrayName, index) => {
    var drumArray = getDrumArrayByName(drumArrayName);
    if (drumArray && index >= 0 && index < 16)
        drumArray[index] = !drumArray[index];
}

const getDrumArrayByName = (name) => {
    switch (name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
}

const clear = (drumArrayName) => {
    var drumArray = getDrumArrayByName(drumArrayName);
    if (drumArray)
        drumArray = drumArray.fill(false);
}

const invert = (drumArrayName) => {
    var drumArray = getDrumArrayByName(drumArrayName);
    if (drumArray)
        for (let i = 0; i < drumArray.length; i++)
            drumArray[i] = !drumArray[i];
        // });
}

//                  BONUS
const getNeighborPads = (x, y, size) => {
    const neighborPads = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1)
        return neighborPads;
    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    return neighborPads.filter((neighbor) => {
        return neighbor.every((val) => {
            return val >= 0 && val < size;
        });
    });
};
