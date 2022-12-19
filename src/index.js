import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignaturePad from 'react-signature-canvas'
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


import styles from './styles.module.css'

class App extends Component {
  state = { trimmedDataURL: null }
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas()
        .toDataURL('image/png')
    })

  }
  render() {
    let { trimmedDataURL } = this.state
    return <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignaturePad clearOnResize={false} canvasProps={{ className: styles.sigPad }}
          ref={(ref) => { this.sigPad = ref }} />
        <Container fluid className="p-0">
          <Row>
            <Col className='noPadding' sm={4} xs={4}><Button color="error" variant="outlined" onClick={this.clear}>
              Effacer
            </Button></Col>
            <Col sm={4} xs={4}></Col>
            {trimmedDataURL ?
              <>
              <Col sm={4} xs={4}>
                <Button variant="contained" color="success" className="float-end" download="signature_fiche_d'inscription" href={trimmedDataURL}>Télécharger</Button>
                </Col>
              </>
              : <Col sm={4}  xs={4}> <Button className="float-end" variant="contained" color="success" onClick={this.trim}>
                Valider
              </Button></Col>
            }
              <p>{trimmedDataURL}</p>

          </Row>
        </Container>
      </div>
    </div>
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
