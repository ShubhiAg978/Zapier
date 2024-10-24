export const metadata = {
  title: 'Sign up | Zapier',
  description: "Workflow automation software for everyone. Zapier automates your work across 7000+ app integrations, so you can focus on what matters.",
}

import { CheckFeature } from "@/app/(auth)/CheckFeature";
import SignUpForm from './SignUpForm';

export default function SignUp() {

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center">
                  {/* Left side content */}
                  <div className="flex-1 text-center md:text-left md:pr-12">
                      <div className="font-semibold text-3xl pb-4">
                          Join millions worldwide who automate their work using Zapier.
                      </div>
                      <div className="pb-6 pt-4">
                          <CheckFeature label={"Easy setup, no coding required"} />
                      </div>
                      <div className="pb-6">
                          <CheckFeature label={"Free forever for core features"} />
                      </div>
                      <div className="pb-6">
                          <CheckFeature label={"14-day trial of premium features & apps"} />
                      </div>
                  </div>

                  {/* Sign-in form */}
                  <div className="flex-1 pt-6 pb-6 px-4 border rounded shadow-md bg-grey">
                      <SignUpForm />
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}
