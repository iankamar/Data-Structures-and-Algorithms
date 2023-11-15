/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]-a[1]);

    let remaining = truckSize;
    let units = 0;

    boxTypes.forEach((bType)=> {
        let take = ( bType[0] < remaining ) ? bType[0] : remaining;
        remaining-=take;
        units+=(bType[1] * take);

        if(remaining === 0) {
            return;
        }
    })

    return units;
};
