import { motion } from 'motion/react';
import { X, Mail, Linkedin, Github, MapPin, Globe } from 'lucide-react';
import { useState } from 'react';

interface ContactOverlayProps {
  onClose: () => void;
}

export default function ContactOverlay({ onClose }: ContactOverlayProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'p.delana11993@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pedrodelana' },
    { icon: Github, label: 'GitHub', value: 'github.com/pedrode1ana' },
    { icon: Globe, label: 'Website', value: 'pedrodelana.com' },
    { icon: MapPin, label: 'Location', value: 'Tallahassee, FL' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-40 overflow-y-auto flex items-center justify-center"
      style={{
        background: 'rgba(10, 26, 11, 0.96)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <button
        onClick={onClose}
        className="fixed top-8 right-8 text-4xl transition-colors z-50"
        style={{ color: 'rgba(255, 255, 255, 0.4)' }}
      >
        <X size={32} className="hover:text-[#4CAF50]" />
      </button>

      <div className="px-12 py-24 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left - Contact Info */}
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              color: '#81C784',
              letterSpacing: '2px',
              marginBottom: '16px'
            }}>
              GET IN TOUCH
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '48px',
              color: 'white',
              marginBottom: '16px'
            }}>
              Ready to <span style={{ fontStyle: 'italic', color: '#81C784' }}>play.</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(255, 255, 255, 0.5)',
              lineHeight: 1.8,
              marginBottom: '48px'
            }}>
              I'm currently at Citi and always open to conversations about technology, products, and building things that matter.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 cursor-pointer group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-[10px] flex items-center justify-center transition-colors"
                      style={{ background: 'rgba(76, 175, 80, 0.12)' }}>
                      <Icon size={18} className="text-white/70 group-hover:text-[#81C784] transition-colors" />
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                      className="group-hover:text-[#81C784] transition-colors">
                      {link.value}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setStatus('idle');
                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                  });
                  if (res.ok) {
                    setFormData({ name: '', email: '', message: '' });
                    setStatus('success');
                  } else {
                    setStatus('error');
                  }
                } catch {
                  setStatus('error');
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl transition-all focus:outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl transition-all focus:outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl transition-all focus:outline-none resize-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                className="px-8 py-3.5 rounded-full transition-all"
                style={{
                  background: 'var(--green-pitch)',
                  color: 'white',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                }}
                whileHover={submitting ? {} : { scale: 1.02, background: '#2E7D32' }}
              >
                {submitting ? 'Sending...' : 'Send it →'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: '#4CAF50',
                  }}
                >
                  You're in. I'll be in touch.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: '#E53935',
                  }}
                >
                  Something went wrong. Try emailing me directly.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
