function toggle(node) {
    const subDrvo = node.nextElementSibling;

    if (subDrvo.style.display == 'none' || subDrvo.style.display == '') {
        subDrvo.style.display = 'block';
        node.innerHTML = node.innerHTML.replace('+', '-');
    } else {
        subDrvo.style.display = 'none';
        node.innerHTML = node.innerHTML.replace('-', '+');
    }
}