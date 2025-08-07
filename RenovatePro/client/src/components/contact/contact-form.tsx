import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Send } from "lucide-react";

const contactFormSchema = insertContactSchema.extend({
  preferredContact: z.enum(["phone", "email", "either"]).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredContact: "either"
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll contact you within 24 hours.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <Card data-testid="contact-form">
      <CardHeader>
        <CardTitle className="text-2xl text-texas-navy">
          Request Your Free Consultation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-warm-gray mb-2">
                First Name *
              </Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder="Enter your first name"
                className={errors.firstName ? "border-red-500" : ""}
                data-testid="input-first-name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-first-name">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-warm-gray mb-2">
                Last Name *
              </Label>
              <Input
                id="lastName"
                {...register("lastName")}
                placeholder="Enter your last name"
                className={errors.lastName ? "border-red-500" : ""}
                data-testid="input-last-name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-last-name">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-warm-gray mb-2">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className={errors.email ? "border-red-500" : ""}
                data-testid="input-email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-warm-gray mb-2">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="(979) 555-0123"
                className={errors.phone ? "border-red-500" : ""}
                data-testid="input-phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-phone">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-warm-gray mb-2">
                Service Area
              </Label>
              <Select onValueChange={(value) => setValue("serviceArea", value)}>
                <SelectTrigger data-testid="select-service-area">
                  <SelectValue placeholder="Select Your Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bryan">Bryan, TX</SelectItem>
                  <SelectItem value="college-station">College Station, TX</SelectItem>
                  <SelectItem value="caldwell">Caldwell, TX</SelectItem>
                  <SelectItem value="navasota">Navasota, TX</SelectItem>
                  <SelectItem value="other">Other Brazos Valley</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium text-warm-gray mb-2">
                Project Type
              </Label>
              <Select onValueChange={(value) => setValue("projectType", value)}>
                <SelectTrigger data-testid="select-project-type">
                  <SelectValue placeholder="Select Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                  <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                  <SelectItem value="flooring">Flooring Installation</SelectItem>
                  <SelectItem value="roofing">Roofing Services</SelectItem>
                  <SelectItem value="exterior">Exterior Renovation</SelectItem>
                  <SelectItem value="full-home">Full Home Renovation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="projectDetails" className="text-sm font-medium text-warm-gray mb-2">
              Project Details
            </Label>
            <Textarea
              id="projectDetails"
              {...register("projectDetails")}
              rows={4}
              placeholder="Tell us about your renovation project, timeline, budget, and any specific requirements..."
              data-testid="textarea-project-details"
            />
          </div>

          <div>
            <Label className="text-sm font-medium text-warm-gray mb-3">
              Preferred Contact Method
            </Label>
            <RadioGroup
              defaultValue="either"
              onValueChange={(value) => setValue("preferredContact", value as "phone" | "email" | "either")}
              className="flex gap-6"
              data-testid="radio-contact-method"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-contact" />
                <Label htmlFor="phone-contact">Phone Call</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-contact" />
                <Label htmlFor="email-contact">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="either" id="either-contact" />
                <Label htmlFor="either-contact">Either</Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-texas-orange hover:bg-orange-600 text-white py-4 text-lg font-semibold"
            disabled={contactMutation.isPending}
            data-testid="button-submit-contact"
          >
            {contactMutation.isPending ? (
              "Sending..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Request Free Consultation
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
