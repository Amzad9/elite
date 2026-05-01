import React from 'react';
import { MapPin, Map, Globe, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const ContactEliteCardProcessing = () => {
  return (
    <div className="relative py-8">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 "></div>
      </div>

      <div className="relative z-10 p-4 md:p-8 py-16">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Contact Elite Card Processing
            </h2>
            <p className="text-xl text-back max-w-3xl mx-auto">
              Your Merchant Services Provider
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information Card */}
            <div className="glass-morphism p-4 md:p-8 relative overflow-hidden group">
              {/* Background gradient effect */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-linear-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Contact Information
                  </h2>
                </div>

                {/* Contact Details */}
                <div className="space-y-8">
                  {/* Local Contact */}
                  <ContactItem
                    title=""
                    details={[
                      { type: "Phone", value: "(240) 329-9424", icon: <Phone size={20} /> },
                      { type: "Visit", value: "13701 Maugansville Rd #5, Hagerstown, MD 21740", icon: <MapPin size={20} /> }
                    ]}
                    accent="blue"
                  />
                  <div className="group">
                    <a href="/contact" className="group inline-block items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"><span className="text-lg">Contact </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas & CTA Card */}
            <div className="glass-morphism p-4 md:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5"></div>

              <div className="relative z-10">
                {/* Service Areas */}
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      Service Areas
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {/* Payment Processing Service Areas (Primary) */}
                    <ServiceArea
                      title="Payment Processing Service Areas (Primary)"
                      areas={["All of States, Pennsylvania , West Virginia"]}
                      gradient="from-green-500/20 to-emerald-500/20"
                      icon={<Map size={20} />}
                    />

                    {/* Payment Processing Service Areas (National) */}
                    <ServiceArea
                      title="Payment Processing Service Areas (National)"
                      areas={["We can help any business within the United States with merchant services"]}
                      gradient="from-blue-500/20 to-cyan-500/20"
                      icon={<Globe size={20} />}
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

const ContactItem = ({
  title,
  details,
  accent
}: {
  title: string;
  details: Array<{ type: string; value: string; icon: React.ReactNode }>;
  accent: string;
}) => (
  <div className="group">
    <h3 className={`text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-${accent}-100`}>
      {title}
    </h3>
    <div className="space-y-4">
      {details.map((detail, index) => (
        <div key={index} className="flex items-start group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
          <div className={`w-10 h-10 bg-linear-to-r from-${accent}-500/20 to-${accent === 'blue' ? 'cyan' : accent === 'cyan' ? 'blue' : 'purple'}-500/20 rounded-lg flex items-center justify-center mr-4`}>
            {detail.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">{detail.type}</p>
            <p className="text-gray-800 font-semibold text-lg">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ServiceArea = ({
  title,
  areas,
  gradient,
  icon
}: {
  title: string;
  areas: string[];
  gradient: string;
  icon: React.ReactNode;
}) => (
  <div className={`p-6 rounded-xl bg-linear-to-br ${gradient} backdrop-blur-sm border border-white/30`}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="font-bold text-gray-800">{title}</h4>
      </div>
  
    </div>
    <ul className="space-y-2">
      {areas.map((area, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
          {area}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactEliteCardProcessing;