import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThreatIndicator } from "./ThreatIndicator";
import { Shield, Activity, AlertTriangle, CheckCircle, Scan, Eye } from "lucide-react";

// Mock data for demonstration
const mockThreats = [
  {
    id: "1",
    type: "malware" as const,
    severity: "critical" as const,
    timestamp: "2024-08-28 14:32:15",
    source: "203.45.67.89",
    destination: "192.168.1.100",
    blocked: true,
  },
  {
    id: "2",
    type: "intrusion" as const,
    severity: "high" as const,
    timestamp: "2024-08-28 14:28:42",
    source: "185.220.101.32",
    destination: "192.168.1.50",
    blocked: true,
  },
  {
    id: "3",
    type: "ddos" as const,
    severity: "medium" as const,
    timestamp: "2024-08-28 14:25:18",
    source: "172.16.254.1",
    destination: "192.168.1.1",
    blocked: false,
  },
];

export function SecurityDashboard() {
  const [activeScanning, setActiveScanning] = useState(true);

  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-secure">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-secure" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secure">Secure</div>
            <Badge variant="secure" className="mt-1">Active Protection</Badge>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Threats Blocked</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 from last hour</p>
          </CardContent>
        </Card>

        <Card className="border-warning">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">3</div>
            <p className="text-xs text-muted-foreground">Monitoring closely</p>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Detection</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.7%</div>
            <Badge variant="cyber" className="mt-1">ML Active</Badge>
          </CardContent>
        </Card>
      </div>

      {/* AI Scanning Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Scan className="h-5 w-5" />
              AI-Powered Detection Engine
            </CardTitle>
            <Button
              variant={activeScanning ? "secure" : "hero"}
              size="sm"
              onClick={() => setActiveScanning(!activeScanning)}
            >
              {activeScanning ? "Active" : "Start Scanning"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Real-time Analysis</span>
              <Badge variant={activeScanning ? "cyber" : "secondary"}>
                {activeScanning ? "Online" : "Offline"}
              </Badge>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ${
                  activeScanning ? "animate-scan-line" : ""
                }`}
                style={{ width: activeScanning ? "100%" : "0%" }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Analyzing network traffic patterns and identifying anomalies using advanced ML algorithms
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Threats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Recent Threat Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockThreats.map((threat) => (
              <ThreatIndicator key={threat.id} threat={threat} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">View All Threats</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}