import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  const listPart = parts.map((part, index) =>
    <Part key={index} part={part} />
  )

  return (
    listPart
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((tot, part) => {
    return tot += part.exercises
  }, 0)

  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))