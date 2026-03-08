import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { toast } from "sonner";
import hero5 from "@/assets/hero-5.jpg";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={hero5} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dsc-dark/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
            <p className="mt-4 text-lg text-primary-foreground/80">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      <SectionFadeIn>
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="glass-card p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required className="bg-background" />
                    <Input type="email" placeholder="Your Email" required className="bg-background" />
                  </div>
                  <Input placeholder="Subject" required className="bg-background" />
                  <Textarea placeholder="Your Message" rows={5} required className="bg-background" />
                  <Button type="submit" className="w-full gradient-green border-0 text-primary-foreground font-heading font-semibold text-base py-6">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, label: "Address", value: "28-7-154, Guntur, Andhra Pradesh 522002" },
                      { icon: Phone, label: "Phone", value: "+91 9703342045" },
                      { icon: Mail, label: "Email", value: "dscsociety2026@gmail.com" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center shrink-0">
                          <item.icon size={20} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">{item.label}</h4>
                          <p className="text-muted-foreground text-sm">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden h-64 border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0!2d80.4365!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzI0LjEiTiA4MMKwMjYnMTEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DSC Society Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionFadeIn>
    </div>
  );
};

export default Contact;
