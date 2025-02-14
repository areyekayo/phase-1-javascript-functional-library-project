function getValues(collection){
    let values = [];
    if (typeof collection === "object") {
        values = Object.values(collection)
    }
    else {values = [...collection]}

    return values;
}

function myEach(collection, callback) {
    /* 
    iterates over the collection of elements (object or array),
    passing each element to the callback, returns the original unmodified collection
    */
   let values;
   if (typeof collection === "object") {
         values = Object.values(collection)
   } 
   else {values = collection}

   values.forEach((value) => callback(value))
   return collection
}


function myMap(collection, callback) {
    /*
    produces a new array of values by mapping each value in collection through
    a transformation function (callback). Returns the new array without modifying the original
    */
    let values = [];
    if (typeof collection === "object") {
        values = Object.values(collection)
    }
    else {values = [...collection]}

    //initialize empty array for new, modified values
    let newValues = []
    //modify each value with the callback, and push new values to newValues array
    for (const value of values){
        let newValue = callback(value)
        newValues.push(newValue)
    }

    return newValues

}

function myReduce(collection, callback, acc) {
    /*
    iterates through a collection of values and boils it down to a single value.
    acc starts at the value that's passed as an argument, and is updated to the return value of callback with each step. if a start value is not passed to myReduce, the first value of the collection should be used as the start value
    */
    let values = getValues(collection)

    let init;
    let startIndex = 0;

    //if acc is not passed, set init to first element in values, and startIndex to second element; otherwise set init to acc
    if (acc === undefined){
        init = values[0];
        startIndex = 1;
    } else {
        init = acc;
    }

    //loop through values starting with the startIndex and accumulate init with the callback and each value
    for (let i = startIndex; i < values.length; i++){
        init = callback(init, values[i]);
    }

    return init
    
}

function myFind(collection, predicate){
    /* 
    loops through collection and returns the first value that passes
    a truth test (predicate) or undefined if no values pass the test.
    */
    let values = getValues(collection);

    for (let value of values){
        if (predicate(value)){
            return value;
        }
    }
}


function myFilter(collection, predicate){
    /*
    looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). if no matches found, return an empty array
    */
    let values = getValues(collection)
    let matches = [];

    for (let value of values){
        if (predicate(value)){
            matches.push(value)
        }
    }
    return matches

}

function mySize(collection){
    /*
    return the number of values in the collection
    */
    let values = getValues(collection)

    return values.length
}

function myFirst(array, n){
    /*
    returns the first element of an array; passing n returns the first n elements of the array
    */

    if (n === undefined){
        return array[0]
    }
    else {
        return array.slice(0, n)
    }
}

function myLast(array, n){
    /*
    returns the last element of an array. Passiing n returns the last n elements of the array
    */

    if (n === undefined){
        return array[array.length - 1]
    }
    else {
        return array.slice(-n)
    }
}

function myKeys(object){
    /*
    retrieves all the names of the object's properties in an array
    */

    return Object.keys(object)
}

function myValues(object){
    /* 
    returns all of the values of the object's properties
    */
    return Object.values(object)
}