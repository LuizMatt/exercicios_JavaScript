function bhaskara(ax2, bx, c) {
    const delta = bx ** 2 - 4 * ax2 * c;

    if (delta < 0) {
        return "Delta é negativo";
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-bx + raizDelta) / (2 * ax2);
    const x2 = (-bx - raizDelta) / (2 * ax2);

    return [x1, x2];
}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, -3, 2)); 