const getData = async function (URL){
    return await fetch(URL)
    .then(response => response.json())
    .then(data => {
        return data;
    }).catch((error) => {
        console.log(error);
    })
}

export default getData;