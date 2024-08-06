import PropTypes from "prop-types"


// props are passed from parent to child (objects act as props)
function Students(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
            <p>Admission: {props.admission ? "Yes" : "No"}</p>
        </div>
    )
}

// prop types for validation - if any condition of the below is not stisfied then it will generate an error
Students.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    course: PropTypes.string.isRequired,
    admission: PropTypes.bool
}

export default Students