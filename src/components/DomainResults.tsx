import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe, Check, ExternalLink, ArrowLeft, Star, TrendingUp, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Domain {
  name: string;
  available: boolean;
  price: number;
  tld: string;
  flipScore?: number;
  trendStrength?: number;
}

interface DomainResultsProps {
  domains: Domain[];
  onAddToCart: (domains: Domain[]) => void;
  onBack: () => void;
  isLoading: boolean;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-3 w-3 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground"}`}
      />
    ))}
  </div>
);

const FlipScore = ({ score }: { score: number }) => {
  const color =
    score >= 80
      ? "text-green-600 dark:text-green-400"
      : score >= 60
      ? "text-yellow-600 dark:text-yellow-400"
      : "text-orange-600 dark:text-orange-400";
  return (
    <div className="flex items-center gap-1 cursor-help">
      <TrendingUp className="h-3 w-3 text-muted-foreground" />
      <span className={`text-xs font-medium ${color}`}>{score}/100</span>
      <Info className="h-3 w-3 text-muted-foreground" />
    </div>
  );
};

export const DomainResults = ({ domains, onAddToCart, onBack, isLoading }: DomainResultsProps) => {
  const [selectedDomains, setSelectedDomains] = useState<Set<string>>(new Set());
  const { toast } = useToast();
  const navigate = useNavigate();

  const toggleDomain = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = new Set(selectedDomains);
    updated.has(name) ? updated.delete(name) : updated.add(name);
    setSelectedDomains(updated);
  };

  const bulkBuy = () => {
    if (!selectedDomains.size) return;
    const url = `https://www.spaceship.com/domains/search?query=${Array.from(
      selectedDomains
    ).join(",")}&aff_id=MY_AFFILIATE_ID`;
    window.open(url, "_blank");
    toast({ title: "Redirecting to Spaceship", description: `Buying ${selectedDomains.size} domains` });
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">Checking domain availability...</div>
    );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Search
          </Button>
          {selectedDomains.size > 0 && (
            <Button
              onClick={bulkBuy}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 px-6 py-2 font-bold text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" /> Buy Selected Domains
            </Button>
          )}
        </div>

        <div className="space-y-4">
          {domains
            .filter((d) => d.available)
            .map((domain) => (
              <Card key={domain.name} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedDomains.has(domain.name)}
                    onClick={(e) => toggleDomain(domain.name, e)}
                  />
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-bold text-lg">{domain.name}</span>
                  <Badge className="bg-green-100 text-green-800">Available</Badge>
                  {domain.flipScore && <FlipScore score={domain.flipScore} />}
                  {domain.trendStrength && <StarRating rating={domain.trendStrength} />}
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white font-bold px-4 py-2"
                    onClick={() => {
                      console.log("Rendering BuyButton for", domain.name);
                      window.open(
                        `https://www.spaceship.com/domains/search?query=${domain.name}&aff_id=MY_AFFILIATE_ID`,
                        "_blank"
                      );
                    }}
                  >
                    Buy Now
                  </Button>
                  <p className="text-xl font-bold">${domain.price.toFixed(2)}</p>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};
