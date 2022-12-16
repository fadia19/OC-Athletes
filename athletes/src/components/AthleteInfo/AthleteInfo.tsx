import { Col, Row } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAthlete, IAthleteMedals } from "../../models/athletes";
import { fetchAthleteMedals } from "../../redux/actions/athletes";
import AthleteBio from "../AthleteBio";
import AthleteMedals from "../AthleteMedals";
import "./AthleteInfo.scss";

type Props = {
  selectedAthlete: IAthlete;
  fetchAthleteMedalsProp: (athleteId: string) => void;
  selectedAthleteMedals: IAthleteMedals[];
  isFetchingAthleteMedals: boolean;
};

const AthleteInfo = ({
  selectedAthlete,
  fetchAthleteMedalsProp,
  selectedAthleteMedals,
  isFetchingAthleteMedals,
}: Props) => {
  useEffect(() => {
    fetchAthleteMedalsProp(selectedAthlete.athlete_id);
  }, []);

  return (
    <div className="athlete-info-wrapper">
      <Row>
        <Col md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <img src="/photo_oc.jpeg" alt="athlete" className="athlete-photo" />
        </Col>
        <Col md={{ span: 14, offset: 2 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div className="athlete-personal-info">
            <Row>
              <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <p className="info-wrapper">
                  <span className="field-label">Name: </span>
                  <span className="field-value">
                    {selectedAthlete.name} {selectedAthlete.surname}
                  </span>
                </p>
              </Col>
              <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <p className="info-wrapper">
                  <span className="field-label">DOB: </span>
                  <span className="field-value">
                    {selectedAthlete.date_of_birth}
                  </span>
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <p className="info-wrapper">
                  <span className="field-label">Weight: </span>
                  <span className="field-value">{selectedAthlete.weight}</span>
                </p>
              </Col>
              <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <p className="info-wrapper">
                  <span className="field-label">Height: </span>
                  <span className="field-value">{selectedAthlete.height}</span>
                </p>
              </Col>
            </Row>
          </div>
          <AthleteMedals
            medals={selectedAthleteMedals}
            isLoading={isFetchingAthleteMedals}
          />
        </Col>
      </Row>
      <AthleteBio bio={selectedAthlete.bio} />
    </div>
  );
};

const mapStateToProps = ({
  athletesState: {
    selectedAthlete,
    selectedAthleteMedals,
    isFetchingAthleteMedals,
  },
}: any) => ({
  selectedAthlete,
  selectedAthleteMedals,
  isFetchingAthleteMedals,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAthleteMedalsProp: (athleteId: string): void =>
    dispatch(fetchAthleteMedals(athleteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AthleteInfo);
