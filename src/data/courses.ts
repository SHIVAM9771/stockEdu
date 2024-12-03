import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Stock Market Fundamentals',
    description: 'Learn the basics of how the stock market works and key terminology.',
    fullDescription: 'This comprehensive course covers everything you need to know about the stock market basics. From understanding what stocks are to learning how to analyze market trends, you will gain the foundational knowledge necessary to start your investment journey.',
    students: 1234,
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400',
    instructor: 'Sarah Johnson',
    price: 99.99,
    level: 'Beginner',
    topics: [
      'Introduction to Stock Markets',
      'Types of Securities',
      'Market Analysis Basics',
      'Building a Portfolio'
    ],
    requirements: ['No prior experience needed', 'Basic math skills']
  },
  {
    id: 2,
    title: 'Technical Analysis Mastery',
    description: 'Master chart patterns and technical indicators for better trading decisions.',
    fullDescription: 'Dive deep into the world of technical analysis. Learn how to read charts, identify patterns, and use technical indicators to make informed trading decisions.',
    students: 856,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=400',
    instructor: 'Michael Chen',
    price: 149.99,
    level: 'Intermediate',
    topics: [
      'Chart Patterns',
      'Technical Indicators',
      'Trend Analysis',
      'Volume Analysis'
    ],
    requirements: ['Basic understanding of stock markets', 'Familiarity with trading platforms']
  },
  {
    id: 3,
    title: 'Risk Management Strategies',
    description: 'Learn essential strategies to protect your investment portfolio.',
    fullDescription: 'Protect your investments with proven risk management strategies. This course teaches you how to minimize losses while maximizing potential gains through proper position sizing and portfolio diversification.',
    students: 567,
    duration: '3 weeks',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=400',
    instructor: 'David Wilson',
    price: 129.99,
    level: 'Intermediate',
    topics: [
      'Position Sizing',
      'Stop Loss Strategies',
      'Portfolio Diversification',
      'Risk Assessment'
    ],
    requirements: ['Basic trading experience', 'Understanding of market mechanics']
  },
  {
    id: 4,
    title: 'Advanced Options Trading',
    description: 'Master complex options strategies for sophisticated trading.',
    fullDescription: 'Take your trading to the next level with advanced options strategies. Learn about complex spreads, volatility trading, and options pricing models.',
    students: 423,
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400',
    instructor: 'Emily Zhang',
    price: 199.99,
    level: 'Advanced',
    topics: [
      'Options Greeks',
      'Complex Spread Strategies',
      'Volatility Trading',
      'Options Pricing Models'
    ],
    requirements: ['Understanding of basic options', 'Experience with stock trading']
  }
];