// import React from 'react'
// import {Link} from 'react-router-dom'

// export default function Nav({setIsLogin}) {

//     const logoutSubmit = () =>{
//         localStorage.clear()
//         setIsLogin(false)
//     }

//     return (
//         <header>
//             <div className="logo">
//                 <h1><Link to="/">Notes</Link></h1>
//             </div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/create">Create Note</Link></li>
//                 <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
//             </ul>
//         </header>
//     )
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function Nav({ setIsLogin }) {
  const [open, setOpen] = React.useState(false);

  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  const handleLogoutClick = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirmLogout = () => {
    logoutSubmit();
    setOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">INK WELL</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Note</Link>
        </li>
        <li>
          <Button onClick={handleLogoutClick}>
            Logout
          </Button>
          <Dialog
            open={open}
            onClose={handleCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Confirm Logout</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to logout?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmLogout} color="primary" autoFocus>
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </li>
      </ul>
    </header>
  );
}