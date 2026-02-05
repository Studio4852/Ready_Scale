 import { Navigate } from "react-router-dom";
 import { ReactNode } from "react";
 
 interface RequireReadinessProps {
   children: ReactNode;
 }
 
 const RequireReadiness = ({ children }: RequireReadinessProps) => {
   const readinessCompleted = localStorage.getItem("readinessCompleted");
   
   if (!readinessCompleted) {
     return <Navigate to="/readiness-test" replace />;
   }
   
   return <>{children}</>;
 };
 
 export default RequireReadiness;