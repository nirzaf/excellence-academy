import React from 'react';
import { Search } from 'lucide-react';

const Faculty = () => {
  const departments = [
    {
      name: 'Mathematics',
      faculty: [
        {
          name: 'Dr. Robert Chen',
          title: 'Department Head',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          education: 'Ph.D. Mathematics, Stanford University',
          experience: '15+ years teaching experience'
        },
        {
          name: 'Prof. Sarah Miller',
          title: 'Advanced Mathematics',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          education: 'M.S. Mathematics, MIT',
          experience: '10+ years teaching experience'
        }
      ]
    },
    {
      name: 'Science',
      faculty: [
        {
          name: 'Dr. Emily Thompson',
          title: 'Physics Department Head',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          education: 'Ph.D. Physics, CalTech',
          experience: '12+ years teaching experience'
        },
        {
          name: 'Prof. James Wilson',
          title: 'Biology Instructor',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          education: 'M.S. Biology, Harvard University',
          experience: '8+ years teaching experience'
        }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl">Meet our dedicated team of educators</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search faculty..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Faculty Listings */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {departments.map((department) => (
            <div key={department.name} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{department.name} Department</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {department.faculty.map((member) => (
                  <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-1/3 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-blue-600 mb-2">{member.title}</p>
                      <p className="text-gray-600 mb-2">{member.education}</p>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for talented educators to join our faculty
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;