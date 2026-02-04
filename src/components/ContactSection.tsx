import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 cta-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="pt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Your Future-Ready GCC
            </h2>
            <p className="text-muted-foreground text-lg">
              Partner with us to create your Data + Agentic AI-powered operational hub.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Let's Build Together</h3>
            <p className="text-muted-foreground mb-6">We'll get back to you within 24h hours</p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">Name*</label>
                  <Input className="mt-1 border-0 border-b border-border rounded-none focus:ring-0 px-0" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Contact Number*</label>
                  <Input className="mt-1 border-0 border-b border-border rounded-none focus:ring-0 px-0" />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground">Email ID*</label>
                <Input type="email" className="mt-1 border-0 border-b border-border rounded-none focus:ring-0 px-0" />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">Message</label>
                <Textarea className="mt-1 border-0 border-b border-border rounded-none focus:ring-0 px-0 min-h-[80px] resize-none" />
              </div>

              <Button type="submit" className="w-full mt-6 rounded-lg py-6 bg-black text-white hover:bg-black/90 transition-colors">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
