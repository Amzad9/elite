import React from 'react';

const MarylandRestaurantNovi = () => {
  return (
    <div className=" py-20 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-indigo-900/20"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1730782396362-a77e14d6f009?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
       
        ></div>
        <div className="absolute inset-0 bg-green-500/20 backdrop-blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container px-4 md:px-0 mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
              Get Your Restaurant Novi Eats Online Ordering Today
                </h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-16">
            {/* Left Column - Consultation Services */}
            <div>
              <div className="glass-morphism relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Free Level III Consultation Includes:                   </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <ConsultationItem 
                      title="Government contractor needs assessment and compliance review"
                      description=""
                      feature="Personalized Analysis"
                    />
                    <ConsultationItem 
                      title="Current processing cost analysis and Level III savings calculation"
                      description=""
                      feature="Tailored Solutions"
                    />
                    <ConsultationItem 
                      title="Interchange rate optimization and cost-benefit analysis
Compliance requirement evaluation and implementation planning"
                      description=""
                      feature="Cost Optimization"
                    />
                    <ConsultationItem 
                      title="Technology integration planning and staff training timeline"
                      description=""
                      feature="Transparent Pricing"
                    />
                    <ConsultationItem 
                      title="Ongoing support and Level III merchant services implementation plan"
                      description=""
                      feature="Easy Integration"
                    />
               
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div>
              <div className="glass-morphism  relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Why Choose Elite Card Processing for Level III Merchant Services:</h2>
                  </div>
                  <div className="space-y-6">
                    <BenefitItem 
                      title="Level III processing company with government expertise"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Professional equipment installation and comprehensive compliance training"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Competitive Level III interchange rates with transparent pricing"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="GSA SmartPay compliance and government contractor specialization"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Integration with accounting and procurement systems included"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Scalable Level III processing solutions for growing government contractors"
                      description=""
                      highlight=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Consultation Item Component
const ConsultationItem = ({ title, description, feature }: { title: string; description: string; feature: string }) => (
  <div className="flex items-start group cursor-pointer">
     <div className="shrink-0 mt-3 w-2 h-2 bg-gray-400 rounded-full">
     </div>
    <div className="ml-4 flex-1">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-gray-800 group-hover:text-white transition-colors duration-300">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  </div>
);

// Benefit Item Component
const BenefitItem = ({ title, description, highlight }: { title: string; description: string; highlight: string }) => (
  <div className="flex items-start group cursor-pointer">
   <div className="shrink-0 mt-3 w-2 h-2 bg-gray-400 rounded-full">
   </div>
    <div className="ml-4 flex-1">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-gray-800 group-hover:text-white transition-colors duration-300">{title}</h4>
      
      </div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  </div>
);


export default  MarylandRestaurantNovi;