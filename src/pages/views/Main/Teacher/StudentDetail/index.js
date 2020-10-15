import React, { useState, useEffect } from "react";
import StudentListTitle from '../../../../../components/Main/Teacher/StudentListTitle'
import TeacherNavbar from '../../../../../components/Main/Teacher/TeacherNavbar'
import StudentService from "../../../../../services/StudentService";

function StudentDetail() {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        retrieveStudent();
    }, []);

    let id = localStorage.getItem("id");

    const retrieveStudent = async () => {
        try {
            const data = StudentService.get(id);
            setStudent((await data).data);
        } catch (error) {
            console.log('Khong the ket noi API ', error)
        }
    }

    return (
        <div>
            <TeacherNavbar></TeacherNavbar>
            <StudentListTitle></StudentListTitle>
            <h1 className="title-sch">Student Information</h1>
            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="signup-form-2">
                                <form>
                                    <div className="row">
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Student ID:  </label>
                                                <input className="form-control-2" type="text" name="id" value={student.id} readOnly={true} />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10 ">
                                            <div className="form-group-2">
                                                <label>Full Name:</label>
                                                <input className="form-control-2" type="text" name="name" value={student.fullname} readOnly={true} />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Birthday:</label>
                                                <input className="form-control-2" type="text" name="birthday" value={student.birthday} readOnly={true} />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Gender:</label>
                                                <input className="form-control-2" type="text" name="gender" value={student.gender ? "Male" : "Female"} readOnly={true} />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Address:</label>
                                                <input className="form-control-2" type="text" name="address" value={student.address} readOnly={true} />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Phone Number:</label>
                                                <input className="form-control-2" type="text" name="phone" value={student.phone} readOnly={true} />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Created Day:</label>
                                                <input className="form-control-2" type="text" name="createdday" value={student.createdday} readOnly={true} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StudentDetail