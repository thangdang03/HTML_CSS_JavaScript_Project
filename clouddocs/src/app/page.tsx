import HeroLandingPage from "@/app/_components/HeroLandingPage";
import NavLandingPage from "@/app/_components/NavLandingPage";
import {features} from "@/app/_datas/Feature.data";
import {Sparkles, Users, Layout, ShieldCheck, Bell, ArrowRight } from 'lucide-react';
import Image from "next/image";
import logo from "@Public/logo.png"; 


export default function Home() {
  return (
    <main className="">
      {/*navigation section*/}
      <NavLandingPage />

      {/* Hero Section */}
      <HeroLandingPage />

      {/* Features Section */}
      <section id="Features" className="min-h-screen py-32 bg-white relative">
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
                    icon: ShieldCheck,
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
      <section id="How-it-work" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
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
      <section id="CTA" className="py-32 bg-gradient-to-b from-white to-gray-50">
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

      {/* Footer Section */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-600 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container w-full flex items-center justify-center flex-wrap relative">
          {/* Main footer content */}
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-6 gap-12 mb-5">
            {/* Logo and description column */}
            <div className="md:col-span-2 animate-fade-in-up">
              <div className="mb-6 transform hover:scale-105 transition-transform flex items-center gap-3">
                <Image 
                  src={logo} 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className=""
                />
                <span>Cloud Doc</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors">
                Transform your team's workflow with our powerful document collaboration platform. Experience the future of document management.
              </p>
            </div>
            
            {/* Product links column */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Product
              </h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Security', 'Enterprise'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company links column */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Company
              </h4>
              <ul className="space-y-3">
                {['About', 'Customers', 'Blog', 'Careers'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Connect/Social media column */}
            <div className="md:col-span-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Connect With Us
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Twitter', icon: '/icons/twitter.svg', color: 'hover:bg-blue-400' },
                  { name: 'LinkedIn', icon: '/icons/linkedin.svg', color: 'hover:bg-blue-600' },
                  { name: 'Facebook', icon: '/icons/facebook.svg', color: 'hover:bg-blue-500' },
                  { name: 'Instagram', icon: '/icons/instagram.svg', color: 'hover:bg-pink-500' }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={`https://${social.name.toLowerCase()}.com`}
                    className={`flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 ${social.color} transition-all duration-300 hover:scale-105`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.name} 
                      width={20} 
                      height={20} 
                      className="opacity-75 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Footer bottom section */}
          <div className="w-[80%]   border-t  border-gray-800/50 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex  md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} CloudDocs. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
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
