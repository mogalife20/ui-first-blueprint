import { Database, Info, Settings, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function App() {
  const envMode = import.meta.env.MODE;
  const mongodbUri = import.meta.env.VITE_MONGODB_URI || "Not set (Expected in .env)";
  const mongodbDbName = import.meta.env.VITE_MONGODB_DB_NAME || "Not set (Expected in .env)";

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center gap-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Environment Configuration</h1>
          <p className="text-muted-foreground text-lg">
            Diagnostic dashboard for Vite & MongoDB environment variables.
          </p>
        </div>

        <Alert variant="default" className="bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertTitle className="text-blue-800 dark:text-blue-300">Technical Note</AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-400">
            This is a <strong>client-side</strong> sandbox. Environment variables prefixed with <code>VITE_</code> are exposed to the browser. Real MongoDB connections should be handled via a secure backend or a frontend-ready database integration like Supabase.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Vite Environment
                </CardTitle>
                <CardDescription>Current runtime environment state</CardDescription>
              </div>
              <Badge variant={envMode === "development" ? "default" : "secondary"}>
                {envMode.toUpperCase()} MODE
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex flex-col gap-1.5 border rounded-lg p-3 bg-muted/30">
                <span className="text-xs font-semibold uppercase text-muted-foreground flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  VITE_MONGODB_URI
                </span>
                <code className="text-sm font-mono break-all text-primary">
                  {mongodbUri}
                </code>
              </div>

              <div className="flex flex-col gap-1.5 border rounded-lg p-3 bg-muted/30">
                <span className="text-xs font-semibold uppercase text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  VITE_MONGODB_DB_NAME
                </span>
                <code className="text-sm font-mono text-primary">
                  {mongodbDbName}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Update the <code>.env</code> file to see changes reflected here.
        </p>
      </div>
    </div>
  );
}

export default App;
