import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Switch } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import Btech from './data/Btech';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const routes = ["/btech", "/msc"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <BrowserRouter>
    <Route>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="B.Tech" />
                <Tab label="M.Sc" />
                <Tab label="M.Tech" />
        </Tabs>
        </Box>
    </Route>
    <Switch>
    <Route exact path='/btech' component={Btech} />
    </Switch>
    
  </BrowserRouter>
    
  );
}
