
AWS.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_KEY',
    region: 'YOUR_REGION'
});

const getData = () => {
    fetch('YOUR_API_GATEWAY_URL')
        .then((response) => response.json())
        .then((data) => {
            console.log('Received data:', data);
            // Update your HTML elements with the received data
        })
        .catch((error) => console.error('Error:', error));
}
