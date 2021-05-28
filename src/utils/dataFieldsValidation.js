
export default function dataFieldsValidation(data) {
    if(!data) return false;

    const data_map = Object.entries(data);

    data_map.map(day=> {
        if(!day.labels)  return false;
        if(!day.datasets)  return false;
        if(!day.datasets.data)  return false;    
        if(!day.datasets.data.length != day.labels.length)  return false;    
    })
       
    return true;
}