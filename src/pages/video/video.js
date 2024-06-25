import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Video = () => {
  return (
    <Container className="About-header">
      <Row className="mb-4 mt-4 pt-md-4">
        <p style={{ fontSize: "5rem", textAlign:'center' }}>Project Video</p>
      </Row>
      <div style={{ backgroundColor: 'red', padding: '1px', width: '100%' }}></div>
      <Row className="sec_sp mt-4">
        {/* Promotional Video */}
        <Col lg="12" className="mb-4">
          <div style={{position: 'relative', overflow: 'hidden', paddingTop: '56.25%'}}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/pr4uETLYiuE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Promotional Video"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
