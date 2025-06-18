
import { Wrench, Home } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  const subtextSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center relative shadow-lg`}>
        <Home className="w-1/2 h-1/2 text-white absolute" />
        <Wrench className="w-1/3 h-1/3 text-white absolute bottom-1 right-1" />
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold text-gray-800 leading-tight`}>
            Nelson Oczust
          </h1>
          <p className={`${subtextSizeClasses[size]} text-gray-600`}>
            Marido de Aluguel
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
