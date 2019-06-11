# Color Contrast Ratio Checker for Accessible Colors

Check the contrast ratio between two colors according to the **WCAG 2.0** guidelines for contrast accessibility.

The compliance levels are two: **AA** and **AAA**, the latter being more restrictive.

## Usage

```javascript
calculateContrast("#ffffff", "#000000");
```

## Compliance Requirements

The required Contrast Ratio depends on the Compliance Level, Font Size and Font Weight.

<table>
  <thead>
    <tr>
      <td rowspan="2">Level</td>
      <td colspan="2">8-17px</td>
      <td colspan="2">18-23px</td>
      <td colspan="2">&gt; 24px</td>
    </tr>
    <tr>
      <td>regular</td>
      <td>bold</td>
      <td>regular</td>
      <td>bold</td>
      <td>regular</td>
      <td>bold</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AA</td>
      <td>4.5</td>
      <td>4.5</td>
      <td>4.5</td>
      <td>3.0</td>
      <td>3.0</td>
      <td>3.0</td>
    </tr>
    <tr>
      <td>AAA</td>
      <td>7.0</td>
      <td>7.0</td>
      <td>7.0</td>
      <td>4.5</td>
      <td>4.5</td>
      <td>4.5</td>
    </tr>
  </tbody>
</table>

---

The formula for calculating the contrast ratio can be found at:

https://www.w3.org/TR/WCAG20-TECHS/G18.html#G18-tests
