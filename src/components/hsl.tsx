import React, { useState } from 'react'

export function Hsl() {
  // Hooks
  const [hue, setHue] = useState<string | number>(
    Math.floor(Math.random() * 361)
  )
  const [saturation, setSaturation] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const [lightness, setLightness] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )

  const newBackgroundColor = `hsl(${hue},${saturation}%,${lightness}%)`
  const newStyle = {
    backgroundColor: newBackgroundColor,
    height: 50,
    width: 50,
    border: '1px black solid',
    margin: 24,
  }

  return (
    <>
      <div className="test">
        <div style={newStyle}></div>
        <div>
          <p>
            <input
              type="range"
              id="hue"
              name="hue"
              min="0"
              max="255"
              onChange={(event) => setHue(event.target.value)}
            />
            <label htmlFor="hue">Hue</label>
          </p>
          <p>
            <input
              type="range"
              id="saturation"
              name="saturation"
              min="0"
              max="100"
              onChange={(event) => setSaturation(event.target.value)}
            />
            <label htmlFor="saturation">Saturation</label>
          </p>
          <p>
            <input
              type="range"
              id="lightness"
              name="lightness"
              min="0"
              max="100"
              onChange={(event) => setLightness(event.target.value)}
            />
            <label htmlFor="lightness">Lightness</label>
          </p>
        </div>
      </div>
      <p>
        The color in HSL is hsl({hue}, {saturation}%, {lightness}%)
      </p>
    </>
  )
}
