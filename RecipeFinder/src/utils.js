
export const categorybyId = {
    0 : "clear",
    1 : "cookie",
    2 : "cake",
    3 : "cupcake",
    4 : "pastry",
}


// object with category as keys and id as value 
export const categoryIdbyText = Object.keys(categorybyId).reduce((obj, id) => {
    obj[categorybyId[id]] = id;
    return obj;
  }, {})