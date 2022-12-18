import { Col, Row } from "antd";
import ReactMarkdown from "react-markdown";
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
      <ReactMarkdown className="athlete-bio">{bio}</ReactMarkdown>
    </Col>
  </Row>
);

export default AthleteBio;
