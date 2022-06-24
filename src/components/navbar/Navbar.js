import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor:' #333',
      },
      
      li: {
        float: 'left',
      },
    
      lia: {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
      },
      
    
  }));

const Navbar= () =>{
    const classes = useStyles();
  return (
      <>

  <nav  >
  <ul className={classes.ul}>
    <li className={classes.li}>
      <a className={classes.lia} href="#home">home</a>
     </li>
     <li className={classes.li}>
      <a className={classes.lia} href="#cantact">cantact</a>
     </li>
     <li className={classes.li}>
      <a className={classes.lia} href="#about us">about us</a>
     </li>
   <li className={classes.li}>
<a  href="#products" className={classes.lia}>products</a>    
</li>
  <li className={classes.li}>
      <a className={classes.lia} href="#Log In">Log In</a>
     </li>
    </ul>
    
  </nav>
  </>
  );
}
export default Navbar;