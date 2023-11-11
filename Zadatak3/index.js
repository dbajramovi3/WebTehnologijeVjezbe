function calculateVolume() {
    const radius = document.getElementById('radius').value;

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('result').value = volume.toFixed(4);
}