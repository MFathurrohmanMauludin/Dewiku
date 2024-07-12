const validateDonationMinimum = (e: any) => {
   return e.target.value;
}

const validateFullName = (e: any) => {
    const limit = 10;
    return e.target.value.slice(0, limit);
}

export {validateDonationMinimum, validateFullName}