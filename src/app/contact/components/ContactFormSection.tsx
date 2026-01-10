'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  subject: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactFormSectionProps {
  className?: string;
}

const ContactFormSection = ({ className = '' }: ContactFormSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'job', label: 'Job Opportunity' },
    { value: 'freelance', label: 'Freelance Project' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'mentorship', label: 'Mentorship' },
    { value: 'speaking', label: 'Speaking Engagement' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      inquiryType: 'general',
      message: ''
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  if (!isHydrated) {
    return (
      <section className={`py-12 bg-background ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
              <div className="space-y-4">
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Send Me a Message
          </h2>
          <p className="text-lg text-secondary font-body max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you as soon as possible
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start space-x-3">
              <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-headline font-semibold text-success mb-1">Message Sent Successfully!</h3>
                <p className="text-sm text-success-foreground/80 font-body">
                  Thank you for reaching out. I'll respond to your inquiry within 24-48 hours.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-2">
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg font-body transition-smooth focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    errors.name ? 'border-error' : 'border-input focus:border-primary'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-error font-body">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-2">
                  Email Address <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg font-body transition-smooth focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    errors.email ? 'border-error' : 'border-input focus:border-primary'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error font-body">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-body font-medium text-foreground mb-2">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-input rounded-lg font-body transition-smooth focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-body font-medium text-foreground mb-2">
                Subject <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg font-body transition-smooth focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.subject ? 'border-error' : 'border-input focus:border-primary'
                }`}
                placeholder="Project collaboration opportunity"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-error font-body">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border-2 rounded-lg font-body transition-smooth focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${
                  errors.message ? 'border-error' : 'border-input focus:border-primary'
                }`}
                placeholder="Tell me about your project, opportunity, or inquiry..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-error font-body">{errors.message}</p>
              )}
              <p className="mt-2 text-xs text-secondary font-body">
                Minimum 20 characters required
              </p>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
              <Icon name="ShieldCheckIcon" size={20} variant="outline" className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-secondary font-body">
                Your information is secure and will only be used to respond to your inquiry. I respect your privacy and never share personal data with third parties.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-brand-cta text-white rounded-lg font-cta font-semibold hover:bg-brand-cta/90 transition-smooth shadow-card hover:shadow-interactive disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Icon name="ArrowPathIcon" size={20} variant="outline" className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Icon name="PaperAirplaneIcon" size={20} variant="outline" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;