import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="breadcrumb">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/about" className="breadcrumb">About</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-6 text-center">
        <h1 className="text-5xl font-bold mb-2">About Us</h1>
        <p className="text-xl">Inspiring individuals through knowledge, mindfulness, and community.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">Our mission is to empower individuals to achieve personal growth and enlightenment through shared knowledge and community support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">Jane Doe</h3>
            <p>Founder & Content Creator</p>
            <p className="text-gray-600">A lifelong learner passionate about mindfulness and sustainable living.</p>
          </Card>
          <Card className="p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">John Smith</h3>
            <p>Community Manager</p>
            <p className="text-gray-600">Dedicated to building a supportive community and fostering connections.</p>
          </Card>
        </div>
      </div>
      <div className="text-center mt-6">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">Join our Journey</Button>
      </div>
    </div>
  );
};

export default About;