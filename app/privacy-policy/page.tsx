import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-pink-50">
   
      <section className="relative flex h-[250px]  items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/90 via-[#152E5A]/75 to-[#152E5A]/90" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-white/40 blur-[140px]" />
          <div className="absolute right-20 top-16 h-[420px] w-[420px] rounded-full bg-blue-700/30 blur-[160px]" />
          <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[130px]" />
        </div>

        <div className="relative z-10 px-14 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          <div className="mx-auto h-1 w-28 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 p-8 md:p-12 backdrop-blur-2xl shadow-xs">
        
          {/* PRIVACY POLICY CONTENT */}
          <div className="relative z-10 prose prose-lg max-w-none text-slate-800">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                PRIVACY POLICY
              </h2>
              <p className="text-lg font-semibold text-slate-700">
                Last updated August 02, 2024
              </p>
            </div>

            <div className="space-y-8">
              <p>
                Elite Card Processing is committed to safeguarding the privacy of our users. We want to assure you that we do not share your personal information with third parties. This privacy policy outlines how we collect, use, and protect the information you provide to us.
              </p>

              <div>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">Information Collection</h3>
                <p>
                  We collect only the information necessary to provide and improve our services. This may include name, phone number, email address, etc. We do not sell, rent, or share this information with any third parties.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">How We Use Your Information</h3>
                <p>
                  The information collected is used solely for communicating with the intended party. We do not share your information with external parties for marketing or any other purposes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">Your Choices</h3>
                <p>
                  You have the right to access, correct, or delete your information. If you have any concerns or questions about your data, please contact us at support@elitecardprocessing.com.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">Policy Changes</h3>
                <p>
                  We may update our privacy policy from time to time. Any changes will be communicated to you, and your continued use of our services implies your acceptance of the updated policy. By using our services, you agree to the terms outlined in this privacy policy.
                </p>
              </div>

              <div className="bg-slate-50/50 rounded-xl p-6 my-8 border border-slate-200/50">
                <p className="font-semibold mb-2">Last updated: August 02, 2024</p>
                <p className="mb-4">
                  The SMS disclosure needs to be added for the SMS web form located under "Contact Us?" section. Carrier also requires the Disclosure under " Contact Us" section. Including the example of the SMS disclosure that should be added to web form:
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-slate-300/50">
                  <p className="font-medium italic">
                    "By filling this form you are consenting to receive SMS from Company Name. Frequency may vary. Message & data rates may apply. Reply STOP to opt out or HELP for more information. View our terms and privacy policy at our website <a href='https://elitecardprocessing.com/privacy-policy/'>https://elitecardprocessing.com/privacy-policy/</a>."
                  </p>
                </div>
              </div>

              <div>
                <p>
                  This privacy notice for Elite Card Processing, LLC ( "we," "us," or "our" ), describes how and why we might collect, store, use, and/or share (" process ") your information when you use our services (" Services "), such as when you:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Visit our website at <a href='https://elitecardprocessing.com'>https://elitecardprocessing.com</a> , or any website of ours that links to this privacy notice</li>
                  <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                </ul>
                <p className="mt-4">
                  <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@elitecardprocessing.com.
                </p>
              </div>

              <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 my-8 border border-blue-200/50">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">SUMMARY OF KEY POINTS</h3>
                <p className="mb-4">
                  This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                </p>

                <div className="space-y-4">
                  <p>
                    <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                  </p>
                  <p>
                    <strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about sensitive information we process.
                  </p>
                  <p>
                    <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                  </p>
                  <p>
                    <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                  </p>
                  <p>
                    <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                  </p>
                  <p>
                    <strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.
                  </p>
                  <p>
                    <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
                  </p>
                  <p>
                    <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href='https://elitecardprocessing.com/contact-us/'>https://elitecardprocessing.com/contact-us/</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                  </p>
                  <p>
                    <strong>Want to learn more about what we do with any information we collect?</strong> Review the privacy notice in full.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mt-8 mb-6 text-slate-800">TABLE OF CONTENTS</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>WHAT INFORMATION DO WE COLLECT?</li>
                  <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                  <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
                  <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                  <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                  <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                  <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                  <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                  <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                  <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                  <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                  <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}