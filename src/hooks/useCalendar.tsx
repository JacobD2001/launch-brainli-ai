import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const useCalendar = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "free-ai-audit-implement-ai-in-your-business",
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
};