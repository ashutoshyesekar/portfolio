import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactStatic() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Create mailto link for static deployment
    const emailBody = `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:ashutoshyesekar@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened",
      description: "Please send the email from your email client to complete the message."
    });
    
    form.reset();
    setIsSubmitting(false);
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
                  <a 
                    href="mailto:ashutoshyesekar@gmail.com"
                    className="text-accent-blue hover:text-blue-400 transition-colors"
                  >
                    ashutoshyesekar@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-accent-blue text-xl mr-4" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+918482937973"
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    +91-8482937973
                  </a>
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Opening Email..." : "Send via Email"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}