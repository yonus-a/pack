export default function filterUsersBaseSearch(value: string) {
  if (!value) return {};

  const nextValue = value?.trim();

  return {
    OR: [
      {
        id: {
          contains: nextValue,
        },
      },
      {
        firstname: {
          contains: nextValue,
        },
      },
      {
        lastname: {
          contains: nextValue,
        },
      },
      {
        phone: {
          contains: nextValue,
        },
      },
      {
        branch: {
          name: {
            contains: nextValue,
          },
        },
      },
    ],
  };
}
