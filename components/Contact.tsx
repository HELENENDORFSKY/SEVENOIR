import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Mail, Send, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    type: 'Investor',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert("Thank you for reaching out. This is a demo submission.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500";
  const labelClasses = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2";

  return (
    <section id="contact" className="py-24 bg-[#686a6c] dark:bg-[#686a6c]">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Let's talk</h2>
          <p className="text-gray-100 text-lg">
            If you’re an investor, partner or advisor and want to talk, leave your contacts below.
          </p>
        </div>

        <div className="bg-[#575b5f] rounded-3xl shadow-xl p-8 md:p-12 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/5 text-white placeholder:text-gray-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/5 text-white placeholder:text-gray-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-100 mb-2">Organization / Role</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/5 text-white placeholder:text-gray-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-100 mb-2">I am an</label>
                <select
                  id="type"
                  name="type"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/5 text-white appearance-none"
                  onChange={handleChange}
                >
                  <option value="Investor">Investor</option>
                  <option value="Strategic Partner">Strategic Partner</option>
                  <option value="Advisor">Advisor</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/5 text-white placeholder:text-gray-500 resize-none"
                onChange={handleChange}
              ></textarea>
            </div>

            <Button type="submit" className="w-full md:w-auto min-w-[200px]">
              Send message
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <a href="mailto:Sevenoir@proton.me" className="flex items-center justify-center md:justify-start text-gray-200 hover:text-white transition-colors">
              <Mail className="w-5 h-5 mr-2 text-accent" />
              <span className="text-sm font-medium">Sevenoir@proton.me</span>
            </a>
            <a href="#" className="flex items-center justify-center md:justify-start text-gray-200 hover:text-white transition-colors">
              <Send className="w-5 h-5 mr-2 text-accent" />
              <span className="text-sm font-medium">@sevenoir_team</span>
            </a>
            <a href="#" className="flex items-center justify-center md:justify-start text-gray-200 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5 mr-2 text-accent" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};