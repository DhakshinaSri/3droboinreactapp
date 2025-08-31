import { useState } from 'react'
import './App.css'
import Spline from '@splinetool/react-spline'
import SplineScene from './components/SplineScene'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function App() {
  return (
    <div className="text-white font-[Afacad]">
      {/* Hero Section */}
      <section className="relative w-full h-screen ">
        <SplineScene />
        <div className="fixed inset-0 bg-gradient-to-br from-[#171717] to-[#313131] -z-20"></div>

        <nav className="absolute top-12 w-full flex justify-center z-20">
          <ul className="flex gap-[60px] text-[20px]">
            <li className="cursor-pointer hover:opacity-80">Home</li>
            <li className="cursor-pointer hover:opacity-80">Services</li>
            <li className="cursor-pointer hover:opacity-80">About Us</li>
            <li className="cursor-pointer hover:opacity-80">Contact</li>
          </ul>
        </nav>

        {/* Hero Text */}
        <div className="absolute left-30 top-1/2 transform -translate-y-1/2 text-[70px] leading-tight text-left z-10">
          <div className=" right-[0px]">The</div>
          <div className="right-[120px]">Intelligence</div>
        </div>

        <div className="absolute right-30 top-1/2 transform -translate-y-1/2 text-[70px] leading-tight text-right z-10">
          <div className="left-[150px]">Behind Every</div>
          <div className="right-[40px]">Trade</div>
        </div>

        <div className="absolute bottom-10 w-full flex flex-col items-center text-center text-[16px] px-4 z-10">
          <div className="mb-4 whitespace-nowrap">
            Empower your business with next-gen AI automation. Smarter decisions, faster execution, zero guesswork.
          </div>
          <button className="w-[180px] h-[40px] bg-blue-600 rounded-full border-2 border-[#A3A3AB] hover:bg-blue-700 transition flex items-center justify-center">
            Explore
          </button>
        </div>
      </section>

      {/* Logos Section */}
      <section className="mt-10">
        <div className="h-[60px] bg-[#313131] flex justify-center items-center gap-[200px] overflow-hidden">
          <img src="src/logos/logo1.png" alt="Logo 1" className="h-[25px]" />
          <img src="src/logos/logo2.png" alt="Logo 2" className="h-[15px]" />
          <img src="src/logos/logo3.png" alt="Logo 3" className="h-[20px]" />
          <img src="src/logos/logo4.png" alt="Logo 4" className="h-[15px]" />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#171717] pb-[50px]">
        <div className="flex justify-center items-start">
          <h2 className="text-4xl text-[48px] pt-25">Why Choose Us?</h2>
        </div>
          
        <div className="flex flex-col items-center pt-25">
          <div className="relative w-[800px]">
            <div className="border-t-2 border-dashed border-white"></div>
            <div className="absolute top-[-8.5px] left-0 w-full flex justify-between">
              <div className="w-[17px] h-[17px] bg-white rounded-full"></div>
              <div className="w-[17px] h-[17px] bg-white rounded-full"></div>
              <div className="w-[17px] h-[17px] bg-white rounded-full"></div>
              <div className="w-[17px] h-[17px] bg-white rounded-full"></div>
            </div>
          </div>

          <div className="w-[1000px] gap-[45px] flex justify-between items-start mt-[50px]">         
            <div className="w-[200px] flex-none text-center">
            <h3 className="text-xl font-bold mb-5">AI-Powered Insights</h3>
            <p className="text-sm text-gray-300 text-[18px]">
                Get real-time predictions and recommendations to stay ahead of the market.
              </p>
            </div>

            <div className="w-[200px] flex-none text-center">
              <h3 className="text-xl font-bold mb-5">Seamless Automation</h3>
              <p className="text-sm text-gray-300 text-[18px]">
                Execute trades, tasks, or workflows without manual effort.
              </p>
            </div>

            <div className="w-[200px] flex-none text-center">
              <h3 className="text-xl font-bold mb-5">Intuitive Dashboard</h3>
              <p className="text-sm text-gray-300 text-[18px]">
                Visualize complex data in a clean, interactive interface.
              </p>
            </div>

            <div className="w-[200px] flex-none text-center">
              <h3 className="text-xl font-bold mb-5">Secure & Reliable</h3>
              <p className="text-sm text-gray-300 text-[18px]">
                Enterprise-grade encryption to keep your data safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-[#171717] pb-[50px]">
        <div className="flex justify-center items-start">
          <h2 className="text-4xl text-[48px] pt-25">Smarter Process. Better Results.</h2>
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="w-[850px] h-[254px] flex gap-[50px]">
      
            <div className="w-[416px] h-[254px] bg-gradient-to-br from-[#171717] to-[#313131] rounded-lg flex justify-center items-center">
              <div className="w-[270px] text-left">
                <p className="text-sm text-gray-300 text-[16px] mb-5">
                  Our 3D robo isn’t just for show—it’s a symbol of the precision, speed, and adaptability we bring to every user. Whether you’re trading, analyzing, or building, our platform blends creativity with cutting-edge AI to give you an edge that feels almost human.
                </p>
                <a className="text-sm font-semibold flex items-center gap-2 text-[16px] cursor-pointer hover:opacity-80" style={{ color: '#D9D9D9' }}>
                  Explore <span>&gt;</span>
                </a>
              </div>            
            </div>

            <div className="flex gap-[40px] pt-6">
              <div className="w-[200px] text-left">
                <h3 className="text-xl font-bold mb-2">Connect</h3>
                <p className="text-sm text-gray-300 text-[16px] mb-5">
                  Integrate your platform or data sources instantly.
                </p>
                <h3 className="text-xl font-bold mb-2">Execute</h3>
                <p className="text-sm text-gray-300 text-[16px]">
                  Make informed decisions or let automation handle them.
                </p>
              </div>

              <div className="w-[200px] text-left">
                <h3 className="text-xl font-bold mb-2">Analyse</h3>
                <p className="text-sm text-gray-300 text-[16px] mb-5">
                  Our robo-engine scans data patterns in seconds.
                </p>
                <h3 className="text-xl font-bold mb-2">Grow</h3>
                <p className="text-sm text-gray-300 text-[16px]">
                  Track performance and scale effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="bg-[#171717] pb-[50px]">
        <div className="flex justify-center items-start">
          <h2 className="text-4xl text-[48px] pt-25">About us</h2>
        </div>
  
        <div className="w-[1093px] mx-auto text-center mt-[30px]">
          <p className="text-sm text-gray-300 text-[18px]">
            Built for traders, businesses, and innovators who value speed, intelligence, and precision. 
            Our AI robo-assistant combines machine learning with human-centered design to deliver smarter 
            outcomes for every trade or transaction.
          </p>
        </div>
      </section>

      {/* Get Ready */}
      <section className="bg-[#171717] pb-[150px]">
        <div className="flex justify-center items-start">
          <h2 className="text-4xl text-[24px] pt-25">Ready to upgrade your workflow?</h2>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="h-[315px] bg-gradient-to-br from-[#313131] to-[#171717] flex flex-col justify-between">
          <div className="flex justify-center items-start gap-[120px] pt-[50px]">
            <div className="w-[250px]">
              <h3 className="text-lg font-semibold mb-3 text-white text-[18px]">Subscribe to Newsletter</h3>
              <p className="text-sm text-gray-300 text-[16px] mb-4">
                Powering intelligence behind every trade. Subscribe to receive updates.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder=" " 
                  className="w-full h-[40px] pl-3 pr-10 bg-[#171717] text-white rounded-md border border-gray-500 focus:outline-none"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
                  <img 
                  src="\src\logos\mail.png" 
                  alt="Mail Icon" 
                  className="w-4 h-4"
                  />
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white text-[18px]">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-[16px] text-sm">
                <li className="cursor-pointer hover:opacity-80">Home</li>
                <li className="cursor-pointer hover:opacity-80">About</li>
                <li className="cursor-pointer hover:opacity-80">Features</li>
                <li className="cursor-pointer hover:opacity-80">Pricing</li>
                <li className="cursor-pointer hover:opacity-80">Contact</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white text-[18px]">Resources</h3>
              <ul className="space-y-2 text-gray-300 text-[16px] text-sm">
                <li className="cursor-pointer hover:opacity-80">Blog</li>
                <li className="cursor-pointer hover:opacity-80">FAQs</li>
                <li className="cursor-pointer hover:opacity-80">Documentation</li>
                <li className="cursor-pointer hover:opacity-80">Community</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white text-[18px]">Legal</h3>
              <ul className="space-y-2 text-gray-300 text-[16px] text-sm">
                <li className="cursor-pointer hover:opacity-80">Privacy Policy</li>
                <li className="cursor-pointer hover:opacity-80">Terms of Service</li>
                <li className="cursor-pointer hover:opacity-80">Cookie Policy</li>
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white text-[18px]">Contact</h3>
              <p className="text-sm text-gray-300 text-[16px]">Email: hello@domain.com</p>
              <p className="text-sm text-gray-300 text-[16px] mb-4">Phone: +91 XXXXXXXXXX</p>
              <h4 className="text-md font-semibold mb-2 text-white text-[18px]">Follow Us</h4>
                <div className="flex gap-4">
                  <img src="\src\logos\Instagram.png" alt="Instagram" className="w-5 h-5 cursor-pointer" />
                  <img src="\src\logos\facebook.png" alt="Facebook" className="w-5 h-5 cursor-pointer" />
                  <img src="\src\logos\linkedin.png" alt="LinkedIn" className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="border-t border-gray-600 text-center py-3 text-sm text-gray-400">
            © 2025 name. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  )
}

export default App