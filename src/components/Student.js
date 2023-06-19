import React from 'react'

// const Student = ({name, college}) => {
//   return (
//     <div>Student Component <br></br>
//     {name} <br></br>
//     {college}
    
//     </div>
//   )
// }

import propTypes from 'prop-types'
const Student = (props) => {
    return (
      <div>
      {props.name} 
      {props.age} 
      {/* <Test ok={props.name}/>*/}
     
      </div>
    )
}

Student.propTypes = {
    name: propTypes.string,
    age:propTypes.number,
}


Student.defaultProps = {
    name: "No Name",
    age: 0,
}

export default Student