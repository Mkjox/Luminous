import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8 w-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-400 hover:text-gray-200">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/contact" className="text-gray-200">
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12 w-full">
          <h1 className="text-4xl font-bold text-zinc-100 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center w-full">
          <Card className="bg-gray-800 shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="bg-gray-700 text-white border-gray-600"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 transition duration-200 w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-400">
                  123 Business Street<br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
                <p className="text-gray-400">
                  Email: contact@example.com<br />
                  Phone: (123) 456-7890
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-400">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">Twitter</Button>
                  <Button variant="outline" className="flex-1">LinkedIn</Button>
                  <Button variant="outline" className="flex-1">Facebook</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 w-full">
          <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
          <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;