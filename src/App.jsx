// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa';
import { SiFlutter, SiFirebase } from 'react-icons/si';
import { HiCode, HiOutlineTranslate, HiChartBar, HiDocumentText } from 'react-icons/hi';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <span className="logo-text">NeoPrism</span>
            <span className="logo-labs">Labs</span>
          </div>
          
          <div className={`menu-toggle ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          
          <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
            <a href="#features">Features</a>
            <a href="#plugins">Plugins</a>
            <a href="#documentation">Docs</a>
            <a href="https://github.com/NeoPrismLabs/" className="github-link">
              <FaGithub /> GitHub
            </a>
            <a href="#get-started" className="cta-button">Get Started</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>The Neubrutalist Flutter UI Toolkit</h1>
            <p className="subtitle">Build bold, distinctive apps with a modular plugin system</p>
            <div className="hero-cta">
              <a href="#get-started" className="primary-button">Get Started</a>
              <a href="https://github.com/NeoPrismLabs/" className="secondary-button">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-preview">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dot red"></div>
                  <div className="code-dot yellow"></div>
                  <div className="code-dot green"></div>
                </div>
                <div className="code-content">
                  <pre>
                    <code>
{`import 'package:neoprism/neoprism.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return NeoPrismApp(
      home: Scaffold(
        body: Center(
          child: NeoPrismButton(
            id: 'welcome_btn',
            label: 'Hello NeoPrism!',
            onPressed: () {},
          ),
        ),
      ),
    );
  }`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Bold Design. Powerful Features.</h2>
            <p>NeoPrism Labs combines striking neubrutalist aesthetics with a robust plugin architecture</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <SiFlutter />
              </div>
              <h3>Flutter Native</h3>
              <p>Built from the ground up for Flutter with performance in mind</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HiCode />
              </div>
              <h3>Modular Plugins</h3>
              <p>Extend functionality with our powerful plugin system</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineTranslate />
              </div>
              <h3>Dynamic Localization</h3>
              <p>Smart translation caching with middleware support</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HiChartBar />
              </div>
              <h3>Built-in Analytics</h3>
              <p>Track usage and collect insights without extra code</p>
            </div>
          </div>
        </div>
      </section>

      <section id="plugins" className="plugins">
        <div className="container">
          <div className="section-header">
            <h2>Extensible Plugin Ecosystem</h2>
            <p>Core functionality coupled with powerful optional extensions</p>
          </div>
          <div className="plugin-showcase">
            <div className="plugin-card">
              <div className="plugin-header">
                <h3>Core UI Toolkit</h3>
                <span className="plugin-tag">Core</span>
              </div>
              <p>Comprehensive set of neubrutalist UI components with consistent design language</p>
              <div className="plugin-footer">
                <a href="#" className="plugin-button">Learn More</a>
              </div>
            </div>
            <div className="plugin-card">
              <div className="plugin-header">
                <h3>Analytics Engine</h3>
                <span className="plugin-tag">Plugin</span>
              </div>
              <p>Track component usage, generate heatmaps, and store analytics data remotely</p>
              <div className="plugin-footer">
                <a href="#" className="plugin-button">Learn More</a>
              </div>
            </div>
            <div className="plugin-card">
              <div className="plugin-header">
                <h3>Translation Middleware</h3>
                <span className="plugin-tag">Plugin</span>
              </div>
              <p>Intelligent caching system for multiple translation service providers</p>
              <div className="plugin-footer">
                <a href="#" className="plugin-button">Learn More</a>
              </div>
            </div>
            <div className="plugin-card">
              <div className="plugin-header">
                <h3>AI Generator</h3>
                <span className="plugin-tag">Coming Soon</span>
              </div>
              <p>Generate complete screens from natural language prompts using our UI components</p>
              <div className="plugin-footer">
                <a href="#" className="plugin-button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="code-example" className="code-example">
        <div className="container">
          <div className="section-header">
            <h2>Simple Integration</h2>
            <p>Add plugins with just a few lines of code</p>
          </div>
          <div className="code-showcase">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dot red"></div>
                <div className="code-dot yellow"></div>
                <div className="code-dot green"></div>
              </div>
              <div className="code-content large">
                <pre>
                  <code>
{`// Register plugins
void main() {
  // Initialize the plugin registry
  final pluginRegistry = NeoPrismPluginRegistry();
  
  // Register the analytics plugin
  final analyticsPlugin = NeoPrismAnalyticsPlugin(
    apiKey: 'your-api-key',
    batchInterval: Duration(minutes: 5),
  );
  pluginRegistry.registerPlugin(analyticsPlugin);
  
  // Register the translation plugin with Google provider
  final translationPlugin = NeoPrismTranslationPlugin(
    provider: GoogleTranslationProvider(apiKey: 'google-api-key'),
    cacheDuration: Duration(days: 30),
  );
  pluginRegistry.registerPlugin(translationPlugin);
  
  runApp(MyApp());
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documentation" className="documentation">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Documentation</h2>
            <p>Everything you need to build stunning applications</p>
          </div>
          <div className="docs-showcase">
            <div className="doc-card">
              <div className="doc-icon">
                <HiDocumentText />
              </div>
              <h3>Getting Started</h3>
              <p>Quick setup guide and basic concepts</p>
              <a href="#" className="doc-link">Read Guide →</a>
            </div>
            <div className="doc-card">
              <div className="doc-icon">
                <HiCode />
              </div>
              <h3>Component API</h3>
              <p>Detailed documentation for all UI components</p>
              <a href="#" className="doc-link">Explore API →</a>
            </div>
            <div className="doc-card">
              <div className="doc-icon">
                <SiFlutter />
              </div>
              <h3>Plugin Development</h3>
              <p>Create your own plugins for the ecosystem</p>
              <a href="#" className="doc-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="get-started" className="get-started">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to build bold, distinctive apps?</h2>
            <p>Get started with NeoPrism Labs today</p>
            <div className="cta-buttons">
              <a href="#" className="primary-button">Install Package</a>
              <a href="https://github.com/NeoPrismLabs/" className="secondary-button">
                <FaGithub /> View on GitHub
              </a>
            </div>
            <div className="install-command">
              <code>flutter pub add neoprism_core</code>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">NeoPrism</span>
              <span className="logo-labs">Labs</span>
              <p>The bold UI toolkit for Flutter</p>
            </div>
            <div className="footer-links">
              <div className="footer-links-column">
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Plugins</a>
                <a href="#">Roadmap</a>
                <a href="#">Pricing</a>
              </div>
              <div className="footer-links-column">
                <h4>Resources</h4>
                <a href="#">Documentation</a>
                <a href="#">Tutorials</a>
                <a href="#">Examples</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-links-column">
                <h4>Community</h4>
                <a href="https://github.com/NeoPrismLabs/">GitHub</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 NeoPrism Labs. All rights reserved.</p>
            <div className="social-links">
              <a href="https://github.com/NeoPrismLabs/"><FaGithub /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;