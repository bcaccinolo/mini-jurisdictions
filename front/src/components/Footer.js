import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import '../styles/Footer.css'

class BaseComponent extends Component {

  render = () => {
    const content = (
      <Container textAlign='center' id='footer'>
      Created by <a href="https://github.com/bcaccinolo">Benoit Caccinolo</a> with <a href="https://elixir-lang.org/">Elixir</a> and <a href="https://reactjs.org/">ReactJS</a>
      </Container>
    )
    return content
  }
}

export default BaseComponent;
