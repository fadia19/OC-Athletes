import { Col, Layout, Row } from "antd";
import "./BaseLayout.scss";

const BaseLayout = (props: any) => {
  const { Header, Content } = Layout;
  const { component, pageTitle } = props;

  return (
    <Layout>
      <Header>
        <Row align="middle">
          <Col span={24} className="header-wrapper">
            {pageTitle}
          </Col>
        </Row>
      </Header>

      <Content>{component}</Content>
    </Layout>
  );
};

export default BaseLayout;
