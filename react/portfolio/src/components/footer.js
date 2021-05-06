import React from 'react';

import { Container } from 'reactstrap'

export default function footer() {
    return (
        <footer className="text-white bg-dark" style={{marginTop: "auto"}} >
            <Container className="d-flex flex-column flex-md-row p-3">
                <span style={{marginRight: "auto"}}>&copy; Gustav Lundgren 2021</span>
                <a href="mailto:ngustavlundgren@gmail.com">ngustavlundgren@gmail.com</a>
                <span className="px-3 d-none d-md-inline">|</span>
                <a href="https://www.linkedin.com/in/nglundgren/">linkedin.com/in/nglundgren</a>
            </Container>
        </footer>
    );
}