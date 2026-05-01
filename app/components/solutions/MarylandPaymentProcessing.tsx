import React from 'react';

const MarylandPaymentProcessing = () => {
  return (
    <div className="min-h-screen py-20 relative">
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
        <div className="max-w-7xl px-4 md:px-0 mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
                Get Your All Business Payment Processing System Today
              </h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-16">
            {/* Left Column - Consultation Services */}
            <div>
              <div className="glass-morphism relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      Free Merchant Services Consultation
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <ConsultationItem 
                      title="Business Needs Assessment"
                      description="Comprehensive evaluation of your payment processing requirements"
                      feature="Personalized Analysis"
                    />
                    <ConsultationItem 
                      title="Payment Processing System Recommendation"
                      description="Custom system selection based on your business size and industry"
                      feature="Tailored Solutions"
                    />
                    <ConsultationItem 
                      title="Current Merchant Services Evaluation"
                      description="Analysis of your existing setup with upgrade recommendations"
                      feature="Cost Optimization"
                    />
                    <ConsultationItem 
                      title="Credit Card Processing Pricing Comparison"
                      description="Cost-benefit analysis to ensure you get the best value"
                      feature="Transparent Pricing"
                    />
                    <ConsultationItem 
                      title="Integration Planning"
                      description="Seamless integration with your existing business systems"
                      feature="Easy Integration"
                    />
                    <ConsultationItem 
                      title="Staff Training & Implementation Timeline"
                      description="Comprehensive training and clear implementation schedule"
                      feature="Quick Setup"
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
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      Why Choose Elite Card Processing
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <BenefitItem 
                      title="Local Payment Processing"
                      description="Same-day support with local expertise for most states businesses"
                      highlight="Local Expertise"
                    />
                    <BenefitItem 
                      title="Competitive & Transparent Pricing"
                      description="Clear fees with cost-benefit analysis to optimize your processing costs"
                      highlight="No Hidden Fees"
                    />
                    <BenefitItem 
                      title="Support For All Business Types"
                      description="Including firearms merchant accounts"
                      highlight="Inclusive Support"
                    />
                    <BenefitItem 
                      title="Scalable Solutions"
                      description="Payment processing that grows with your business"
                      highlight="Future-Proof"
                    />
                    <BenefitItem 
                      title="Professional Installation & Training"
                      description="Comprehensive setup and staff training for seamless implementation"
                      highlight="Expert Setup"
                    />
                    <BenefitItem 
                      title="Ongoing Support & Review"
                      description="Continuous service plan review and dedicated support"
                      highlight="24/7 Support"
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
    <div className="shrink-0 mt-3 w-6 border-b">
    </div>
    <a href="/getquote" className="ml-4 flex-1">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </a>
  </div>
);

// Benefit Item Component
const BenefitItem = ({ title, description, highlight }: { title: string; description: string; highlight: string }) => (
  <div className="flex items-start group cursor-pointer">
   <div className="shrink-0 mt-3 w-6 border-b">
   </div>
    <a href="/about" className="ml-4 flex-1">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">{title}</h4>
      
      </div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </a>
  </div>
);


export default MarylandPaymentProcessing;