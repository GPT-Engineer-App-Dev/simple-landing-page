import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Smartphone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Amazing App</h1>
        <p className="text-xl mb-8">Revolutionize your workflow with our cutting-edge solution</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-yellow-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency"
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-green-500" />}
            title="Secure"
            description="Your data is protected with state-of-the-art encryption"
          />
          <FeatureCard
            icon={<Smartphone className="h-12 w-12 text-purple-500" />}
            title="Mobile Friendly"
            description="Access your work from anywhere, on any device"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied users and take your productivity to the next level.</p>
          <Button size="lg" variant="secondary">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Our Amazing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl font-semibold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;