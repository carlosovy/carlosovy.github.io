import katex from "katex"
import "katex/dist/katex.min.css"

export default function Latex({ math, inline = false }) {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: !inline,
  })

  return (
    <span
      className={inline ? "katex-inline" : "katex-block mb-4 text-lg text-white"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
