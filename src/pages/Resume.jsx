import { Layout, Typography, Card, Button, Space, Descriptions, Tag, Timeline, Row, Col } from 'antd';
import { DownloadOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

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
            <Title level={2}>Your Name</Title>
            <Title level={4} type="secondary">Full Stack Developer</Title>
            <Space size="large" style={{ marginTop: '20px' }}>
              <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload} size="large">
                Download Resume
              </Button>
            </Space>
            <div style={{ marginTop: '20px' }}>
              <Space size="middle" wrap>
                <Text><MailOutlined /> your.email@example.com</Text>
                <Text><PhoneOutlined /> (123) 456-7890</Text>
                <Text><LinkedinOutlined /> linkedin.com/in/yourprofile</Text>
                <Text><GithubOutlined /> github.com/yourusername</Text>
              </Space>
            </div>
          </Card>

          {/* About Section */}
          <Card style={{ marginBottom: '20px' }}>
            <Title level={3}>About Me</Title>
            <Paragraph>
              Passionate software developer with expertise in building modern web applications. 
              I specialize in React, Node.js, and cloud technologies. I love solving complex problems 
              and creating user-friendly solutions that make a difference.
            </Paragraph>
          </Card>

          {/* Skills Section */}
          <Card style={{ marginBottom: '20px' }}>
            <Title level={3}>Technical Skills</Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Text strong>Frontend:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="blue">React</Tag>
                  <Tag color="blue">JavaScript</Tag>
                  <Tag color="blue">TypeScript</Tag>
                  <Tag color="blue">HTML/CSS</Tag>
                  <Tag color="blue">Ant Design</Tag>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <Text strong>Backend:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="green">Node.js</Tag>
                  <Tag color="green">Express</Tag>
                  <Tag color="green">Python</Tag>
                  <Tag color="green">REST APIs</Tag>
                  <Tag color="green">GraphQL</Tag>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <Text strong>Database:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="orange">MongoDB</Tag>
                  <Tag color="orange">PostgreSQL</Tag>
                  <Tag color="orange">MySQL</Tag>
                  <Tag color="orange">Redis</Tag>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <Text strong>Tools & Others:</Text>
                <div style={{ marginTop: '10px' }}>
                  <Tag color="purple">Git</Tag>
                  <Tag color="purple">Docker</Tag>
                  <Tag color="purple">AWS</Tag>
                  <Tag color="purple">CI/CD</Tag>
                  <Tag color="purple">Agile</Tag>
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
                      <Title level={4}>Senior Software Developer</Title>
                      <Text type="secondary">Company Name | 2021 - Present</Text>
                      <ul>
                        <li>Led development of responsive web applications using React and Node.js</li>
                        <li>Improved application performance by 40% through code optimization</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                        <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                      </ul>
                    </>
                  ),
                },
                {
                  color: 'green',
                  content: (
                    <>
                      <Title level={4}>Software Developer</Title>
                      <Text type="secondary">Another Company | 2019 - 2021</Text>
                      <ul>
                        <li>Developed and maintained full-stack web applications</li>
                        <li>Collaborated with cross-functional teams to deliver projects on time</li>
                        <li>Implemented RESTful APIs and database schemas</li>
                        <li>Participated in agile development processes</li>
                      </ul>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  content: (
                    <>
                      <Title level={4}>Junior Developer</Title>
                      <Text type="secondary">First Company | 2017 - 2019</Text>
                      <ul>
                        <li>Built responsive user interfaces with modern frameworks</li>
                        <li>Fixed bugs and improved existing codebase</li>
                        <li>Learned best practices in software development</li>
                      </ul>
                    </>
                  ),
                },
              ]}
            />
          </Card>

          {/* Education Section */}
          <Card style={{ marginBottom: '20px' }}>
            <Title level={3}>Education</Title>
            <Descriptions column={1}>
              <Descriptions.Item label="Degree">
                <Text strong>Bachelor of Science in Computer Science</Text>
              </Descriptions.Item>
              <Descriptions.Item label="University">
                Your University Name
              </Descriptions.Item>
              <Descriptions.Item label="Year">
                2013 - 2017
              </Descriptions.Item>
              <Descriptions.Item label="GPA">
                3.8/4.0
              </Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Certifications */}
          <Card>
            <Title level={3}>Certifications</Title>
            <Space orientation="vertical" size="small">
              <Text>• AWS Certified Solutions Architect</Text>
              <Text>• MongoDB Certified Developer</Text>
              <Text>• Certified Scrum Master (CSM)</Text>
            </Space>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Resume;
