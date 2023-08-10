// TODO: DEPRECATE THIS 
PROJECT_ID = "0a07e34a571ff0ace5a2fa946f5ad63b"
const mixpanelTrack = (data) => {

    const PROJECT_TOKEN = "0a07e34a571ff0ace5a2fa946f5ad63b"; // Get this from mixpanel.com/settings/project

    const events = [
        {
            "event": "my_test_event",
            "properties": {
                "time": Math.floor(Date.now() / 1000),
                "distinct_id": "test_user_1",
                "$insert_id": "04ce0cf4-a633-4371-b665-9b45317b4976",
                "city": "San Francisco"
            }
        },
        {
            "event": "another_event",
            "properties": {
                "time": Math.floor(Date.now() / 1000),
                "distinct_id": "test_user_2",
                "$insert_id": "3b033b9a-6bc9-4b70-90c3-a53e11f6896e",
                "city": "Seattle"
            }
        }
    ];

    fetch('https://api.mixpanel.com/import?strict=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(PROJECT_TOKEN + ':')
        },
        body: JSON.stringify(events)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}

mixpanelTrack({ 'event': "My first event." })