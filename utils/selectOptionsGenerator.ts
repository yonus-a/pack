export default function (items: any) {
  return items.map(({ id, name }: any) => ({
    label: name,
    value: id,
  }));
}
