import { useEffect } from "react";
import Cal from "@calcom/embed-react";

export const useCalendar = () => {
  useEffect(() => {
    (async function () {
      const cal = new Cal({
        calLink: "jakubdzikowski/free-ai-audit-implement-ai-in-your-business",
        config: {
          layout: "month_view",
        },
      });
      await cal.preload();
    })();
  }, []);
};