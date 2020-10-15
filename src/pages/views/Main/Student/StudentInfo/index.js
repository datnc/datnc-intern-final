import React from 'react'

export default function StudentInfo() {
    return (
        <div>
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
                                                <input className="form-control-2" type="text" name="id" value="32" disabled="disabled" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10 ">
                                            <div className="form-group-2">
                                                <label>Full Name:</label>
                                                <input className="form-control-2" type="text" name="name" value="Nguyễn Văn A" disabled="disabled" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Birthday:</label>
                                                <input className="form-control-2" type="text" name="birthday" value="32/13/2000" disabled="disabled" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Gender:</label>
                                                <input className="form-control-2" type="text" name="gender" value="Nam" disabled="disabled" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Address:</label>
                                                <input className="form-control-2" type="text" name="address" value="Vĩnh Ninh - Vĩnh Quỳnh - Thanh Trì - Hà Nội" disabled="disabled" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <div className="form-group-2">
                                                <label>Phone Number:</label>
                                                <input className="form-control-2" type="text" name="phone" value="0354237323" disabled="disabled" />
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
