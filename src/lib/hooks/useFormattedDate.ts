import React from "react";
import dayjs from "dayjs";

const useFormattedDate = (date: string | Date, format?: string) => {
  const [formattedDate, setFormattedDate] = React.useState(null);

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format(format ?? "MMMM DD, YYYY"));
  }, [date, format]);

  return formattedDate;
};

export default useFormattedDate;
