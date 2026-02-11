import { Layout, Typography, Card, Row, Col, Tag, Button, Space } from 'antd';
import { GithubOutlined, LinkOutlined, CodeOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.com',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://demo-taskmanager.com',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+Manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts using third-party APIs with beautiful visualizations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Ant Design'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://demo-weather.com',
      image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Weather+Dashboard'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A social media analytics dashboard with data visualization, user engagement metrics, and reporting features.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/yourusername/social-dashboard',
      demo: 'https://demo-social.com',
      image: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=Social+Dashboard'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, commenting system, and content management capabilities.',
      technologies: ['React', 'Next.js', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/yourusername/blog-platform',
      demo: 'https://demo-blog.com',
      image: 'https://via.placeholder.com/400x250/00f2fe/ffffff?text=Blog+Platform'
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio website built with React and Ant Design featuring an AI chatbot, resume viewer, and project showcase.',
      technologies: ['React', 'Ant Design', 'Vite', 'React Router'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com',
      image: 'https://via.placeholder.com/400x250/43e97b/ffffff?text=Portfolio'
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Content style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <Title level={1}>My Projects</Title>
            <Paragraph style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Here are some of the projects I've worked on. Each project showcases different 
              technologies and problem-solving approaches.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {projects.map((project, index) => (
              <Col xs={24} sm={24} md={12} lg={8} key={index}>
                <Card
                  hoverable
                  cover={
                    <div style={{ 
                      height: '200px', 
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        alt={project.title}
                        src={project.image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  }
                  actions={[
                    <Button 
                      type="link" 
                      icon={<GithubOutlined />}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      Code
                    </Button>,
                    <Button 
                      type="link" 
                      icon={<LinkOutlined />}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Demo
                    </Button>
                  ]}
                  style={{ height: '100%' }}
                >
                  <Meta
                    title={<Title level={4}>{project.title}</Title>}
                    description={
                      <>
                        <Paragraph ellipsis={{ rows: 3 }}>
                          {project.description}
                        </Paragraph>
                        <div style={{ marginTop: '15px' }}>
                          {project.technologies.map((tech, i) => (
                            <Tag key={i} color="blue" style={{ marginBottom: '5px' }}>
                              {tech}
                            </Tag>
                          ))}
                        </div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '60px',
            padding: '40px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '10px'
          }}>
            <Title level={3} style={{ color: 'white' }}>
              <CodeOutlined /> Want to collaborate?
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '1.1rem' }}>
              I'm always open to discussing new projects and opportunities.
            </Paragraph>
            <Space size="large" style={{ marginTop: '20px' }}>
              <Button 
                size="large" 
                icon={<GithubOutlined />}
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                View GitHub
              </Button>
              <Button 
                size="large"
                type="primary"
                style={{ backgroundColor: 'white', color: '#667eea', borderColor: 'white' }}
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                Get in Touch
              </Button>
            </Space>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Projects;
