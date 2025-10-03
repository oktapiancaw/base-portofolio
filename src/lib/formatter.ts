export function formatDateRange(options: Intl.DateTimeFormatOptions, startDate: string, endDate?: string) {
  const start = new Date(startDate);
  if (isNaN(start.getTime())) return "";
  const startFormatted = start.toLocaleString("en-US", options);

  if (!endDate) {
    return startFormatted;
  }

  if (endDate === "Present") {
    return `${startFormatted} - Present`;
  }
  const end = new Date(endDate);
  if (isNaN(end.getTime())) return startFormatted;

  const endFormatted = end.toLocaleDateString("en-US", options);

  return `${startFormatted} - ${endFormatted}`;
}