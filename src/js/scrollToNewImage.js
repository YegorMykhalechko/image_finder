export default function scrollToNewImages() {
    const element = document.documentElement.clientHeight
    const position = document.documentElement.scrollTop + element;
    window.scrollTo({
        top: position,
        behavior: "smooth"
    })
}