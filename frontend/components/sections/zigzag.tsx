export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Automate with Ease</div>
            <h1 className="h2 mb-4">Powerful Tools to Simplify Your Workflow</h1>
            <p className="text-xl text-gray-400">Discover how Zapier's automation features can transform your daily tasks, saving you time and effort.</p>
          </div>

          {/* Items */}
          <div className="flex justify-around items-start">

            {/* 1st item */}
            <div className="max-w-xs text-center" data-aos="fade-right">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">Streamline Your Tasks</div>
              <h3 className="h3 mb-3">Automated Workflows</h3>
              <p className="text-xl text-gray-400 mb-4">Automate repetitive tasks by creating Zaps that connect your favorite apps, so you can focus on what really matters.</p>
              <ul className="text-lg text-gray-400 -mb-2">
                <li className="flex items-center justify-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Set up workflows in minutes with no coding required.</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Can integrate many apps to create custom workflows.</span>
                </li>
              </ul>
            </div>

            {/* 2nd item */}
            <div className="max-w-xs text-center" data-aos="fade-left">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">Save Time and Money</div>
              <h3 className="h3 mb-3">Efficiency at Its Best</h3>
              <p className="text-xl text-gray-400 mb-4">With Zapier, you can automate processes that usually take hours to complete manually, saving time and reducing operational costs.</p>
              <ul className="text-lg text-gray-400 -mb-2">
                <li className="flex items-center justify-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Automate repetitive tasks to free up your team's time.</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Reduce the risk of human error in manual processes.</span>
                </li>
              </ul>
            </div>

            {/* 3rd item */}
            <div className="max-w-xs text-center" data-aos="fade-right">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">Scale with Confidence</div>
              <h3 className="h3 mb-3">Scalable Solutions</h3>
              <p className="text-xl text-gray-400 mb-4">As your business grows, Zapier scales with you, allowing you to handle increased workloads with ease and efficiency.</p>
              <ul className="text-lg text-gray-400 -mb-2">
                <li className="flex items-center justify-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Seamlessly integrate new tools as your business needs evolve.</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Adapt workflows to accommodate growing data and users.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
