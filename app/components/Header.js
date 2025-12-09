'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Experience', href: '#experience', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Certifications', href: '#certifications', type: 'scroll' },
    { name: 'Testimonials', href: '#testimonials', type: 'scroll' },
    { name: 'Blog', href: '/blog', type: 'link' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ]
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer"
            >
              MSR
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm lg:text-base transition-colors duration-200 ${
                    pathname === item.href 
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    if (pathname !== '/') {
                      window.location.href = '/' + item.href
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {item.name}
                </button>
              )
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" /> : <Moon size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-dark-100"
            >
              {theme === 'dark' ? <Sun size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" /> : <Moon size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-dark-100"
            >
              {isMobileMenuOpen ? <X size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" /> : <Menu size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 sm:mt-4 py-3 sm:py-4 bg-white dark:bg-dark-200 rounded-lg shadow-lg mx-2 sm:mx-0"
          >
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base hover:bg-gray-100 dark:hover:bg-dark-100 ${
                    pathname === item.href 
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    if (pathname !== '/') {
                      window.location.href = '/' + item.href
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="block w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                >
                  {item.name}
                </button>
              )
            ))}
          </motion.div>
        )}
      </nav>

    </motion.header>
  )
}