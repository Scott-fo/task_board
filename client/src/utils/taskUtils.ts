import z from "zod";
import { DateTime } from "luxon";

const validateDateInput = (
  parsedTime: string
): { deadline: string; error: string } => {
  if (parsedTime !== "") {
    const dateSchema = z.preprocess((arg) => {
      if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
    }, z.date());

    const result = dateSchema.safeParse(
      DateTime.fromFormat(parsedTime, "dd/MM/yyyy").toJSDate()
    );
    if (result.success === false) {
      return { deadline: "", error: "Enter valid date" };
    } else {
      const deadline = DateTime.fromJSDate(result.data).toSeconds();
      if (deadline < DateTime.now().toSeconds()) {
        return { deadline: "", error: "Please enter a date in the future" };
      } else {
        return { deadline: deadline.toString(), error: "" };
      }
    }
  } else {
    return { deadline: "", error: "" };
  }
};

const getParsedTime = (unixTime: string): string => {
  return unixTime && unixTime !== ""
    ? DateTime.fromSeconds(parseInt(unixTime)).toLocaleString()
    : "";
};

export { validateDateInput, getParsedTime };
