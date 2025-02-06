// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const dayMessages = {
        "Monday": "Happy Monday! Start your week with energy!",
        "Friday": "It's Friday! The weekend is near!",
        "default": "Have a wonderful day!"
    };

    const today = new Date().getDay();
    const dayName = daysOfWeek[today];
    const dayMessage = dayMessages[dayName] || dayMessages["default"];

    const responseObject = {
      welcomeMessage: `Hello, ${formattedName}! Welcome to our assistant app!`,
      dayMessage: dayMessage
    
    };
    res.json(responseObject);
    const filePath = path.join(__dirname, 'responses.json');
    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});

// to also save the responses to a file :-
// const express = require('express');
// const fs = require('fs').promises;
// const path = require('path');
// const app = express();

// app.get('/assistant/greet', async (req, res) => {
//     const name = req.query.name;

//     if (!name) {
//         return res.status(400).json({ error: 'Name query parameter is required' });
//     }

//     const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

//     const daysOfWeek = [
//         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//     ];
//     const dayMessages = {
//         "Monday": "Happy Monday! Start your week with energy!",
//         "Friday": "It's Friday! The weekend is near!",
//         "default": "Have a wonderful day!"
//     };

//     const today = new Date().getDay();
//     const dayName = daysOfWeek[today];
//     const dayMessage = dayMessages[dayName] || dayMessages["default"];

//     const responseObject = {
//         welcomeMessage: `Hello, ${formattedName}! Welcome to our assistant app!`,
//         dayMessage: dayMessage
//     };

//     res.json(responseObject);

//     const filePath = path.join(__dirname, 'responses.json');

//     try {
//         let existingData = [];
//         try {
//             const data = await fs.readFile(filePath, 'utf8');
//             existingData = JSON.parse(data);
//         } catch (error) {
//             if (error.code !== 'ENOENT') console.error('Error reading file:', error);
//         }

//         existingData.push(responseObject);
//         await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf8');
//         console.log('Response saved to responses.json');
//     } catch (error) {
//         console.error('Error writing file:', error);
//     }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });