import React from 'react';

const RPLSteps: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-20 py-12">
      {/* Title */}
      <h2 className="text-2xl lg:text-4xl font-bold text-left mb-2">
        How RPL Works
      </h2>
      <p className="text-sm text-gray-500 mb-10">
        Four Steps to success
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Row 1 */}
        <div className="flex items-start space-x-4">
          <div className=" bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">Free Skills Assessment</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Speak to Skill Spot Australia about your goals and allow us to guide you towards the qualification that will help you reach them.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">Portfolio Of Experience</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Your dedicated consultant will guide you through the process of putting together a portfolio of evidence. This can contain previous qualifications with transcripts, certificates, photos and videos, samples or work examples, letters of reference, your current resume, etc.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">Evidence Review</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Once one of our partner registered training organisations (RTOs) has assessed your portfolio, the assessor assigned to your case may be in touch if any additional evidence is required. If you have any weak areas, the RTO may assign a trainer to upskill you at no cost to you.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">You're Qualified!!</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Skills Certified is partnered with Registered Training Organisations whose qualifications are nationally recognised in Australia and are the same as the qualification you would receive from full time study. Qualifications can also be used for licensing applications.
            </p>
          </div>
        </div>

        {/* Row 3 (Duplicate Steps for layout) */}
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">Free Skills Assessment</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Speak to Skill Spot Australia about your goals and allow us to guide you towards the qualification that will help you reach them.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">Portfolio Of Experience</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Your dedicated consultant will guide you through the process of putting together a portfolio of evidence. This can contain previous qualifications with transcripts, certificates, photos and videos, samples or work examples, letters of reference, your current resume, etc.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">Evidence Review</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Once one of our partner registered training organisations (RTOs) has assessed your portfolio, the assessor assigned to your case may be in touch if any additional evidence is required. If you have any weak areas, the RTO may assign a trainer to upskill you at no cost to you.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary">You're Qualified!!</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Skills Certified is partnered with Registered Training Organisations whose qualifications are nationally recognised in Australia and are the same as the qualification you would receive from full time study. Qualifications can also be used for licensing applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPLSteps;
