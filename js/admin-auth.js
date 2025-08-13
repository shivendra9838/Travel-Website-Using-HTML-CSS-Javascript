// Admin Authentication System
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

// Track logged in users - in a real system this would be connected to a database
let loggedInUsers = [];
let visitCount = 0;

// Initialize local storage for admin session and user tracking
function initAdminSystem() {
    // Check for existing logged-in users in localStorage
    const storedUsers = localStorage.getItem('loggedInUsers');
    if (storedUsers) {
        loggedInUsers = JSON.parse(storedUsers);
    }
    
    // Check if visit count exists in localStorage
    const storedVisitCount = localStorage.getItem('visitCount');
    if (storedVisitCount) {
        visitCount = parseInt(storedVisitCount);
    }
    
    // Check if admin is logged in
    const isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (!isAdminLoggedIn) {
        // If not logged in, redirect to admin login page
        window.location.href = 'admin-login.html';
    } else {
        // Update admin panel statistics
        updateAdminStats();
    }
}

// Function to authenticate admin
function authenticateAdmin(username, password) {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem('adminLoggedIn', 'true');
        return true;
    }
    return false;
}

// Function to log out admin
function logoutAdmin() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'admin-login.html';
}

// Function to update admin statistics
function updateAdminStats() {
    const userCountElement = document.getElementById('userCount');
    const visitCountElement = document.getElementById('visitCount');
    const destinationCountElement = document.getElementById('destinationCount');
    
    if (userCountElement) {
        userCountElement.textContent = loggedInUsers.length;
    }
    
    if (visitCountElement) {
        visitCountElement.textContent = visitCount;
    }
    
    if (destinationCountElement) {
        // This would normally fetch from a database, but for now use a placeholder
        const storedDestinations = localStorage.getItem('destinations');
        const destinationCount = storedDestinations ? JSON.parse(storedDestinations).length : 115;
        destinationCountElement.textContent = destinationCount;
    }
}

// Track new user login
function trackUserLogin(username, email) {
    const timestamp = new Date().toISOString();
    const userDetails = {
        username,
        email,
        loginTime: timestamp
    };
    
    // Add to logged in users array
    loggedInUsers.push(userDetails);
    
    // Update localStorage
    localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));
    
    // Update visit count
    visitCount++;
    localStorage.setItem('visitCount', visitCount.toString());
    
    // Update admin panel if open
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        updateAdminStats();
    }
}

// Function to get all logged in users
function getLoggedInUsers() {
    return loggedInUsers;
}

// Function to reset user tracking (for testing)
function resetUserTracking() {
    loggedInUsers = [];
    localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));
    visitCount = 0;
    localStorage.setItem('visitCount', visitCount.toString());
}

// This code connects to the login page to track new logins
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the admin page
    if (window.location.pathname.includes('admin.html')) {
        initAdminSystem();
        
        // Set up logout button
        const logoutButton = document.getElementById('admin-logout-btn');
        if (logoutButton) {
            logoutButton.addEventListener('click', logoutAdmin);
        }
        
        // Add user table display functionality
        displayLoggedInUsers();
    }
});

// Function to display logged in users in a table
function displayLoggedInUsers() {
    const userTableBody = document.getElementById('user-table-body');
    if (!userTableBody) return;
    
    userTableBody.innerHTML = '';
    
    loggedInUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        
        // Create avatar cell
        const avatarCell = document.createElement('td');
        const avatarWrapper = document.createElement('div');
        avatarWrapper.className = 'imgAvatarwraper';
        const img = document.createElement('img');
        // Use a random avatar from the collection
        const avatarIndex = (index % 10) + 1;
        img.src = `./assets/Avatar${avatarIndex}.png`;
        avatarWrapper.appendChild(img);
        avatarCell.appendChild(avatarWrapper);
        
        // Create username cell
        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;
        
        // Create email cell
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        
        // Create login time cell
        const loginTimeCell = document.createElement('td');
        const loginDate = new Date(user.loginTime);
        loginTimeCell.textContent = loginDate.toLocaleString();
        
        // Create ID cell
        const idCell = document.createElement('td');
        idCell.textContent = `USER-${index + 1000}`;
        
        // Create delete button cell
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn-small deleteUserBtn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            // Remove user from array
            loggedInUsers.splice(index, 1);
            // Update localStorage
            localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));
            // Refresh table
            displayLoggedInUsers();
            // Update stats
            updateAdminStats();
        });
        deleteCell.appendChild(deleteButton);
        
        // Add all cells to row
        row.appendChild(avatarCell);
        row.appendChild(usernameCell);
        row.appendChild(emailCell);
        row.appendChild(loginTimeCell);
        row.appendChild(idCell);
        row.appendChild(deleteCell);
        
        // Add row to table
        userTableBody.appendChild(row);
    });
}
