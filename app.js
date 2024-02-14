


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
}) 


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    animateText();
});

function animateText() {
    const textAnimation = document.querySelector('.textAnimation');
    if (!textAnimation) {
        console.error("Element with class 'textAnimation' not found.");
        return;
    }

    const textArray = textAnimation.innerText.split('');
    let letter = 0;
    let junction = '';

    const animateTextInterval = setInterval(() => {
        if (letter < textArray.length) {
            junction += textArray[letter];
            textAnimation.innerText = junction;
            letter += 1;
        } else {
            clearInterval(animateTextInterval);
        }
    }, 250);
}