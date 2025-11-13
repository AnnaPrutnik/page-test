const getLastNumberChar = (value: number) => {
    return Number(String(value).slice(-1));
};

export const selectExperienceLabel = (experience: number) => {
    const lastChar = getLastNumberChar(experience);
    if (lastChar === 1) return "рік";
    if (lastChar > 1 && lastChar < 5) return "роки";
    return "років";
};
