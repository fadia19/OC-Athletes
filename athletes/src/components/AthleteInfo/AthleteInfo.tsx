import { Col, Row } from "antd";
import { connect } from "react-redux";
import { IAthlete } from "../../models/athletes";
import AthleteMedals from "../AthleteMedals";
import "./AthleteInfo.scss";

type Props = {
  selectedAthlete: IAthlete;
};

const AthleteInfo = ({ selectedAthlete }: Props) => (
  <div className="athlete-info-wrapper">
    <Row>
      <Col md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
        <img src="/photo_oc.jpeg" alt="athlete" className="athlete-photo" />
      </Col>
      <Col md={{ span: 14, offset: 2 }} sm={{ span: 12 }} xs={{ span: 24 }}>
        <div className="athlete-personal-info">
          <p className="info-wrapper">
            <span className="field-label">Name: </span>
            <span className="field-value">
              {selectedAthlete.name} {selectedAthlete.surname}
            </span>
          </p>
          <p className="info-wrapper">
            <span className="field-label">DOB: </span>
            <span className="field-value">{selectedAthlete.date_of_birth}</span>
          </p>
          <p className="info-wrapper">
            <span className="field-label">Weight: </span>
            <span className="field-value">{selectedAthlete.weight}</span>
          </p>
          <p className="info-wrapper">
            <span className="field-label">Height: </span>
            <span className="field-value">{selectedAthlete.height}</span>
          </p>
        </div>
        <AthleteMedals />
      </Col>
    </Row>
    <Row className="athlete-achievements">
      <Col
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
        className="bio-wrapper"
      >
        <h3 className="section-header">Bio:</h3>
        <p className="athlete-bio">{selectedAthlete.bio}</p>
      </Col>
    </Row>
  </div>
);

const mapStateToProps = ({ athletesState: { selectedAthlete } }: any) => ({
  selectedAthlete,
});

export default connect(mapStateToProps)(AthleteInfo);
