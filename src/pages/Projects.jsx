import { Layout, Typography, Card, Row, Col, Tag, Button, Space, Collapse } from 'antd';
import { GithubOutlined, LinkOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

function Projects() {
  const projects = [
    {
      title: 'AI-Powered Natural Language Action Engine',
      subtitle: 'Rails API · OpenAI Tools API · Service Objects · Structured Output · Prompt Caching',
      overview: 'I built an AI-powered action parser that transforms freeform player input into structured, executable game mechanics. When a player writes something like "I sneak up to the guard, grapple him, and cover his mouth," the system decomposes that sentence into atomic actions, classifies intent, maps each step to valid in-game mechanics, and returns structured JSON ready for execution.',
      technicalHighlights: [
        {
          title: 'Structured Output via OpenAI Tools API',
          description: 'Designed strict JSON schemas to guarantee machine-readable responses instead of brittle text parsing.'
        },
        {
          title: 'Prompt Caching Strategy',
          description: 'Embedded static action datasets in system prompts to leverage OpenAI caching — reducing token costs and latency across repeated requests.'
        },
        {
          title: 'Multi-Intent Parsing & Confidence Scoring',
          description: 'Handles compound sentences and ambiguous input with confidence metadata for downstream validation.'
        },
        {
          title: 'Service-Oriented Rails Architecture',
          description: 'Clean separation between OpenaiService and ActionSelectorService for maintainability and testability.'
        },
        {
          title: 'Flexible API Design',
          description: 'Supports character-specific actions, custom action pools, or global defaults via a RESTful endpoint.'
        }
      ],
      impact: 'This project bridges NLP with deterministic game mechanics. It demonstrates real-world AI integration, cost optimization, error handling, and scalable backend design — not just API experimentation.',
      technologies: ['Ruby on Rails', 'OpenAI API', 'Service Objects', 'JSON Schema', 'REST API'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=AI+Action+Engine'
    },
    {
      title: 'Enterprise-Scale RPG Character Management System',
      subtitle: 'Rails 6+ · ActiveRecord · Polymorphic Associations · ActionCable · State Initialization',
      overview: 'I architected a full character lifecycle system with over 30 interconnected models supporting stats, abilities, inventory, body maps, relationships, and campaign state.',
      technicalHighlights: [
        {
          title: 'Advanced Data Modeling',
          description: '30+ associations, has_many :through relationships, polymorphic ownership (characters, NPCs, monsters), and nested dependency chains.'
        },
        {
          title: 'Draft-to-Final Creation Workflow',
          description: 'Multi-step CharacterDraft system with validation, stat allocation logic, and finalization pipeline. Transactional integrity across related models.'
        },
        {
          title: 'Real-Time Synchronization',
          description: 'ActionCable broadcasts update character state live across campaigns with granular event filtering to prevent unnecessary updates.'
        },
        {
          title: 'Nested Attribute Orchestration',
          description: 'Deep accepts_nested_attributes_for handling across inventory, stats, appearance, and body structure.'
        },
        {
          title: 'Game Logic Encapsulation',
          description: 'Dice resolution methods, modifier stacking rules, skill-to-attribute resolution, and automated initialization with after-create hooks.'
        }
      ],
      impact: 'This is SaaS-level backend complexity disguised as a game system. It shows deep understanding of relational modeling, transactional safety, performance considerations, and real-time architecture.',
      technologies: ['Ruby on Rails 6+', 'ActiveRecord', 'ActionCable', 'WebSockets', 'PostgreSQL'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=RPG+Management'
    },
    {
      title: 'Modular Seed Data & World-Building Pipeline',
      subtitle: 'Ruby · Rails Seeds · Data Architecture · Factory Patterns · Relational Integrity',
      overview: 'I designed a modular seeding pipeline capable of generating an entire game ecosystem — races, classes, factions, items, NPCs, buildings, abilities — all with correct relational wiring.',
      technicalHighlights: [
        {
          title: 'Dependency-Aware Seeding Pipeline',
          description: '20+ modular seed files with ordered orchestration to maintain referential integrity.'
        },
        {
          title: 'Complex Relationship Management',
          description: 'Many-to-many joins (abilities ↔ actions, items ↔ effects), race-specific anatomical generation, and status effect chains and alteration systems.'
        },
        {
          title: 'Template-Based Content Modeling',
          description: 'Reusable item/action/ability templates with data-driven inheritance patterns.'
        },
        {
          title: 'Atomic Transactions & Idempotency',
          description: 'find_or_create_by safeguards, foreign key enforcement, and transaction blocks for rollback safety.'
        }
      ],
      impact: 'This project demonstrates systems thinking: encoding complex mechanics entirely as relational data. It\'s backend architecture, not just content seeding.',
      technologies: ['Ruby', 'Rails Seeds', 'PostgreSQL', 'Factory Patterns', 'Data Architecture'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=World+Building'
    },
    {
      title: 'Real-Time Multiplayer Campaign Dashboard',
      subtitle: 'React · Redux Toolkit · ActionCable · WebSockets · Ant Design',
      overview: 'I built a live campaign interface where multiple players and a game master interact in real time with synchronized state.',
      technicalHighlights: [
        {
          title: 'WebSocket Lifecycle Management',
          description: 'Clean connection setup and teardown, Strict Mode double-render protection, and character-level message filtering.'
        },
        {
          title: 'Centralized State Architecture',
          description: 'Redux Toolkit slices for campaign, character, and transient states with async thunks for API synchronization.'
        },
        {
          title: 'Optimized Rendering',
          description: 'React refs to prevent duplicate WebSocket consumers and controlled component updates to minimize re-renders.'
        },
        {
          title: 'Live Notifications',
          description: 'Roll results broadcast instantly with badge indicators and visual feedback loops.'
        }
      ],
      impact: 'This is a production-ready real-time system. It proves I can manage concurrency, state synchronization, and event-driven UI architecture at scale.',
      technologies: ['React', 'Redux Toolkit', 'ActionCable', 'WebSockets', 'Ant Design'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=Campaign+Dashboard'
    },
    {
      title: 'Dynamic Multi-Step Character Creation Wizard',
      subtitle: 'React · Redux Toolkit · Ant Design · React Router · Axios',
      overview: 'I built a guided character creation flow designed to reduce friction in a highly complex domain.',
      technicalHighlights: [
        {
          title: 'API-Driven Dynamic Forms',
          description: 'Field configurations delivered from backend with reusable FormField abstraction supporting multiple input types.'
        },
        {
          title: 'Draft Persistence',
          description: 'Redux-backed auto-save system with resume workflow via route parameters.'
        },
        {
          title: 'Conditional Rendering Engine',
          description: 'Race/class selections dynamically alter available fields with nested drawer components for complex selection objects.'
        },
        {
          title: 'Real-Time Stat Visualization',
          description: 'Calculated previews and breakdowns with mobile-responsive layouts.'
        }
      ],
      impact: 'This project shows strong UX instincts layered on top of complex state management. It demonstrates the ability to simplify sophisticated systems for users without sacrificing flexibility.',
      technologies: ['React', 'Redux Toolkit', 'Ant Design', 'React Router', 'Axios'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/00f2fe/ffffff?text=Character+Wizard'
    },
    {
      title: 'Stateful Dice & Action Resolution Engine',
      subtitle: 'React · Redux · Probability Modeling · UI Feedback Systems',
      overview: 'I implemented a deterministic action resolution engine that translates game mechanics into performant client-side logic.',
      technicalHighlights: [
        {
          title: 'Advantage / Disadvantage Probability Logic',
          description: 'Proper max/min evaluation of 2d20 rolls with critical hit/fail detection.'
        },
        {
          title: 'Modifier Stacking System',
          description: 'Expertise, impairment, bonus dice with sequential resolution stages.'
        },
        {
          title: 'Time Economy Enforcement',
          description: 'Prevents action execution when resources are depleted.'
        },
        {
          title: 'Persistent Roll History',
          description: 'Backend synchronization with visual feedback + animation timing.'
        },
        {
          title: 'Game Master Control Layer',
          description: 'Toggleable master view for override authority.'
        }
      ],
      impact: 'This system translates abstract rule design into predictable, testable state transitions. It demonstrates algorithmic thinking and state machine design in a UI context.',
      technologies: ['React', 'Redux', 'JavaScript', 'Probability Modeling', 'State Machines'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/43e97b/ffffff?text=Dice+Engine'
    },
    {
      title: 'White-Label eCommerce Platform for Cannabis POS',
      subtitle: 'Ruby on Rails · React.js · Sinatra · CDN Distribution · WordPress Integration',
      overview: 'I led and rebuilt a failed overseas initiative to deliver dynamic, white-label online menus for dispensaries using our POS system. The goal: transform in-store inventory data into a fully configurable, Shopify-style eCommerce experience that could be embedded into any client website. I took ownership of the entire stack — backend architecture, frontend application, data modeling, and deployment infrastructure.',
      technicalHighlights: [
        {
          title: 'Single-Engineer Full Stack Ownership',
          description: 'Replaced a contractor-built system with a ground-up architecture. Designed backend services, frontend UI, and deployment strategy.'
        },
        {
          title: 'Dynamic Configuration Loader (Sinatra Service)',
          description: 'Built a lightweight Sinatra app that resolves client URLs, returns store-specific configuration payloads, and enables a single React app to dynamically personalize per retailer.'
        },
        {
          title: 'CDN-Based Frontend Distribution',
          description: 'Packaged React application for CDN delivery, allowed instant updates without client-side redeployments, and reduced support overhead and version fragmentation.'
        },
        {
          title: 'Native WordPress Integration',
          description: 'Designed architecture so dispensaries could embed the menu directly into WordPress, eliminated iframe dependency, and maintained SEO integrity and branding consistency.'
        }
      ],
      impact: 'This project demonstrates product rescue, distributed system thinking, and scalable frontend delivery architecture. It moved the company from a failing implementation to a maintainable, white-label eCommerce platform.',
      technologies: ['Ruby on Rails', 'React.js', 'Sinatra', 'CDN', 'WordPress', 'JavaScript'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=eCommerce+Platform'
    },
    {
      title: 'Inventory Normalization & Product Aggregation Engine',
      subtitle: 'Rails · Data Modeling · SKU Consolidation · Query Optimization',
      overview: 'Our POS stored inventory at the single-SKU level — meaning identical products could exist under multiple SKUs with variant naming and metadata inconsistencies. That structure works for retail scanning. It does not work for eCommerce. I redesigned the product data model to support aggregation, grouping, and variant presentation without breaking POS compatibility.',
      technicalHighlights: [
        {
          title: 'SKU Aggregation Logic',
          description: 'Grouped identical products by defined attribute sets, created parent-product abstraction for eCommerce display, and supported multiple inventory counts under a unified product view.'
        },
        {
          title: 'Schema Remodeling',
          description: 'Refactored inventory relationships to support both POS transactional integrity and eCommerce product grouping logic, while preserving backward compatibility with legacy reporting.'
        },
        {
          title: 'Query Optimization',
          description: 'Built filtering and aggregation endpoints optimized for storefront load speed and reduced redundant product duplication in payloads.'
        },
        {
          title: 'Variant & Quantity Resolution',
          description: 'Handled alternative names and metadata discrepancies, mapped quantities correctly across grouped SKUs.'
        }
      ],
      impact: 'This wasn\'t just a refactor. It was translating operational retail data into a customer-facing commerce model. It shows deep relational thinking and the ability to reconcile conflicting data paradigms inside a live production system.',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Data Modeling', 'SQL Optimization', 'Schema Design'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Inventory+Engine'
    },
    {
      title: 'Checkout, Cart & ACH Payment Integration',
      subtitle: 'Rails API · React · Plaid (ACH) · Secure Transaction Handling',
      overview: 'To complete the eCommerce ecosystem, I built the cart, filtering, checkout pipeline, and integrated ACH payments via Plaid. This extended the platform from "online menu" to full transactional commerce.',
      technicalHighlights: [
        {
          title: 'Custom Cart & Order API',
          description: 'Stateless cart architecture with server validation, inventory availability checks during checkout, and order creation pipeline integrated with POS backend.'
        },
        {
          title: 'Filtering & Search Endpoints',
          description: 'Category, potency, brand, and attribute filtering designed for fast storefront interaction. Built to scale across large, high-turnover inventory datasets.'
        },
        {
          title: 'ACH Payment Integration (Plaid)',
          description: 'Account linking and secure token exchange, automatic customer creation within POS, payment method vaulting and compliance handling.'
        },
        {
          title: 'Customer Lifecycle Management',
          description: 'Created customer records dynamically, managed account associations for repeat purchases, and ensured data integrity between payment provider and POS.'
        }
      ],
      impact: 'This shows production commerce engineering — payments, compliance considerations, customer identity management, and transaction consistency. It\'s the difference between building UI and building revenue infrastructure.',
      technologies: ['Ruby on Rails', 'React', 'Plaid API', 'ACH Payments', 'Payment Security', 'REST API'],
      github: 'https://github.com/purplehays09',
      image: 'https://via.placeholder.com/400x250/00f2fe/ffffff?text=Payment+Integration'
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Content style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <Title level={1}>Enterprise-Grade Projects</Title>
            <Paragraph style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              A full-stack system demonstrating AI integration, SaaS-level backend engineering, 
              real-time distributed state management, complex domain modeling, and UX simplification 
              of high-entropy systems.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {projects.map((project, index) => (
              <Col xs={24} key={index}>
                <Card
                  hoverable
                  style={{ marginBottom: '20px' }}
                >
                  <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                      <div style={{ 
                        height: '250px', 
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px'
                      }}>
                        <img
                          alt={project.title}
                          src={project.image}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </Col>
                    <Col xs={24} md={16}>
                      <Title level={3} style={{ marginTop: 0 }}>{project.title}</Title>
                      <Text type="secondary" style={{ fontSize: '14px', display: 'block', marginBottom: '16px' }}>
                        {project.subtitle}
                      </Text>
                      
                      <Paragraph style={{ fontSize: '15px', marginBottom: '16px' }}>
                        {project.overview}
                      </Paragraph>

                      <div style={{ marginBottom: '16px' }}>
                        {project.technologies.map((tech, i) => (
                          <Tag key={i} color="blue" style={{ marginBottom: '5px' }}>
                            {tech}
                          </Tag>
                        ))}
                      </div>

                      <Collapse 
                        bordered={false}
                        style={{ background: '#fafafa', marginBottom: '16px' }}
                      >
                        <Panel header="Technical Highlights" key="1">
                          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            {project.technicalHighlights.map((highlight, i) => (
                              <div key={i}>
                                <Text strong style={{ color: '#1890ff' }}>
                                  <RocketOutlined /> {highlight.title}
                                </Text>
                                <Paragraph style={{ marginTop: '4px', marginBottom: 0, paddingLeft: '24px' }}>
                                  {highlight.description}
                                </Paragraph>
                              </div>
                            ))}
                          </Space>
                        </Panel>
                        <Panel header="Why It Matters" key="2">
                          <Paragraph style={{ marginBottom: 0 }}>
                            <Text strong>Impact: </Text>
                            {project.impact}
                          </Paragraph>
                        </Panel>
                      </Collapse>

                      <Button 
                        type="primary"
                        icon={<GithubOutlined />}
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        View on GitHub
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          {/* System Overview Section */}
          <Card 
            style={{ 
              marginTop: '60px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none'
            }}
          >
            <div style={{ textAlign: 'center', color: 'white' }}>
              <Title level={2} style={{ color: 'white' }}>
                <CodeOutlined /> The Big Picture
              </Title>
              <Paragraph style={{ fontSize: '1.1rem', color: 'white', maxWidth: '900px', margin: '0 auto 30px' }}>
                Across these nine projects, I've built a complete ecosystem demonstrating:
              </Paragraph>
              
              <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>AI Systems Design</Title>
                    <Text>OpenAI integration, prompt engineering, structured output, cost optimization</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>SaaS-Grade Backend</Title>
                    <Text>30+ model architecture, polymorphic associations, transactional integrity</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>Real-Time Infrastructure</Title>
                    <Text>ActionCable, WebSockets, distributed state, event-driven architecture</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>eCommerce Platform Engineering</Title>
                    <Text>White-label systems, CDN distribution, payment integration, product rescue</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>Data Architecture & Normalization</Title>
                    <Text>SKU aggregation, schema remodeling, query optimization, legacy migration</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>Payment & Transaction Systems</Title>
                    <Text>Plaid/ACH integration, compliance handling, customer lifecycle, security</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>Complex Domain Modeling</Title>
                    <Text>Multi-step workflows, dependency chains, rule engines, data pipelines</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>Advanced Frontend Architecture</Title>
                    <Text>Redux architecture, WebSocket lifecycle, optimized rendering, UX design</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ height: '100%', textAlign: 'center' }}>
                    <Title level={4}>Production Engineering Patterns</Title>
                    <Text>Service objects, factory patterns, state machines, scalable design</Text>
                  </Card>
                </Col>
              </Row>

              <div style={{ marginTop: '40px' }}>
                <Space size="large">
                  <Button 
                    size="large" 
                    icon={<GithubOutlined />}
                    onClick={() => window.open('https://github.com/purplehays09', '_blank')}
                    style={{ height: '50px', fontSize: '16px' }}
                  >
                    View All on GitHub
                  </Button>
                  <Button 
                    size="large"
                    type="primary"
                    style={{ 
                      backgroundColor: 'white', 
                      color: '#667eea', 
                      borderColor: 'white',
                      height: '50px',
                      fontSize: '16px'
                    }}
                    onClick={() => window.location.href = 'mailto:davidmalloryhays@gmail.com'}
                  >
                    Let's Build Something
                  </Button>
                </Space>
              </div>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Projects;
