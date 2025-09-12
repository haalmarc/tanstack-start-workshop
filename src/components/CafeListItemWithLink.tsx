interface Props {
  cafe: {
    name: string;
    city: string;
    rating: number;
  };
  children: React.ReactNode;
}

export function CafeListItemWithLink({ cafe, children }: Props) {
  return (
    <li
      style={{
        padding: "10px",
        margin: "5px 0",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <strong>{cafe.name}</strong> - {cafe.city}{" "}
      <span
        style={{
          color: "#888",
        }}
      >
        ({cafe.rating})
      </span>
      <div>{children}</div>
    </li>
  );
}
