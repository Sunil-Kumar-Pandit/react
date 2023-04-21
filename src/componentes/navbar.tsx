
import { Box, Link, Modal } from "@mui/material";
import SignIn from "./signIn";
import { useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height:"90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const NavHead = ()=>{

    // const [isLogin,setIsLogin]=useState<boolean>(false)

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
 
    return(
        <>
        <div className='w-100 bg-dark row'>
                    <div className='h1 text-light py-3 mx-3 col-md-3 '>Metal Cost</div>
                    <nav className="navbar navbar-expand-lg navbar-light col-md-8">
                        <div className="container-fluid ms-5">
                            {/* <a className="navbar-brand text-light " >Navbar</a> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 ms-auto me-3 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active text-light" aria-current="page">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" onClick={handleOpen}>SignIn</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-light"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" >Action</a></li>
                                            <li><a className="dropdown-item" >Another action</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" >Something else here</a></li>
                                        </ul>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link disabled"   aria-disabled="true">Disabled</a>
                                    </li> */}
                                </ul>
                                <form className="  d-flex">
                                    <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>


                <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <SignIn/>

  </Box>
</Modal>

              
        </>
        
    );
}


