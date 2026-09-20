import { useEffect, useState } from 'react'

/** Types each phrase, pauses, deletes it, then moves to the next — forever. */
export default function Typewriter({ words, className = '' }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    const word = words[index % words.length]
    let delay = deleting ? 35 : 75
    if (!deleting && text === word) delay = 1700
    if (deleting && text === '') delay = 350

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words])

  return (
    <span className={className}>
      {text}
      <span className="caret" />
    </span>
  )
}
