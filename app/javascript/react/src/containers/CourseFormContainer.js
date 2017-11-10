// import React, { Component } from 'react';
// import CourseTextInputField from './CourseTextInputField';
//
// class CourseFormContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "",
//       address: "",
//       city: "",
//       state: "",
//       zip: "",
//       description: "",
//       photo_url: "",
//       difficulty: "",
//       water_hazard: false
//     }
//     // this.handleChange = this.handleChange.bind(this)
//     // this.handleEventSubmit = this.handleEventSubmit.bind(this)
//   }
//
//   // handleChange(event) {
//   //   let value = event._d
//   //   this.setState({ dateTime: value })
//   // }
//
//   // handleEventSubmit(event) {
//   //   event.preventDefault()
//   //   let formPayload = {
//   //     name: "Pair-Up",
//   //     date_time: this.state.dateTime,
//   //     description: "Pair-Up",
//   //     course_id: this.props.course.id
//   //   }
//   //   this.props.handleEventSubmit(formPayload)
//   // }
//
//
//   render() {
//
//
//     return(
//       <div>
//         <form>
//           <div className="row">
//             <CourseTextInputField
//               className="small-12 medium-12 large-12 columns"
//               label='Name'
//               name='parkName'
//             />
//             <CourseTextInputField
//               className="small-12 medium-6 large-4 columns"
//               label='Address'
//               name='parkAddress'
//             />
//             <CourseTextInputField
//               className="small-12 medium-6 large-4 columns"
//               label='City'
//               name='parkCity'
//             />
//             <CourseTextInputField
//               className="small-6 medium-6 large-2 columns"
//               label='State'
//               name='parkState'
//             />
//             <CourseTextInputField
//               className="small-6 medium-6 large-2 columns"
//               label='Zip'
//               name='parkZip'
//             />
//             <CourseTextInputField
//               className="small-12 medium-12 large-12 columns"
//               label='Description'
//               name='parkDescription'
//             />
//             <CourseTextInputField
//               className="small-6 medium-6 large-6 columns"
//               label='Photo URL'
//               name='parkPhotoUrl'
//             />
//             <CourseTextInputField
//               className="small-6 medium-6 large-6 columns"
//               label='Difficulty'
//               name='parkSize'
//             />
//             <button type="button" value='Submit' className="primary button expanded search-button" onClick={this.handleEventSubmit}>
//                 Schedule Pair-Up
//             </button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
//
//
//
// export default CourseFormContainer
