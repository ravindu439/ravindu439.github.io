'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { name: 'About', href: '/about', icon: 'UserIcon' },
    { name: 'Projects', href: '/portfolio', icon: 'BriefcaseIcon' },
    { name: 'Skills', href: '/skills', icon: 'CodeBracketIcon' },
  { name: 'Contact', href: '/contact', icon: 'EnvelopeIcon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`w-full bg-card shadow-md transition-all duration-300 sticky top-0 z-50 ${
          isScrolled ? 'shadow-interactive' : 'shadow-card'
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/homepage"
              className="flex items-center space-x-3 group transition-smooth"
              onClick={closeMobileMenu}
            >
              <div className="flex flex-col">
                <span className="text-xl font-headline font-bold text-primary tracking-tight">
                  Ravindu
                </span>
                <span className="text-xs font-body text-secondary -mt-1">
                  Lakshan
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-body font-medium transition-smooth flex items-center space-x-2 ${
                    isActiveRoute(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.icon && (
                    <Icon name={item.icon as any} size={18} variant="outline" />
                  )}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-brand-cta text-white rounded-md text-sm font-cta font-semibold hover:bg-brand-cta/90 transition-smooth shadow-card hover:shadow-interactive"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                variant="outline"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background z-40 lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="absolute top-16 left-0 right-0 bottom-0 bg-card overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-4 py-6 space-y-2">
              {[...navigationItems].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-base font-body font-medium transition-smooth ${
                    isActiveRoute(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {item.icon && (
                    <Icon name={item.icon as any} size={20} variant="outline" />
                  )}
                  <span>{item.name}</span>
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-border">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full px-6 py-3 bg-brand-cta text-white rounded-md text-base font-cta font-semibold hover:bg-brand-cta/90 transition-smooth shadow-card"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;