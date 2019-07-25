export const languages = {
  hr: {
    header: "Registraciona forma",
    firstName: {
      label: "Ime",
      errors: {
        max: "Maksimum 25 karaktera",
        min: "Minimum 2 karaktera"
      }
    },
    lastName: {
      label: "Prezime",
      errors: {
        max: "Maksimum 25 karaktera",
        min: "Minimum 2 karaktera",
        onlyLetters: "Dozvoljena su samo slova"
      }
    },
    email: {
      label: "Email",
      errors: "Nevalidan mail"
    },
    username: {
      label: "Korisničko ime",
      errors: {
        max: "Maksimum 20 karaktera",
        min: "Minimum 4 karaktera"
      }
    },
    password: {
      label: "Lozinka",
      errors: "Nevalidan(mora sadrzati 0-9,!@#$%^&*,a-z,A-Z, 8<pass<16)"
    },
    confirmPassword: {
      label: "Potvrda lozinke",
      errors: "Mora se poklapati sa pasvordom"
    },
    required: "Obavezan unos",
    agreeToTerms: "Prihvatam uslove korišćenja",
    submit: "Potvrdi",
    loaderText:"Slanje podataka, molimo sačekajte",
    success: "Uspješno dodat korisnik"
  },
  en: {
    header: "Registration form",
    firstName: {
      label: "Name",
      errors: {
        max: "Max 25 characters",
        min: "Min 25 characters"
      }
    },
    lastName: {
      label: "Last Name",
      errors: {
        max: "Max 25 characters",
        min: "Min 25 characters",
        onlyLetters: "Only letters allowed"
      }
    },
    email: {
      label: "Email",
      errors: "Invalid mail"
    },
    username: {
      label: "Username",
      errors: {
        max: "Max 20 characters",
        min: "Min 4 characters"
      }
    },
    password: {
      label: "Password",
      errors: "Invalid(must contain 0-9,!@#$%^&*,a-z,A-Z && 8<pass<16)"
    },
    confirmPassword: {
      label: "Confirm password",
      errors: "It must match the password"
    },
    required: "Required",
    agreeToTerms: "Accept terms and conditions",
    submit: "Submit",
    loaderText:"Fetching data, please wait",
    success: "User has been added successfully"
  }
};
