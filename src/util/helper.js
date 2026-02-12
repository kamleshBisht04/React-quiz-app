export function getOptionClass({ selectedOption, correctOption, index }) {
  if (selectedOption == null) return "option option-default";

  if (index === correctOption) return "option option-correct";

  if (index === selectedOption && selectedOption !== correctOption)
    return "option option-wrong";

  return "option option-default";
}


