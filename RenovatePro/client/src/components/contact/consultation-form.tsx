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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationSchema } from "@shared/schema";
import { z } from "zod";
import { Calendar, Clock } from "lucide-react";

type ConsultationFormData = z.infer<typeof insertConsultationSchema>;

export default function ConsultationForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(insertConsultationSchema),
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: ConsultationFormData) => {
      const response = await apiRequest("POST", "/api/consultations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Scheduled!",
        description: "We'll contact you within 24 hours to confirm your consultation appointment.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to schedule consultation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ConsultationFormData) => {
    consultationMutation.mutate(data);
  };

  // Generate time slots for the next 14 days (excluding Sundays)
  const generateTimeSlots = () => {
    const slots = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() === 0) continue;
      
      const dateStr = date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
      
      // Morning slots (8 AM - 12 PM)
      for (let hour = 8; hour < 12; hour++) {
        slots.push(`${dateStr} at ${hour}:00 AM`);
        slots.push(`${dateStr} at ${hour}:30 AM`);
      }
      
      // Afternoon slots (1 PM - 5 PM)
      for (let hour = 1; hour <= 5; hour++) {
        slots.push(`${dateStr} at ${hour}:00 PM`);
        slots.push(`${dateStr} at ${hour}:30 PM`);
      }
    }
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <Card data-testid="consultation-form">
      <CardHeader>
        <CardTitle className="text-2xl text-texas-navy flex items-center">
          <Calendar className="mr-3 h-6 w-6 text-texas-orange" />
          Schedule Your Free Consultation
        </CardTitle>
        <p className="text-warm-gray">
          Book a convenient time for our team to visit your home and discuss your renovation project in detail.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="consultationName" className="text-sm font-medium text-warm-gray mb-2">
                Full Name *
              </Label>
              <Input
                id="consultationName"
                {...register("name")}
                placeholder="Enter your full name"
                className={errors.name ? "border-red-500" : ""}
                data-testid="input-consultation-name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-consultation-name">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="consultationEmail" className="text-sm font-medium text-warm-gray mb-2">
                Email Address *
              </Label>
              <Input
                id="consultationEmail"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className={errors.email ? "border-red-500" : ""}
                data-testid="input-consultation-email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-consultation-email">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="consultationPhone" className="text-sm font-medium text-warm-gray mb-2">
                Phone Number *
              </Label>
              <Input
                id="consultationPhone"
                type="tel"
                {...register("phone")}
                placeholder="(979) 555-0123"
                className={errors.phone ? "border-red-500" : ""}
                data-testid="input-consultation-phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-consultation-phone">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-sm font-medium text-warm-gray mb-2">
                Service Area *
              </Label>
              <Select onValueChange={(value) => setValue("serviceArea", value)}>
                <SelectTrigger data-testid="select-consultation-service-area">
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
              {errors.serviceArea && (
                <p className="text-red-500 text-sm mt-1" data-testid="error-consultation-service-area">
                  {errors.serviceArea.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-warm-gray mb-2">
                Project Type
              </Label>
              <Select onValueChange={(value) => setValue("projectType", value)}>
                <SelectTrigger data-testid="select-consultation-project-type">
                  <SelectValue placeholder="Select Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                  <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                  <SelectItem value="flooring">Flooring Installation</SelectItem>
                  <SelectItem value="roofing">Roofing Services</SelectItem>
                  <SelectItem value="exterior">Exterior Renovation</SelectItem>
                  <SelectItem value="full-home">Full Home Renovation</SelectItem>
                  <SelectItem value="consultation">General Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium text-warm-gray mb-2">
                Preferred Date & Time
              </Label>
              <Select onValueChange={(value) => setValue("preferredDate", value)}>
                <SelectTrigger data-testid="select-consultation-preferred-date">
                  <SelectValue placeholder="Select Date & Time" />
                </SelectTrigger>
                <SelectContent className="max-h-[200px] overflow-y-auto">
                  {timeSlots.map((slot, index) => (
                    <SelectItem key={index} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="consultationProjectDetails" className="text-sm font-medium text-warm-gray mb-2">
              Project Details
            </Label>
            <Textarea
              id="consultationProjectDetails"
              {...register("projectDetails")}
              rows={4}
              placeholder="Please describe your project, including rooms involved, timeline, budget range, and any specific requirements..."
              data-testid="textarea-consultation-project-details"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-texas-navy mb-2 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-texas-orange" />
              What to Expect During Your Consultation
            </h4>
            <ul className="text-sm text-warm-gray space-y-1">
              <li>• Free in-home assessment (typically 60-90 minutes)</li>
              <li>• Discussion of your vision, needs, and budget</li>
              <li>• Professional recommendations and design ideas</li>
              <li>• Detailed written estimate within 48 hours</li>
              <li>• No pressure, no obligation</li>
            </ul>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-texas-orange hover:bg-orange-600 text-white py-4 text-lg font-semibold"
            disabled={consultationMutation.isPending}
            data-testid="button-submit-consultation"
          >
            {consultationMutation.isPending ? (
              "Scheduling..."
            ) : (
              <>
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
