import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, User, Briefcase, GraduationCap, Award, Code, Network, Zap, ChevronDown, Menu, X, Target, Users, Clock, TrendingUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  

  const tools = [
    { name: 'PuTTY', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/PuTTY_Icon.png', url: 'https://www.putty.org/' },
    { name: 'OpenVPN', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/OpenVPN_logo.svg', url: 'https://openvpn.net/' },
    { name: 'Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Microsoft_Excel_2013_logo.svg', url: 'https://www.microsoft.com/en-us/microsoft-365/excel' },
    { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', url: 'https://www.notion.so/' },
    { name: 'SolarWinds', logo: 'https://cdn.worldvectorlogo.com/logos/solarwinds.svg', url: 'https://www.solarwinds.com/' },
    { name: 'NetNumen', logo: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', url: '#' },
    { name: 'Winbox', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/MikroTik_Logo.svg', url: 'https://mikrotik.com/download' },
    { name: 'H3C', logo: 'https://www.h3c.com/cn/pub/minisite/202101/21_201312_17/images/logo.png', url: 'https://www.h3c.com/' },
    { name: 'ZTE', logo: 'https://www.zte.com.cn/global/images/logo.svg', url: 'https://www.zte.com.cn/global/' },
    { name: 'VSOL', logo: 'https://www.vsolcn.com/Uploads/logo/logo.png', url: 'https://www.vsolcn.com/' },
    { name: 'n8n', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/N8n_logo.svg', url: 'https://n8n.io/' },
    { name: 'Trello', logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg', url: 'https://trello.com/' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'achievements', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Container with Shadow */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg">
        {/* Navigation */}
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 max-w-6xl w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-gray-900 text-lg">Network Portfolio</div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
                <div className="px-4 py-2 space-y-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-4 animate-fade-in">
                AMIRUN HAFIZ BIN MOHD RIZAL
              </h1>
              <p className="text-xl sm:text-2xl text-blue-200 font-light mb-8">
                Telecom Engineer & Network and Solution Engineer
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Results-driven telecom engineer with experience leading fiber, wireless, and network infrastructure projects 
                from concept to deployment. Dedicated to providing secure, scalable, and efficient telecom solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <a
                href="mailto:hafizmohdrizal@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline">hafizmohdrizal@gmail.com</span>
              </a>
              <a
                href="tel:0166692946"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>016-669-2946</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hafizmohdrizal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <MapPin size={18} />
                <span>Selangor, Malaysia</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 animate-bounce"
            >
              <span>Learn more about me</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Introduction */}
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    As a results-driven telecom engineer, I bring extensive experience in leading complex 
                    infrastructure projects from initial concept through successful deployment. My expertise 
                    spans across fiber optic networks, wireless systems, and comprehensive network infrastructure.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I excel in tender preparation, solution design, and proof-of-concept development, with a 
                    proven track record in client engagement and cross-team coordination.
                  </p>
                </div>

                {/* Key Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <p className="text-sm font-medium text-gray-900">Government Tenders</p>
                    <p className="text-xs text-gray-500">RM2B+ Total Value</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <Network className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-teal-600 mb-2">150+</div>
                    <p className="text-sm font-medium text-gray-900">KM Fiber Network</p>
                    <p className="text-xs text-gray-500">Core Infrastructure</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-600 mb-2">316</div>
                    <p className="text-sm font-medium text-gray-900">Active Cabinets</p>
                    <p className="text-xs text-gray-500">GPON/XGSPON</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-orange-600 mb-2">4+</div>
                    <p className="text-sm font-medium text-gray-900">Years Experience</p>
                    <p className="text-xs text-gray-500">Professional Growth</p>
                  </div>
                </div>

                {/* Core Competencies */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <Network className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-lg font-semibold text-gray-900">Network Infrastructure</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expert in GPON, FTTH, FTTX infrastructure planning and deployment. 
                        Specialized in Layer 1-3 network operations with hands-on experience 
                        in OLT configuration and network optimization.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <Briefcase className="w-8 h-8 text-teal-600 mr-3" />
                        <h4 className="text-lg font-semibold text-gray-900">Project Leadership</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        End-to-end project lifecycle management from tender preparation 
                        to successful deployment. Proven track record in government 
                        projects and cross-team coordination.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <Code className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-lg font-semibold text-gray-900">Process Automation</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Proficient in Python, VBA, and API integration for process 
                        optimization. Experience with n8n workflow automation and 
                        custom solution development.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <Zap className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-lg font-semibold text-gray-900">Technical Innovation</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Cutting-edge solutions for telecom challenges including 
                        microwave systems, fiber optics, and network monitoring. 
                        Focus on scalable and efficient implementations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Approach */}
                <div className="bg-blue-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Approach</h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    My approach focuses on delivering scalable solutions that align with both business 
                    objectives and regulatory requirements. I'm committed to advancing Malaysia's 
                    telecommunications infrastructure while ensuring security, scalability, and 
                    operational efficiency in every project I undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-12">
                {/* Suaconcept Pro */}
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Presale and Solution Specialist</h3>
                      <p className="text-lg text-blue-600 font-medium">Suaconcept Pro Sdn Bhd</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-600 font-medium">2025 – Present</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                    <li>Participated in PoC sessions and workshops with government, clients, and partners to align technical solutions with project needs</li>
                    <li>Reviewed and challenged vendor proposals to ensure compliance with technical specs and tender requirements</li>
                    <li>Prepared BAU quotations for Metro-E, Dedicated Internet, and Broadband services</li>
                    <li>Managed technical documentation and proposals for government tenders via ePerolehan</li>
                    <li>Automated internal processes using Excel VBA, Python, n8n to carry critical recurrent tasks during heavy workload periods</li>
                  </ul>
                </div>

                {/* VC Telecoms */}
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Network Engineer</h3>
                      <p className="text-lg text-blue-600 font-medium">VC Telecoms Sdn Bhd</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-600 font-medium">2024 – 2025</p>
                      <p className="text-sm text-gray-500">Bandar Baru Bangi, Malaysia</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                    <li>Monitored GPON/XGSPON and Metro-E networks via SolarWinds; isolated Layer 2/3 faults to reduce downtime</li>
                    <li>Provisioned OLTs and activated ports with VLAN and routing configs for residential and business users</li>
                    <li>Remotely accessed core switches using SSH/Telnet for diagnostics and configuration changes</li>
                    <li>Resolved ONT/ONU, switch/router, and IP connectivity issues; escalated complex cases to L3 support</li>
                    <li>Used NetNumen, NMS, and AAA for service provisioning, device authentication, and performance monitoring</li>
                  </ul>
                </div>

                {/* Xactnet Solution */}
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Rigger</h3>
                      <p className="text-lg text-blue-600 font-medium">Xactnet Solution</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-600 font-medium">2023 – 2024</p>
                      <p className="text-sm text-gray-500">Shah Alam, Malaysia</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                    <li>Managed microwave link maintenance and decommissioning, including IDU/ODU replacement and feeder/jumper swaps</li>
                    <li>Conducted site surveys for antenna alignment, clearance, and RAN assessment in compliance with TSSR standards</li>
                    <li>Supervised microwave equipment installation, ensuring optimal RSSI and VSWR readings</li>
                    <li>Configured and managed installations via the ISDP Huawei system and coordinated IBC equipment deployment</li>
                    <li>Collaborated with subcontractors (e.g., skylift teams) and clients to meet installation specs and document all site activities</li>
                  </ul>
                </div>

                {/* Nohacom */}
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Fiber Optic Engineer</h3>
                      <p className="text-lg text-blue-600 font-medium">Nohacom Sdn Bhd</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-600 font-medium">2021 – 2023</p>
                      <p className="text-sm text-gray-500">Melaka</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                    <li>Designed GPON-based FTTH/FTTX networks using CAD/GIS, covering OSP, ISP, E-side, and D-side layouts</li>
                    <li>Prepared BOM/BOQ, technical proposals, and obtained permits from authorities for civil and fiber works</li>
                    <li>Supervised installation, OTDR/OLTS testing, and ensured compliance with design and quality standards</li>
                    <li>Managed project timelines, budgets, and coordinated site surveys, client updates, and cross-team execution</li>
                    <li>Oversaw civil works (HDD, manholes, microtrenching) and completed full documentation for handover</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Project Tendering</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 font-medium">E-Perolehan and MCMC</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Company representative in 7+ government tender briefings</li>
                      <li>Successfully submitted 3 tenders in 2024 and 7 tenders in 2025</li>
                      <li>Total indicative value exceeding RM2 billion</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Network className="w-8 h-8 text-teal-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Network Engineering</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 font-medium">L2 and L3 Operations</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Deployed Starlink connectivity at 13 POP sites across Malaysia</li>
                      <li>Configured over 50 OLTs (GPON & XGSPON)</li>
                      <li>Resolved 100+ network issues for clients</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Zap className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Fiber Network</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 font-medium">JENDELA & POP Infrastructure</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Delivered over 150 km of core fiber network</li>
                      <li>Designed and provisioned 316 active cabinets</li>
                      <li>Led Tiger Team & SWAT operations in Southern Malaysia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Background Grid */}
          <img 
            src="https://cdn.prod.website-files.com/61bacad64fa3d3896a3d7a01/6308c4badbba14a15ddabda4_grid.svg" 
            loading="lazy" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
          />
          
          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              {/* Recent Tools Grid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {tools.map((tool, index) => (
                    <a
                      key={index}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-gray-200 bg-gray-50 rounded-lg flex justify-center items-center h-20 transition-all duration-300 hover:border-blue-400 hover:shadow-md hover:bg-white"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="max-w-full max-h-12 object-contain filter grayscale transition-all duration-300 group-hover:filter-none"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-xs font-medium text-gray-600 text-center px-2">${tool.name}</div>`;
                          }
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Bachelor of Chemical Engineering (Hons)</h3>
                      <p className="text-blue-600 font-medium">Universiti Malaysia Pahang</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600"><span className="font-medium">Period:</span> 2014 – 2016</p>
                    <p className="text-gray-600"><span className="font-medium">Location:</span> Pahang, Malaysia</p>
                    <p className="text-gray-600"><span className="font-medium">CGPA:</span> 2.84</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="w-8 h-8 text-teal-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Diploma of Chemical Engineering Technology</h3>
                      <p className="text-teal-600 font-medium">Universiti Tun Hussein Onn Malaysia</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600"><span className="font-medium">Period:</span> 2017 – 2021</p>
                    <p className="text-gray-600"><span className="font-medium">Location:</span> Johor, Malaysia</p>
                    <p className="text-gray-600"><span className="font-medium">CGPA:</span> 3.80</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Certifications</h3>
                <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-lg">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span className="text-lg font-medium text-gray-900">Cisco Networking Academy</span>
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional References</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Muhammad Amin Hakim Bin Yahya</h4>
                    <p className="text-blue-600 font-medium mb-2">Operation Associate, Airfoil</p>
                    <p className="text-gray-600 text-sm">amin.hakim.yahya@gmail.com</p>
                    <p className="text-gray-600 text-sm">012-603-3601</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Nur Shafarina Binti Anuar</h4>
                    <p className="text-blue-600 font-medium mb-2">Planning Executive, Nohacom Sdn Bhd</p>
                    <p className="text-gray-600 text-sm">shafazie@gmail.com</p>
                    <p className="text-gray-600 text-sm">+60 11-2895 6798</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Arshad Bin Supian</h4>
                    <p className="text-blue-600 font-medium mb-2">General Manager, Xactnet Solution</p>
                    <p className="text-gray-600 text-sm">012-582-8309</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Mohd Fahmi Bin Nazir</h4>
                    <p className="text-blue-600 font-medium mb-2">Presale Engineer, Modernize Vida Sdn Bhd</p>
                    <p className="text-gray-600 text-sm">fahmynazir57@gmail.com</p>
                    <p className="text-gray-600 text-sm">+60 11-2358 8359</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to collaborate on your next telecom infrastructure project? 
                I'm always open to discussing new opportunities and challenges.
              </p>
              <div className="flex justify-center items-center gap-6">
                <a
                  href="mailto:hafizmohdrizal@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span>Get In Touch</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hafizmohdrizal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors duration-300"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                <p>&copy; 2025 Amirun Hafiz Bin Mohd Rizal. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App