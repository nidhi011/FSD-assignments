// Set the date of your event (year, month (0-indexed), day, hour, minute, second)
const eventDate = new Date('2024-12-31T00:00:00');

function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = eventDate - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);

    if (timeDifference <= 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "Event has started!";
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
