import { Col, Row } from "antd";
import "./AthleteBio.scss";

type Props = {
  bio: string;
};
const AthleteBio = ({ bio }: Props) => (
  <Row className="athlete-achievements">
    <Col
      md={{ span: 24 }}
      sm={{ span: 24 }}
      xs={{ span: 24 }}
      className="bio-wrapper"
    >
      <h3 className="section-header">Bio:</h3>
      <p className="athlete-bio">{bio}</p>
    </Col>
  </Row>
);

export default AthleteBio;
