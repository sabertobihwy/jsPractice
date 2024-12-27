import React from 'react'

export default function Table(props) {
  const datas = props.movies.datas.map((line,i)=>(<tr key={i}>
    <td>{line.rate}</td>
    <td>{line.title}</td>
  </tr>))
  return (
    <div>
      <table>
        <thread>
          <tr>
            <th>rate</th>
            <th>title</th>
          </tr>
        </thread>
        <tbody>
          {props.movies.isLoading ? (<h2> is Loading...</h2>) : datas}
        </tbody>
      </table>
    </div>
  )
}
