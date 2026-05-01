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
              <div className="glass-morphism relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Free Business Financing Consultation Includes:
                          </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <ConsultationItem 
                      title="	Business financing needs assessment and capital planning"
                      description=""
                      feature="Personalized Analysis"
                    />
                    <ConsultationItem 
                      title="	Processing volume analysis and qualification review"
                      description=""
                      feature="Tailored Solutions"
                    />
                    <ConsultationItem 
                      title="Funding amount estimation and repayment projections"
                      description=""
                      feature="Cost Optimization"
                    />
                    <ConsultationItem 
                      title="	Application assistance and documentation support"
                      description=""
                      feature="Transparent Pricing"
                    />
                    <ConsultationItem 
                      title="Timeline planning and funding coordination"
                      description=""
                      feature="Easy Integration"
                    />
                     <ConsultationItem 
                      title="Ongoing support and future financing opportunities"
                      description=""
                      feature="Easy Integration"
                    />
               
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div>
              <div className="glass-morphism  relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Why Choose Elite Card Processing for Business Financing:</h2>
                  </div>
                  <div className="space-y-6">
                    <BenefitItem 
                      title="Local business financing specialist with personal service"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Trusted partnerships with leading funding providers"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Competitive merchant cash advance programs and rates"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Seamless integration with existing merchant services"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Comprehensive business support and growth partnership"
                      description=""
                      highlight=""
                    />
                    <BenefitItem 
                      title="Scalable financing solutions for growing businesses"
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