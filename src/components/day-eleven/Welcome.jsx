import React from 'react'
import ScriptStyle from './ScriptStyle';
import styles from './welcome.module.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <div>
      <Alert variant={"primary"}>
      This is a primary alert—check it out!
    </Alert>
        <hr></hr>
        <h1 style={ScriptStyle.heading}>Heading</h1>
        <p style={ScriptStyle.para}>Paragraph</p>
        <p className={styles.projectHeader}>Hello Module Style</p>
        <Button>Bootstrap Button</Button>
    </div>
  )
}

export default Welcome