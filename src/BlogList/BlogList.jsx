import React from 'react'
import styles from "./BlogList.module.css"; 
import { Button, Card, Container, Row, Col, Nav } from 'react-bootstrap';

function BlogList() {
  return (
    <div>
          <Container className={styles.storyContainer}>
            <div className={styles.storyHeading}>
              <div>
              <h3 >Your Story</h3>
              </div>
              <div className={styles.storyButtonGroup}>
                <Button className={styles.storyWriteButton}>Write a Story</Button>
                <Button className={styles.storyImportButton}>Import a Story</Button>
              </div>
            </div>
            <Nav defaultActiveKey="#published" className={styles.storyNavTabs}>
                <Nav.Item>
                    <Nav.Link eventKey="#draft" className={styles.storyDraftTab}>Draft</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#published" className={styles.storyPublishedTab}>Published</Nav.Link>
                </Nav.Item>
            </Nav>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://cdn.wallpapersafari.com/94/68/lOsTXu.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://softwarelogic.net/wp-content/uploads/2017/07/technology-wallpaper-40.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://cdn.wallpapersafari.com/94/68/lOsTXu.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://cdn.wallpapersafari.com/94/68/lOsTXu.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://cdn.wallpapersafari.com/94/68/lOsTXu.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://cdn.wallpapersafari.com/94/68/lOsTXu.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://cdn.wallpapersafari.com/94/68/lOsTXu.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className={styles.storyCard}>
                <Row>
                    <Col xs={2} md={2} className={styles.storyImageCol}>
                        <img src="http://cdn.wallpapersafari.com/94/68/lOsTXu.jpg" alt="Story" className={styles.storyImage} />
                    </Col>
                    <Col>
                        <h5 className={styles.storyTitle}>Lorem Ipsum has been the industry's</h5>
                        <p className={styles.storyContent}>It to make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into make a type specimen book. It has survived not only five essentially also the leap into essentially also the centuries, but also the leap into electronic typesetting, remaining essentially also the leap into</p>
                        <small className={styles.storyUpdatedText}>UPDATED: 2 MONTHS AGO</small>
                        <small className={styles.storyPublishedText}>PUBLISHED: 2 MONTHS AGO</small>
                        <div className={styles.storyButtonGroupBottom}>
                            <Button className={styles.storyEditButton}>Edit</Button>
                            <Button className={styles.storyDeleteButton}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    </div>
  )
}

export default BlogList