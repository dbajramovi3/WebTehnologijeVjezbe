function toggle(node) {
    const subTree = node.nextElementSibling;

    if (subTree.style.display === 'none' || subTree.style.display === '') {
        subTree.style.display = 'block';
        node.innerHTML = node.innerHTML.replace('+', '-');
    } else {
        subTree.style.display = 'none';
        node.innerHTML = node.innerHTML.replace('-', '+');
    }
}