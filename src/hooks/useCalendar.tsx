import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const useCalendar = () => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({
          namespace: "free-ai-audit-implement-ai-in-your-business",
        });
        
        // Only configure if cal is successfully initialized
        if (cal) {
          cal("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
          });
          
          console.log("Cal.com successfully initialized");
        }
      } catch (error) {
        console.error("Error initializing Cal.com:", error);
      }
    })();
  }, []);
};