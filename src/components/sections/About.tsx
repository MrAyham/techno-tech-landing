import { FC } from 'react';

const About: FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-center text-3xl font-semibold">Who We Are</h2>
      <p className="mb-12 text-center text-gray-600">
        Techno Tech is a Canadian-based software agency helping businesses integrate AI, automation, and smart systems.
      </p>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg p-6 text-center shadow-md">
          <div className="mb-4 text-4xl">🧠</div>
          <h3 className="mb-2 text-xl font-medium">AI Integration</h3>
          <p className="text-gray-600">
            Custom tools that help businesses leverage AI to simplify their workflow.
          </p>
        </div>
        <div className="rounded-lg p-6 text-center shadow-md">
          <div className="mb-4 text-4xl">⚙️</div>
          <h3 className="mb-2 text-xl font-medium">Automation Systems</h3>
          <p className="text-gray-600">
            We build automation pipelines tailored for operational efficiency.
          </p>
        </div>
        <div className="rounded-lg p-6 text-center shadow-md">
          <div className="mb-4 text-4xl">🛠️</div>
          <h3 className="mb-2 text-xl font-medium">Tailored Web Platforms</h3>
          <p className="text-gray-600">
            From websites to business dashboards, we create intuitive digital solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

