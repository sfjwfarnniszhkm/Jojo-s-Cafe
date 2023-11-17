function getVisitorCount() {
    if (localStorage.getItem("visitorCount") === null) {
        localStorage.setItem("visitorCount","0");
    }
    return parseInt(localStorage.getItem("visitorCount"));
}
function incrementVisitorCount() {
    const currentCount = getVisitorCount();
    const newCount = currentCount + 1;
    localStorage.setItem("visitorCount",newCount.toString());
    return newCount;
}
window.onload = function () {
    const visitorCount = incrementVisitorCount();
    document.getElementById("visitor-count").textContent = visitorCount;
};