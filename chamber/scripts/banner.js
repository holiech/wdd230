
function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

function isMeetAndGreetDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; 
}

if (isMeetAndGreetDay()) {
    const banner = document.getElementById('banner');
    banner.style.display = 'block';
    const closeBannerButton = document.getElementById('closeBanner');
    closeBannerButton.addEventListener('click', closeBanner);
}
