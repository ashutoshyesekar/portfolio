import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-accent-blue">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-accent-blue text-xl mr-4" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-text-secondary">ashutoshyesekar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-accent-blue text-xl mr-4" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-text-secondary">+91-8482937973</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-accent-blue text-xl mr-4" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-text-secondary">Pune, India - 411044</p>
                </div>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-accent-blue text-xl mr-4" size={24} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/ashutosh-yesekar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/ashutosh-yesekar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-accent-blue">Send Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-secondary-dark border-border-dark focus:border-accent-blue"
                          placeholder="Your Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="bg-secondary-dark border-border-dark focus:border-accent-blue"
                          placeholder="your@email.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-secondary-dark border-border-dark focus:border-accent-blue"
                          placeholder="Subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5}
                          className="bg-secondary-dark border-border-dark focus:border-accent-blue resize-none"
                          placeholder="Your message here..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-accent-blue hover:bg-blue-700 text-white hover-glow"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
