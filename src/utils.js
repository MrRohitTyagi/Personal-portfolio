export const scrollToSection = (sectionId) => {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
export function calculateYearsAndMonths(inputDate) {
  // Split the input date into month and year
  const [inputMonth, inputYear] = inputDate.split("/").map(Number);

  // Get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
  const currentYear = currentDate.getFullYear();

  // Calculate the difference in years and months
  let yearsDifference = currentYear - inputYear;
  let monthsDifference = currentMonth - inputMonth;

  // Adjust if monthsDifference is negative
  if (monthsDifference < 0) {
    yearsDifference -= 1;
    monthsDifference += 12;
  }

  return { yearsDifference, monthsDifference };
}
