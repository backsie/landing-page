import Image from "next/image";
import Button from "@/components/Button";

export default function ContactPage() {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-10 pb-20 md:gap-16 lg:py-16 xl:flex-row">
      {/* Left side - Contact Form */}
      <div className="relative z-20 flex-1 w-full max-w-2xl mx-auto xl:mx-0 xl:max-w-none xl:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
        <div className="mb-8 text-center xl:text-left">
          <h1 className="bold-40 lg:bold-52 text-gray-90">Get In Touch</h1>
          <p className="regular-16 mt-4 text-gray-60">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="mt-10 w-full">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-30">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-100 focus:border-green-500 outline-none transition-all duration-200"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-30">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-100 focus:border-green-500 outline-none transition-all duration-200"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-gray-30">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-100 focus:border-green-500 outline-none transition-all duration-200"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-30">Message</label>
              <textarea 
                id="message" 
                rows={5}
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-100 focus:border-green-500 outline-none transition-all duration-200 min-h-[120px]"
                required
              ></textarea>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button 
                type="submit" 
                title="Send Message" 
                variant="btn_dark_green"
                className="w-full sm:w-auto px-8 py-4 text-lg"
              />
            </div>
          </form>
        </div>
      </div>
      
      {/* Right side - Contact Info */}
      <div className="relative flex-1 w-full max-w-2xl mx-auto xl:mx-0 xl:max-w-none xl:ml-12">
        <div className="relative z-20 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-lg border border-green-100">
          <h2 className="bold-32 lg:bold-40 text-gray-90">Contact Information</h2>
          <p className="regular-16 mt-3 text-gray-60 mb-8">
            Feel free to reach out to us through any of these channels. We're here to help!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
              <div className="flex-shrink-0 mt-1">
                <div className="rounded-full bg-green-600 p-3 text-green-600">
                  <Image 
                    src="/map.svg" 
                    alt="Address" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5"
                  />
                </div>
              </div>
              <div>
                <h3 className="bold-16 text-gray-90">Our Office</h3>
                <p className="regular-14 text-gray-600 mt-1">535 5th Ave, 4th Floor, New York, NY 10017, United States</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
              <div className="flex-shrink-0 mt-1">
                <div className="rounded-full bg-green-600 p-3 text-green-600">
                  <Image 
                    src="/mail.svg" 
                    alt="Email"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
              </div>
              <div>
                <h3 className="bold-16 text-gray-90">Email Us</h3>
                <a href="mailto:hello@backsie.com" className="regular-14 text-green-600 hover:text-green-700 transition-colors mt-1 inline-block">
                  hello@backsie.co
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
              <div className="flex-shrink-0 mt-1">
                <div className="rounded-full bg-green-600 p-3 text-green-600">
                  <Image 
                    src="/phone.svg" 
                    alt="Phone" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5"
                  />
                </div>
              </div>
              <div>
                <h3 className="bold-16 text-gray-90">Call Us</h3>
                <a href="tel:+11234567890" className="regular-14 text-green-600 hover:text-green-700 transition-colors mt-1 inline-block">
                  +1 (646)-360-0429
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-200">
              <h3 className="bold-16 text-gray-90 mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center gap-3">
                {['/facebook.svg', '/instagram.svg', 'twitter.svg'].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={`Follow us on ${social.split('.')[0]}`}
                  >
                    <Image 
                      src={social} 
                      alt={social.split('.')[0]} 
                      width={16} 
                      height={16}
                      className="w-4 h-4"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
