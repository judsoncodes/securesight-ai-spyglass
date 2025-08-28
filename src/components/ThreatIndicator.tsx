import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Zap, CheckCircle } from "lucide-react";

interface ThreatIndicatorProps {
  threat: {
    id: string;
    type: "malware" | "intrusion" | "ddos" | "phishing";
    severity: "critical" | "high" | "medium" | "low";
    timestamp: string;
    source: string;
    destination: string;
    blocked: boolean;
  };
}

const severityConfig = {
  critical: { variant: "threat-critical" as const, icon: AlertTriangle },
  high: { variant: "threat-high" as const, icon: AlertTriangle },
  medium: { variant: "threat-medium" as const, icon: Zap },
  low: { variant: "threat-low" as const, icon: Shield },
};

export function ThreatIndicator({ threat }: ThreatIndicatorProps) {
  const config = severityConfig[threat.severity];
  const Icon = config.icon;

  return (
    <div className="bg-card border rounded-lg p-4 hover:bg-card/50 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span className="font-medium capitalize">{threat.type}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={config.variant}>{threat.severity}</Badge>
          {threat.blocked && <Badge variant="secure">Blocked</Badge>}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground space-y-1">
        <div>From: <span className="text-foreground font-mono">{threat.source}</span></div>
        <div>To: <span className="text-foreground font-mono">{threat.destination}</span></div>
        <div>Time: <span className="text-foreground">{threat.timestamp}</span></div>
      </div>
    </div>
  );
}