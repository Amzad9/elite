import React from 'react';
import OnlineOrder from '../components/level-iii-merchant-services/OnlineOrder';

const MerchantServices = () => {
    return (
        <main

        >
            <section className="
        relative
        flex
        items-center
        py-20
        md:py-32
        justify-center
        overflow-hidden
        bg-[url('https://images.pexels.com/photos/8837470/pexels-photo-8837470.jpeg')]
        bg-cover
        bg-center
      ">
                <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent" />


                <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/85 via-[#152E5A]/70 to-[#152E5A]/85"></div>
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/20 blur-[120px] animate-pulse" />
                    <div className="absolute right-20 top-16 h-80 w-80 rounded-full bg-blue-100/25 blur-[140px] animate-pulse delay-700" />
                    <div className="absolute bottom-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-green-100/10 blur-[110px] animate-pulse delay-1000" />
                </div>
                <div className='container mx-auto'>
                    <h1
                        className="relative text-3xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.15)] text-center"
                    >
                        Level III Credit Card Processing Specialized Government and B2B Merchant Services      </h1>

                </div>
            </section>
            <OnlineOrder />
        </main>
    );
};

export default MerchantServices;
