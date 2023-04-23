AWS.config.update({
    accessKeyId: 'AKIAIOSFODNN7',
    secretAccessKey: ' wJalrXUtnFEMI/K7MDENG',
    region: 'us-west-2'
});
  
const getData = () => {
    fetch('https://execute-api.us-west-2.amazonaws.com/tinyML')
        .then((response) => response.json())
        .then((data) => {
            console.log('Received data: ', data);
            const result = data.result[0];
            console.log('Result: ', result);
        })
        .catch((error) => console.error('Error: ', error));
}


// data structure
//   {
//     "result": {
//       "0": "unhealthy"
//     }
//   }