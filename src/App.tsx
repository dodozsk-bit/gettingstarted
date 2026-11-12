import { useEffect, useRef, useState } from 'react'
import './App.css'

const questions = [
  { topic: '웹앱 기초', text: '웹앱은 웹 브라우저에서 사용할 수 있는 앱이다.', answer: true, explanation: '웹앱은 크롬이나 사파리 같은 웹 브라우저에서 사용할 수 있어요.' },
  { topic: 'AI 기초', text: 'AI가 알려주는 정보는 항상 정확하다.', answer: false, explanation: 'AI도 틀린 정보를 만들 수 있어요. 중요한 내용은 믿을 만한 자료로 다시 확인해 주세요.' },
  { topic: '웹 개발', text: 'HTML은 웹페이지의 기본 구조를 만드는 데 사용된다.', answer: true, explanation: 'HTML은 제목, 문단, 버튼처럼 웹페이지에 들어갈 요소와 구조를 정해요.' },
  { topic: 'AI 활용', text: 'AI는 글쓰기나 번역을 도와줄 수 있다.', answer: true, explanation: 'AI는 글의 초안을 쓰거나 다른 언어로 번역하는 일을 도와줄 수 있어요.' },
  { topic: '웹 디자인', text: 'CSS는 웹페이지의 색상이나 글자 크기를 바꿀 수 없다.', answer: false, explanation: 'CSS는 색상, 글자 크기, 간격 등 웹페이지의 모양을 꾸미는 데 사용해요.' },
]

function App() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const heading = useRef<HTMLHeadingElement>(null)
  const finished = index === questions.length
  const question = questions[index]
  const selected = answers[index]
  const answered = selected !== undefined
  const correctCount = answers.filter((answer, i) => answer === questions[i].answer).length

  useEffect(() => {
    if (index > 0) heading.current?.focus()
  }, [index])

  function restart() {
    setAnswers([])
    setIndex(0)
    heading.current?.focus()
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="./" aria-label="OX 한 입 홈"><span className="brand-mark">ox</span> OX 한 입<span className="brand-dot">.</span></a>
        <span className="header-note">작게 배우고, 가볍게 도전해요</span>
      </header>
      <main>
        <div className="intro"><span className="eyebrow">하루 한 입 지식</span><h1>웹과 AI, 얼마나 알고 있나요?</h1><p>어려운 용어 없이, OX로 알아보는 디지털 기초.</p></div>
        <section className="quiz-card" aria-label="웹과 AI OX 퀴즈">
          <div className="card-top"><span className="pill">{finished ? '도전 완료' : '가볍게 시작하는 기초 퀴즈'}</span><span className="question-count">{finished ? '5 / 5' : `${index + 1} / 5`}</span></div>
          <div className="progress" role="progressbar" aria-label="답변한 문제" aria-valuemin={0} aria-valuemax={5} aria-valuenow={answers.length}><div style={{ width: `${answers.length * 20}%` }} /></div>
          {finished ? (
            <div className="result">
              <span className="result-symbol" aria-hidden="true">✦</span>
              <h2 ref={heading} tabIndex={-1}>다섯 문제, 모두 풀었어요!</h2>
              <p>작은 도전이 새로운 지식이 되었어요.</p>
              <div className="score">{correctCount * 20}<span> / 100점</span></div>
              <p className="score-note">총 5문제 중 {correctCount}문제 정답 · 한 문제당 20점</p>
              <button className="next-button" onClick={restart}>다시 풀기 <span aria-hidden="true">↻</span></button>
            </div>
          ) : (
            <>
              <div className="question-body"><span className="topic">문제 {String(index + 1).padStart(2, '0')} <span>· {question.topic}</span></span><h2 ref={heading} tabIndex={-1}>{question.text}</h2><p>맞으면 O, 틀리면 X를 골라 주세요.</p></div>
              <div className="answer-options">{[true, false].map((value) => (
                <button key={String(value)} className={`answer-button ${value ? 'option-o' : 'option-x'} ${selected === value ? 'selected' : ''}`} disabled={answered} aria-label={`${value ? 'O' : 'X'} ${value ? '맞아요' : '아니에요'}`} aria-pressed={selected === value} onClick={() => { if (!answered) setAnswers([...answers, value]) }}><span className="answer-symbol" aria-hidden="true">{value ? 'O' : 'X'}</span><span>{value ? '맞아요' : '아니에요'}</span></button>
              ))}</div>
              {answered ? (
                <div className="answer-area"><div className={`feedback ${selected === question.answer ? 'correct' : 'incorrect'}`} role="status"><strong>{selected === question.answer ? '정답이에요!' : '아쉬워요!'} 정답은 {question.answer ? 'O' : 'X'}예요.</strong><p>{question.explanation}</p></div><button className="next-button" onClick={() => setIndex(index + 1)}>{index === 4 ? '결과 보기' : '다음 문제'} <span aria-hidden="true">→</span></button></div>
              ) : <div className="answer-hint"><span aria-hidden="true">✧</span> 천천히 생각해 보세요. 시간 제한은 없어요.</div>}
            </>
          )}
        </section>
        <div className="quiz-meta"><span>쉬운 문제 5개</span><span aria-hidden="true">·</span><span>약 1분</span><span aria-hidden="true">·</span><span>부담 없이 도전</span></div>
      </main>
      <footer>오늘의 작은 배움, 내일의 새로운 가능성.</footer>
    </div>
  )
}
export default App
