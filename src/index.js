import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignaturePad from 'react-signature-canvas'
import Button from '@mui/material/Button';



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
         <div className='vertical-center container'>
          <Button className={styles.buttons} variant="outlined" onClick={this.clear}>
            Effacer
          </Button>
        </div>  
        <div>
          <br></br>
          <Button className={styles.buttons} variant="contained" color="success" onClick={this.trim}>
            Valider
          </Button>
        </div>
      <div className={styles.sigContainer}>
        <SignaturePad canvasProps={{ className: styles.sigPad }}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <br></br>
      
      <div>
        {trimmedDataURL ?
      <>
       <h3>Signature PNG :</h3>  
      <img alt='sign' className={styles.sigImage} src={trimmedDataURL} />
      </>
        : null }

      </div>
    </div>
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
