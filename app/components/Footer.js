'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import Lightning from './Lightning'
import { useTheme } from './ThemeProvider'

export default function Footer() {
  const { theme } = useTheme()
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/mohit-singh-rawat',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/mohit-singh-rawat-2a1112299/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:rawat.mohitsingh7455@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-white dark:bg-dark-300 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Lightning Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <Lightning
          hue={theme === 'dark' ? 270 : 220}
          xOffset={0}
          speed={0.5}
          intensity={0.8}
          size={1.2}
        />
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Mohit Singh Rawat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Frontend Developer passionate about creating beautiful web interfaces 
              and bringing ideas to life through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 bg-gray-100 dark:bg-dark-100 rounded-full text-gray-600 dark:text-gray-400 transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Email:</span><br />
                rawat.mohitsingh7455@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Location:</span><br />
                India
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Available for:</span><br />
                Freelance & Full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mohit Singh Rawat. All rights reserved.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}