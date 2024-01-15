export default function filterOrderBaseSearch(search: number) {
  if (!search) return {};

  return {
    OR: [
      {
        id: {
          contains: search,
        },
      },
      {
        branch: {
          name: {
            contains: search,
          },
        },
      },
      {
        order_status: {
          title: {
            contains: search,
          },
        },
      },
    ],
  };
}
