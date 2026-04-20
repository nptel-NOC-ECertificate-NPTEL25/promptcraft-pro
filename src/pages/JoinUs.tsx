import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HandHeart, Award, Loader2 } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { toast } from "sonner";
import hero2 from "@/assets/hero-2.jpg";

const SERVICE_ID = "service_7ok4c9d";
const ADMIN_TEMPLATE_ID = "template_b7uziio";
const PUBLIC_KEY = "6nKwRNZVMwWXErdtY";
const VOLUNTEER_TEMPLATE = "template_648uwjw";
const INTERNSHIP_TEMPLATE = "template_648uwjw";
const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full gradient-green border-0 text-primary-foreground font-heading font-semibold text-base py-6 disabled:opacity-70"
  >
    {isSubmitting ? (
      <span className="flex items-center gap-2">
        <Loader2 size={18} className="animate-spin" />
        Submitting...
      </span>
    ) : (
      "Submit Application"
    )}
  </Button>
);

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState<"volunteer" | "internship">("volunteer");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const emailjs = (await import("@emailjs/browser")).default;

     const selectedTemplate =
  activeTab === "volunteer"
    ? VOLUNTEER_TEMPLATE
    : INTERNSHIP_TEMPLATE;

await emailjs.sendForm(
  SERVICE_ID,
  selectedTemplate,
  form,
  PUBLIC_KEY
);

      try {
        await emailjs.sendForm(SERVICE_ID, USER_REPLY_TEMPLATE_ID, form, PUBLIC_KEY);
      } catch (replyError) {
        console.warn("Auto-reply email failed:", replyError);
      }

      toast.success("Application submitted! You'll hear from us soon.");
      form.reset();
    } catch (error) {
      console.error("Email error:", error);
      toast.error("Submission failed. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={hero2}
          alt="Join Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dsc-dark/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
              Join Us
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Be part of the change — volunteer or intern with DSC Society
            </p>
          </div>
        </div>
      </section>

      <SectionFadeIn>
        <section className="section-padding">
          <div className="container-narrow max-w-3xl">
            {/* Tab Switcher */}
            <div className="flex justify-center gap-4 mb-12">
              {[
                { key: "volunteer" as const, icon: HandHeart, label: "Volunteer" },
                { key: "internship" as const, icon: Award, label: "Internship" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold transition-all ${
                    activeTab === tab.key
                      ? "gradient-green text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="glass-card p-8">
              {activeTab === "volunteer" ? (
                <>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Volunteer with DSC
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Join DSC as a volunteer and participate in environmental campaigns,
                    awareness programs, and community initiatives.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="application_type" value="Volunteer" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="user_name"
                        placeholder="Full Name"
                        required
                        className="bg-background"
                      />
                      <Input
                        name="user_email"
                        type="email"
                        placeholder="Email Address"
                        required
                        className="bg-background"
                      />
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="bg-background"
                      />
                      <Input
                        name="city"
                        placeholder="City"
                        required
                        className="bg-background"
                      />
                    </div>

                    <Input
                      name="interest"
                      placeholder="Area of Interest (e.g., tree plantation, waste management)"
                      className="bg-background"
                    />

                    <SubmitButton isSubmitting={isSubmitting} />
                  </form>
                </>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Internship Program
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Students can gain hands-on experience in environmental projects,
                    community engagement, and sustainability initiatives.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="application_type" value="Internship" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="user_name"
                        placeholder="Full Name"
                        required
                        className="bg-background"
                      />
                      <Input
                        name="user_email"
                        type="email"
                        placeholder="Email Address"
                        required
                        className="bg-background"
                      />
                      <Input
                        name="college"
                        placeholder="College / University"
                        required
                        className="bg-background"
                      />
                      <Input
                        name="course"
                        placeholder="Course / Program"
                        required
                        className="bg-background"
                      />
                    </div>

                    <Input
                      name="duration"
                      placeholder="Preferred Duration (e.g., 3 months)"
                      required
                      className="bg-background"
                    />

                    <Textarea
                      name="message"
                      placeholder="Statement of Interest — Tell us why you want to intern with DSC"
                      rows={4}
                      className="bg-background"
                    />

                    <SubmitButton isSubmitting={isSubmitting} />
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </SectionFadeIn>
    </div>
  );
};

export default JoinUs;
