export default function BookPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return <p>Book{id}</p>;
}
