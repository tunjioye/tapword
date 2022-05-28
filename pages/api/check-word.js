// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import words from 'an-array-of-english-words'

const wordExists = (word) => words.indexOf(word.trim()) !== -1

export default function handler(req, res) {
  const { word = '' } = req.query || {}
  res.status(200).json({
    exists: wordExists(word),
    word,
  })
}
