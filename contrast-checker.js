function calculateLuminance(color) {
  var triplets = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  for (var rgb = [], weighted = [], t = 1; t <= 3; t++) {
    rgb[t] = parseInt(triplets[t], 16) / 255;
    weighted[t] = rgb[t] <= 0.03928 ? rgb[t] / 12.92 : Math.pow((rgb[t] + 0.055) / 1.055, 2.4);
  }
  return 0.2126 * weighted[1] + 0.7152 * weighted[2] + 0.0722 * weighted[3];
}

function calculateContrast(color1, color2) {
  var L1 = calculateLuminance(color1);
  var L2 = calculateLuminance(color2);
  var contrast = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  return +contrast.toFixed(2);
}
