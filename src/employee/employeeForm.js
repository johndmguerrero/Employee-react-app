import React from 'react';
import TextField from '@material-ui/core/TextField';

const AddEmployeeForm = props => {
    return(
        <form>
            <TextField id="outlined-search" label="First Name" type="text" variant="outlined" />
        </form>
    )
}

export default AddEmployeeForm