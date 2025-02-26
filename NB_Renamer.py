def abbreviate_words(text, prefix=""):
  """
  Converts each word in a string to its first letter, the number of middle letters, and its last letter.
  Optionally adds a prefix to each abbreviation.

  Args:
    text: The input string.
    prefix: The prefix to add to each abbreviation (default is "").

  Returns:
    A string with the abbreviated words.
  """
  words = text.split()
  abbreviated_words = []
  for word in words:
    if len(word) <= 2:
      abbreviated_words.append(prefix + word)
    else:
      first_letter = word[0]
      middle_letters_count = len(word) - 2
      last_letter = word[-1]
      abbreviated_words.append(f"{first_letter}{middle_letters_count}{last_letter}")
  return prefix + "".join(abbreviated_words)

names = [
    "António Santinha",
    "Juan Ambrósio",
    "Paulo Guerra",
    "Alcina Costa Ribeiro",
    "Leonor Fechas",
    "Norberto Martins",
    "José Carlos Sousa",
    "Ana Castro",
    "Rosa Clemente"
]

# Abbreviate without prefix
# print("Abbreviated names (no prefix):")
# for name in names:
#     result = abbreviate_words(name)
#     print(f"'{name}' becomes '{result}'")

# Abbreviate with prefix
# prefix_value = "abbrev_"
# print("\nAbbreviated names (with prefix):")
# for name in names:
#     result = abbreviate_words(name, prefix=prefix_value)
#     print(f"'{name}' becomes '{result}'")

prefix_value = "NB2025_"

for name in names:
    result = abbreviate_words(name, prefix=prefix_value)
    print(f"'{name}' == {result}")