import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface EstimateData {
  projectType: string;
  squareFootage: number;
  qualityLevel: string;
}

interface EstimateResult {
  totalEstimate: number;
  materials: number;
  labor: number;
  permits: number;
}

export default function CostCalculator() {
  const [formData, setFormData] = useState<EstimateData>({
    projectType: "",
    squareFootage: 100,
    qualityLevel: "1.0"
  });
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const { toast } = useToast();

  const estimateMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/cost-estimates", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Estimate Saved",
        description: "Your cost estimate has been saved for our records.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save estimate. Please try again.",
        variant: "destructive",
      });
    },
  });

  const projectCosts = {
    kitchen: 25000,
    bathroom: 15000,
    flooring: 8,
    roofing: 12000,
    exterior: 20000,
    full_home: 80000,
  };

  const calculateEstimate = () => {
    if (!formData.projectType) {
      toast({
        title: "Missing Information",
        description: "Please select a project type.",
        variant: "destructive",
      });
      return;
    }

    const baseCost = projectCosts[formData.projectType as keyof typeof projectCosts] || 0;
    const quality = parseFloat(formData.qualityLevel);
    
    let totalEstimate: number;
    if (formData.projectType === "flooring") {
      totalEstimate = baseCost * formData.squareFootage * quality;
    } else {
      totalEstimate = baseCost * quality;
    }

    const materials = Math.round(totalEstimate * 0.6);
    const labor = Math.round(totalEstimate * 0.3);
    const permits = Math.round(totalEstimate * 0.1);

    const result = { totalEstimate, materials, labor, permits };
    setEstimate(result);

    // Save estimate to backend
    estimateMutation.mutate({
      projectType: formData.projectType,
      squareFootage: formData.squareFootage,
      qualityLevel: formData.qualityLevel,
      estimatedCost: totalEstimate.toString(),
      materialsCost: materials.toString(),
      laborCost: labor.toString(),
      permitsCost: permits.toString(),
    });
  };

  return (
    <section className="py-20 bg-gray-100" data-testid="cost-calculator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-texas-navy mb-4" data-testid="calculator-title">
            Project Cost Calculator
          </h2>
          <p className="text-xl text-warm-gray" data-testid="calculator-description">
            Get an instant estimate for your renovation project
          </p>
        </div>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-texas-navy mb-4">Project Details</h3>
                
                <div className="mb-4">
                  <Label htmlFor="project-type" className="text-sm font-medium text-warm-gray mb-2">
                    Project Type
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger data-testid="input-project-type">
                      <SelectValue placeholder="Select Project Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                      <SelectItem value="bathroom">Bathroom Remodeling</SelectItem>
                      <SelectItem value="flooring">Flooring (per sq ft)</SelectItem>
                      <SelectItem value="roofing">Roofing</SelectItem>
                      <SelectItem value="exterior">Exterior Renovation</SelectItem>
                      <SelectItem value="full_home">Full Home Renovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="square-footage" className="text-sm font-medium text-warm-gray mb-2">
                    Square Footage
                  </Label>
                  <Input
                    id="square-footage"
                    type="number"
                    placeholder="Enter square feet"
                    value={formData.squareFootage}
                    onChange={(e) => setFormData({ ...formData, squareFootage: parseInt(e.target.value) || 100 })}
                    data-testid="input-square-footage"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="quality-level" className="text-sm font-medium text-warm-gray mb-2">
                    Quality Level
                  </Label>
                  <Select
                    value={formData.qualityLevel}
                    onValueChange={(value) => setFormData({ ...formData, qualityLevel: value })}
                  >
                    <SelectTrigger data-testid="input-quality-level">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.8">Standard</SelectItem>
                      <SelectItem value="1.0">Premium</SelectItem>
                      <SelectItem value="1.3">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateEstimate}
                  className="w-full bg-texas-orange hover:bg-orange-600 text-white"
                  disabled={estimateMutation.isPending}
                  data-testid="button-calculate-estimate"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Estimate
                </Button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-texas-navy mb-4">Your Estimate</h3>
                
                {estimate ? (
                  <div data-testid="estimate-result">
                    <div className="text-center py-4 mb-6">
                      <div className="text-3xl font-bold text-texas-navy mb-2" data-testid="estimate-total">
                        ${estimate.totalEstimate.toLocaleString()}
                      </div>
                      <p className="text-warm-gray">Estimated Project Cost</p>
                    </div>
                    
                    <div className="space-y-3 text-sm text-warm-gray">
                      <div className="flex justify-between">
                        <span>Materials:</span>
                        <span data-testid="estimate-materials">${estimate.materials.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Labor:</span>
                        <span data-testid="estimate-labor">${estimate.labor.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Permits & Fees:</span>
                        <span data-testid="estimate-permits">${estimate.permits.toLocaleString()}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-semibold text-texas-navy">
                        <span>Total Estimate:</span>
                        <span data-testid="estimate-final-total">${estimate.totalEstimate.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8" data-testid="estimate-placeholder">
                    <Calculator className="text-warm-gray text-3xl mb-4 mx-auto" />
                    <p className="text-warm-gray">Select your project details to see estimate</p>
                  </div>
                )}
                
                <p className="text-xs text-warm-gray mt-4">
                  *This is a rough estimate. Final pricing may vary based on specific requirements and site conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
