import { Layout, Typography, Card, Button, Space, Tag, Timeline, Row, Col } from 'antd';
import { DownloadOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function Resume() {
  const handleDownload = () => {
    // In a real application, this would download an actual PDF resume
    alert('Resume download would start here. Please add your actual resume PDF to the public folder.');
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Content style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Header Section */}
          <Card style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Title level={2}>DAVID HAYS</Title>
            <Title level={4} type="secondary">SOFTWARE ENGINEER</Title>
            <Space size="large" style={{ marginTop: '20px' }}>
              <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload} size="large">
                Download Resume
              </Button>
            </Space>
            <div style={{ marginTop: '20px' }}>
              <Space size="middle" wrap>
                <Text><PhoneOutlined /> 503.602.7401</Text>
                <Text><MailOutlined /> davidmalloryhays@gmail.com</Text>
                <Text><EnvironmentOutlined /> Saratoga Springs, Utah</Text>
                <Text><LinkedinOutlined /> <a href="https://www.linkedin.com/in/david-mallory-hays" target="_blank" rel="noopener noreferrer">LinkedIn</a></Text>
              </Space>
            </div>
          </Card>

          {/* Profile Section */}
          <Card style={{ marginBottom: '20px' }}>
            <Title level={3}>Profile</Title>
            <Paragraph>
              Results-driven Full-Stack Engineer with over 5 years of experience specializing in Ruby on Rails and React, building scalable web apps and robust APIs. Former Director of Operations managing 400+ employees across multiple entertainment venues, now channeling that frontline insight into designing better tools and user experiences. Adept at solving real-world business problems in CRM, POS, payments, and more because I've lived them. Known for combining technical skill with a customer-first mindset, thriving in agile teams, and shipping performant, reliable software.
            </Paragraph>
          </Card>

          {/* Skills Section */}
          <Card style={{ marginBottom: '20px' }}>
            <Title level={3}>Technical Skills</Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Text strong>Frontend & Frameworks:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="blue">React.js</Tag>
                  <Tag color="blue">Node.js</Tag>
                  <Tag color="blue">TypeScript</Tag>
                  <Tag color="blue">HTML/CSS</Tag>
                  <Tag color="blue">JavaScript</Tag>
                  <Tag color="blue">Ant Design</Tag>
                  <Tag color="blue">Material UI</Tag>
                  <Tag color="blue">Tailwind</Tag>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <Text strong>Backend & APIs:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="green">Ruby on Rails</Tag>
                  <Tag color="green">Express.js</Tag>
                  <Tag color="green">Knex.js</Tag>
                  <Tag color="green">Python</Tag>
                  <Tag color="green">REST API</Tag>
                  <Tag color="green">GraphQL</Tag>
                  <Tag color="green">Postman</Tag>
                  <Tag color="green">Websockets</Tag>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <Text strong>Database & Cloud:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="orange">PostgreSQL</Tag>
                  <Tag color="orange">MySQL</Tag>
                  <Tag color="orange">SQL</Tag>
                  <Tag color="orange">Redis</Tag>
                  <Tag color="orange">AWS</Tag>
                  <Tag color="orange">Elastic Beanstalk</Tag>
                  <Tag color="orange">EC2</Tag>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <Text strong>Tools & Testing:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="purple">Git</Tag>
                  <Tag color="purple">CI/CD</Tag>
                  <Tag color="purple">GitHub Actions</Tag>
                  <Tag color="purple">RSpec</Tag>
                  <Tag color="purple">Jest</Tag>
                  <Tag color="purple">Cypress</Tag>
                  <Tag color="purple">Figma</Tag>
                  <Tag color="purple">WordPress Plugins</Tag>
                </div>
              </Col>
            </Row>
          </Card>

          {/* Experience Section */}
          <Card style={{ marginBottom: '20px' }}>
            <Title level={3}>Work Experience</Title>
            <Timeline
              items={[
                {
                  color: 'blue',
                  content: (
                    <>
                      <Title level={4}>Software Engineer</Title>
                      <Text type="secondary">Posabit | Provo, UT | 2022 - 06/2025</Text>
                      <ul>
                        <li>Replaced a costly offshore team ($20K/month) by single-handedly rebuilding the company's Ecommerce Site Builder using Ruby on Rails and React, leading to a measurable increase in client retention and sales.</li>
                        <li>Took ownership of the entire React application as principal engineer, redesigning the architecture to improve scalability, load speed reduced from 10s to mere milliseconds without sacrificing functionality.</li>
                        <li>Engineered seamless integrations across the Android Client, Azure Payments, and Ruby on Rails POS backend, enabling multi-platform commerce functionality.</li>
                      </ul>
                    </>
                  ),
                },
                {
                  color: 'green',
                  content: (
                    <>
                      <Title level={4}>Software Engineer</Title>
                      <Text type="secondary">Tuft & Needle | Provo, UT | 2021 - 2022</Text>
                      <ul>
                        <li>Learned Ruby on Rails and rapidly ramped up becoming a key contributor to backend services within weeks.</li>
                        <li>Built and maintained Rails integrations with over 12 supply chains and 3PL partners, streamlining logistics and increasing operational efficiency and response times by 20%.</li>
                        <li>Improved backend and SQL performance by refactoring high-load processes and resolving production bottlenecks, reducing latency and support requests.</li>
                      </ul>
                    </>
                  ),
                },
                {
                  color: 'cyan',
                  content: (
                    <>
                      <Title level={4}>Principal Full Stack Web Developer</Title>
                      <Text type="secondary">Human Rights First / SurvAI | Provo, UT | 2020 - 2021</Text>
                      <ul>
                        <li>Architected and implemented an Express.js/React.js/TypeScript application for real-time video analysis in 1 month.</li>
                        <li>Developed backend APIs with TDD principles, ensuring maintainability and scalability and was able to handoff in 3 weeks.</li>
                        <li>Worked closely in Python with data scientists to translate stakeholder needs into technical solutions in Node.js and React delivering the product ahead of schedule and above expectations.</li>
                      </ul>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  content: (
                    <>
                      <Title level={4}>API Support Engineer</Title>
                      <Text type="secondary">EasyPost | Lehi, UT | 2018 - 2020</Text>
                      <ul>
                        <li>Diagnosed customer issues using the API endpoints and provided custom engineering solutions in Python and Node.js resolving coding and logistics issues for 100+ customers each week.</li>
                        <li>Provided custom engineering solutions, improving logistics and shipment tracking workflows in JavaScript and Python leading to a 10% lower churn rate.</li>
                        <li>Partnered with engineering teams to debug and enhance API performance in Ruby on Rails opening up our sales team to new leads.</li>
                      </ul>
                    </>
                  ),
                },
              ]}
            />
          </Card>

          {/* Education Section */}
          <Card>
            <Title level={3}>Education</Title>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Text strong style={{ fontSize: '16px' }}>Full Stack Web Development</Text>
                <br />
                <Text type="secondary">Bloomtech School | Remote | 2020</Text>
              </div>
              <div>
                <Text strong style={{ fontSize: '16px' }}>Computer Science</Text>
                <br />
                <Text type="secondary">Utah Valley University | Orem, UT | 2014 - unfinished</Text>
              </div>
            </Space>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Resume;
