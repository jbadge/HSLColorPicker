import React, { useState } from 'react'

export function ColorSlider() {
  // Hooks
  const [hueValue, setHue] = useState<string | number>(
    Math.floor(Math.random() * 361)
  )
  const [saturationValue, setSaturation] = useState<string | number>(50)

  const [lightnessValue, setLightness] = useState<string | number>(50)

  const newBackgroundColor = `hsl(${hueValue},${saturationValue}%,${lightnessValue}%)`
  const newStyle = {
    backgroundColor: newBackgroundColor,
  }

  function handleButton() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(50)
    setLightness(50)
  }

  return (
    <div>
      <header>
        <h1>HSL Color Picker</h1>
      </header>
      <main>
        <div className="grouping">
          <aside id="colorBox" style={newStyle}></aside>
          <section id="sliderContainer">
            <article className="slider">
              <label htmlFor="hue" className="label">
                H
              </label>
              <input
                className="hue"
                type="range"
                id="hue"
                name="hue"
                min="0"
                max="360"
                value={hueValue}
                onChange={(event) => setHue(event.target.value)}
              />
              <input
                className="textBox"
                type="text"
                value={hueValue}
                maxLength={3}
              />
            </article>
            <article className="slider">
              <label htmlFor="saturation" className="label">
                S
              </label>
              <input
                className="saturation"
                type="range"
                id="saturation"
                name="saturation"
                min="0"
                max="100"
                value={saturationValue}
                onChange={(event) => setSaturation(event.target.value)}
              />
              <input
                className="textBox"
                type="text"
                value={saturationValue}
                maxLength={3}
              />
            </article>
            <article className="slider">
              <label htmlFor="lightness" className="label">
                L
              </label>
              <input
                className="lightness"
                type="range"
                id="lightness"
                name="lightness"
                min="0"
                max="100"
                value={lightnessValue}
                onChange={(event) => setLightness(event.target.value)}
              />
              <input
                className="textBox"
                type="text"
                value={lightnessValue}
                maxLength={3}
              />
            </article>
          </section>
        </div>
      </main>
      <footer>
        <button onClick={handleButton}>New Random Color</button>
        <div id="reference">
          <input
            className="hslTextBox"
            type="text"
            value={`hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`}
          />
        </div>
      </footer>
    </div>
  )
}
