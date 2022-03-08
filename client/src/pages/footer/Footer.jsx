import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './footer.css';

// footer with icon buttons linked to my github, portfolio, and LinkedIn

function Footer() {
  return (
     <footer>
       <div className="footer">
        <IconButton href="https://github.com/nkulway">
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/nick-kulway-4a0888a4/">
          <LinkedIn />
        </IconButton>
        <IconButton href="http://kulway.surge.sh/">
          <Email />
        </IconButton>  
       </div>
     </footer>
  );
}

export default Footer;
