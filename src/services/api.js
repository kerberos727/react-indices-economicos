
export const getIndices = async () => {
    const url = "https://mindicador.cl/api";
  
    const resp = await fetch(url);
    const data = await resp.json();

    let newData = [];

    Object.entries(data).map( (value,i) => {
    if (i > 2){
        // console.log(value);
        newData.push(value[1]);
    } 
    // console.log('newData', newData);
    })
    return newData
  };