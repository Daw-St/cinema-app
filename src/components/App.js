import React from 'react';
import { Grid, Menu, Button} from 'semantic-ui-react'

class App extends React.Component {
    render() {
    return (
    <Grid textAlign='center'>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>
            <Button loading primary>Loading</Button>
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    );
    };
};

export default App;