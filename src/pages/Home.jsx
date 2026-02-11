import { useState } from 'react';
import { Layout, Typography, Input, Card, Button, Avatar, Space } from 'antd';
import { RobotOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "Hi! I'm the AI version of the portfolio owner. Ask me anything about my experience, skills, or try to convince me to join your company!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputValue
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! I have extensive experience in full-stack development with React, Node.js, and modern web technologies.",
        "I'm passionate about creating user-friendly applications and solving complex problems. I'd love to hear more about your company!",
        "I have a strong background in software engineering with a focus on scalable and maintainable code. What kind of projects does your team work on?",
        "Thank you for your interest! I'm always excited about new opportunities. Could you tell me more about the role and your company culture?",
        "I specialize in building responsive web applications with modern frameworks. I'm particularly interested in companies that value innovation and continuous learning."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      setMessages(prev => [...prev, {
        role: 'ai',
        content: randomResponse
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '50px 20px'
        }}>
          <div>
            <Title level={1} style={{ color: 'white', fontSize: '3rem', marginBottom: '20px' }}>
              Welcome to My Portfolio
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Software Developer | Problem Solver | Tech Enthusiast
            </Paragraph>
          </div>
        </div>

        {/* Chat Section */}
        <div style={{
          maxWidth: '800px',
          margin: '50px auto',
          padding: '20px'
        }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
            Chat with AI Me
          </Title>
          <Paragraph style={{ textAlign: 'center', marginBottom: '30px' }}>
            Try to learn about me or convince me to join your company!
          </Paragraph>

          <Card 
            style={{ 
              minHeight: '400px',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ 
              flex: 1, 
              overflowY: 'auto', 
              marginBottom: '20px',
              maxHeight: '400px'
            }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                    marginBottom: '15px',
                    alignItems: 'flex-start'
                  }}
                >
                  {message.role === 'ai' && (
                    <Avatar 
                      icon={<RobotOutlined />} 
                      style={{ 
                        backgroundColor: '#667eea',
                        marginRight: '10px'
                      }} 
                    />
                  )}
                  <div
                    style={{
                      maxWidth: '70%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: message.role === 'user' ? '#667eea' : '#f0f0f0',
                      color: message.role === 'user' ? 'white' : 'black'
                    }}
                  >
                    {message.content}
                  </div>
                  {message.role === 'user' && (
                    <Avatar 
                      icon={<UserOutlined />} 
                      style={{ 
                        backgroundColor: '#87d068',
                        marginLeft: '10px'
                      }} 
                    />
                  )}
                </div>
              ))}
              {isLoading && (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <Avatar 
                    icon={<RobotOutlined />} 
                    style={{ 
                      backgroundColor: '#667eea',
                      marginRight: '10px'
                    }} 
                  />
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: '#f0f0f0'
                  }}>
                    Typing...
                  </div>
                </div>
              )}
            </div>

            <Space.Compact style={{ width: '100%' }}>
              <TextArea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={(e) => {
                  if (!e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type your message here..."
                autoSize={{ minRows: 1, maxRows: 4 }}
                style={{ flex: 1 }}
              />
              <Button 
                type="primary" 
                icon={<SendOutlined />}
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                style={{
                  backgroundColor: '#667eea',
                  borderColor: '#667eea'
                }}
              >
                Send
              </Button>
            </Space.Compact>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
