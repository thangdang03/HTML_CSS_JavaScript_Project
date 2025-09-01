import Image from "next/image";
import { ArrowRight, ChevronRight, PenTool, Users, Layout, Shield, MessageSquare, Bell, Sparkles } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";

const features = [
  {
    name: "Modern Editor",
    description: "Powerful rich text editor with real-time collaboration",
    icon: PenTool,
  },
  {
    name: "Team Collaboration",
    description: "Work together seamlessly with your team members",
    icon: Users,
  },
  {
    name: "Smart Templates",
    description: "Create documents quickly with pre-built professional templates",
    icon: Layout,
  },
  {
    name: "Enterprise Security",
    description: "Advanced security features with role-based access control",
    icon: Shield,
  },
  {
    name: "Interactive Comments",
    description: "Collaborate through inline comments and discussions",
    icon: MessageSquare,
  },
  {
    name: "Smart Notifications",
    description: "Stay updated with real-time document activity notifications",
    icon: Bell,
  }
];
export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-main relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-down">
              <Sparkles className="w-4 h-4" />
              <span>Introducing Next-Gen Document Collaboration</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 animate-fade-in-up">
              Create, Collaborate,
              <span className="block mt-2 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Innovate Together
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Transform your team's workflow with our powerful document collaboration platform. 
              Real-time editing, smart features, and seamless integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <a href="/signup" className="bg-black text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-900 transition-all group">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="text-gray-600 px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:text-black transition-colors">
                Watch Demo
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="min-h-screen py-32 bg-white relative">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Everything you need to create
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> amazing documents</span>
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Powerful features to help your team collaborate and create beautiful documents together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="feature-card group bg-white p-6 sm:p-8 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-white p-10 rounded-3xl border border-blue-100/50 shadow-xl shadow-blue-100/20">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
                Key Benefits
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Real-time Collaboration",
                    description: "Work together with unlimited team members in real-time",
                    icon: Users,
                  },
                  {
                    title: "Advanced Formatting",
                    description: "Professional document styling and formatting tools",
                    icon: Layout,
                  },
                  {
                    title: "Enterprise Security",
                    description: "Secure sharing with granular permission controls",
                    icon: Shield,
                  },
                  {
                    title: "Version Control",
                    description: "Automatic version history and document backups",
                    icon: Bell,
                  }
                ].map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Get started in
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> minutes</span>
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Simple and intuitive workflow to help you and your team get started quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                title: "Sign up / Login",
                description: "Create an account or login to access all features",
                icon: "🔐",
                step: 1
              },
              {
                title: "Create your workspace",
                description: "Set up your personal or team workspace in just a few clicks",
                icon: "✨",
                step: 2
              },
              {
                title: "Invite your team",
                description: "Add team members and set their access permissions easily",
                icon: "👥",
                step: 3
              },
              {
                title: "Start collaborating",
                description: "Create documents and collaborate in real-time with your team",
                icon: "🚀",
                step: 4
              }
            ].map((step, index) => (
              <div 
                key={step.title}
                className="relative p-8 bg-white rounded-xl border border-gray-100 animate-fade-in-up flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2 text-blue-600 font-bold">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-blue-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl mb-8 text-blue-100 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Join thousands of teams already using our platform to collaborate better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <a href="/signup" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-all group">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-white/30 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container-main">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">Get in Touch</h2>
            <p className="text-gray-600 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Have questions about our platform? We're here to help.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-6">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={120} 
                  height={40} 
                  className="brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Transform your team's workflow with our powerful document collaboration platform.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Security', 'Enterprise'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Customers', 'Blog', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Twitter', icon: '/icons/twitter.svg' },
                  { name: 'LinkedIn', icon: '/icons/linkedin.svg' },
                  { name: 'Facebook', icon: '/icons/facebook.svg' },
                  { name: 'Instagram', icon: '/icons/instagram.svg' }
                ].map((social) => (
                  <li key={social.name}>
                    <a 
                      href={`https://${social.name.toLowerCase()}.com`}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image 
                        src={social.icon} 
                        alt={social.name} 
                        width={16} 
                        height={16} 
                        className="opacity-75 group-hover:opacity-100 transition-opacity"
                      />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Notion Compacity. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const steps = [
  {
    title: "Create an Account",
    description: "Sign up for free and set up your workspace in minutes.",
    image: "/images/create-account.svg",
  },
  {
    title: "Invite Your Team",
    description: "Add team members and set their access levels.",
    image: "/images/invite-team.svg",
  },
  {
    title: "Create Documents",
    description: "Start creating and collaborating on documents instantly.",
    image: "/images/create-docs.svg",
  },
  {
    title: "Collaborate",
    description: "Work together in real-time with your team members.",
    image: "/images/collaborate.svg",
  },
];
