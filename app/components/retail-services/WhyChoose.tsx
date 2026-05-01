import { 
    Building, 
    DollarSign, 
    Target, 
    Zap, 
    TrendingUp, 
    Handshake,
    Clock,
    CheckCircle,
    Shield,
    Users
  } from 'lucide-react';
  
  export default function WhyChooseUs() {
    const reasons = [
      {
        title: "Payment Processing Company",
        description: "Experienced team providing professional installation, training, and responsive support.",
        icon: <Building className="w-6 h-6 text-blue-600" />,
        bgColor: "bg-blue-50/70 backdrop-blur-sm",
        borderColor: "border-blue-200/50"
      },
      {
        title: "Affordable POS Platform",
        description: "Transparent pricing with competitive rates and no hidden fees for your business.",
        icon: <DollarSign className="w-6 h-6 text-green-600" />,
        bgColor: "bg-green-50/70 backdrop-blur-sm",
        borderColor: "border-green-200/50"
      },
      {
        title: "Industry Expertise",
        description: "Deep understanding of business requirements and relevant regulations.",
        icon: <Target className="w-6 h-6 text-purple-600" />,
        bgColor: "bg-purple-50/70 backdrop-blur-sm",
        borderColor: "border-purple-200/50"
      },
      {
        title: "Responsive Support",
        description: "Dedicated team provides fast support and equipment replacement when you need it.",
        icon: <Zap className="w-6 h-6 text-red-600" />,
        bgColor: "bg-red-50/70 backdrop-blur-sm",
        borderColor: "border-red-200/50"
      },
      {
        title: "Scalable Solutions",
        description: "Complete staff training included with scalable POS solutions that grow with your business.",
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        bgColor: "bg-amber-50/70 backdrop-blur-sm",
        borderColor: "border-amber-200/50"
      },
      {
        title: "Growth Partnership",
        description: "We grow with you, providing upgrades and new integrations as your business evolves.",
        icon: <Handshake className="w-6 h-6 text-teal-600" />,
        bgColor: "bg-teal-50/70 backdrop-blur-sm",
        borderColor: "border-teal-200/50"
      }
    ];
  
    return (
      <section className="py-20 relative overflow-hidden">
           {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1684415537238-431c0ab50412?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
       
        ></div>
        <div className="absolute inset-0 bg-via-slate-80/20 backdrop-blur-2xl"></div>
      </div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
  
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-6 leading-tight">
            Why All Businesses Choose Us
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Industry expertise, competitive pricing, and unparalleled support for your payment processing needs
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Background with Blur */}
                <div
                  className={`absolute inset-0 ${reason.bgColor} ${reason.borderColor} border backdrop-blur-sm rounded-xl`}
                ></div>
  
                {/* Additional Blur Layer */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] rounded-xl"></div>
  
                {/* Content Container */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon Badge with Blur */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm backdrop-blur-sm bg-white/50 border ${reason.borderColor}`}
                  >
                    {reason.icon}
                  </div>
  
                  {/* Title and Description */}
                  <div className="grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
  
                  {/* Learn More Link with consistent spacing */}
                  <div className="mt-8 pt-4 border-t border-gray-200/50">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group/link">
                      Learn more
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
  
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-200/10 to-purple-200/10 rounded-xl blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Stats Section with Blur */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-sm border border-blue-200/30 rounded-xl"></div>
              <div className="relative text-center p-6">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Support Available</div>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-green-50/50 backdrop-blur-sm border border-green-200/30 rounded-xl"></div>
              <div className="relative text-center p-6">
                <div className="flex justify-center mb-2">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">Same-Day</div>
                <div className="text-gray-700 font-medium">Dedicated Support</div>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-purple-50/50 backdrop-blur-sm border border-purple-200/30 rounded-xl"></div>
              <div className="relative text-center p-6">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">0%</div>
                <div className="text-gray-700 font-medium">Hidden Fees</div>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-amber-50/50 backdrop-blur-sm border border-amber-200/30 rounded-xl"></div>
              <div className="relative text-center p-6">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">MD Businesses</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }