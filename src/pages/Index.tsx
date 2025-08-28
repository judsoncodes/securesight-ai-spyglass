import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SecurityDashboard } from "@/components/SecurityDashboard";
import { Shield, Zap, Brain, Database, Github, Mail } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Index = () => {
  const [currentView, setCurrentView] = useState<"landing" | "dashboard">("landing");

  if (currentView === "dashboard") {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold">SecureSight</h1>
                <Badge variant="cyber">AI-Powered</Badge>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setCurrentView("landing")}
              >
                Back to Overview
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="container mx-auto px-4 py-8">
          <SecurityDashboard />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-12 w-12 text-primary animate-cyber-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                SecureSight
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered intrusion detection system with real-time threat monitoring, 
              intelligent analysis, and comprehensive security management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setCurrentView("dashboard")}
              >
                <Zap className="mr-2 h-5 w-5" />
                Launch Dashboard
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Security Features</h2>
            <p className="text-xl text-muted-foreground">Comprehensive protection powered by artificial intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle>AI/ML Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms identify anomalies and potential intrusions in real-time with detailed classification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Real-time Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous monitoring with instant threat detection and automated blocking of malicious activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-success/20 hover:border-success/40 transition-colors">
              <CardHeader>
                <Database className="h-12 w-12 text-success mb-4" />
                <CardTitle>Supabase Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Secure, real-time database management with user-specific data isolation and comprehensive logging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-warning/20 hover:border-warning/40 transition-colors">
              <CardHeader>
                <Mail className="h-12 w-12 text-warning mb-4" />
                <CardTitle>Instant Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  User-specific notifications via email or web alerts for immediate threat response and incident management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Visual Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive dashboards with trend analysis and attack pattern visualization for proactive threat management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <Github className="h-12 w-12 text-accent mb-4" />
                <CardTitle>GitHub Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full version control integration for collaborative development and automated deployment workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Secure Your Network?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience next-generation intrusion detection with SecureSight's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cyber" 
                size="lg"
                onClick={() => setCurrentView("dashboard")}
              >
                <Shield className="mr-2 h-5 w-5" />
                Try SecureSight Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
