import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const useCalendar = () => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        
        // Only configure if cal is successfully initialized
        if (cal) {
          cal("ui", {
            styles: { branding: { brandColor: "#EE2B6C" } },
            hideEventTypeDetails: false,
            layout: "month_view",
          });
          
          // Configure namespace globally
          cal("namespace", "free-ai-audit-implement-ai-in-your-business");
          
          console.log("Cal.com successfully initialized");
        }
      } catch (error) {
        console.error("Error initializing Cal.com:", error);
      }
    })();
  }, []);
};