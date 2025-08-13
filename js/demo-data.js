// Demo data for testing admin panel
function addDemoUsers() {
    const demoUsers = [
        {
            username: "John Doe",
            email: "john@example.com", 
            loginTime: "2025-08-13T15:30:00.000Z"
        },
        {
            username: "Alice Smith",
            email: "alice@example.com",
            loginTime: "2025-08-13T16:15:00.000Z"
        },
        {
            username: "Bob Johnson", 
            email: "bob@example.com",
            loginTime: "2025-08-13T16:45:00.000Z"
        },
        {
            username: "Emma Wilson",
            email: "emma@example.com",
            loginTime: "2025-08-13T17:00:00.000Z"
        }
    ];

    // Add demo users to localStorage
    localStorage.setItem('loggedInUsers', JSON.stringify(demoUsers));
    localStorage.setItem('visitCount', '4');
    
    console.log('Demo users added for testing admin panel');
}

// Only add demo data if there are no existing users
if (!localStorage.getItem('loggedInUsers') || JSON.parse(localStorage.getItem('loggedInUsers')).length === 0) {
    addDemoUsers();
}
