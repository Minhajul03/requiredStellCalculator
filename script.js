document.getElementById('steelCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const width = parseFloat(document.getElementById('width').value);
    const numWindows = parseInt(document.getElementById('numWindows').value);

    const outerSideSteel = 2 * height + 2 * width;
    const shutterSteel = 3 * height + 2 * width;
    const totalSteelPerWindow = outerSideSteel + shutterSteel;
    const totalSteelNeeded = totalSteelPerWindow * numWindows;

    const steel21Ft = 21;
    const steel18_5Ft = 18.5;

    const numSteel21Ft = Math.ceil(totalSteelNeeded / steel21Ft);
    const numSteel18_5Ft = Math.ceil(totalSteelNeeded / steel18_5Ft);

    document.getElementById('result').innerHTML = `
        <p>Total steel needed per window: ${totalSteelPerWindow.toFixed(2)} feet</p>
        <p>Total steel needed for ${numWindows} windows: ${totalSteelNeeded.toFixed(2)} feet</p>
        <p>Number of 21 feet steel pieces needed: ${numSteel21Ft}</p>
        <p>Number of 18.5 feet steel pieces needed: ${numSteel18_5Ft}</p>
    `;
});
