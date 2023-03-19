import './styles.scss';

let i = 2;

const increment = () => {
    const next = ++i % 11;
    if (next < 2) return 2;
    return next;
}
const animation = document.querySelector(`.loader-${i}`)
// animation.addEventListener("animationend", (e) => {
//     const next = increment();
//     animation.className = "";
//     animation.className = `loader-${next}`;
// })
animation.addEventListener("animationiteration", (e) => {
    if (e.animationName.includes('pulsOut')) {
        const next = increment();
        animation.className = "";
        animation.className = `loader-${next}`;
    }
});