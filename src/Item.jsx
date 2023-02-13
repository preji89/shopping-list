
import { DeleteForeverSharp} from '@mui/icons-material';
import { ListItem } from '@mui/material';




function Item({item,onDelete})  {
    return ( 
        <li>
        {item}
       
         <DeleteForeverSharp style={{"cursor":"pointer"}} size="large" color="error" aria-label="delete" onClick={()=>onDelete(item)}/>      
      
         </li>
     );
}
 
export  default Item;