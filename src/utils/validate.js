export const checkValidateData = (email, password) => {
  // 1. Basic check for empty fields
  if (!email) return "Email is required";
  if (!password) return "Password is required";

  // 2. Email Validation
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  // 3. Password Validation (Allows special characters, requires 1 letter and 1 number)
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(
      password,
    );

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid)
    return "Password must be at least 8 characters and include a letter, a number, and a special character";

  return null; // Success
};
