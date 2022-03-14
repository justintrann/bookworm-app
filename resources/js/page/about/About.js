import React from 'react';
import MyNavbar from '../../components/Navbar/MyNavbar';
import Footer from '../../components/Footer/Footer';
import { Row, Col, Typography } from 'antd';
import './about.css';
const { Paragraph } = Typography;

function About() {
  return (
      <>
      <MyNavbar />
    <div className="mt-5 mx-5">
      <h4>About Us</h4>
      <hr />
      <div className="pb-5 mb-5 w-100 d-flex flex-column align-items-center justify-content-center">
        <Row className="w-75 mb-3">
          <Col
            offset={2}
            span={20}
            className="d-flex flex-column align-items-center"
          >
            <h2 className="pb-3">Welcome to Bookworm</h2>
            <span>
              "Bookworm is an independent New York bookstore and language school
              with locations in Manhattan and Brooklyn. We specialize in travel
              books and language classes."
            </span>
          </Col>
          <Col span={2} />
        </Row>
        <Row className="w-75" gutter={[32, 0]}>
          <Col className="gutter-row" span={24} sm={24} md={12} xl={12} lg={12}>
            <h3>Our Story</h3>
            <p>
              The name Bookworm was taken from the original nam for New York
              International Airport, which was renamed JFK in December 1963.
            </p>
            <p>
              Our Manhattan store has just moved to the West Village. Our new
              localtion is 170 7th Avenue South, at the corner of Perry Street.
            </p>
            <p>
              From March 2008 through May 2016, the store was located in the
              Flatiron District.
            </p>
          </Col>
          <Col className="gutter-row" span={24} sm={24} md={12} xl={12} lg={12}>
            <h3>Our Vision</h3>
            <p>
              One of the last travel bookstores in the country, our Manhattan
              store carries a range of guidebooks (all 10% off) to suit the
              needs and tastes of every traveler and budget.
            </p>
            <p>
              We belive that a novel or travelogue can be just as valuable a key
              to a place as any guidebook, and our well-read, well-traveled
              staff is happy to make reading recommendations for any traveler,
              book lover, or gift giver.
            </p>
          </Col>
        </Row>
      </div>
    </div>
    
    <Footer />
    </>
    
  );
}

export default About;