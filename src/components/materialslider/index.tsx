/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from 'react';
import {useRuleEngine} from '@aemforms/af-react-renderer';
import {FieldJson, State} from '@aemforms/af-core';
import { Rating } from '@mui/material';
import { richTextString } from '@aemforms/af-react-components';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MaterialsliderField = function (props: State<FieldJson>) {
    
    const [state, handlers] = useRuleEngine(props);

    return(

    <Box>
        <Typography component="legend">{state.visible ? richTextString(state?.label?.value): ""} </Typography>
        <Rating name="half-rating" defaultValue={4} precision={1} />
    </Box>    
    )   
    

    
}

export default MaterialsliderField;