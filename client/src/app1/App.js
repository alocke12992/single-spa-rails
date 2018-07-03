import React, { Component, Fragment } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { navigateToUrl } from 'single-spa';
import CreateContact from './components/CreateContact';


class App extends Component {
  state = {showForm: false}
  
  toggleForm = () => {
    debugger
    this.setState( state => ({
      showForm: !state.showForm
    }))
  }

  render() {
    return (
      <Grid verticalAlign="middle" centered>
        <Grid.Row centered>
          <Grid.Column width={6}>
          {
            this.state.showform ? <CreateContact /> :
            <Fragment>
              <a href="/contacts" onClick={navigateToUrl}><Button>View Contacts</Button></a>
              <Button onClick={this.toggleForm}>Add Contact</Button>
            </Fragment>
          }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
