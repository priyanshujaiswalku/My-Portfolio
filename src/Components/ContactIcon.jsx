import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeetCodeIcon from '@mui/icons-material/School';
import GeeksforGeeksIcon from '@mui/icons-material/Code';
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

export default function ContactIcon(){
    return(
        <div className='flex flex-row  gap-8 md:gap-12'>
        <IconButton
        href="https://github.com/priyanshujaiswalku"
        target="_blank"
        title="GitHub"
        sx={{ '& svg': { fontSize: 50, color: 'black' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <GitHubIcon />
      </IconButton>
      
      <IconButton
        href="https://www.linkedin.com/in/priyanshu-kumar-66161a29a/"
        target="_blank"
        title="LinkedIn"
        sx={{ '& svg': { fontSize: 50, color: 'blue' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <LinkedInIcon />
      </IconButton>
      
      <IconButton
        href="https://leetcode.com/u/Priyanshujaiswalku/"
        target="_blank"
        title="LeetCode"
        sx={{ '& svg': { fontSize: 45, color: 'black', } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <SiLeetcode/>
      </IconButton>
      
      <IconButton
        href="https://www.geeksforgeeks.org/user/priyanshujaqlvb/"
        target="_blank"
        title="GeeksforGeeks"
        sx={{ '& svg': { fontSize: 50, color: 'green' } }}
        className='hover:scale-125 shadow-md shadow-black'
      >
        <SiGeeksforgeeks />
      </IconButton>
        </div>
    )
}