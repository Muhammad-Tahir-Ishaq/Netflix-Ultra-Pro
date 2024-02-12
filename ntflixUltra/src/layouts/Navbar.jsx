import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                   <img src="/src/assets/logo.svg" alt="Logo" width="50" height="40" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/all-videos">All Videos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Login</Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <Link className="nav-link" to="/add-video">
                                <button className="btn btn-outline-success" type="submit">Add Video</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar