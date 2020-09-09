const filterHouse = (data, house) => {
  const nuevoArr = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].house === house) {
       nuevoArr.push(data[i]);
      }
  } 
     return nuevoArr; 
 }; 
 export default filterHouse; 

