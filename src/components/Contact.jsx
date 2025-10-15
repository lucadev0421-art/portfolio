import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "d9ebeba3-f4a7-4a41-bbe5-23fcf56051dc",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: "Portfolio Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send message. Please try again or email directly: lucadev0421@gmail.com");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Please try again or email directly: lucadev0421@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20">
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-5 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full animate-float-slow pointer-events-none shadow-xl shadow-cyan-400/30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-accent/30 rounded-lg animate-float-fast pointer-events-none shadow-lg shadow-accent/20"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-pink-400/30 rounded-full animate-float-medium pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rotate-45 animate-float-slow pointer-events-none blur-sm"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            AVAILABLE NOW — LIMITED SLOTS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Let's Turn Your Idea Into Reality
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            <span className="font-semibold text-slate-900">Response within 24 hours.</span> Flexible contracts (fixed-price or monthly). 
            Quality delivery guaranteed. Start your project today!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-10">
          <a href="mailto:lucadev0421@gmail.com" className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg hover:border-accent hover:scale-105 transition-all text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl mb-3">📧</div>
            <div className="font-bold text-slate-800 group-hover:text-accent mb-2">Email</div>
            <div className="text-sm text-slate-600 break-all">lucadev0421@gmail.com</div>
          </a>
          
          <a href="https://wa.me/15039356975" target="_blank" rel="noopener noreferrer" className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg hover:border-accent hover:scale-105 transition-all text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-3">💬</div>
            <div className="font-bold text-slate-800 group-hover:text-accent mb-2">WhatsApp</div>
            <div className="text-sm text-slate-600">+1 503-935-6975</div>
          </a>
          
          <a href="https://t.me/lucamartinez1111" target="_blank" rel="noopener noreferrer" className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg hover:border-accent hover:scale-105 transition-all text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl mb-3">✈️</div>
            <div className="font-bold text-slate-800 group-hover:text-accent mb-2">Telegram</div>
            <div className="text-sm text-slate-600">@lucamartinez1111</div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-2xl shadow-xl border p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">Send Me a Message</h3>
            <p className="text-center text-sm text-slate-600 mb-6">Tell me about your project and I'll get back to you within 24 hours</p>
            
            {!sent ? (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                    {error}
                  </div>
                )}
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      disabled={loading}
                      className="px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-base w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <input 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      type="email"
                      disabled={loading}
                      className="px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-base w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <textarea 
                    required 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project requirements..." 
                    rows="5"
                    disabled={loading}
                    className="px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none text-base w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  ></textarea>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-bold hover:shadow-xl hover:scale-105 transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message 🚀"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 bg-green-50 rounded-xl border-2 border-green-200 text-center">
                <div className="text-5xl mb-3">✅</div>
                <div className="font-bold text-lg text-green-800">Message Sent Successfully!</div>
                <div className="text-sm text-green-700 mt-2">
                  Thank you for reaching out! I'll get back to you within 24 hours.
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-green-200 text-xs text-slate-600">
                  Your message has been delivered to <strong>lucadev0421@gmail.com</strong>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-purple-700 transition font-medium"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}