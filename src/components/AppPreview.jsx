import Section from "./Section";
import PhoneImg from "../assets/images/phoneFull.png";
import Button from "./button";

const AppPreview = () => {
  return (
    <Section>
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Finora App Preview
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Finora App will revolutionize the way you manage your business finances
            </p>
          </div>

          {/* App Features */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src={PhoneImg} 
                alt="Finora App Preview" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <div className="space-y-4">
                <FeatureItem title="Cash Flow Management">
                  Track income and expenses with ease
                </FeatureItem>
                <FeatureItem title="Financial Calculator">
                  Make informed business decisions
                </FeatureItem>
                <FeatureItem title="Asset Monitoring">
                  Keep track of all your business assets
                </FeatureItem>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              className="bg-brand-primary h-12 px-8 text-white rounded-full"
              href="/"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const FeatureItem = ({ title, children }) => (
  <div className="border-l-4 border-brand-primary pl-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default AppPreview;