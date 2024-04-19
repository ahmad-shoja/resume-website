(() => {
    const circleProgresses = document.querySelectorAll(".circle__skill__progress");
    circleProgresses.forEach(circleProgress => {
        const circleProgressBBox = circleProgress.getBBox();
        const skillLevel = circleProgress.getAttribute("level")
        const radius = (circleProgressBBox.width + circleProgressBBox.height) / 4;
        const circumference = 2 * Math.PI * radius;
        const progressed = skillLevel * (circumference / 100);
        circleProgress.setAttribute("stroke-dasharray", `${progressed}, ${circumference - progressed}`);;
        circleProgress.setAttribute("stroke-dashoffset", `${circumference / 4}`);;
    });
})()