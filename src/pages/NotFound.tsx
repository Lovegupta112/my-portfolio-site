
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white p-6">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-highlight">404</h1>
          <h2 className="text-2xl font-medium">Page Not Found</h2>
        </div>
        
        <p className="text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild className="bg-highlight text-dark hover:bg-highlight/90 font-medium">
          <Link to="/" className="flex items-center">
            <Home size={18} className="mr-2" /> Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
