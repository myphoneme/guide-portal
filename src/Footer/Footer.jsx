import React from 'react'
import styles from './Footer.module.css';
import { Container,} from "react-bootstrap";


function Footer() {
  return (
    <div>
        <div className={styles.footerCont}>
            <Container>
                <div >
                    <h6>Copyright notice in the footer of every page on your website</h6>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Footer