import React from 'react'

const Statistics = ({text, value}) => {

    return (
    <div>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </div>
  )

}

export default Statistics;
