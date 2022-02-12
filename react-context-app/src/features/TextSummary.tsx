import { ReactElement } from 'react'

import { useAppContext } from 'context/AppContext'

import { Heading } from 'components/Heading'

const findLongestWord = (words: Array<string>) => {
  return words.reduce((acc: string, word: string) => {
    if (word.length > acc.length) {
      return word
    }

    return acc
  })
}

const findShortestWord = (words: Array<string>) => {
  return words.reduce((acc: string, word: string) => {
    if (word.length < acc.length) {
      return word
    }

    return acc
  })
}

const TextSummary = (): ReactElement => {
  // We can access query through the useAppContext hook
  const { query } = useAppContext()

  const allWords = query.split(' ')

  return (
    <div>
      <Heading variant={4}>Your text has:</Heading>
      <div>
        <p>Total letters: {query.match(/[A-Za-z]/g)?.length || 0}</p>
        <p>Total digits: {query.match(/[0-9]/g)?.length || 0}</p>
        <p>Total words: {query ? allWords.length : 0}</p>
        <p>Shortest word: {query ? findShortestWord(allWords) : '-'}</p>
        <p>Longest word: {query ? findLongestWord(allWords) : '-'}</p>
      </div>
    </div>
  )
}

export default TextSummary
