import { useState } from 'react';
import { Layout, Typography, Input, Card, Button, Avatar, Space, Flex } from 'antd';
import { RobotOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import PlayingCard from '../components/PlayingCard';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "Hi! I'm David Hays, just a regular human who built an AI version of myself to chat with you. Ask me anything about my experience, skills, or try to convince me to join your company! (Or you know, Star Wars, TTRPGs, or my personality)"
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
    const uri = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:5555';

    // Simulate AI response
    axios.post(`${uri}/api/personal_response`, { message: inputValue })
      .then(response => {
        const aiMessage = {
          role: 'ai',
          content: response.data.response
        };
        setMessages(prevMessages => [...prevMessages, aiMessage]);
      })
      .catch(error => {
        console.error('Error fetching AI response:', error);
        const errorMessage = {
          role: 'ai',
          content: "Sorry, something went wrong. Please try again."
        };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
              David Hays
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Full-Stack Software Engineer | Ruby on Rails & React Specialist | Building Scalable Solutions
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
            Let's Talk
          </Title>
          <Paragraph style={{ textAlign: 'center', marginBottom: '30px' }}>
            Ask me about my work at Posabit, Tuft & Needle, or my experience building AI-powered systems, 
            real-time applications, and eCommerce platforms. Ask me what I can bring to your team, or just say hi!
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

        <Flex >
          <PlayingCard suit="spades" rank="ace" />
        </Flex>
      </Content>
    </Layout>
  );
}

export default Home;
