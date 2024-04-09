// Function to set a cookie
function setCookie() {
    const cookieName = "exampleCookie";
    const cookieValue = "Hello, this is a sample cookie!";
    const expiryDays = 30; // Cookie expiration in days

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);

    const cookieString = `${cookieName}=${encodeURIComponent(cookieValue)}; expires=${expiryDate.toUTCString()}; path=/`;
    document.cookie = cookieString;

    alert("Cookie has been set!");
}

// Function to get a cookie
function getCookie() {
    const cookies = document.cookie.split(';');
    const cookieName = "exampleCookie";

    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(cookieName + '=')) {
            const cookieValue = decodeURIComponent(cookie.substring(cookieName.length + 1));
            document.getElementById('cookieValue').innerText = `Cookie value: ${cookieValue}`;
            return;
        }
    }

    document.getElementById('cookieValue').innerText = "Cookie not found!";
}

// Function to delete a cookie
function deleteCookie() {
    const cookieName = "exampleCookie";
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    alert("Cookie has been deleted!");
}
