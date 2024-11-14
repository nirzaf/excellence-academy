import React from 'react';
import { BookOpen, Award, Users, Clock } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      level: 'Elementary School',
      grades: 'Grades K-5',
      description: 'Foundation for lifelong learning with focus on core subjects and character development.',
      features: ['Personalized Learning', 'STEM Programs', 'Arts & Music', 'Physical Education']
    },
    {
      level: 'Middle School',
      grades: 'Grades 6-8',
      description: 'Challenging curriculum that promotes critical thinking and personal growth.',
      features: ['Advanced Mathematics', 'Science Labs', 'Language Arts', 'Social Studies']
    },
    {
      level: 'High School',
      grades: 'Grades 9-12',
      description: 'College preparatory program with diverse course offerings and AP classes.',
      features: ['AP Courses', 'College Counseling', 'Electives', 'Honors Programs']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl">Comprehensive education for every stage of learning</p>
        </div>
      </div>

      {/* Academic Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Comprehensive Curriculum</h3>
            </div>
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Advanced Placement</h3>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Small Class Sizes</h3>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Flexible Scheduling</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Programs */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.level} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{program.level}</h3>
                  <p className="text-blue-600 mb-4">{program.grades}</p>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">STEM Excellence</h3>
              <p className="text-gray-600">
                Our STEM program provides hands-on experience in science, technology,
                engineering, and mathematics through innovative projects and real-world
                applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Arts & Humanities</h3>
              <p className="text-gray-600">
                Students explore creativity and cultural understanding through our
                comprehensive arts and humanities programs, including music, visual arts,
                and literature.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Language Programs</h3>
              <p className="text-gray-600">
                Multiple language options including Spanish, French, and Mandarin,
                with emphasis on both cultural understanding and practical communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Advanced Placement</h3>
              <p className="text-gray-600">
                Extensive AP course offerings allowing students to earn college credit
                and prepare for higher education while still in high school.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;