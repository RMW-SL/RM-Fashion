import React from "react";
import { Button, Segment, Grid, Form, Divider } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Segment placeholder>
      <div class="ui two column centered grid">
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
              />

              <Button content="Login" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button content="Sign up" icon="signup" size="big" />
          </Grid.Column>
        </Grid>
      </div>

      <Divider vertical>Or </Divider>
    </Segment>
  );
};

export default HomePage;
