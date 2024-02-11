import React, { useState } from 'react'

export function ColorSlider() {
  // Hooks
  const [hueValue, setHue] = useState<string | number>(
    Math.floor(Math.random() * 361)
  )
  const [saturationValue, setSaturation] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const [lightnessValue, setLightness] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )

  const newBackgroundColor = `hsl(${hueValue},${saturationValue}%,${lightnessValue}%)`
  const newStyle = {
    backgroundColor: newBackgroundColor,
  }

  function handleButton() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
  }

  return (
    <div>
      <header>
        <h1>HSL Color Picker</h1>
      </header>
      <main>
        <aside id="colorBox" style={newStyle}></aside>
        <section id="sliders" className="sliderStyle">
          <article id="hueSlider">
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
          <article id="saturationSlider">
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
          <article id="lightnessSlider">
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
