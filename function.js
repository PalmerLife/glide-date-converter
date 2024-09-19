window.function = function(timeRange) {
  // Ensure that timeRange is checked properly for empty, null, blank, or "X" values
  if (!timeRange || !timeRange.value || timeRange.value.trim() === "" || timeRange.value.trim() === "X") {
    return "Closed";
  }

  const value = timeRange.value.trim();  // Remove leading/trailing spaces

  const convertTo12Hour = (time) => {
    let [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;  // Convert 0 or 12 to 12 for 12-hour format
    return `${hours}:${minutes.toString().padStart(2, '0')}${period}`;
  };

  // Split the time range into start and end times
  const [startTime, endTime] = value.split("-");

  // Convert both start and end times to 12-hour format
  const formattedStartTime = convertTo12Hour(startTime);
  const formattedEndTime = convertTo12Hour(endTime);

  // Return the formatted time range
  return `${formattedStartTime} - ${formattedEndTime}`;
}
