import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const useCalendar = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#EE2B6C" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
};