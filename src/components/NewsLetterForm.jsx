import React, { useState } from 'react';
import CircleBtn from '../ui/CircleBtn';

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    subscribed: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    setTimeout(() => {
      setSubmitMessage('Thanks for subscribing!');
      setIsSubmitting(false);
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        subscribed: false
      });
    }, 1000);
  };

  return (
    <div className="py-24 mb-16 container  flex items-start justify-between">
      <div className="w-full grid md:grid-cols-2 gap-30 ">
        {/* Left Side - Content */}
        <div className="space-y-6">
          <CircleBtn text="NEWSLETTER" />
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-tight">
            Grow with us
          </h1>
          
          <p className="text-xl md:text-2xl" style={{ color: '#1F473E', opacity: 0.8 }}>
            Don't miss out on the latest news, events, and resources to help your business blossom!
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2" style={{ color: '#1F473E', opacity: 0.6 }}>
              Enter your email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="input your text here"
              required
              className="w-full bg-transparent border-b-2 py-3 text-lg focus:outline-none transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2" style={{ color: '#1F473E', opacity: 0.6 }}>
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="input your text here"
                required
                className="w-full bg-transparent border-b-2 py-3 text-lg focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-2" style={{ color: '#1F473E', opacity: 0.6 }}>
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="input your text here"
                required
                className="w-full bg-transparent border-b-2 py-3 text-lg focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              name="subscribed"
              id="subscribe-checkbox"
              checked={formData.subscribed}
              onChange={handleInputChange}
              className="mt-1 w-5 h-5 cursor-pointer"
            />
            <label 
              htmlFor="subscribe-checkbox" 
              className="text-base cursor-pointer"
              style={{ color: '#1F473E', opacity: 0.7 }}
            >
              "I would like to subscribe to receive news and promotional offers from The Seed Hub."
            </label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.email || !formData.firstName || !formData.lastName}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full uppercase text-lg font-medium transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
              backgroundColor: '#1F473E',
              color: '#F1ECDC'
            }}
          >
            {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 10H16M16 10L10 4M16 10L10 16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {submitMessage && (
            <p className="text-center text-lg font-medium" style={{ color: '#1F473E' }}>
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;