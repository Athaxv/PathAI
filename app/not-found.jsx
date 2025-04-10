
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error(
//       "404 Error: User attempted to access non-existent route:",
//       location.pathname
//     );
//   }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden dark gradient-bg">
      {/* Animated floating shapes */}
      <div className="shape w-64 h-64 top-[20%] left-[15%] animate-float-slow"></div>
      <div className="shape w-80 h-80 bottom-[10%] right-[5%] animate-float-medium"></div>
      <div className="shape w-48 h-48 top-[10%] right-[20%] animate-float-reverse"></div>
      <div className="shape w-32 h-32 bottom-[20%] left-[10%] animate-float-fast"></div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold tracking-tighter text-white glow-text animate-pulse-glow">404</h1>
          <p className="mt-4 text-2xl font-medium text-white/80">Oops! Page not found</p>
          <p className="mt-2 text-lg text-white/60 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="mt-8 flex flex-col gap-4 items-center">
          <Link href={"/"}>
          <Button 
            variant="outline" 
            size="lg" 
            // onClick={}
            className="group bg-transparent border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Button>
          </Link>
          <p className="text-sm text-white/40 mt-4">
            If you believe this is an error, please contact support.
          </p>
        </div>

        <div className="absolute bottom-6 w-full text-center text-white/30 text-xs">
          © {new Date().getFullYear()} • All rights reserved
        </div>
      </div>
    </div>
  );
};

export default NotFound;