import React, { useState, useEffect } from "react";
import StudentService from "../../../../../services/StudentService";
import { Link } from 'react-router-dom';
import Pagination from "@material-ui/lab/Pagination";
import { Spinner } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';

const StudentList = () => {
    const [studentlist, setStudentList] = useState([]);
    const [tutor2, setTutor2] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageLimit, setPageLimit] = useState(5);
    const [loading, setLoading] = useState(false);
    const [search2, setSearch2] = useState('');
    const [order, setOrder] = useState(true)
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const pageSizes = [5, 10, 30];

    const getRequestParams = (search2, page, pageLimit, order, fromDate, toDate) => {
        let params = {};

        if (search2) {
            params["fullname"] = search2;
        }

        if (page) {
            params["page"] = page - 1;
        }

        if (pageLimit) {
            params["size"] = pageLimit;
        }

        if (order === true) {
            params["sort"] = "ASC";
        }
        else {
            params["sort"] = "DESC";
        }

        if (fromDate) {
            params["fromDate"] = fromDate;
        }

        if (toDate) {
            params["toDate"] = toDate;
        }

        return params;
    };


    const retrieveTutorials = () => {
        const params = getRequestParams(search2, page, pageLimit, order, fromDate, toDate);
        StudentService.getAll(params)
            .then((response) => {
                const studentlist = response.data;
                setStudentList(studentlist);
                console.log(studentlist)
                let a = localStorage.getItem("a")
                setCount(Math.ceil(a / pageLimit))
                setLoading(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const retrieveTutorials2 = () => {
        const params2 = getRequestParams(search2, order, fromDate, toDate);
        StudentService.getAll(params2)
            .then((response) => {
                const a = response.data.length;
                localStorage.setItem("a", a)
                const tutor = response.data;
                setTutor2(tutor);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    // function removeAccents(a) {
    //     return a.normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    // }

    useEffect(retrieveTutorials2, []);
    useEffect(retrieveTutorials, [search2, page, pageLimit, order, fromDate, toDate]);
    // useEffect(handleDateFilter, [search2, page, pageLimit, order, fromDate, toDate]);
    // useEffect(() => {
    //     setFiltered(
    //         tutorials.filter(tutorial => {
    //             return removeAccents(tutorial.fullname).toLowerCase().includes(search.toLowerCase()) ||
    //                 tutorial.fullname.toLowerCase().includes(search.toLowerCase()) ||
    //                 tutorial.createdday.toLowerCase().includes(search.toLowerCase()) ||
    //                 tutorial.id.toLowerCase().includes(search.toLowerCase())
    //         })
    //     )
    // }, [search, tutorials])

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setPageLimit(event.target.value);
        setPage(1);
    };

    const handleSort = () => {
        if (order === true) {
            setOrder(false)
        } else {
            setOrder(true);
        }
        console.log(order)
        console.log("CCC")

    }

    const handleDateFilter = () => {
        setFromDate(localStorage.getItem("fromDate"));
        setToDate(localStorage.getItem("toDate"));
        console.log(fromDate);
        console.log(toDate);

    }


    return (
        <div>
            <input className="tbl-filter" type="text" placeholder="Searching ..." onChange={e => setSearch2(e.target.value)} />
            <div className="date-searching">
                From <input type="date" onChange={(fD) => localStorage.setItem("fromDate", fD.target.value)} /> to <input type="date" onChange={(tD) => localStorage.setItem("toDate", tD.target.value)} /> <button className="date-searching-button" onClick={handleDateFilter}><SearchIcon style={{ color: "black" }} /></button>
            </div>

            <div className="tbl-list">
                <table className="tbl-list-table">
                    <thead>
                        <tr>
                            <th className="tbl-list-th-id">ID</th>
                            <th onClick={handleSort} className="tbl-list-th-name">Full Name <div className={order ? "arrow arrow-down" : "arrow arrow-up"}></div></th>
                            <th className="tbl-list-th-gender">Gender</th>
                            <th className="tbl-list-th-address">Address</th>
                        </tr>
                    </thead>
                    <tbody>

                        {studentlist.map(student => (
                            <React.Fragment>
                                <tr>
                                    <td key={student.id} className="tbl-list-td-id">{student.id}</td>
                                    <td className="tbl-list-td-name "><Link to={"/teacher/student-detail/" + student.id} onClick={() => localStorage.setItem("id", student.id)}> {student.fullname}</Link></td>
                                    <td className="tbl-list-td-gender">{student.gender}</td>
                                    <td className="tbl-list-td-address">{student.address}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                {loading ? (
                    <div className="mt-5" style={{ marginLeft: "70px" }}>
                        {"Items per Page: "}
                        <select className="mb-4" onChange={handlePageSizeChange} value={pageLimit}>
                            {pageSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                        <Pagination
                            count={count}
                            page={page}
                            siblingCount={0}
                            boundaryCount={2}
                            onChange={handlePageChange}
                        />
                    </div>
                ) : (<Spinner animation="border" style={{ marginLeft: "750px", marginTop: "50px" }} />)}
            </div>

        </div >

    )
}

export default StudentList
