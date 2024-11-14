import React from 'react';
import { Target, Heart, Book } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Excellence Academy</h1>
          <p className="text-xl">Building tomorrow's leaders through education and innovation</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional education that empowers students to achieve their full potential
                and become responsible global citizens.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600">
                Excellence, integrity, innovation, and inclusivity form the cornerstone of our
                educational philosophy.
              </p>
            </div>
            <div className="text-center p-6">
              <Book className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be a leading institution that sets the standard for academic excellence and
                character development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="School History"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 1950, Excellence Academy has been at the forefront of education for over
                seven decades. What started as a small school with just 50 students has grown into
                a prestigious institution serving over 1,000 students annually.
              </p>
              <p className="text-gray-600 mb-4">
                Throughout our history, we have maintained our commitment to academic excellence
                while adapting to meet the changing needs of our students and community.
              </p>
              <p className="text-gray-600">
                Today, we continue to build on our rich heritage while embracing innovation and
                preparing our students for the challenges of the 21st century.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Principal',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Prof. Michael Chen',
                role: 'Vice Principal',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Dr. Emily Williams',
                role: 'Academic Director',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((leader) => (
              <div key={leader.name} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;