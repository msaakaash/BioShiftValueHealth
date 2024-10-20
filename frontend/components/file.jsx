import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function folder(props){
    return(
        <button className='doc-div'>
             <div className='doc-folder-icon'><FolderIcon style={{color:'#F7C963'}}/></div>
             <div className='doc-right-div'>
                 <div style={{minWidth:'5rem'}}><div>Audio.mp3</div></div>
                 <div><MoreVertIcon style={{fontSize:'1rem'}}/></div>
             </div>
        </button>
    )
}